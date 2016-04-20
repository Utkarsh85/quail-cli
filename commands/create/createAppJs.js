var fs = require('fs');
var utils= require('../../utils/utils');

module.exports=function (folderName) {
	var appJs="require('quail-rest')(3000);";

	fs.writeFile(folderName+"/app.js",utils.beautify(appJs), function(err) {
	    if(err) {
	        return console.log(err);
	    }
	});
}
