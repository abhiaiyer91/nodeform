//reading file by synchronous way
var fs = require('fs');
var data = fs.readFileSync('test.txt','UTF-8');
console.log("Running after the data is read from the file. Data is:\n "+data);

//file testBlockingserver.js
console.log('Starting app at time: '+ new Date().toTimeString());
 
//will wait for 1 second to run the callback function
setTimeout(function() {
     console.log('setTimeout run at  ' + new Date().toTimeString() );
}, 1000);

var start = new Date();
console.log('Starting loop at: ' + start.toTimeString() );

// run a loop for 4 seconds
var i = 0;
// increment i while (current time < start time + 4000 ms), will not be interrupted once started iterating

while(new Date().getTime() < start.getTime() + 4000) {  i++;}

console.log('Exiting loop at: ' +new Date().toTimeString()  + '. Ran '+ i + ' iterations.');