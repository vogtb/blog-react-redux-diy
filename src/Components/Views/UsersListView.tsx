import * as React from 'react';
import User from "../../Models/User";
import SingleUser from "./SingleUser";

class UsersListViewProps {
  users: Array<User>;
  focusedUserId: string;
}

class UsersListView extends React.Component<UsersListViewProps, {}> {
  render() {
    let userViews = this.props.users.map(function (user: User) {
      return (
          <div key={user.getId()}>
            <SingleUser user={user} selected={this.props.focusedUserId == user.getId()} />
          </div>
      );
    }.bind(this));
    return (
      <div>
        <h2>Users</h2>
        <div>{userViews}</div>
      </div>
    );
  }
}

export default UsersListView;
