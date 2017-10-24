function orderDiversion() {
	var orderJs = '{"orderJs":[';
	//未选择
	if(0 == $("input:checked").length) {
		alert("请选择订单");
		return;
	}
	$("input").each(function() {
		var i = 0;
		if($(this).is(':checked')) {
//			orderJs += '{"orderId":' + $(this).val() + "},";
			orderJs+= $(this).val()+ ",";
		}
	});
	orderJs = orderJs.substring(0, orderJs.lastIndexOf(","));
	orderJs += "]}";
//	alert(orderJs);
	$(location).attr('href', 'allocated_order.html?order=' + orderJs);
}