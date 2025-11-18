public interface IWeatherService
{
    Task<List<LocationWeather>> GetWeatherDataAsync(string[] locations);
}