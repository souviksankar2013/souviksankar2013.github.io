var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var hour = String(today.getHours())
console.log(hour)

var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
if (today.getHours() >= 17 && today.getHours() <=23)
{
	if (dd<=9)
var dd = 0+String(parseInt(String(today.getDate()).padStart(2, '0')));

else

	var dd = String(parseInt(String(today.getDate()).padStart(2, '0')));

}
else
{
	if(dd<=9)
	
var dd =  0+String(parseInt(String(today.getDate()).padStart(2, '0')) -1);

else
var dd =  String(parseInt(String(today.getDate()).padStart(2, '0')) -1);

}
// else 
// {
// 	var dd = parseInt(String(today.getDate()).padStart(2, '0')) +30;
// 	var mm = 0+String(parseInt(String(today.getMonth() + 1).padStart(2, '0'))-1);
// }


var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
yesterday = yyyy + '-' + mm + '-' + String((dd-1));
console.log(yesterday);

arr=[]
	  arr2=[]
	  arr3=[]
	  arr4=[]
	  arr5=[]
	  arr6=[]


	  arr17=[]
arr18=[]
arr19=[]
arr20=[]
arr21=[]

pre_arr3 =[]
pre_arr4=[]
pre_arr5=[]
pre_arr6=[]






Tabletop.init( { key: "1AL1cj_33m3D7JkT-_wPB7LPJAqIfV2Y5XVMui7nczy4", callback: getdata, simpleSheet: false } );

function getdata(d, tabletop) {
		var data, metadata = [];
		data = tabletop.sheets("raw").elements;
		metadata = tabletop.sheets("readme").elements;


		
		
		for ( var i = 0; i < data.length; i++ ){
			arr17.push(data[i]["District"])
			arr18.push(data[i]["Confirmed Cases"])
			arr19.push(data[i]["Discharged"])
			arr20.push(data[i]["Deaths"])
			arr21.push(data[i]["Active"])
		}
		document.getElementById("demo6").innerHTML = arr17
		document.getElementById("demo7").innerHTML = arr18
		document.getElementById("demo8").innerHTML = arr19
		document.getElementById("demo9").innerHTML = arr20
		document.getElementById("demo10").innerHTML = arr21

		document.getElementById("demo6").style.visibility = "hidden";
	document.getElementById("demo7").style.visibility = "hidden";
	document.getElementById("demo8").style.visibility = "hidden";
	document.getElementById("demo9").style.visibility = "hidden";
	document.getElementById("demo10").style.visibility = "hidden";


	}



var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("demo").innerHTML =
      //this.responseText;
	  
	  var res = this.responseText;
	  var obj = JSON.parse(res);
	  
	  for (var i in res)
	  {
		  if(JSON.stringify(obj.rows[i]))
		  {
	  arr.push(obj.rows[i])
		  }
	  }
	  
	  //document.getElementById("demo").innerHTML =JSON.stringify(arr[arr.length-1])
	  for (var j in arr)
	  {
		  if (JSON.stringify(arr[j].value.report_time).includes (today))
		  {
		arr2.push (JSON.stringify(arr[j].value.state).replace(/^"(.*)"$/, '$1'))
		// arr3.push (JSON.stringify(arr[j].value.confirmed_india))
		arr3.push (JSON.stringify(arr[j].value.confirmed))
		arr4.push (JSON.stringify(arr[j].value.report_time))
		//console.log(JSON.stringify(arr[j].value.cured))
		arr5.push (JSON.stringify(arr[j].value.cured))
		arr6.push (JSON.stringify(arr[j].value.death))
		document.getElementById("date").innerHTML = "<h4>Updated till: " +arr[j].value.report_time.split("T") + "</h4><p>Zoom the map to get district level data </p>";
		  }



		  if (JSON.stringify(arr[j].value.report_time).includes (yesterday))
		  {
		//arr2.push (JSON.stringify(arr[j].value.state).replace(/^"(.*)"$/, '$1'))
		// arr3.push (JSON.stringify(arr[j].value.confirmed_india))
		pre_arr3.push (JSON.stringify(arr[j].value.confirmed))
		pre_arr4.push (JSON.stringify(arr[j].value.report_time))
		//console.log(JSON.stringify(arr[j].value.cured))
		pre_arr5.push (JSON.stringify(arr[j].value.cured))
		pre_arr6.push (JSON.stringify(arr[j].value.death))
		
		  }

		 
		  
		
		//document.getElementById("demo1").innerHTML = JSON.stringify(arr[j].value);
	  }
	  //function checkAdult() {
  	//return "up";
		//}


		var diff1=[]
		var diff2=[]
		var diff3=[]

		for (var k in arr3)
		{
			diff1.push(arr3[k] - pre_arr3[k])
			diff2.push(arr5[k] - pre_arr5[k])
			diff3.push(arr6[k] - pre_arr6[k])
		}

		document.getElementById("demo11").innerHTML = diff1
		document.getElementById("demo12").innerHTML = diff2
		document.getElementById("demo13").innerHTML = diff3
		document.getElementById("demo11").style.visibility = "hidden";
		document.getElementById("demo12").style.visibility = "hidden";
		document.getElementById("demo13").style.visibility = "hidden";
		
