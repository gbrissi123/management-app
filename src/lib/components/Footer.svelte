<script>
	import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte';
</script>

<Footer>
	<FooterCopyright href="/" by="ILab" year={2023} copyrightMessage="Todos os direitos reservados"/>
	<FooterLinkGroup
		ulClass="flex flex-wrap justify-center pt-2 items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
	>
		<FooterLink href="/app/sobre-nos">Sobre nós</FooterLink>
		<FooterLink href="/app/contato">Contato</FooterLink>
	</FooterLinkGroup>
</Footer>
