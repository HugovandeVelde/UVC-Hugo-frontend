let data = "niks";
let requestedAllIngredients = '';

async function fetchData() {
  try {
    const response = await fetch("http://localhost:4008/ingredients");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    data = await response.json();

    // Verwerk de ontvangen data
    getAllIngredients()
     
  } catch (error) {
    // Handel fouten af
    console.error("Fetch error:", error);
  }
}

fetchData();
function getAllIngredients(){
  requestedAllIngredients = data ;
}
export{ requestedAllIngredients };
