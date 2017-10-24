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
	var msg = '{"status":' + status + ',"orderNo":[';
	$("input").each(function() {
		var i = 0;
		if($(this).is(':checked')) {
			//			console.log("--------------------")
			var v = $(this).val();
			v = v.replace(/'/g, "\"");
//			console.log("===============> " + v);
			var data = JSON.parse(v);
//			console.log("===============> " + data.OrderNo);
			//			js = js.OrderNo;
			msg += data.OrderNo + ",";
		}
	});
	msg = msg.substring(0, msg.lastIndexOf(","));
	msg += "]}";
	console.log("==msg====msg===msg==msg===msg=> " + msg);
	$(location).attr('href', 'take_photos.html?orderNo=' + msg);
}