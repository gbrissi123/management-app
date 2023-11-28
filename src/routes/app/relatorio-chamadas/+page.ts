import type { PageLoad } from './$types';
import { selectedProjectToGetSummary } from '../../../store';
import { goto } from '$app/navigation';
import { browser } from '$app/environment';

export const load: PageLoad = async () => {
	let project;

	selectedProjectToGetSummary.subscribe((value) => {
		project = value;
	});

	if (project == null && browser) {
		goto('/app/projetos');
	}


	const response = await fetch(
		'http://localhost:8080/projects/activities/attendance?' +
			new URLSearchParams({
				projectId: project!.id,
			})
	);

	const studentsAttendances = await response.json();

	return { studentsAttendances };
};
