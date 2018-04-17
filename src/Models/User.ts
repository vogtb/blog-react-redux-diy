import Status, {default as UserStatus} from "./UserStatus";

class User {
  private firstName : string;
  private familyName : string;
  private id : string;
  private createDateMillis : number;
  private status: Status;

  constructor(firstName : string, familyName : string, id : string, createDateMillis : number, status: UserStatus) {
    this.firstName = firstName;
    this.familyName = familyName;
    this.id = id;
    this.createDateMillis = createDateMillis;
    this.status = status;
  }

  getId() : string {
    return this.id;
  }

  getCreateDateMillis() : number {
    return this.createDateMillis;
  }

  getStatus() : UserStatus {
    return this.status;
  }

  getFullDisplayName() : string {
    return this.firstName + " " + this.familyName;
  }
}

export default User;