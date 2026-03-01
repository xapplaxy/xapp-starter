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
	import Calculator from './Calculator.svelte';

	let calculatorRef=$state<Calculator>();

	// State variables using Svelte 5 runes
	let { appId } = $props();

		const actionControls = [
		{
			id: 'copy',
			label: 'Copy',
			actionStatus: 'Copied',
			action: () => {
				return calculatorRef?.copy();
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
			<Calculator bind:this={calculatorRef}></Calculator>
		</div>
	</XappContainer>
</Xapp>
