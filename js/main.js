var sales = $('.sales');
var sales_details = $('.sales_details');// JavaScript Document

var buttonClickHandler = function () {
	var isActive = sales.attr('data-state');
	if (isActive == 'active' ) {
	sales.attr('data-state', 'inactive');
	} else {
	sales.attr('data-state', 'active');
	}
};

sales_details.on('click', buttonClickHandler);