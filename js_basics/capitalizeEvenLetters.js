const a = process.argv[2]

let result = ''

for(let i = 0; i < a.length; i++){
    if(i % 2 == 0){
        result = result + a[i].toLowerCase()
    } else {
        result = result + a[i].toUpperCase()
    }
}

console.log(result)