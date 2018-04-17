class SelectUserAction {
  private userId : string;

  constructor(userId: string) {
    this.userId = userId;
  }

  public getUserId() : string {
    return this.userId;
  }
}

export default SelectUserAction;