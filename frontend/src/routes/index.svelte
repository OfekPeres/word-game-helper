<script>
	import axios from 'axios';
	import { variables } from '$lib/variables';
	import Anagramform from '../components/anagramform.svelte';
	import Anagramlist from '../components/anagramlist.svelte';
	import Footer from '../components/footer.svelte';
	import Header from '../components/header.svelte';
	import CheckIcon from '../ui/checkicon.svelte';
	import XIcon from '../ui/xicon.svelte';

	import { onMount } from 'svelte';

	// Wake up the backend server to help prevent a slow start if no one has used it in a while
	let connectedToServer = false;
	onMount(async () => {
		let data, status;

		const res = await axios.get(`${variables.basePath}/api/health`);
		data = res.data;
		status = res.status;
		connectedToServer = status === 200;
	});
</script>

<Header />
<main class="flex-auto h-full">
	<div class="flex justify-end py-1 text-gray-700 mt-1 mr-6">
		<p>
			Connected to Server:
			{#if connectedToServer}
				<CheckIcon />
			{:else}
				<XIcon />
			{/if}
		</p>
	</div>
	<Anagramform />
	<Anagramlist />
</main>
<Footer />
