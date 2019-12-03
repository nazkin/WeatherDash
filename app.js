$( document ).ready(function() {
    var city = 'London';
    var key = `c7653ece574413d1f94171d5a4d625df`;
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    var fiveDayQuery = `https://api.openweathermap.org/data/2.5/forecast?q=${city},ca&appid=${key}`;
 
//Query Selectors
    var cityDisplay = $('.city');


    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //   }).then(function(response) {
    //     var city = response.name;
    //     var temperature = response.main.temp;
    //     var humidity = response.main.humidity;
    //     var wind = response.wind.speed;
    //     $('.city').text(`City: ${city}`);
    //     $('.temp').text(`Temperature: ${temperature} (Calvin)`);
    //     $('.humidy').text(`Humidity: ${humidity} (%)`);
    //     $('.wind').text(`Wind: ${wind} (m/h)`);
    //   });



    $.ajax({
        url: fiveDayQuery,
        method: "GET"
      }).then(function(response) {
        var date = response.list[0].dt_txt.substring(0,10);
        var temp = response.list[0].main.temp;
        var humidity = response.list[0].main.humidity;
        var dates = ` `;
        var temps = `  `;
        var humes = ` `;
        
       
        for(var i=0;i<response.list.length; i++){
            if(response.list[i].dt_txt.substring(11,13) === '21'){
                dates+= `&& ${response.list[i].dt_txt.substring(0,10)}`;
                temps+= `&& ${response.list[i].main.temp} `;
                humes+= `&& ${response.list[i].main.humidity}`;
            }
        }
        console.log(dates);
        console.log(temps);
        console.log(humes);
      });
    
});