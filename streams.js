// large files - time to read completely
// streams - start using data before it has been fully read 

const fs = require('fs');

// stream to read from file:
/* arguments:1. where we want to read data from
            2. option object: parameters: encoding:'utf8'=> no need to write.toString
*/ 
const readStream = fs.createReadStream('./docs/blog1.txt', {encoding: 'utf8'});

// writestream
// parameter 1 = the file you want to write into
const writeStream = fs.createWriteStream('./docs/blog3.txt')

// .on on readstream is 
// readStream.on('data', (chunk) =>{
//     console.log('---------new chunk-----------');
//     console.log(chunk);
//     writeStream.write('\n---------new chunk----------\n')
//     writeStream.write(chunk);
// });

//piping---------------
// pipe:write data directly from a readable file into a writable one
readStream.pipe(writeStream);
