$(function() {
	$.extend({
		/**
		 * 获取上个界面get请求中的url参数值
		 */
		urlGet: function() {
			//			alert("sss");
			var aQuery = window.location.href; //取得Get参数 
			console.log(aQuery);
			
			aQuery = aQuery.substring(aQuery.lastIndexOf("?") + 1, aQuery.length);
			//			alert(aQuery);
			var aGET = new Array();
			aGET = aQuery.split("=");
			return aGET[1];
		},
		/**
		 * 告诉页面是否异常
		 * @param {Object} status
		 */
		setStatus: function(status) {
			if(status == 0) {
				$("#exception_reason").hide();
			}
		}

	});
	$.setStatus($.urlGet());
});