<script lang="ts">
	import { Button, Dropdown, NavBrand, NavHamburger, NavLi, NavUl, Navbar } from 'flowbite-svelte';
	import DropdownButton from './DropdownButton.svelte';
	import DropdownLink from './DropdownLink.svelte';
	import Logo from '$lib/assets/logo-ilab.png';
	import { isSidebarEnabled } from '../../store';
	import AppBarLink from './AppBarLink.svelte';
	import { onDestroy, onMount } from 'svelte';
	import HamburgerMenu from '~icons/cil/hamburger-menu';

	let isEnabled: boolean = false;
	let unsubscribe: any;
	onMount(() => {
		unsubscribe = isSidebarEnabled.subscribe((value) => {
			isEnabled = value;
		});
	});

	onDestroy(() => {
		if (unsubscribe) {
			unsubscribe();
		}
	});

	function toggleSidebar() {
		isSidebarEnabled.set(!isEnabled);
	}
</script>

<Navbar
	let:hidden
	let:toggle
	class="bg-white dark:bg-gray-900 sticky w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
>
	<NavBrand href="/app/home">
		<img src={Logo} class="h-16" alt="logo_ilab" />
	</NavBrand>

	<div class="nav-hamburger">
		<Button on:click={toggleSidebar}>
			<HamburgerMenu />
		</Button>
	</div>

	<!-- <NavHamburger on:click={toggleSidebar} /> -->
	<!-- <NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi>
			<DropdownButton title="Gerenciamento de Alunos" id="gerenciamento-alunos" />
			<Dropdown>
				<DropdownLink name="Alunos" path="alunos" />
				<DropdownLink name="Cadastrar aluno" path="cadastrar-aluno" />
			</Dropdown>
		</NavLi>
		<NavLi>
			<DropdownButton title="Gerenciamento de Projetos" id="gerenciamento-projetos" />
			<Dropdown>
				<DropdownLink name="Projetos" path="projetos" />
				<DropdownLink name="Criar projeto" path="criar-projeto" />
			</Dropdown>
		</NavLi>

		<NavLi>
			<DropdownButton title="Chamada" />
			<Dropdown>
				<DropdownLink name="Fazer chamada" path="chamada" />
				<DropdownLink name="Emitir relatório" path="emitir-relatorio" />
			</Dropdown>
		</NavLi>
		<NavLi><AppBarLink title="Agenda" path="/agenda" /></NavLi>
	</NavUl> -->
</Navbar>

<style>
	@media screen and (min-width: 768px) {
		.nav-hamburger {
			display: none;
		}
	}
</style>
