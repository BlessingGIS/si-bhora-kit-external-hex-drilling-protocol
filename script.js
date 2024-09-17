function processForm() {
  // Get values from the input fields
  const value1 = parseFloat(document.getElementById('value1').value);
  const value2 = parseFloat(document.getElementById('value2').value);
  const tableNameDiv = document.getElementById('tableName'); // Div for displaying table name
  
  // Clear any previous table names and hide all tables initially
  tableNameDiv.innerHTML = "";
  
  // Define specific min and max ranges for both inputs
  const value1Min = 3;
  const value1Max = 5;
  const value2Min = 8.5;
  const value2Max = 15;

  // Validation: Ensure both inputs are numbers
  if (isNaN(value1) || isNaN(value2)) {
    alert("Please enter valid input.");
    return;
  }
  
  // Validation: Ensure Value 1 is within the range 3 to 5
  if (value1 < value1Min || value1 > value1Max) {
    alert(`Implant Diameter must be between ${value1Min} and ${value1Max}.`);
    return;
  }
  
  // Validation: Ensure Value 2 is within the range 8.5 to 15
  if (value2 < value2Min || value2 > value2Max) {
    alert(`Implant Length must be between ${value2Min} and ${value2Max}.`);
    return;
  }
  // Calculate the product of value1 and value2
  const result = value1 * value2;
  // Hide all tables initially
  document.querySelectorAll('table').forEach(function(table) {
    table.style.display = 'none';
  });
  // Add conditions to show specific tables based on the result
  if (result === 25.5) {
    document.getElementById('IP-8.5').style.display = 'table';
    tableNameDiv.innerHTML = "Regular Bone Protocol For: IP-8.5";
  } else if (result === 30) {
    document.getElementById('IP-10').style.display = 'table';
    tableNameDiv.innerHTML = "Regular Bone Protocol For: IP-10";
  } else if (result === 34.5) {
    document.getElementById('IP-11.5').style.display = 'table';
    tableNameDiv.innerHTML = "Regular Bone Protocol For: IP-11.5";
  } else if (result === 39) {
    document.getElementById('IP-13').style.display = 'table';
    tableNameDiv.innerHTML = "Regular Bone Protocol For: IP-13";
  } else if (result === 45) {
    document.getElementById('IP-15').style.display = 'table';
    tableNameDiv.innerHTML = "Regular Bone Protocol For: IP-15";
  } else if (result === 27.625) {
    document.getElementById('IBN-8.5').style.display = 'table';
    tableNameDiv.innerHTML = "Regular Bone Protocol For: IBN-8.5";
  } else if (result === 32.5) {
    document.getElementById('IBN-10').style.display = 'table';
    tableNameDiv.innerHTML = "Regular Bone Protocol For: IBN-10";
  } else if (result === 37.375) {
    document.getElementById('IBN-11.5').style.display = 'table';
    tableNameDiv.innerHTML = "Regular Bone Protocol For: IBN-11.5";
  } else if (result === 42.25) {
    document.getElementById('IBN-13').style.display = 'table';
    tableNameDiv.innerHTML = "Regular Bone Protocol For: IBN-13";
  } else if (result === 48.75) {
    document.getElementById('IBN-15').style.display = 'table';
    tableNameDiv.innerHTML = "Regular Bone Protocol For: IBN-15";
  } else if (result === 34) {
    document.getElementById('IBT-8.5').style.display = 'table';
    tableNameDiv.innerHTML = "Regular Bone Protocol For: IBT-8.5";
  } else if (result === 40) {
    document.getElementById('IBT-10').style.display = 'table';
    tableNameDiv.innerHTML = "Regular Bone Protocol For: IBT-10";
  } else if (result === 46) {
    document.getElementById('IBT-11.5').style.display = 'table';
    tableNameDiv.innerHTML = "Regular Bone Protocol For: IBT-11.5";
  } else if (result === 52) {
    document.getElementById('IBT-13').style.display = 'table';
    tableNameDiv.innerHTML = "Regular Bone Protocol For: IBT-13";
  } else if (result === 60) {
    document.getElementById('IBT-15').style.display = 'table';
    tableNameDiv.innerHTML = "Regular Bone Protocol For: IBT-15";
  } else if (result === 42.5) {
    document.getElementById('BAT-8.5').style.display = 'table';
    tableNameDiv.innerHTML = "Regular Bone Protocol For: BAT-8.5";
  } else if (result === 50) {
    document.getElementById('BAT-10').style.display = 'table';
    tableNameDiv.innerHTML = "Regular Bone Protocol For: BAT-10";
  } else if (result === 57.5) {
    document.getElementById('BAT-11.5').style.display = 'table';
    tableNameDiv.innerHTML = "Regular Bone Protocol For: BAT-11.5";
  } else if (result === 65) {
    document.getElementById('BAT-13').style.display = 'table';
    tableNameDiv.innerHTML = "Regular Bone Protocol For: BAT-13";
  } else if (result === 75) {
    document.getElementById('BAT-15').style.display = 'table';
    tableNameDiv.innerHTML = "Regular Bone Protocol For: BAT-15";
  }
}

