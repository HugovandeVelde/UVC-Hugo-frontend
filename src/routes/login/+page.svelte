<script>
    import { requestedAllData } from '../../lib/users';
    let knowsEmail = false
    let form = { error: null, email: "", password: "" };
    let isSubmitted = false;
    console.log(requestedAllData + 'hi')
    function handleSubmit(event) {
        event.preventDefault();
        isSubmitted = true;
        console.log('test')
    }
</script>


<div class="register flex flex-col justify-center items-center h-screen">
    <h1 class="text-3xl font-bold">Login</h1>
    <form on:submit={handleSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {#if form?.error}
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong class="font-bold">Error!</strong>
                <span class="block sm:inline">{form.error}</span>
            </div>
        {/if}
        <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input bind:value={form.email} class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" type="email" id="email" placeholder="Email" required/>
        </div>
        <div class="mb-4">
            <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input bind:value={form.password} class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" type="password" id="password" placeholder="**********" required/>
        </div>
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Login</button>
    </form>
    {#if isSubmitted}
        {#each requestedAllData as user}
        {console.log(user.email + form.email + user.password + form.password )}
            <!-- {console.log(user.email + user.password + form.email + form.password)} -->
            {#if user.email === form.email && user.password === form.password && isSubmitted}
                    {window.location.replace("http://localhost:5173/dashboard")}
            {/if}

        {/each}     

    {/if}
    
</div>  