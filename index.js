function alienForecast() {
  const forecasts = [
    "Today is a great day to be an alien!",
    "Beware of the human invasion.",
    "The stars are aligning in your favor.",
    "You may encounter some strange phenomena today.",
    "Your alien powers will be at their peak.",
    "A cosmic event is on the horizon.",
    "You will make contact with a new species soon.",
    "Your spaceship will need repairs, but don't worry, you'll find the parts you need.",
    "The universe has a surprise in store for you today."
  ];
  return forecasts[Math.floor(Math.random() * forecasts.length)];

}

console.log(alienForecast());