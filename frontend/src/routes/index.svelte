<script>
	import Anagramform from '../components/anagramform.svelte';
	import Anagramlist from '../components/anagramlist.svelte';
	import Footer from '../components/footer.svelte';
	import Header from '../components/header.svelte';
</script>

<Header />
<main class="flex-auto h-full">
	<Anagramform />
	<Anagramlist />
</main>
<Footer />