document.getElementById("demo").style.visibility = "hidden";
	document.getElementById("demo2").style.visibility = "hidden";
	//document.getElementById("demo3").style.visibility = "hidden";
	document.getElementById("demo4").style.visibility = "hidden";
	document.getElementById("demo5").style.visibility = "hidden";
	
	  
	  //document.getElementById("demo").innerHTML = arr2.findIndex(checkAdult);
	  document.getElementById("demo").innerHTML = arr2;
	  
	  document.getElementById("demo2").innerHTML = arr3;
	//   var sum=0;
	// 	for (var i in arr3)
	// 	{
	// 		sum += parseInt(arr3[i]) +parseInt(arr4[i]) ;
	// 	}
		//console.log(arr4)
	  //document.getElementById("demo6").innerHTML = "<h2>Confirmed Total: "+sum+"</h2";
	  //document.getElementById("demo3").innerHTML = arr4;

	var pre_sum = 0
	var pre_sum1=0
	var pre_sum2=0

	  var sum = 0
	  var sum1=0
	  var sum2=0
	  
	  if ([... new Set(arr4)].length > 1)
	  {
		  var tim = [... new Set(arr4)][1]
		  
		  var tim1 = [... new Set(arr4)][0]

		  
	  }
	  else
	  {
		var tim = [... new Set(arr4)][0]
	  }

	for (var i in arr3)
		{
			if (arr4[i] == tim)
			{
			sum = sum + parseInt(arr3[i])
			sum1 = sum1 + parseInt(arr5[i])
			sum2 = sum2 + parseInt(arr6[i])
			}
		}	

		for (var i in pre_arr3)
		{
			if (pre_arr4[i] == [... new Set(pre_arr4)][1])
			{
			pre_sum = pre_sum + parseInt(pre_arr3[i])
			pre_sum1 = pre_sum1 + parseInt(pre_arr5[i])
			pre_sum2 = pre_sum2 + parseInt(pre_arr6[i])
			}
		}	

		console.log(pre_sum)


		

		console.log([... new Set(arr4)].length)

		document.getElementById("demo3").innerHTML = "<h3>Total Confirmed: "+sum+" (+"+(sum - pre_sum)+")&nbsp&nbsp&nbspTotal Cured: "+sum1+" (+"+(sum1 - pre_sum1)+")&nbsp&nbsp&nbspTotal Death: "+sum2+" (+"+(sum2 - pre_sum2)+")</h3>";

	  document.getElementById("demo4").innerHTML = arr5;
	  document.getElementById("demo5").innerHTML = arr6;
	  
	  
    }
  };
  
  var url = "https://api.allorigins.win/raw?url=https://data.thejeshgn.com/covid19/_design/india/_view/incidents?descending=false&nounce="+yyyy+mm+dd+hour
  xhttp.open("GET", url , true);
  xhttp.send();

console.log(url)

