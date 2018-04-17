import User from "../Models/User";
import SelectUserAction from "../Actions/SelectUserAction";
import {AUDIT_LOG, STATS, USERS} from "../Models/DummyData";
import ActionType from "../Actions/ActionType";
import AuditLogEntry from "../Models/AuditLogEntry";
import UserStat from "../Models/UserStat";

/**
 * PrimaryStore is the object that will hold the "master" state, so to speak, of the application.
 */
class PrimaryStore {
  private subscriptions : { [index:string] : Array<Function> } = {};
  private users : Array<User> = USERS;
  private auditLogEntries : Array<AuditLogEntry> = AUDIT_LOG;
  private stats : Array<UserStat> = STATS;
  private focusedUserId : string = null;


  public dispatchFunctions(action: ActionType) {
    if (action in this.subscriptions) {
      console.log("PrimaryStore.dispatchFunctions", "dispatching functions for action", action);
      for (let f of this.subscriptions[action]) {
        f();
      }
    }
  }

  public handleSelectUserAction(selectUserAction : SelectUserAction) {
    console.log("PrimaryStore.handleSelectUserAction", selectUserAction);
    this.focusedUserId = selectUserAction.getUserId();
    this.dispatchFunctions(ActionType.SelectUser);
  }

  public getUsers() : Array<User> {
    return this.users;
  }

  public getFocusedUserId() : string {
    return this.focusedUserId;
  }

  public getAuditLogEntries() : Array<AuditLogEntry> {
    return this.auditLogEntries;
  }

  public getStats() : Array<UserStat> {
    return this.stats;
  }

  public bindSubscription(actionType: ActionType, func : Function) {
    let actionTypeString = actionType.toString();
    if (actionTypeString in this.subscriptions) {
      this.subscriptions[actionTypeString].push(func);
    } else {
      this.subscriptions[actionTypeString] = [func];
    }
  }
}

export default PrimaryStore;