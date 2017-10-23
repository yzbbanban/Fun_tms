function getCity() {
//	console.log("getCity");
	$("#city_list").show();
	$("#order_list").hide();
	var cities=getCookie("cities");
	setCity(cities);
	
}

function setCity(cities) {
	console.log("cities： "+cities);
	//获取城市列表
	var cityListDetail = $("#city_list_detail");
	//重新加载清空界面内容
	cityListDetail.html("");
	var sCity = "";
	var cities=cities.split(",");
	//	var cityResult = JSON.parse(cities);
	//				alert(cityResult.result.length);
	for(var i = 0; i < cities.length; i++) {
		var city = cities[i];
		//		var cityId = cities[i].cityId;
		//					console.log(city);
		sCity = getSCity(city);
		console.log("scity: "+city);
		var $sC = $(sCity);
		$sC.data("city", city);
		//		$sC.data("cityId", cityId);
		//					console.log("data: "+$sC.data("cityId"));
		cityListDetail.append($sC);

	}

}

function getDiction() {
//	console.log("getDiction");
	$("#city_list").show();
	$("#order_list").hide();
	var deliveryStopAddrs=getCookie("deliveryStopAddrs");
	setDiction(deliveryStopAddrs);
}

function setDiction(deliveryStopAddrs) {
	console.log("deliveryStopAddrs： "+deliveryStopAddrs);
	var cityListDetail = $("#city_list_detail");
	cityListDetail.html("");
	var deliveryStopAddrs=deliveryStopAddrs.split(",")
//	console.log("deliveryStopNames: "+deliveryStopNames[0]);
	var sCity = "";
	//	var cityResult = JSON.parse(deliveryStopNames);
	//				alert(cityResult.result.length);
	for(var i = 0; i < deliveryStopAddrs.length; i++) {
		var loc = deliveryStopAddrs[i];
		//		var locId = deliveryStopNames[i];
		//					console.log(loc);
		sCity = getSCity(loc);

		var $sC = $(sCity);
		$sC.data("loc", loc);
		//		$sC.data("locId", locId);
		cityListDetail.append($sC);

	}
}

/**
 * 设置城市json数据
 */

function setCityList() {
	delCookie("cityJs"); //清除筛选内容

	if(0 == $("input:checked").length) { //没选择城市或配送点
		alert("请选择城市或者配送点");
	} else { //选择则拼接为json格式，并保存到订单中
		//创建筛选条件
		$("#city_list").hide();
		$("#order_list").show();
		var js = '{"cities":[';
		$("input").each(function() {
			if($(this).is(':checked')) {
				js += '{"city":' + '"' + $(this).val() + '"' + "},";
			}
		});
		js = js.substring(0, js.lastIndexOf(","));
		js += "]}";
		SetCookie("cityJs", js);
		//	alert(getCookie("cityJs"));
		location.reload();
	}
}
/**
 * 检查是否添加筛选项
 */
$(function() {
	var check_city_click = true;
	$("#check_all_city").click(function() {

		$("input").each(function() {
			if(!check_city_click) {
				$(this).prop("checked", false);
			} else {
				$(this).prop("checked", true);
			}
		});
		if(check_city_click) {
			check_city_click = false;
		} else {
			check_city_click = true;
		}
	});
})
/**
 * 添加要显示的界面内容
 * @param {Object} c
 */
function getSCity(c) {
	return '<label id="city_id" class="weui-cell weui-check__label">' +
		'<div class="weui-cell__hd">' +
		'<input type="checkbox" class="weui-check" name="checkbox1" value="' + c + '"/>' +
		'<i class="weui-icon-checked"></i>' +
		'</div>' +
		'<div class="weui-cell__bd">' +
		'<p>' + c + '</p>' +
		'</div>' +
		'</label>';
}