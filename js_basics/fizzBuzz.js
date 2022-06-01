const firstArg = parseInt(process.argv[2])
const secondArg = parseInt(process.argv[3])

for(let i = 1; i < 101; i++ ){
    if ((i % firstArg == 0) && (i % secondArg == 0)){
        console.log("FizzBuzz")
    } else if (i % firstArg == 0) {
        console.log("Fizz")
    } else if (i % secondArg == 0){
        console.log("Buzz")
    } else {
        console.log(i)
    }
}