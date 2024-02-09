<script>
    import { onMount } from "svelte";
    import { requestedAllRecipeData } from "../../lib/index";
    import BottomBar from "../../lib/components/BottomBar.svelte";
    import BackButton from "../../lib/components/BackButton.svelte";

    let recipes = requestedAllRecipeData;
    onMount(async () => {
        const res = await fetch("http://localhost:4005/recipes/");
        recipes = await res.json();
    });
</script>

<main>
    <BackButton />
    <div class="bg-[#F0FFEA] flex flex-col items-center justify-center min-h-screen pt-5">
        <div class="dashboard">
            <div class="w-full mb-5 flex justify-center">
                <img
                    src="/src/img/logo.png"
                    alt="Our Logo"
                    class="max-w-full h-auto mix-blend-multiply"
                />
            </div>

            <div class="header text-center mb-8">
                <h1 class="text-4xl font-bold">Opgeslagen recepten</h1>
            </div>
            <div class="flex flex-col items-center w-full mt-4 mx-auto">
                {#each recipes as recipe}
                    <div class="w-full md:w-3/4 lg:w-1/2 xl:w-1/3 mb-4">
                        <a
                            href={`http://localhost:5173/recipe/${recipe.id}`}
                            class="block rounded overflow-hidden hover:bg-gray-100 shadow-md"
                        >
                            <div class="flex flex-col items-center p-4">
                                <p class="text-xl font-semibold">
                                    {recipe.name}
                                </p>
                                <!-- Optionally, add more details here -->
                            </div>
                        </a>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <BottomBar />
</main>

<style>
    /* You can keep any additional styles or global styles here if needed */
</style>
