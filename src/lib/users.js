let data = "niks";
let requestedData = "";
let requestedAllData = "";
let requestedRecipeData = "";
let requestedAllRecipeData = "";
async function fetchData(id) {
  try {
    const response = await fetch("http://localhost:4008/users");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    data = await response.json();

    // Verwerk de ontvangen data
    if(id !=='all'){
        getUserData(id-1);
    } else {
         getAllUserData()
    }
  } catch (error) {
    // Handel fouten af
    console.error("Fetch error:", error);
  }
}
// Roep de functie aan
fetchData(2);
function getUserData(id) {
  requestedData = data[id];
  // console.log(requestedData)
}
fetchData('all');
function getAllUserData(){
  requestedAllData = data ;
    console.log(requestedAllData)
}

// Functie om data naar de backend te posten
async function postData(table, newData) {
  try {
    const response = await fetch(`http://localhost:4008/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Verwerk het antwoord van de server indien nodig
    const result = await response.json();
    console.log('Data gepost:', result);
  } catch (error) {
    // Handel fouten af
    console.error('Fetch error:', error);
  }
}
// Voorbeeld van het posten van nieuwe gebruikersgegevens
// const newUser = {
//   name: 'John Doe',
//   email: 'john.doe@example.com',
//   password: 'John'
// };
// Roep de functie aan om data te posten
// postData('users', newUser);
console.log('after postData')
export{ requestedData };
export{ requestedAllData };
