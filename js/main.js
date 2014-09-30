var sales = $('.sales');
var sales__details = $('.sales__details');// JavaScript Document

var buttonClickHandler = function () {
	var isActive = sales.attr('data-state');
	if (isActive == 'active' ) {
	sales.attr('data-state', 'inactive');
	} else {
	sales.attr('data-state', 'active');
	}
};

sales__details.on('click', buttonClickHandler);