import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const response = await fetch('http://localhost:8080/users');
    const users = await response.json();

    return { users };
};
