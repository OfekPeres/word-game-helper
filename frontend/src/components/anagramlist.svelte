<script>
	import { anagramstore } from '../stores/anagramstore.js';
	import { loadingstore } from '../stores/loadingstore.js';
	import AnagramBubble from './anagrambubble.svelte';
	import { fly, fade } from 'svelte/transition';
</script>

{#if $loadingstore.isLoading}
	<span
		transition:fade={{ duration: 300 }}
		class="flex mt-6 justify-center text-lg md:text-3xl text-gray-600 text-center">
		Results are loading...
	</span>
{/if}

{#if !$loadingstore.isLoading}
	<div class="mx-2 my-4 py-2">
		<h1 class="text-center text-3xl md:text-4xl lg:text-6xl font-bold font-rockwell-bold text-blue-400 uppercase">
			Discovered Anagrams
		</h1>
		<div class="mt-6 flex justify-center flex-wrap">
			{#each $anagramstore as anagram, i (i)}
				<AnagramBubble {anagram} />
			{/each}
		</div>
	</div>
{/if}
