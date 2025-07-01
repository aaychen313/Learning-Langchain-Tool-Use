import { z } from "zod";
import fetch from "node-fetch";

export const weather = {
  name: "get_weather",
  description: "Get current weather for a given city",
  argsSchema: z.object({ city: z.string() }),
  async run({ city }) {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=...&longitude=...`);
    const data = await res.json();
    return `Current temp in ${city} is ${data.current_weather.temperature}°C.`;
  },
};