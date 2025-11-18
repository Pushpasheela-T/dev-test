public class LocationWeather
{
    public required string Location { get; set; }
    public List<DailyForecast> Forecasts { get; set; } = new();
    public double AvgHighCelsius => Forecasts.Average(f => f.TempCelsiusHigh);
    public double AvgLowCelsius => Forecasts.Average(f => f.TempCelsiusLow);
}