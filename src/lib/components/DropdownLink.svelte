<script>
	import { goto } from '$app/navigation';
	import { DropdownItem } from 'flowbite-svelte';

	export let name = 'Link';
	export let path = '/app/home';

	let navigateToLink = () => goto(path);
</script>

<DropdownItem>
	<button
		on:click={navigateToLink}
		class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
	>
		{name}
	</button>
</DropdownItem>