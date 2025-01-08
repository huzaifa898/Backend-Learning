const fs = require('fs');
// fs.writeFileSync('hello.txt', 'Hello from Node.js');
/// for reading th file 
fs.readFile('./Contact.txt', 'utf-8' , (err, result) => {
    if (err) {
        console.error(err)
        return
    }
    else{
        console.log(result);
    }
 });   