class MillisGenerator {
  private static ONE_MONTH_MILLIS = 30*24*60*60*1000;
  private static SEED : number = 3;
  private static randomFromSeed() {
    let x = Math.sin(MillisGenerator.SEED++) * 10000;
    return x - Math.floor(x);
  }
  /**
   * Generates a random millisecond between one and two months ago.
   * @returns {number}
   */
  static generate() : number {
    return +(new Date()) - (MillisGenerator.ONE_MONTH_MILLIS - Math.floor(MillisGenerator.randomFromSeed() * MillisGenerator.ONE_MONTH_MILLIS));
  }
}

export default MillisGenerator;