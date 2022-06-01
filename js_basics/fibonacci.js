const grade = parseInt(process.argv[2]);
if (grade || grade > 0) {
    let arr = new Int32Array(grade);
    for (i = 0; i < grade; i++) {
        if (i == 0 || i == 1) {
            arr[i] = 1;
        } else {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
    }
    console.log(arr.join(' '));
} else {
    console.log("A number argument is required");
}