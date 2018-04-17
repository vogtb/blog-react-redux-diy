import Store from "./Store";
import SelectUserAction from "../Actions/SelectUserAction";

class Dispatcher {
  public selectUser(userId: string) {
    Store.handleSelectUserAction(new SelectUserAction(userId));
  }
}

const DispatcherSingleton = new Dispatcher();

export {
  Dispatcher,
  DispatcherSingleton
}

