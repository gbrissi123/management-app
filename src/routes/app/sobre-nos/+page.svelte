<script>
	import { Heading, P } from 'flowbite-svelte';
    import Logo from "$lib/assets/logo-ilab.png";
</script>

<div class="about-us-section">
	<div class="mb-8">
		<Heading tag="h1" class="text-2xl font-medium">Sobre nós</Heading>
		<br />
		<P>
			Esse projeto fora desenvolvido por alunos da 5o fase de Análise e Desenvolvimento de Sistemas
			na Faculdade Municipal de Palhoça.
		</P>
		<br />
		<P>
			A plataforma tem como objetivo atender a determinados casos de uso exigidos pela instituição,
			com a finalidade primária de ajudar a gerenciar o programa ILab, um programa responsável por
			auxiliar estudantes interessados em criar a sua startup a dar o seu primeiro passo.
		</P>
	</div>
	<img class="h-44" src={Logo} alt="ilab-logo"/>
</div>

<style>
	.about-us-section {
		display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
		max-width: 800px;
	}
</style>
