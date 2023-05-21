    import React, { useEffect } from "react";

    export const WeatherCard = (props) => {
        let sec = props.tempInfo.sunset;
        let date = new Date(sec * 1000);
        let timestr = `${date.getHours()} : ${date.getMinutes()} PM`

        const [weatherState, setWeatheState] = React.useState("");

        // https://erikflowers.github.io/weather-icons/
        useEffect(() => {
            if (props.tempInfo.weathermood) {
                switch (props.tempInfo.weathermood) {
                    case "Clouds":
                        setWeatheState("wi-day-cloudy");
                        break;
                    case "Haze":
                        setWeatheState("wi-fog");
                        break;
                    case "Mist":
                        setWeatheState("wi-dust");
                        break;
                    case "Smoke":
                        setWeatheState("wi-smoke");
                        break;
                    case "Rain":
                        setWeatheState("wi-rain");
                        break;
                    case "Clear":
                        setWeatheState("wi-night-clear");
                        break;
                    default:
                        setWeatheState("wi-day-sunny");
                        break;
                }
            }
        }, [props.tempInfo.weathermood]);

        return (
            <>
                <article className="widget">
                    <div className="weatherIcon">
                        <i className={`wi ${weatherState}`}></i>
                    </div>
                    <div className="weatherInfo">
                        <div className="temperature">
                            <span>{props.tempInfo.temp}&deg;</span>
                        </div>
                        <div className="description">
                            <div className="weatherCondition">{props.tempInfo.weathermood}</div>
                            <div className="place">{props.tempInfo.name}, {props.tempInfo.country}<br /><p>Description: {props.tempInfo.description}</p></div>
                        </div>
                    </div>

                    <div className="date">{new Date().toLocaleString()}</div>
                    
                    <div className="extra-temp">
                        <div className="temp-info-minmax">
                            <div className="two-sided-section">
                                <p>
                                    <i className={"wi wi-sunset"}></i>
                                </p>
                                <p className="extra-info-leftside">
                                    Sunset:<br />{timestr}
                                </p>
                            </div>

                            <div className="two-sided-section">
                                <p>
                                    <i className={"wi wi-humidity"}></i>
                                </p>
                                <p className="extra-info-leftside">
                                    Humidity :<br />{props.tempInfo.humidity}
                                </p>
                            </div>
                        </div>

                        <div className="weather-extra-info">
                            <div className="two-sided-section">
                                <p>
                                    <i className={"wi wi-strong-wind"}></i>
                                </p>
                                <p className="extra-info-leftside">
                                    speed:<br />{props.tempInfo.speed}
                                </p>
                            </div>

                            <div className="two-sided-section">
                                <p>
                                    <i className={"wi wi-rain"}></i>
                                </p>
                                <p className="extra-info-leftside">
                                    Pressure:<br />{props.tempInfo.pressure}
                                </p>
                            </div>
                        </div>

                    </div>

                </article>
            </>
        )
    }
