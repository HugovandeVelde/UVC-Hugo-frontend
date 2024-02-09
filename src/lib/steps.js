let data = "niks";
let requestedAllSteps = '';

async function fetchData() {
  try {
    const response = await fetch("http://localhost:4008/steps");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    data = await response.json();

    // Verwerk de ontvangen data
    getAllSteps()
  
  } catch (error) {
    // Handel fouten af
    console.error("Fetch error:", error);
  }
}

fetchData();
function getAllSteps(){
  requestedAllSteps = data ;
}
console.log(requestedAllSteps)
export{ requestedAllSteps };
