var createModel= require('./createModel');
module.exports= function (program) {

	program
	.command('add-model <modelName>')
	.alias('m')
	.description('create a quail model')
	.action(function(modelName){
		createModel(modelName);
	});

	return program;
}