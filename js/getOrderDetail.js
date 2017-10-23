$(function() {
	$.extend({
		/** 
		 * url get parameters 
		 * @public 
		 * @return array() 
		 */
		urlGet: function() {
			var aQuery = window.location.href; //取得Get参数 
			aQuery = aQuery.replace(/%27/g, "\"");

			console.log(aQuery);

			aQuery = aQuery.substring(aQuery.lastIndexOf("?") + 1, aQuery.length);
			//			console.log(decodeURI(decodeURI(aQuery))); //js 解码  
			aQuery = decodeURI(decodeURI(aQuery));
			var aGET = new Array();
			aGET = aQuery.split("=");
			return aGET[1];
		},

		getDetail: function(detailJs) {
			getDetailData(detailJs);
		}
	});
	$.getDetail($.urlGet());
});

function getDetailData(detailJs) {
	console.log("-----------> " + detailJs);
	setDetailData(data);
}

function setDetailData(data) {
	for(var i = 0; i < data.length; i++) {
		//		alert(id);
		var city = data[i].city;
		var orderNum = data[i].orderNum;
		var locName = data[i].locName;
		var loc = data[i].loc;
		//			alert("ss")
		var order_detial = $("#order_detial");
		var sor = "";
		sor = '<a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">' +
			'<div class="weui-media-box__hd">' +
			'<img style="margin-top: 10px;" src="img/detail_count.png" width="30" height="30" alt="">' +
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
			'<p>名称</p>' +
			'</div>' +
			'<div class="weui-cell__ft">' + locName + '</div>' +
			'</div>' +
			'<div class="weui-cell">' +
			'<div class="weui-cell__hd"><img src="img/order_loc.png" alt="" class="order_img"></div>' +
			'<div class="weui-cell__bd">' +
			'<p>地址</p>' +
			'</div>' +
			'<div class="weui-cell__ft">' + loc + '</div>' +
			'</div>' +
			'</div>' +
			'</a>';
		var $so = $(sor);
		order_detial.append($so);

		var order_detial_list = $("#order_detial_list");
		var sd = ""
		for(var j = 0; j < data[i].detail.length; j++) {
			var orderName = data[i].detail[j].name;
			var box_count = data[i].detail[j].box_count;
			sd = '<div class="weui-cell">' +
				'<div class="weui-cell__hd"><img src="img/goods.png" alt="" style="width:20px;margin-right:5px;display:block"></div>' +
				'<div class="weui-cell__bd">' +
				'<p>品项：' + orderName + '</p>' +
				'</div>' +
				'<div class="weui-cell__ft">' +
				'<div id="order_bottom" class="">' +
				'<img src="img/detail_count.png" alt="" class="order_foot_img order_case">' +
				'<p class="order_foot_p" id="orde_case_count">箱数：' + box_count + '箱</p>' +
				'</div>' +
				'</div>' +
				'</div>';
			var $sd = $(sd)
			order_detial_list.append($sd);
		}

	}

}