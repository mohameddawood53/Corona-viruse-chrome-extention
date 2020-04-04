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
    console.log(data);
});