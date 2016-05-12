var fs = require('fs');
var utils= require('../../utils/utils');

module.exports=function (folderName) {
	var appJs="var quailApp= require('quail-rest');quailApp.listen(3000,function () {console.log('Running on port 3000');})";

	fs.writeFile(folderName+"/app.js",utils.beautify(appJs), function(err) {
	    if(err) {
	        return console.log(err);
	    }
	});
}
