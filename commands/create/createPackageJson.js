var fs = require('fs');

module.exports=function (folderName) {
	var packageObj={

		"name": folderName.toLowerCase(),
		"version": "1.0.0",
		"description": "An awesome quail project",
		"scripts": {
			"start": "node app.js",
			"debug": "node debug app.js"
		},
		"main": "app.js",
		"keywords": [
			"quail"
		],
		"author": "anonymous",
		"license": "",
		"dependencies": {
			"quail-rest": "^1.1.0"
		}
	}

	fs.writeFile(folderName+"/package.json",JSON.stringify( packageObj, null, 2 ), function(err) {
	    if(err) {
	        return console.log(err);
	    }
	    // console.log("package.json created");
	});
}