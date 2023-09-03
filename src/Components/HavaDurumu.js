import "./style.css"


const HavaDurumu = (props) => {
    const {weather} = props;

    if(!weather) {
        return <p>Yuklenıyor..</p>
    }
    return (
        <div id="weather" >
            <h1>Bulunduğun bölge olan {weather.name}'da şuan hava :</h1>
            <h2>{weather.weather.map(data => data.description).join(",").toUpperCase()}</h2>
            <h3>Sıcaklık : {weather.main.temp}°C</h3>
            <h4>{new Date(weather.dt * 1000).toLocaleDateString()}</h4>
        </div>
    );
};

export default HavaDurumu;