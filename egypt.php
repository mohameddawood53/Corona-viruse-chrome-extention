<?php
$curl1 = curl_init();

curl_setopt_array($curl1, array(
	CURLOPT_URL => "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=Egypt",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_FOLLOWLOCATION => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "GET",
	CURLOPT_HTTPHEADER => array(
		"x-rapidapi-host: coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key: 79429321c1msh78b6258022a210fp1bddb9jsna54dbdc8ad43"
	),
));

$response1 = curl_exec($curl1);
$err1 = curl_error($curl1);

curl_close($curl1);

if ($err1) {
	echo "cURL Error #:" . $err1;
} else {
  $data1 = json_decode($response1);
  // print_r($data1);die;
  $new = $data1->latest_stat_by_country[0]->new_cases;
  echo $new;
}