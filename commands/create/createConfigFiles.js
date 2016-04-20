var fs = require('fs');
var utils= require('../../utils/utils');

module.exports=function (folderName) {
	var config=
	[
		{
			name:'acl.js',
			content:"module.exports= {routes:{authenticated:{},not_authenticated:{}}}"
		},
		{
			name:'connection.js',
			content:"/* Add your mongodb connection setting here: more info at \n http://mongodb.github.io/node-mongodb-native/2.1/reference/connecting/connection-settings/ */module.exports={connectionString:'mongodb://localhost:27017/test'}"
		},
		{
			name:'cors.js',
			content:"/* More configuration option at https://github.com/expressjs/cors */ module.exports= {allowedHeaders:['Content-Type', 'Authorization']}"
		},
		{
			name:'rateLimit.js',
			content:"module.exports= {routes:{}}"
		}
	];

	config.map(function (file) {
		
		fs.writeFile(folderName+"/config/"+file.name,utils.beautify(file.content), function(err) {
		    if(err) {
		        return console.log(err);
		    }
		});
	});

}
