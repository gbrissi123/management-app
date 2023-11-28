<script>
	import InputField from '$lib/components/InputField.svelte';
	import SubmitButton from '$lib/components/SubmitButton.svelte';
	import { Heading, Label, P, Textarea } from 'flowbite-svelte';
</script>

<form class="px-6 contact-form">
	<Heading tag="h1" class="text-2xl font-medium">Contato</Heading>
	<P>Entre em contato conosco através do formulário.</P>
	<InputField label="Nome de contato" placeholder="Insira o seu nome" />
	<InputField
		label="E-mail de contato"
		placeholder="Insira o e-mail com ao qual devemos entrar em contato convosco"
	/>
	<InputField label="Assunto" placeholder="Insira o seu assunto de interesse" />
	<Label>Descrição</Label>
	<Textarea rows="4" placeholder="Insira o conteúdo do e-mail no corpo da mensagem" />
	<div class="mt-2">
		<SubmitButton title="Enviar e-mail" />
	</div>
</form>

<style>
    .contact-form {
        min-width: 30vw;
    }
</style>
