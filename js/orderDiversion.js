function orderDiversion() {
	var orderJs = '"';
	//未选择
	if(0 == $("input:checked").length) {
		alert("请选择订单");
		return;
	}
	$("#order_list input").each(function() {
		var i = 0;
		if($(this).is(':checked')) {
			//			orderJs += '{"orderId":' + $(this).val() + "},";
			
			orderJs += $(this).val() + ",";
		}
	});
	SetCookie("orderDivJs", "", 2);
	orderJs = orderJs.substring(0, orderJs.lastIndexOf(","));
	orderJs += '"';
//		console.log(orderJs);
	SetCookie("orderDivJs", orderJs, 2);

	$(location).attr('href', 'allocated_order.html');
}