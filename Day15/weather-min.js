var Global={countries:[{city:"Paris",country:"France"},{city:"Pune",country:"India"},{city:"Madrid",country:"Spain"},{city:"Tokyo",country:"Japan"},{city:"Houston",country:"US"}],temperaturesTableInstance:null,isUpdateTemperature:false,prodURL:"http://api.openweathermap.org/data/2.5/weather?q=city,country&units=metric",cityTemplate:"<li><h1>$city</h1><p>Min: $min, Max: $max</p><p class='ui-li-aside'>$time</p></li>"};function displayTemperatures(){$.mobile.loading("show",{text:"Loading...",textVisible:true,theme:"z",html:""});for(var b=0;b<Global.countries.length;b++){var d=Global.countries[b].country;var c=Global.countries[b].city;var a=Global.prodURL.replace("city",c).replace("country",d);$.ajax({url:a,dataType:"json",success:function(i){var f=i.main.temp_max;var g=i.main.temp_min;var h=i.dt;var e=Global.cityTemplate.replace("$city",c).replace("$max",f).replace("$min",g).replace("$time",h);$("#citiesul").append(e).listview("refresh");if(b==Global.countries.length){$.mobile.loading("hide")}}})}};