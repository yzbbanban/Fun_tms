$(function() {
	$.extend({
		/** 
		 * url get parameters 
		 * @public 
		 * @return array() 
		 */
		urlGet: function() {
			var aQuery = window.location.href; //取得Get参数 

			aQuery = aQuery.substring(aQuery.lastIndexOf("?") + 1, aQuery.length);
			//			alert(aQuery);
			var aGET = new Array();
			aGET = aQuery.split("=");
			return aGET[1];
		},

		getOrder: function(allocatedOrder) {

			allocatedOrderList(allocatedOrder);
		}
	});
	$.getOrder($.urlGet());
});

function allocatedOrderList(allocatedOrder) {
	//替换所有字符
	if(allocatedOrder == null) {
		return;
	}
	allocatedOrder = allocatedOrder.replace(/%22/g, '"');

	var aoJs = JSON.parse(allocatedOrder);
	$.ajax({
		type: "get",
		url: "data/order_detail.json",
		data: {

		},
		dataType: "json",
		success: function(result) {
			if(result.code == 0) {

				getAllocatedOrderData(result.result, aoJs);
			} else {
				alert(result.message);
			}
		},
		error: function() {
			alert("无此数据");
		}
	});

}

function getAllocatedOrderData(data, aoJs) {
	//	alert(data.length);
	var allocated_order_loc_count = 0;
	var allocated_order_loc_box_count = 0;
	for(var j = 0; j < aoJs.orderJs.length; j++) {
		for(var i = 0; i < data.length; i++) {

			var id = data[i].id;
			var orderNum = data[i].orderNum;
			var locName = data[i].locName;
			var city = data[i].city;
			var loc = data[i].loc;
			var count = data[i].count;
			var cId = data[i].cityId;
			var lId = data[i].locId;

			var allocatedOrder = $("#allocated_order");
			var aso = "";

			//			alert(aoJs.orderJs[j].orderId);
			if(id == aoJs.orderJs[j].orderId) {

//				console.log(allocated_order_loc_count);
//				console.log(count);
				//配送点、箱数

				allocated_order_loc_count++;
				allocated_order_loc_box_count += count;

				$("#allocated_order_loc_count").text(allocated_order_loc_count);
				$("#allocated_order_loc_box_count").text(allocated_order_loc_box_count);
				aso = setallocatedOrderData(id, orderNum, locName, loc, city, count);

			}
			var $aso = $(aso);
			allocatedOrder.append($aso);

		}
	}
}

function setallocatedOrderData(id, orderNum, locName, loc, city, count) {
	return '<a href="order_detail.html?orderId=' + id + '" class="weui-media-box weui-media-box_appmsg">' +
		'<div class="weui-media-box__hd">' +
		'<img style="margin-top: 10px;" src="img/city.png" width="30" height="30" alt="">' +
		'<p style="line-height: 20px;">' + city + '</p>' +
		'</div>' +
		'<div class="weui-media-box__bd">' +
		'<div class="weui-cell">' +
		'<div class="weui-cell__hd"><img src="img/order.png" alt="" class="order_img"></div>' +
		'<div class="weui-cell__bd">' +
		'<p>订单号</p>' +
		'</div>' +
		'<div class="weui-cell__ft">' + orderNum + '</div>' +
		'</div>' +
		'<div class="weui-cell">' +
		'<div class="weui-cell__hd"><img src="img/location.png" alt="" class="order_img"></div>' +
		'<div class="weui-cell__bd">' +
		'<p>配送点</p>' +
		'</div>' +
		'<div class="weui-cell__ft">' + locName + '</div>' +
		'</div>' +
		'<div class="weui-cell">' +
		'<div class="weui-cell__hd"><img src="img/count.png" alt="" class="order_img"></div>' +
		'<div class="weui-cell__bd">' +
		'<p>总数量</p>' +
		'</div>' +
		'<div class="weui-cell__ft">' + count + '箱</div>' +
		'</div>' +
		'</div>' +
		'<img src="img/more.png" alt="">' +
		'</a>';
}