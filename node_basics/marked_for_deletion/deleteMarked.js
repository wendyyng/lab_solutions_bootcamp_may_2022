const fs = require('fs');
const fileToRead = process.argv[2];
const fileToCreate = process.argv[3];

fs.readFile(
    `${fileToRead}`,
    { encoding: 'utf-8' },
    (err, data) => {
        if (err) {
            console.log('Error', err)
        } else {
            const dataArr = data.split('\n');
            const newStrArr = [];
            dataArr.forEach((line) => {
                if (!line.endsWith('yes')) {
                    newStrArr.push(line)
                }
            }
            )
            const newStr = newStrArr.join('\n')
            fs.writeFile(`${fileToCreate}`, newStr, (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log('File is created');
                }
            }
            )
        }
    });
