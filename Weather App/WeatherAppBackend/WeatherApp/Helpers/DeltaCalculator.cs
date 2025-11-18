public static class DeltaCalculator
{
    public static Dictionary<string, double> Calculate(LocationWeather loc1, LocationWeather loc2)
    {
        var deltas = new Dictionary<string, double>();
        for (int i = 0; i < loc1.Forecasts.Count; i++)
        {
            var dayDelta = Math.Abs(loc1.Forecasts[i].TempCelsiusHigh - loc2.Forecasts[i].TempCelsiusHigh);
            deltas[$"Day {i + 1}"] = dayDelta;
        }
        deltas["AverageDelta"] = Math.Abs(loc1.AvgHighCelsius - loc2.AvgHighCelsius);
        return deltas;
    }
}