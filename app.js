const fs = require('fs');

// file creation and writing data
fs.writeFile('student.txt', 'Student Activity Log\n', (err) => {
    if (err) throw err;
    console.log('File created and data written.');
});


// appending data
fs.appendFile('student.txt', 'Arjun attended Node.js class.\n', (err) => {
    if (err) throw err;
    console.log('Data appended.');
});


// reading data
fs.readFile('student.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('\nReading File Content:\n');
    console.log(data);
});


// adding more data
fs.appendFile('student.txt', 'Arjun completed file system practical.\n', (err) => {
    if (err) throw err;
    console.log('More data added.');
});
