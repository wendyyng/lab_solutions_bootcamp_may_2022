function pow(baseNum, time) {
    if (time === 1) {
        return baseNum;
    } else {
        return baseNum * pow(baseNum, time - 1);
    }
}
console.log(pow(10, 3)) // 1000 => 10 * 10 * 10 => 0 ? 1 break this loop
console.log(pow(2, 4)) // 16 => 2 * 2 * 2 * 2
console.log(pow(0, 100)) // 0
console.log(pow(1, 1000)) // 1