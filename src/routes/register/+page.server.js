export const actions = {
    async create({ request }) {
        const data = await request.formData();
        const username = data.get('username');
        const password1 = data.get('password');
        const password2 = data.get('confirmPassword');;
        const email = data.get('email');
        // form validation
        if (password1 != password2) {
            return fail(422, {
                error: 'Passwords do not match'
            });
        }
    }
};
