/**
 * Generates UUIDs randomly from a seed.
 */
class UUIDGenerator {
  private static SEED : number = 1;
  private static randomFromSeed() {
    let x = Math.sin(UUIDGenerator.SEED++) * 10000;
    return x - Math.floor(x);
  }
  static generate() : string {
    let uuid = "", i, random;
    for (i = 0; i < 32; i++) {
      random = UUIDGenerator.randomFromSeed() * 16 | 0;
      if (i == 8 || i == 12 || i == 16 || i == 20) {
        uuid += "-"
      }
      uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
    }
    return uuid;
  }
}

export default UUIDGenerator;