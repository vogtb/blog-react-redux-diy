import PrivateStore from "./PrimaryStore";

/**
 * Lazy singleton.
 * @type {PrimaryStore}
 */
const Store = new PrivateStore();

export default Store;