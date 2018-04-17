import * as React from 'react';
import Store from "../../Control/Store";
import PrivateStore from "../../Control/PrimaryStore";
import ActionType from "../../Actions/ActionType";
import AuditLogEntry from "../../Models/AuditLogEntry";
import StatsView from "../Views/StatsView";

interface StatsContainerState {
  store : PrivateStore;
}

class StatsContainer extends React.Component<{}, StatsContainerState> {
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
        <StatsView stats={this.state.store.getStats()} selectedUserId={this.state.store.getFocusedUserId()}/>
    );
  }
}

export default StatsContainer;
