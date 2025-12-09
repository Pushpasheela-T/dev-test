import React from 'react';

function WeatherDisplay({ data }) {
    return (
        <div>
            {data.map((loc, ind) => (
                <div key={ind}>
                    <h3>{loc.location}</h3>
                    <p>Avg High: {loc.avgHighCelsius.toFixed(2)}°C</p>
                    <p>Avg Low: {loc.avgLowCelsius.toFixed(2)}°C</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>High (°C)</th>
                                <th>Low (°C)</th>
                                <th>High (°F)</th>
                                <th>Low (°F)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loc.forecasts.map((f, i) => (
                                <tr key={i}>
                                    <td>{f.date}</td>
                                    <td>{f.tempCelsiusHigh}</td>
                                    <td>{f.tempCelsiuslow}</td>
                                    <td>{f.tempFahrenheitHigh}</td>
                                    <td>{f.tempFahrenheitlow}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    )
}

export default WeatherDisplay;