import { writable } from 'svelte/store';

const projectFromActivityForm = writable(null);
const projectSelectedToActivitiesView = writable(null);
const selectedProjectToGetSummary = writable(null);
const activitySelectedToGetAttendance = writable(null);
const isUserAuthenticated = writable(false);
const isSidebarEnabled = writable(false);

export {
	projectFromActivityForm,
	projectSelectedToActivitiesView,
	selectedProjectToGetSummary,
	activitySelectedToGetAttendance,
	isUserAuthenticated,
	isSidebarEnabled,
};
