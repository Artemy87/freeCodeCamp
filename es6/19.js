// Only change code below this line
class Thermostat {
  constructor(t) {
    this._t = 5/9 * (t - 32);
  }

  get temperature(){
    return this._t;
  }

  set temperature(temperature){
    this._t = temperature;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius