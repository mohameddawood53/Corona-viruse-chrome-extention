// $("#data").hide();
// $(".data").hide();
setTimeout(function()
{
	// api settings
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "",
		"method": "GET",
		"headers": {
			
		}
	}
	
	$.ajax(settings).done(function (response) {
		// console.log(response);
		var data = JSON.parse(response);
		// console.log(response);
		// console.log(data);
		$("#data").css("visibility" , "visible");
		$("#div").html("<br/>");
		$(".cases").html(data.latest_stat_by_country[0].total_cases);
		$(".active-cases").html(data.latest_stat_by_country[0].active_cases);
		$(".new-cases").html(data.latest_stat_by_country[0].new_cases);
		$(".new-deaths").html(data.latest_stat_by_country[0].new_deaths);
	});
},3000);

