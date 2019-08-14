import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-weatherapp',
  templateUrl: './weatherapp.component.html',
  styleUrls: ['./weatherapp.component.css'],
  providers: [WeatherService]
})
export class WeatherappComponent implements OnInit {

  //public cities = ["Delhi", "Bangalore", "Hyderabad","Chennai"];

  public cities = [
    {
      id:0, 
      name:"",
      isEmpty:true,
      errorMessage:"",
      weatherForecastData:""
    },
    {
      id:1, 
      name:"",
      isEmpty:true,
      errorMessage:"",
      weatherForecastData:""
    },
    {
      id:2, 
      name:"",
      isEmpty:true,
      errorMessage:"",
      weatherForecastData:""
    },
    {
      id:3, 
      name:"",
      isEmpty:true,
      errorMessage:"",
      weatherForecastData:""
    },
    {
      id:4, 
      name:"",
      isEmpty:true,
      errorMessage:"",
      weatherForecastData:""
    },
    {
      id:5, 
      name:"",
      isEmpty:true,
      errorMessage:"",
      weatherForecastData:""
    },
    {
      id:6, 
      name:"",
      isEmpty:true,
      errorMessage:"",
      weatherForecastData:""
    },{
      id:7, 
      name:"",
      isEmpty:true,
      errorMessage:"",
      weatherForecastData:""
    },
    {
      id:8, 
      name:"",
      isEmpty:true,
      errorMessage:"",
      weatherForecastData:""
    }
  ];

  // weatherForecastData: any;
  // errorMessage: string;

 

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
  //  this.isEmpty=true;
  }

  onFirstClick(city){
    //console.log(city);
    if(this.cities[city.id].isEmpty==true){
      this.cities[city.id].isEmpty = false;
    }
  }

  indexOfMin(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var min = arr[0];
    var minIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            minIndex = i;
            min = arr[i];
        }
    }

    return minIndex;
}
  
  onClickSearch(city) {

    console.log(city);
    city.errorMessage="";


    this._weatherService.getWeatherForecast(city.name)
        .subscribe(data => { city.weatherForecastData = data; console.log(data);
          var diff_array = [];
        //var curr_dt =  new Date().toLocaleString();
        var curr_dt = (new Date()).getTime();
        //console.log(curr_dt);
        //console.log(city.weatherForecastData.list[0].dt);
        var diff_min = 0;
        city.weatherForecastData.current_time="";

        for(var u=0;u<city.weatherForecastData.list.length;u++){
          
          var t = curr_dt - (city.weatherForecastData.list[u].dt * 1000);
          //console.log(t);
          if(t<0){
            t = t * (-1);
          }
          diff_array.push(t);

         
          //console.log(iconurl);

          

        }
        let i = diff_array.indexOf(Math.min(...diff_array));
        var iconurl = "http://openweathermap.org/img/w/" + city.weatherForecastData.list[i].weather[0].icon + ".png";
        var id = 'Id'+city.id;
        document.getElementById(id).style.backgroundImage = "url("+iconurl+")";
        document.getElementById(id).style.backgroundSize = "cover";
        //console.log(i);
        city.weatherForecastData.current_time = new Date().toLocaleString(); 
        }, 
        
        error => {  
          var id = 'Id'+city.id;
          document.getElementById(id).style.backgroundImage = "";
          city.weatherForecastData = undefined;
          city.errorMessage = error.error.message;
          console.log(error);
        });


  }
}
