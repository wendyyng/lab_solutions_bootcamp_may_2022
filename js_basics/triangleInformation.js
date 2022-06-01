const x = parseInt(process.argv[2]);
const y = parseInt(process.argv[3]);
const z = parseInt(process.argv[4]);
const perimeter = x + y + z;
const s = perimeter / 2;

const area = Math.sqrt(s * (s - x) * (s - y) * (s - z))
if (x == 0 || y == 0 || z == 0 || x + y < z || x + z < y || y + z < x) {
    console.log("Impossible triangle!!!");
} else {
    console.log(`Perimeter: ${perimeter}`)
    console.log(`Area: ${area}`)
}