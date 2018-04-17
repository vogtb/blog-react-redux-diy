import User from "./User";
import StatName from "./StatName";

class UserStat {
  private user : User;
  private id : string;
  private statName : StatName;
  private value: number;

  constructor(user: User, id: string, statName: StatName, value : number) {
    this.user = user;
    this.id = id;
    this.statName = statName;
    this.value = value;
  }

  public getUser() : User {
    return this.user;
  }

  public getId() : string {
    return this.id;
  }

  public getStatName() : StatName {
    return this.statName;
  }

  public getValue() : number {
    return this.value;
  }
}

export default UserStat;