function processForm() {
  // Get values from the input fields
  const value1 = parseFloat(document.getElementById('value1').value);
  const value2 = parseFloat(document.getElementById('value2').value);

  // Calculate the product of value1 and value2
  const result = value1 * value2;

  // Hide all tables initially
  document.getElementById('IP-8.5').style.display = 'none';
  document.getElementById('IP-10').style.display = 'none';
  document.getElementById('IP-11.5').style.display = 'none';
  document.getElementById('IP-13').style.display = 'none';
  document.getElementById('IP-15').style.display = 'none';
  document.getElementById('IBN-8.5').style.display = 'none';
  document.getElementById('IBN-10').style.display = 'none';
  document.getElementById('IBN-11.5').style.display = 'none';
  document.getElementById('IBN-13').style.display = 'none';
  document.getElementById('IBN-15').style.display = 'none';
  document.getElementById('IBT-8.5').style.display = 'none';
  document.getElementById('IBT-10').style.display = 'none';
  document.getElementById('IBT-11.5').style.display = 'none';
  document.getElementById('IBT-13').style.display = 'none';
  document.getElementById('IBT-15').style.display = 'none';
  document.getElementById('BAT-8.5').style.display = 'none';
  document.getElementById('BAT-10').style.display = 'none';
  document.getElementById('BAT-11.5').style.display = 'none';
  document.getElementById('BAT-13').style.display = 'none';
  document.getElementById('BAT-15').style.display = 'none';

  // Add conditions to show specific tables based on the result
  if (result === 25.5) {
    document.getElementById('IP-8.5').style.display = 'table';
  } else if (result === 30) {
    document.getElementById('IP-10').style.display = 'table';
  } else if (result === 34.5) {
    document.getElementById('IP-11.5').style.display = 'table';
  } else if (result === 39) {
    document.getElementById('IP-13').style.display = 'table';
  } else if (result === 45) {
    document.getElementById('IP-15').style.display = 'table';
  } else if (result === 27.625) {
    document.getElementById('IBN-8.5').style.display = 'table';
  } else if (result === 32.5) {
    document.getElementById('IBN-10').style.display = 'table';
  } else if (result === 37.375) {
    document.getElementById('IBN-11.5').style.display = 'table';
  } else if (result === 42.25) {
    document.getElementById('IBN-13').style.display = 'table';
  } else if (result === 48.75) {
    document.getElementById('IBN-15').style.display = 'table';
  } else if (result === 34) {
    document.getElementById('IBT-8.5').style.display = 'table';
  } else if (result === 40) {
    document.getElementById('IBT-10').style.display = 'table';
  } else if (result === 46) {
    document.getElementById('IBT-11.5').style.display = 'table';
  } else if (result === 52) {
    document.getElementById('IBT-13').style.display = 'table';
  } else if (result === 60) {
    document.getElementById('IBT-15').style.display = 'table';
  } else if (result === 42.5) {
    document.getElementById('BAT-8.5').style.display = 'table';
  } else if (result === 50) {
    document.getElementById('BAT-10').style.display = 'table';
  } else if (result === 57.5) {
    document.getElementById('BAT-11.5').style.display = 'table';
  } else if (result === 65) {
    document.getElementById('BAT-13').style.display = 'table';
  } else if (result === 75) {
    document.getElementById('BAT-15').style.display = 'table';
  }
}
