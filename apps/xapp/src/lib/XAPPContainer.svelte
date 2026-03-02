<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Xapp,
		XappContainer,
		XappControls,
		ResetControlButton,
		CopyControlButton		
	} from '@xapplaxy/xy-ui';
	import { getMiniAppData } from './utils';
	import XAPP from './XAPP.svelte';

	let xappRef=$state<XAPP>();

	// State variables using Svelte 5 runes
	let { appId } = $props();

		const actionControls = [
		{
			id: 'copy',
			label: 'Copy',
			actionStatus: 'Copied',
			action: () => {
				return xappRef?.copy();
			}
		},
		{
			id: 'reset',
			label: 'Reset',
			action: () => {
				window.location.href=window.location.href.split('?')[0];
			}
		}
	];

	onMount(async () => {
	});
</script>

<Xapp>
	<XappContainer>
		{#snippet controls()}
			<XappControls>
				{#snippet endControls()}
				<CopyControlButton control={actionControls[0]}></CopyControlButton>
				<ResetControlButton control={actionControls[1]}></ResetControlButton>
				{/snippet}
			</XappControls>
		{/snippet}		
		<div class="flex {appId}">	
			<XAPP bind:this={xappRef}></XAPP>
		</div>
	</XappContainer>
</Xapp>
