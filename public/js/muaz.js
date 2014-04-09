var map = ["home", "about","contact"];
var app = Davis(function () {
	this.get('/', function (req) {
		$('#content-wrapper').carousel(0);
		$('#content-wrapper').carousel('pause');
	});
	this.get('/about', function (req) {
		$('#content-wrapper').carousel(1);
		$('#content-wrapper').carousel('pause');
	});
	this.get('/contact', function (req) {
		$('#content-wrapper').carousel(2);
		$('#content-wrapper').carousel('pause');
	});
});
