<script lang='ts'>
	import { Input, Label, type InputType } from 'flowbite-svelte';

	export let label = 'Campo de texto';
	export let type: InputType = 'text';
	export let id = 'field';
	export let value: any = '';
	export let placeholder = 'Insira um texto aqui';
</script>

<div class="my-4">
	<Label for={type}>{label}</Label>
	<Input id={id} type={type} name={id} {placeholder} bind:value  required />
</div>
