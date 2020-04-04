// $("#data").hide();
// $(".data").hide();
setTimeout(function()
{
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=Egypt",
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
			"x-rapidapi-key": "79429321c1msh78b6258022a210fp1bddb9jsna54dbdc8ad43"
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

