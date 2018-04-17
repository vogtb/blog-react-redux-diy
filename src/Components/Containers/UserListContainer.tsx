import * as React from 'react';
import UsersListView from "../Views/UsersListView";
import Store from "../../Control/Store";
import PrivateStore from "../../Control/PrimaryStore";
import ActionType from "../../Actions/ActionType";

interface UserListContainerState {
  store : PrivateStore;
}

class UserListContainer extends React.Component<{}, UserListContainerState> {
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
        <div>
          <UsersListView users={this.state.store.getUsers()} focusedUserId={this.state.store.getFocusedUserId()} />
        </div>
    );
  }
}

export default UserListContainer;
