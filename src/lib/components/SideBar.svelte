<script lang="ts">
	import { page } from '$app/stores';
	import Logout from '~icons/material-symbols/logout';
	import Schedule from '~icons/material-symbols/schedule';
	import {
		Sidebar,
		SidebarDropdownItem,
		SidebarDropdownWrapper,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper
	} from 'flowbite-svelte';
	import { AdjustmentsHorizontalSolid, UsersSolid } from 'flowbite-svelte-icons';
	import { isSidebarEnabled } from '../../store';
	import { onDestroy, onMount } from 'svelte';
	$: activeUrl = $page.url.pathname;

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

</script>

<div class={isEnabled ? 'visible' : 'navbar-hidden'}>
	<Sidebar {activeUrl}>
		<SidebarWrapper>
			<SidebarGroup>
				<SidebarDropdownWrapper label="Gerenciamento de alunos">
					<svelte:fragment slot="icon">
						<UsersSolid />
					</svelte:fragment>
					<SidebarDropdownItem label="Alunos" href="/app/alunos" />
					<SidebarDropdownItem label="Cadastrar Alunos" href="/app/cadastrar-aluno" />
				</SidebarDropdownWrapper>
				<SidebarDropdownWrapper label="Gerenciamento de projetos">
					<svelte:fragment slot="icon">
						<AdjustmentsHorizontalSolid />
					</svelte:fragment>
					<SidebarDropdownItem label="Projetos" href="/app/projetos" />
					<SidebarDropdownItem label="Cadastrar Projetos" href="/app/criar-projeto" />
				</SidebarDropdownWrapper>
				<SidebarItem label="Agenda" href="/app/agenda">
					<svelte:fragment slot="icon">
						<Schedule />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Logout" href="/">
					<svelte:fragment slot="icon">
						<Logout />
					</svelte:fragment>
				</SidebarItem>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</div>

<style>
	/* @media screen and (min-width: 768px) {
		.navbar-hidden {
			display: none;
		}
	} */

	@media screen and (max-width: 768px) {
		.navbar-hidden {
			display: none;
		}
	}

	@media screen and (min-width: 768px) {
		.navbar-hidden {
			display: block;
		}
	}

	.visible {
		display: block;
	}
</style>
