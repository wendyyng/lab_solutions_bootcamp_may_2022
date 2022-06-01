const grade = parseInt(process.argv[2]);

if (grade >= 0 && grade <= 100) {
    if (grade >= 0 && grade <= 49) {

        console.log('F');

    } else if (grade >= 50 && grade <= 59) {

        console.log('C-');

    } else if (grade >= 60 && grade <= 66) {

        console.log('C');

    } else if (grade >= 67 && grade <= 72) {

        console.log('C+');

    } else if (grade >= 73 && grade <= 85) {

        console.log('B');

    } else if (grade >= 86 && grade <= 100) {

        console.log('A');
    }
} else {

    console.log("invalid grade");
}