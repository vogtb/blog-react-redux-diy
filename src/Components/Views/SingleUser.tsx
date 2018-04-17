import * as React from 'react';
import {Card, Intent, Tag} from "@blueprintjs/core";
import User from "../../Models/User";
import UserStatus from "../../Models/UserStatus";
import Store from "../../Control/Store";
import SelectUserAction from "../../Actions/SelectUserAction";

class UsersListViewProps {
  user: User;
  selected: boolean;
}

class SingleUser extends React.Component<UsersListViewProps, {}> {
  private selectUserAction() {
    Store.handleSelectUserAction(new SelectUserAction(this.props.user.getId()));
  }
  render() {
    return (
        <div className={"col-6"} onClick={this.selectUserAction.bind(this)}>
          <div className={"card-holder"}>
            <Card elevation={this.props.selected ? 4 : 2}>
              <div>
                <strong>{this.props.user.getFullDisplayName()}</strong>
              </div>
              <small>{this.props.user.getId()}</small>
              <div>
                <strong>Joined:</strong> {new Date(this.props.user.getCreateDateMillis()).toUTCString()}
              </div>
              <Tag intent={this.props.user.getStatus() == UserStatus.NORMAL ? Intent.PRIMARY : Intent.SUCCESS}>
                {this.props.user.getStatus()}
              </Tag>
            </Card>
          </div>
        </div>
    );
  }
}

export default SingleUser;
