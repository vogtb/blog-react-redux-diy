/**
 * AuditLogEntry represents a change in state for a record in the database. It is a record of change, and should give
 * enough content to be user-readable.
 */
import UserOperation from "./UserOperations";
import User from "./User";

class AuditLogEntry {
  private id : string;
  private user : User;
  private createDateMillis : number;
  private oldValue : Object;
  private newValue : Object;
  private operation : UserOperation;

  constructor(id: string, user: User, createDateMillis : number, oldValue: Object, newValue : Object, operation: UserOperation) {
    this.id = id;
    this.user = user;
    this.createDateMillis = createDateMillis;
    this.oldValue = oldValue;
    this.newValue = newValue;
    this.operation = operation;
  }

  public getId() : string {
    return this.id;
  }

  public getUser(): User {
    return this.user;
  }

  public getCreateDateMillis() : number {
    return this.createDateMillis;
  }

  public getOldValue() : Object {
    return this.oldValue;
  }

  public getNewValue() : Object {
    return this.newValue;
  }

  public getOperation() : UserOperation {
    return this.operation;
  }
}

export default AuditLogEntry;