<script>
	import { variables } from '$lib/variables';
	import { anagramstore } from '../stores/anagramstore.js';
	import { loadingstore } from '../stores/loadingstore.js';
	import SearchIcon from '../ui/searchicon.svelte';
	import axios from 'axios';

	let dictionaryOptions = [
		{ id: 1, option: 'Mieliestronk corncob lowercase', value: 'corn' },
		{ id: 2, option: 'Wiki 100K', value: 'wiki' }
	];
	let formData = { queryWord: '', selectedDictionary: dictionaryOptions[0] };

	let isLoading = false;
	// A method to hit the anagram endpoint and update the anagram store with
	// the results defaults to an empty list of the api call fails
	async function handleSubmit() {
		loadingstore.set({ isLoading: true });
		const res = await axios.get(
			`${
				variables.basePath
			}/api/get-anagrams?query=${formData.queryWord.toLowerCase()}&dictionary=${
				formData.selectedDictionary.value
			}`
		);
		const anagrams = res.status === 200 ? res.data : [];
		anagramstore.set(anagrams);
		loadingstore.set({ isLoading: false });
	}
</script>

<div class="mt-8 mx-2 sm:mx-auto sm:w-full sm:max-w-md md:max-w-lg">
	<div class="bg-white py-8 px-6 mx-4 shadow sm:px-10 text-sm md:text-lg lg:text-xl">
		<form class="mb-0 space-y-6" on:submit|preventDefault={handleSubmit}>
			<div>
				<label for="query" class="block font-medium text-gray-700 font-rockwell">
					Enter a word to find its anagrams
				</label>
				<div class="mt-1 relative group">
					<input id="query" name="query" type="text" required bind:value={formData.queryWord} />
					<SearchIcon
						className="absolute right-0 top-[3px] w-7 h-7 md:top-1 md:w-10 md:h-10 text-gray-400 group-focus-within:text-blue-400" />
				</div>
			</div>

			<div>
				<label for="dictionary" class="block font-medium text-gray-700 font-rockwell"
					>Pick a dictionary to search for anagrams in:
				</label>
				<div class="mt-1">
					<select
						name="dictionary"
						id="dictionary"
						class="bg-white"
						bind:value={formData.selectedDictionary}>
						{#each dictionaryOptions as dictionary}
							<option value={dictionary}>
								{dictionary.option}
							</option>
						{/each}
					</select>
				</div>
			</div>

			<div>
				<button
					type="submit"
					disabled={formData.queryWord === ''}
					class="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm  font-medium font-rockwell upper text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:bg-gray-500">
					Find the Anagrams!
				</button>
			</div>
		</form>
	</div>
</div>
