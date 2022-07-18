<script>
	import { variables } from '$lib/variables';
	import { anagramstore } from '../stores/anagramstore.js';
	import { loadingstore } from '../stores/loadingstore.js';
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
			`${variables.basePath}/api/get-anagrams?query=${formData.queryWord}&dictionary=${formData.selectedDictionary.value.toLowerCase()}`
		);
		const anagrams = res.status === 200 ? res.data : [];
		anagramstore.set(anagrams);
		console.log($anagramstore);
		loadingstore.set({ isLoading: false });
	}
</script>

<div class="mt-8 mx-2 sm:mx-auto sm:w-full sm:max-w-md">
	<div class="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
		<form class="mb-0 space-y-6" on:submit|preventDefault={handleSubmit}>
			<div>
				<label for="query" class="block text-sm font-medium text-gray-700">
					Enter a word to find its anagrams
				</label>
				<div class="mt-1">
					<input id="query" name="query" type="text" required bind:value={formData.queryWord} />
				</div>
			</div>

			<div>
				<label for="dictionary" class="block text-sm font-medium text-gray-700"
					>Pick a dictionary to search for anagrams in:
				</label>
				<div class="mt-1">
					<select
						name="dictionary"
						id="dictionary"
						class="bg-white"
						bind:value={formData.selectedDictionary}
						on:change={(e) => console.log(e)}>
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
					class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:bg-gray-500">
					Find the Anagrams!
				</button>
			</div>
		</form>
	</div>
</div>
