document.querySelector('#temperature button').addEventListener('click', () => {
  const celsius = parseFloat(document.getElementById('celsius').value);
  if (!isNaN(celsius)) {
    if (celsius < 0 || isNaN(celsius)) {
    alert("Please enter a valid non-negative number.");
    celsius.value = '';
  }else{
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
  }
  }
});

document.querySelector('#weight button').addEventListener('click', () => {
  const kilograms = parseFloat(document.getElementById('kilograms').value);
  if (!isNaN(kilograms)) {
    if (kilograms < 0 || isNaN(kilograms)) {
    alert("Please enter a valid non-negative number.");
    kilograms.value = '';
  }
    else{const pounds = kilograms * 2.205;
    document.getElementById('pounds').value = pounds.toFixed(2);
  }
  }
});

document.querySelector('#distance button').addEventListener('click', () => {
  const kilometers = parseFloat(document.getElementById('kilometers').value);
  if (!isNaN(kilometers)) {
    if (kilometers < 0 || isNaN(kilometers)) {
    alert("Please enter a valid non-negative number.");
    kilometers.value = '';
  }
    else{
    const miles = kilometers / 1.609;
    document.getElementById('miles').value = miles.toFixed(2);
  }
  }
});