$(document).ready(function () {
    setTimeout(function(){
      $(".loader-wrapper").fadeOut("slow");  

var map = L.map('map').setView([23.076748, 78.292226 ], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//function onEachFeature(feature, layer) {
	//var popupContent = "<p>I started out as a GeoJSON " +
				//feature.geometry.type + ", but now I'm a Leaflet vector!</p>";
    // does this feature have a property named popupContent?
    //if (feature.properties && feature.properties.popupContent) {
        //layer.bindPopup(feature.properties.popupContent);
    //}
//}


function getColor(d) {
    return d >= 0 && d <=100 ? '#DC143C' :
           d > 100 && d <= 500  ? '#800026' :
           d > 500 && d<=2000 ? '#8b0023' :
		   d > 2000 ? '#000000' :
           
                      '#000000';
}

function getColor1(d) {
    return d >= 0 && d <10 ? '#DC143C' :
           d > 10 && d < 50  ? '#800026' :
           d > 51 && d<100 ? '#8b0023' :
		   d > 101 ? '#000000' :
           
                      '#000000';
}

function clean_map() {
    map.eachLayer(function (layer) {
        if (layer instanceof L.GeoJSON)
        //Do marker specific actions here

        {
            map.removeLayer(layer);

        }
        //console.log(layer);


    });
}




var legend1 = L.control({ position: "bottomleft" });

legend1.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h4>Total Confirmed</h4>";
  div.innerHTML += '<i style="background:#000000"></i><span>50+</span><br>';
  div.innerHTML += '<i style="background: #800026"></i><span>10-50</span><br>';
  div.innerHTML += '<i style="background: #DC143C"></i><span>0-10</span><br>';
  div.innerHTML += '<i style="background: #0000FF"></i><span>No patient</span><br>';
  //div.innerHTML += '<i style="background: #FF4500"></i><span>Residential</span><br>';
  //div.innerHTML += '<i style="background: #FFFFFF"></i><span>Ice</span><br>';
  //div.innerHTML += '<i class="icon" style="background-image: url(https://d30y9cdsu7xlg0.cloudfront.net/png/194515-200.png);background-repeat: no-repeat;"></i><span>Grænse</span><br>';
  
  

  return div;
};


var legend = L.control({ position: "bottomleft" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h4>Total Confirmed</h4>";
  div.innerHTML += '<i style="background:#000000"></i><span>1500+</span><br>';
  div.innerHTML += '<i style="background: #800026"></i><span>100-1500</span><br>';
  div.innerHTML += '<i style="background: #DC143C"></i><span>0-100</span><br>';
  div.innerHTML += '<i style="background: #0000FF"></i><span>No patient</span><br>';
  //div.innerHTML += '<i style="background: #FF4500"></i><span>Residential</span><br>';
  //div.innerHTML += '<i style="background: #FFFFFF"></i><span>Ice</span><br>';
  //div.innerHTML += '<i class="icon" style="background-image: url(https://d30y9cdsu7xlg0.cloudfront.net/png/194515-200.png);background-repeat: no-repeat;"></i><span>Grænse</span><br>';
  
  

  return div;
};
legend.addTo(map);




setTimeout(function(){
	var arr27=document.getElementById("demo6").innerHTML;
	var arr28=document.getElementById("demo7").innerHTML;
	var arr29=document.getElementById("demo8").innerHTML;
	var arr30=document.getElementById("demo9").innerHTML;
	var arr31=document.getElementById("demo10").innerHTML;
	arr27=arr27.split(",");
	//console.log(arr27)
	arr28=arr28.split(",");
	arr29=arr29.split(",");
	arr30=arr30.split(",");
	arr31=arr31.split(",");

	function style(feature) {

		var color = "#feebe2";



		for (var i in arr27)
		{
		if(arr27[i] == feature.properties.dtname)
			{

				if (arr28[i] > 50) color = "#000000";
				else if (arr28[i] > 20 && arr28[i] <= 50 ) color = "#8b0023";
				else if (arr28[i] > 10 && arr28[i] <= 20) color = "#800026";
				else if (arr28[i] >= 1 && arr28[i] <= 10) color = "#DC143C";
				else {color = "#feebe2";}

				return {
          fillColor: color,
          weight: 1,
          opacity: 0.4,
          color: 'black',
          dashArray: '1',
		  fillOpacity: 0.7,
		  
		};
	}
}
}



function style1(feature)
{
	return{
		
		weight: 5,
          opacity: 0.9,
          color: "black",
          fill: false
	};
}








	var dist = L.geoJson(geodist, {
		style: style,
    onEachFeature: function (feature, layer) {
		
		for (var i in arr27)
		{
			
			if(arr27[i] == feature.properties.dtname)
			{
       layer.bindPopup("<p>State: "+ feature.properties.stname +" <br> District :" + feature.properties.dtname +" <br> Confirmed :" + arr28[i] +"<br> Discharged " + arr29[i] + "<br> Death: " + arr30[i] + "<br> Active: " + arr31[i] + "<br></p>")}}}
});

var state1 = L.geoJson(geoStates,{
		style: style1})




		





		map.on('zoomend', function (e) {
			var currentZoom = map.getZoom();

if (currentZoom >= 7)
{
	clean_map();
	dist.addTo(map);
	state1.addTo(map);
	map.removeControl(legend);
	legend1.addTo(map);
	

}

});

		
	  }, 10000);









setTimeout(function(){

	

	var arr7=document.getElementById("demo").innerHTML;
	
	var arr8=document.getElementById("demo2").innerHTML;
	//var arr9=document.getElementById("demo3").innerHTML;
	var arr10=document.getElementById("demo4").innerHTML;
	var arr11=document.getElementById("demo5").innerHTML;

	var arr91 = document.getElementById("demo11").innerHTML;
	var arr92 = document.getElementById("demo12").innerHTML;
	var arr93 = document.getElementById("demo13").innerHTML;


	arr7=arr7.split(",");
	arr8=arr8.split(",");
	//arr9=arr9.split(",");
	arr10=arr10.split(",");
	arr11=arr11.split(",");
	arr91 = arr91.split(",")
	arr92 = arr92.split(",")
	arr93 = arr93.split(",")
	
	function style(feature) {
		for (var i in arr7)
		{
		if(arr7[i] == feature.properties.st_code)
			{


    return {
		
        fillColor: getColor(arr8[i]),
		weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
	};
			}
		}
}


	
	var state = L.geoJson(india_mod2, {
		style: style,
    onEachFeature: function (feature, layer) {
		
		for (var i in arr7)
		{
			
			if(arr7[i] == feature.properties.st_code)
			{
       layer.bindPopup("<p>"+ feature.properties.S_NAME +" <br> Confirmed :" + arr8[i] +" (+"+arr91[i]+ ")<br> Cured " + arr10[i] +" (+"+arr92[i]+ ")<br> Death " + arr11[i] +" (+"+arr93[i]+ ")<br></p>")}}}
}).addTo(map);







map.on('zoomend', function (e) {
			var currentZoom = map.getZoom();

if (currentZoom < 7)
{
	clean_map();
    state.addTo(map)
	map.removeControl(legend1);
	legend.addTo(map);

}

});



	  }, 2000);






// 	  var legend = L.control({ position: "bottomleft" });

// legend.onAdd = function(map) {
//   var div = L.DomUtil.create("div", "legend");
//   div.innerHTML += "<h4>As per Infected Indian</h4>";
//   div.innerHTML += '<i style="background:#000000"></i><span>100+</span><br>';
//   div.innerHTML += '<i style="background: #800026"></i><span>20-100</span><br>';
//   div.innerHTML += '<i style="background: #DC143C"></i><span>0-20</span><br>';
//   div.innerHTML += '<i style="background: #0000FF"></i><span>No patient</span><br>';
//   //div.innerHTML += '<i style="background: #FF4500"></i><span>Residential</span><br>';
//   //div.innerHTML += '<i style="background: #FFFFFF"></i><span>Ice</span><br>';
//   //div.innerHTML += '<i class="icon" style="background-image: url(https://d30y9cdsu7xlg0.cloudfront.net/png/194515-200.png);background-repeat: no-repeat;"></i><span>Grænse</span><br>';
  
  

//   return div;
// };
// legend.addTo(map);


//newwwww

// map.on('zoomend', function (e) {
//     zoom_based_layerchange();
// });

// function clean_map() {
//     map.eachLayer(function (layer) {
//         if (layer instanceof L.GeoJSON)
//         //Do marker specific actions here

//         {
//             map.removeLayer(layer);

//         }
//         //console.log(layer);


//     });
// }



// function zoom_based_layerchange() {
//     //console.log(map.getZoom());
//     //$("#zoomlevel").html(map.getZoom());
//     var currentZoom = map.getZoom();

//     if (currentZoom >= 7)
//     {
//         clean_map();
//         state1.addTo(map);
//         dist.addTo(map);

//     }
//     else
//     {
//         clean_map();
//         state.addTo(map)
//     }
// }




    }, 5000);
});


  