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

const suhuReamur = (s) => {
  return s * 1.8 + 32;
};
const suhuKelvin = (s) => {
  return s * 0.8;
};
const suhuFahrenheit = (s) => {
  return s + 273.15;
};

const hitung = (s, rumus) => {
  let hasil = [];
  for (let i = 0; i < s.length; i++) {
    const suhu = rumus(s[i]);
    hasil = [...hasil, suhu];
  }
  return hasil;
};

const mainNormal = (suhu) => {
  console.log(`Celcius: ${suhu}`);
  console.log(`Reamur: ${hitung(suhu, suhuReamur)}`);
  console.log(`Kelvin: ${hitung(suhu, suhuKelvin)}`);
  console.log(`Fahrenheit: ${hitung(suhu, suhuFahrenheit)}`);
};

mainNormal(suhuCelcius);
