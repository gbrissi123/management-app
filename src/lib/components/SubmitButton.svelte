<script>
	import { Button } from 'flowbite-svelte';

	export let title = 'Enviar';
	export let onTap = () => alert('Método indefinido');
</script>

<Button class="w-full mt-1" type="button" on:click={onTap}>{title}</Button>
