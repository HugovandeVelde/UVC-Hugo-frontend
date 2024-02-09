let data = "niks";
let requestedData = "";
let requestedAllData = "";
let requestedRecipeData = "";
let requestedAllRecipeData = "";

async function fetchData(table, id) {
  try {
    const response = await fetch("http://localhost:4008/recipes");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    data = await response.json();

    // Verwerk de ontvangen data
    if (id !== "all") {
      getRecipeData(id - 1);
      // getRecipeData(id-1);
    } else {
      getAllRecipeData();
      //  getAllRecipeData();
    }
  } catch (error) {
    // Handel fouten af
    console.error("Fetch error:", error);
  }
}
fetchData("recipes", 2);
function getRecipeData(id) {
  requestedRecipeData = data[id];
  // console.log(requestedRecipeData)
}
fetchData("recipes", "all");
function getAllRecipeData() {
  requestedAllRecipeData = data;
  console.log(requestedAllRecipeData);
}
export { fetchData, requestedRecipeData, requestedAllRecipeData };

