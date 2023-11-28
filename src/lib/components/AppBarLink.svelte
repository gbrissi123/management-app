<script>
	import { goto } from '$app/navigation';

	export let title = 'Link';
	export let path = 'home';

	let navigateToPath = () => goto(`/app/${path}`);
</script>

<li>
	<button
		on:click={navigateToPath}
		class="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
		>{title}</button
	>
</li>
