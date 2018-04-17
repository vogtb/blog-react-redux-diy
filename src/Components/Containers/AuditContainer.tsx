import * as React from 'react';
import Store from "../../Control/Store";
import PrivateStore from "../../Control/PrimaryStore";
import ActionType from "../../Actions/ActionType";
import AuditView from "../Views/AuditView";
import AuditLogEntry from "../../Models/AuditLogEntry";

interface AuditContainerState {
  store : PrivateStore;
}

class AuditContainer extends React.Component<{}, AuditContainerState> {
  constructor(props : {}) {
    super(props);
    Store.bindSubscription(ActionType.SelectUser, this.pullState.bind(this));
    this.state = {
      store: Store
    };
  }
  pullState() {
    let state = this.state;
    this.setState({
      store: Store
    })
  }
  render() {
    return (
        <AuditView auditLogEntries={this.state.store.getAuditLogEntries() as Array<AuditLogEntry>} focusedUserId={this.state.store.getFocusedUserId()}/>
    );
  }
}

export default AuditContainer;
