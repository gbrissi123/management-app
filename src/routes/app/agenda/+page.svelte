<script lang="ts">
	import type { CalendarOptions } from 'svelte-fullcalendar';
	import FullCalendar from 'svelte-fullcalendar';
	import multiMonthPlugin from '@fullcalendar/multimonth';
	import type { PageData } from './$types';
	import { Button, Modal } from 'flowbite-svelte';
	import tippy, { type Instance } from 'tippy.js';

	export let data: PageData;
	let events = data.activities.map((e: any) => {
		return {
			title: `${e.name} - ${e.project.name}`,
			start: e.schedule.start,
			end: e.schedule.end
		};
	});

	let options: CalendarOptions = {
		initialView: 'multiMonthYear',
		eventDidMount: function (eventInfo) {
			const tooltipContent = eventInfo.event.title;

			tippy(eventInfo.el, {
				content: tooltipContent,
				trigger: 'mouseenter',
				onShow(instance) {
					instance.popper.style.backgroundColor = 'orange';
					instance.popper.style.padding = "0.5rem"
					instance.popper.style.borderRadius = "12px"
				}
			});
		},
		events: events,
		locale: 'pt-br',
		plugins: [multiMonthPlugin]
	};
</script>

<div class="w-full">
	<FullCalendar {options} />
</div>
