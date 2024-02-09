<script>
    import BackButton from "../../lib/components/BackButton.svelte";

    const filters = {
      pricePerPortion: 3,
      countryOfOrigin: "",
      allergies: [],
      kcal: 10,
      fat: 10,
      sugar: 10,
    };

    function applyFilters() {
      filteredProducts = products.filter((product) => {
        let match = true;

        if (
          filters.pricePerPortion &&
                product.pricePerPortion !== filters.pricePerPortion
        ) {
          match = false;
        }

        if (
          filters.countryOfOrigin &&
                product.countryOfOrigin !== filters.countryOfOrigin
        ) {
          match = false;
        }

        if (filters.allergies.length > 0) {
          for (const allergy of filters.allergies) {
            if (!product.allergies.includes(allergy)) {
              match = false;
              break;
            }
          }
        }

        if (filters.kcal && product.kcal !== filters.kcal) {
          match = false;
        }

        if (filters.fat && product.fat !== filters.fat) {
          match = false;
        }

        if (filters.sugar && product.sugar !== filters.sugar) {
          match = false;
        }

        return match;
      });
    }
</script>

<BackButton />
<div class="search-page-header">
    <h1>Zoekpagina</h1>
</div>

<div class="search-section">
    <div>
        <label for="pricePerPortion">Prijs per portie:</label>
        <input
            type="range"
            id="pricePerPortion"
            min="0"
            max="25"
            step="0.1"
            bind:value={filters.pricePerPortion}
            on:input={applyFilters}
        />
        <output>{filters.pricePerPortion}</output>
    </div>

    <div>
        <label for="countryOfOrigin">Herkomst van gerecht:</label>
        <div class="radio-options">
            <label for="Italian">
                <input
                    type="radio"
                    id="Italian"
                    name="countryOfOrigin"
                    value="Italian"
                    bind:group={filters.countryOfOrigin}
                    on:change={applyFilters}
                />
                <span></span> Italië
            </label>
            <label for="French">
                <input
                    type="radio"
                    id="French"
                    name="countryOfOrigin"
                    value="French"
                    bind:group={filters.countryOfOrigin}
                    on:change={applyFilters}
                />
                <span></span> Frankrijk
            </label>
            <label for="Asian">
                <input
                    type="radio"
                    id="Asian"
                    name="countryOfOrigin"
                    value="Asian"
                    bind:group={filters.countryOfOrigin}
                    on:change={applyFilters}
                />
                <span></span> Azië
            </label>
            <label for="Spanish">
                <input
                    type="radio"
                    id="Spanish"
                    name="countryOfOrigin"
                    value="Spanish"
                    bind:group={filters.countryOfOrigin}
                    on:change={applyFilters}
                />
                <span></span> Spanje
            </label>
            <label for="American">
                <input
                    type="radio"
                    id="American"
                    name="countryOfOrigin"
                    value="American"
                    bind:group={filters.countryOfOrigin}
                    on:change={applyFilters}
                />
                <span></span> Verenigde Staten
            </label>
            <label for="Dutch">
                <input
                    type="radio"
                    id="Dutch"
                    name="countryOfOrigin"
                    value="Dutch"
                    bind:group={filters.countryOfOrigin}
                    on:change={applyFilters}
                />
                <span></span> Nederland
            </label>
            <!-- Add more options here -->
        </div>
    </div>

    <div>
        <label for="allergies">Allergiën/voorkeuren:</label>
        <div>
            <label for="vegan">
                <input
                    type="checkbox"
                    id="vegan"
                    bind:group={filters.allergies}
                    value="vegan"
                    on:change={applyFilters}
                />
                Vegan
            </label>
        </div>
        <div>
            <label for="gluten-free">
                <input
                    type="checkbox"
                    id="gluten-free"
                    bind:group={filters.allergies}
                    value="gluten-free"
                    on:change={applyFilters}
                />
                Gluten-vrij
            </label>
        </div>
        <div>
            <label for="dairy-free">
                <input
                    type="checkbox"
                    id="dairy-free"
                    bind:group={filters.allergies}
                    value="dairy-free"
                    on:change={applyFilters}
                />
                Lactose-vrij
            </label>
        </div>
        <div>
            <label for="nut-free">
                <input
                    type="checkbox"
                    id="nut-free"
                    bind:group={filters.allergies}
                    value="nut-free"
                    on:change={applyFilters}
                />
                Noten-vrij
            </label>
        </div>
        <div>
            <label for="wheat-free">
                <input
                    type="checkbox"
                    id="wheat-free"
                    bind:group={filters.allergies}
                    value="wheat-free"
                    on:change={applyFilters}
                />
                Tarwe-vrij
            </label>
        </div>
        <div>
            <label for="soy-free">
                <input
                    type="checkbox"
                    id="soy-free"
                    bind:group={filters.allergies}
                    value="soy-free"
                    on:change={applyFilters}
                />
                Soja-vrij
            </label>
        </div>
        <div>
            <label for="fish-free">
                <input
                    type="checkbox"
                    id="fish-free"
                    bind:group={filters.allergies}
                    value="fish-free"
                    on:change={applyFilters}
                />
                Vis-vrij
            </label>
        </div>

        <div>
            <label for="kcal">Hoeveelheid kcal per 100g:</label>
            <input
                type="range"
                id="kcal"
                min="0"
                max="500"
                step="10"
                bind:value={filters.kcal}
                on:input={applyFilters}
            />
            <output>{filters.kcal}</output>
        </div>

        <div>
            <label for="fat">Hoeveelheid vet per 100g:</label>
            <input
                type="range"
                id="fat"
                min="0"
                max="50"
                step="1"
                bind:value={filters.fat}
                on:input={applyFilters}
            />
            <output>{filters.fat}</output>
        </div>

        <div>
            <label for="sugar">Hoeveelheid suiker per 100g:</label>
            <input
                type="range"
                id="sugar"
                min="0"
                max="50"
                step="1"
                bind:value={filters.sugar}
                on:input={applyFilters}
            />
            <output>{filters.sugar}</output>
        </div>

        <a href="recipeList" class="search-button">Zoeken</a>
    </div>
</div>

<style>
    /* Your component-specific styles here */
    @import "./style.css";
</style>
