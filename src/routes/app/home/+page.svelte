<script>
	import AppBar from '$lib/components/AppBar.svelte';
	import { Heading, Li, List, P } from 'flowbite-svelte';
</script>

<div>
	<Heading tag="h1" class="text-2xl font-medium">Plataforma de Gestão do ILab</Heading>
	<P>
		Plataforma de suporte à gestão do programa "ILab" criado por alunos da 5o fase de Análise e
		Desenvolvimento de Sistemas
	</P>
	<br />
	<Heading tag="h2" class="text-xl font-medium">Recursos disponíveis na última versão</Heading>
	<List tag="ul">
		<Li>Cadastro de estudantes</Li>
		<Li>Edição de estudantes</Li>
		<Li>Remoção de estudantes</Li>
		<Li>Cadastro de projetos</Li>
		<Li>Edição de projetos</Li>
		<Li>Remoção de projetos</Li>
		<Li>Relacionamento entre estudantes e projetos</Li>
		<Li>Emissão de relatórios de presença</Li>
		<Li>Cadastro de atividades</Li>
		<Li>Edição de atividades</Li>
		<Li>Remoção de atividades</Li>
		<Li>Lista de presença para atividade</Li>
		<Li>Agenda de atividades</Li>
	</List>
</div>
