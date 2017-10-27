$(function() {
	$("#completeOrder").click(function() {
		//		take_photos.html?status=1
		//		alert("completeOrder");
		getCompleteOrderList(0);
	});
	$("#errorOrder").click(function() {
		//		take_photos.html?status=1
		//		alert("errorOrder");
		getCompleteOrderList(1);
		//
	});
});

function getCompleteOrderList(status) {
	//选取的订单
	//设置传送的href
	var locationName = "";
	$("#order_list input").each(function() {
		var i = 0;
		if($(this).is(':checked')) {
			//			console.log("--------------------")
			var v = $(this).val();
			//			console.log("===============> " + v);
			var data = v.split(",");
			var deliveryStopName = data[1];
			if(locationName.indexOf(deliveryStopName) == -1 && deliveryStopName!= null) {
				locationName += "" + deliveryStopName + ",";;
			}
		}
	});
	console.log("--------> " + locationName);
	$(location).attr('href', 'take_photos.html?locationName=' + locationName + '&shippingno=' + getCookie("BatchNo"));
}