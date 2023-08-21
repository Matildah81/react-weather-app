import React from "react";
import "./Weather.css";
export default function Weather() {
    return(
    <div className="Weather">
        <form>
            <input type="Search" placeholder="Enter a City" className="form-control"/>
            <input type="Submit" value="Search" className="btn btn-primary"/>
        </form>
        <h1>Johannesburg</h1>
        <ul>
            <li>Wednesday 05:00</li>
            <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy"/>
                6°C

            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 15%</li>
                    <li>Humidity: 73%</li>
                    <li>Wind: 13KMH</li>
                </ul>

            </div>

        </div>
        </div>);

}