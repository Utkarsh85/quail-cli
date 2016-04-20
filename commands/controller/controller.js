var createController= require('./createController');
module.exports= function (program) {

	program
	.command('add-controller <controllerName>')
	.alias('c')
	.description('create a quail controller')
	.action(function(controllerName){
		createController(controllerName);
	});

	return program;
}