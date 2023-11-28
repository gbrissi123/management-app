import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const response = await fetch('http://localhost:8080/activities');
    const activities = await response.json();

    return { activities };
};
