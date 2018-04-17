import * as React from 'react';
import UserListContainer from "./Containers/UserListContainer";
import AuditContainer from "./Containers/AuditContainer";
import StatsContainer from "./Containers/StatsContainer";

class App extends React.Component {
  render() {
    return (
      <div className={"container"}>
        <div className={"col-12 block"}>
          <UserListContainer/>
        </div>
        <div className={"col-12 block"}>
          <AuditContainer/>
        </div>
        <div className={"col-12 block"}>
          <StatsContainer/>
        </div>
      </div>
    );
  }
}

export default App;
