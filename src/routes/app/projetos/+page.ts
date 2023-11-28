import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const response = await fetch('http://localhost:8080/projects');
    const projects = await response.json();

    return { projects };
};
