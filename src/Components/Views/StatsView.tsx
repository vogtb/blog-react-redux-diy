import * as React from 'react';
import UserStat from "../../Models/UserStat";

interface StatsViewProps {
  stats : Array<UserStat>;
  selectedUserId : string;
}

class StatsView extends React.Component<StatsViewProps, {}> {
  static renderStat(userStat : UserStat) {
    return (
        <div key={userStat.getId()}>
          <span>{userStat.getUser().getFullDisplayName()}</span> | <strong>{userStat.getStatName().toString()}:</strong> {userStat.getValue().toString()}
        </div>
    );
  }
  render() {
    let stats = this.props.stats
        .filter(function (stat: UserStat) {
          return this.props.selectedUserId === null || this.props.selectedUserId === stat.getUser().getId();
        }.bind(this))
        .map(StatsView.renderStat);
    return (
        <div>
          <h2>StatsView</h2>
          <div>{stats}</div>
        </div>
    );
  }
}

export default StatsView;
