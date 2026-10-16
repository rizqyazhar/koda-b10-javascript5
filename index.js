console.log("===Built-in===");

const suhuCelcius = [100, 70, 80, 37, 40, 200, 30, 20, -10, -1000];

// Built-in

const convReamur = (c) => {
  return c.map((c) => c * 1.8 + 32);
};
const convKelvin = (c) => {
  return c.map((c) => c * 0.8);
};
const convFahrenheit = (c) => {
  return c.map((c) => c + 273.15);
};

const main = (suhu, convReamur, convKelvin, convFahrenheit) => {
  console.log(`Celcius: ${suhu}`);
  console.log(`Reamur: ${convReamur(suhu)}`);
  console.log(`Kelvin: ${convKelvin(suhu)}`);
  console.log(`Fahrenheit: ${convFahrenheit(suhu)}`);
};

main(suhuCelcius, convReamur, convKelvin, convFahrenheit);

console.log("===Normal===");

// Normal

const convReamurNormal = (c) => {
  let hasil = [];
  for (let i = 0; i < c.length; i++) {
    const suhuReamur = c[i] * 1.8 + 32;
    hasil = [...hasil, suhuReamur];
  }
  return hasil;
};

const convKelvinNormal = (c) => {
  let hasil = [];
  for (let i = 0; i < c.length; i++) {
    const suhuKelvin = c[i] * 0.8;
    hasil = [...hasil, suhuKelvin];
  }
  return hasil;
};
const convFahrenheitNormal = (c) => {
  let hasil = [];
  for (let i = 0; i < c.length; i++) {
    const suhuFahrenheit = c[i] + 273.15;
    hasil = [...hasil, suhuFahrenheit];
  }
  return hasil;
};

const mainNormal = (
  suhu,
  convReamurNormal,
  convKelvinNormal,
  convFahrenheitNormal,
) => {
  console.log(`Celcius: ${suhu}`);
  console.log(`Reamur: ${convReamurNormal(suhu)}`);
  console.log(`Kelvin: ${convKelvinNormal(suhu)}`);
  console.log(`Fahrenheit: ${convFahrenheitNormal(suhu)}`);
};

main(suhuCelcius, convReamurNormal, convKelvinNormal, convFahrenheitNormal);
