import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import {usePosition} from 'use-position';
import HavaDurumu from "./Components/HavaDurumu";

const App = () => {
    const [weather, setWeather] = useState();
    const {  latitude, longitude } = usePosition()

    const getWeatherData = async (lat, lon) => {
        const key = process.env.REACT_APP_WEATHER_API_KEY;
        const lang = navigator.language.split("-")[0];

        try {
            const {data} = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=${lang}`
                );
            setWeather(data);
        }
        catch {
            alert("HATA!")
        }       
    };

    useEffect(() => {
        latitude && longitude && getWeatherData(latitude, longitude);
    }, [latitude, longitude]);

    return (
        <div>
            <HavaDurumu weather={weather}/>
        </div>
    )
};

export default App;