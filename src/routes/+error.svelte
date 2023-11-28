<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		if ($page.status == 404) {
			goto('/app/home');
		}
	});
</script>

<h1>{$page.status}: {$page.error?.message}</h1>
