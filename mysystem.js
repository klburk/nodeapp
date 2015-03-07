//Use modules to create simple app that returns info about OS in command line

var os = require('os');
//Must bring module in with this "require" function

var message = 'Here is some info for your system';

var sysarray = new Array('Type: '+os.type(),
	'Node Version: '+process.version,
	'Platform: '+os.platform(),
	'Hostname: '+os.hostname(),
	'Total Memory: '+os.totalmem(),
	'Free Memory: '+os.freemem(),
	'Uptime: '+os.uptime()
	);

console.log(message);

var arraylen = sysarray.length

i = 0;

while(i < arraylen){
	console.log(sysarray[i]);
	i++;
}