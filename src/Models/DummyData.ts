import User from "./User";
import UUIDGenerator from "../Utilities/UUIDGenerator";
import MillisGenerator from "../Utilities/MillisGenerator";
import UserStatus from "./UserStatus";
import AuditLogEntry from "./AuditLogEntry";
import UserOperations from "./UserOperations";
import UserStat from "./UserStat";
import StatName from "./StatName";

let vinaUser = new User("Vina", "Vera", UUIDGenerator.generate(), MillisGenerator.generate(), UserStatus.PRIME);
let davisUser = new User("Davis", "Chaney", UUIDGenerator.generate(), MillisGenerator.generate(), UserStatus.PRIME);
let justinUser = new User("Justin", "Bryant", UUIDGenerator.generate(), MillisGenerator.generate(), UserStatus.NORMAL);
let geraldUser = new User("Gerald", "Bufford", UUIDGenerator.generate(), MillisGenerator.generate(), UserStatus.NORMAL);

let USERS = [
  vinaUser,
  davisUser,
  justinUser,
  geraldUser
];

let AUDIT_LOG : Array<AuditLogEntry> = [
  new AuditLogEntry(UUIDGenerator.generate(), vinaUser, vinaUser.getCreateDateMillis(), null, vinaUser, UserOperations.CREATE_USER),
  new AuditLogEntry(UUIDGenerator.generate(), vinaUser, vinaUser.getCreateDateMillis() + 6000, "Vinas", "Vina", UserOperations.UPDATE_FIRST_NAME),
  new AuditLogEntry(UUIDGenerator.generate(), vinaUser, vinaUser.getCreateDateMillis() + 12000, UserStatus.NORMAL, UserStatus.PRIME, UserOperations.UPDATE_STATUS),

  new AuditLogEntry(UUIDGenerator.generate(), davisUser, davisUser.getCreateDateMillis(), null, davisUser, UserOperations.CREATE_USER),
  new AuditLogEntry(UUIDGenerator.generate(), davisUser, davisUser.getCreateDateMillis() + 6000, "C", "Chaney", UserOperations.UPDATE_FIRST_NAME),
  new AuditLogEntry(UUIDGenerator.generate(), davisUser, davisUser.getCreateDateMillis() + 12000, UserStatus.NORMAL, UserStatus.PRIME, UserOperations.UPDATE_STATUS),

  new AuditLogEntry(UUIDGenerator.generate(), justinUser, justinUser.getCreateDateMillis(), null, justinUser, UserOperations.CREATE_USER),
  new AuditLogEntry(UUIDGenerator.generate(), justinUser, justinUser.getCreateDateMillis() + 6000, "B.", "Bryant", UserOperations.UPDATE_FAMILY_NAME),
  new AuditLogEntry(UUIDGenerator.generate(), justinUser, justinUser.getCreateDateMillis() + 12000, UserStatus.PRIME, UserStatus.NORMAL, UserOperations.UPDATE_STATUS),

  new AuditLogEntry(UUIDGenerator.generate(), geraldUser, geraldUser.getCreateDateMillis(), null, geraldUser, UserOperations.CREATE_USER),
  new AuditLogEntry(UUIDGenerator.generate(), geraldUser, geraldUser.getCreateDateMillis() + 6000, "G.", "Gerald", UserOperations.UPDATE_FIRST_NAME),
  new AuditLogEntry(UUIDGenerator.generate(), geraldUser, geraldUser.getCreateDateMillis() + 6500, "B", "Bufford", UserOperations.UPDATE_FAMILY_NAME)
];

let STATS : Array<UserStat> = [
  new UserStat(vinaUser, UUIDGenerator.generate(), StatName.INTERACTION_COUNT, 1241),
  new UserStat(vinaUser, UUIDGenerator.generate(), StatName.READ_COUNT, 22),
  new UserStat(vinaUser, UUIDGenerator.generate(), StatName.WRITE_COUNT, 2),
  new UserStat(vinaUser, UUIDGenerator.generate(), StatName.TIME_ACTIVE, 21380198),

  new UserStat(davisUser, UUIDGenerator.generate(), StatName.INTERACTION_COUNT, 329),
  new UserStat(davisUser, UUIDGenerator.generate(), StatName.READ_COUNT, 142),
  new UserStat(davisUser, UUIDGenerator.generate(), StatName.WRITE_COUNT, 100),
  new UserStat(davisUser, UUIDGenerator.generate(), StatName.TIME_ACTIVE, 1328131),

  new UserStat(justinUser, UUIDGenerator.generate(), StatName.INTERACTION_COUNT, 441),
  new UserStat(justinUser, UUIDGenerator.generate(), StatName.READ_COUNT, 100),
  new UserStat(justinUser, UUIDGenerator.generate(), StatName.WRITE_COUNT, 10),
  new UserStat(justinUser, UUIDGenerator.generate(), StatName.TIME_ACTIVE, 31585144),

  new UserStat(geraldUser, UUIDGenerator.generate(), StatName.INTERACTION_COUNT, 1999),
  new UserStat(geraldUser, UUIDGenerator.generate(), StatName.READ_COUNT, 444),
  new UserStat(geraldUser, UUIDGenerator.generate(), StatName.WRITE_COUNT, 44),
  new UserStat(geraldUser, UUIDGenerator.generate(), StatName.TIME_ACTIVE, 553522),
];

export {
  USERS,
  AUDIT_LOG,
  STATS
}