<script lang="ts">
	import { Button, Tooltip, type ButtonColorType } from 'flowbite-svelte';
	export let onTap = () => alert('Método não implementado');
	export let color: ButtonColorType = 'yellow';
	export let tooltip: string = 'button';
</script>

<div>
	<Button pill={true} class="!p-2" on:click={onTap} {color}>
		<slot />
	</Button>
	<Tooltip>{tooltip}</Tooltip>
</div>
