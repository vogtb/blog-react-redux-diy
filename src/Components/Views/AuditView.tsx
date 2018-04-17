import * as React from 'react';
import AuditLogEntry from "../../Models/AuditLogEntry";
import UserOperations from "../../Models/UserOperations";

interface AuditViewProps {
  auditLogEntries : Array<AuditLogEntry>;
  focusedUserId: string;
}

class AuditView extends React.Component<AuditViewProps, {}> {
  private static renderAuditEntryRow(auditLogEntry : AuditLogEntry) {
    function getOperationValueAsString() : string {
      if (auditLogEntry.getOperation() === UserOperations.CREATE_USER) {
        return JSON.stringify(auditLogEntry.getNewValue());
      }
      return auditLogEntry.getNewValue().toString();
    }
    return (
        <tr key={auditLogEntry.getId()}>
          <td>{auditLogEntry.getUser().getFullDisplayName()}</td>
          <td>{auditLogEntry.getOperation().toString()}</td>
          <td>{new Date(auditLogEntry.getCreateDateMillis()).toISOString()}</td>
          <td>{auditLogEntry.getOldValue() != null ? auditLogEntry.getOldValue().toString() : "{null}"}</td>
          <td>{getOperationValueAsString()}</td>
        </tr>
    );
  }
  render() {
    let entryRows = this.props.auditLogEntries
        .filter(function (entry : AuditLogEntry) {
          return this.props.focusedUserId === null || entry.getUser().getId() === this.props.focusedUserId;
        }.bind(this))
        .map(AuditView.renderAuditEntryRow);
    return (
        <div>
          <h2>AuditView</h2>
          <div>
            <table className={"pt-html-table"}>
              <thead>
              <tr>
                <th>User</th>
                <th>Operation</th>
                <th>Time</th>
                <th>Old</th>
                <th>New</th>
              </tr>
              </thead>
              <tbody>
              {entryRows}
              </tbody>
            </table>
          </div>
        </div>
    );
  }
}

export default AuditView;
