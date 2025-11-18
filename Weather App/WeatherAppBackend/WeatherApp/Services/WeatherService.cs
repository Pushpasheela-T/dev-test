public class WeatherService : IWeatherService
{
    private readonly HttpClient _httpClient;
    private readonly string _apiKey = "API_KEY";

    public WeatherService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }
    public async Task<List<LocationWeather>> GetWeatherDataAsync(string[] locations)
    {
        var result = new List<LocationWeather>();
        foreach (var location in locations)
        {
            var url = $"https://api.tomorrow.io/v4/weather/forecast?location={location}&apikey={_apiKey}";
            var response = await _httpClient.GetStringAsync(url);
            var jsonDoc = JsonDocument.Parse(response);
            var dailyData = jsonDoc.RootElement.GetProperty("timelines").GetProperty("daily");
            var locationWeather = new LocationWeather { Location = location };

            foreach (var day in dailyData.EnumerateArray())
            {
                var values = day.GetProperty("values");
                locationWeather.Forecasts.Add(new DailyForecast
                {
                    Date = DateTime.Parse(day.GetProperty("time").GetString()),
                    TempCelsiusHigh = values.GetProperty("temperatureMax").GetDouble(),
                    TempCelsiusLow = values.GetProperty("temperatureMin").GetDouble(),
                });

            }
            result.Add(locationWeather);
        }
        return result;
    }
}