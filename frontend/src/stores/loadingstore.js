import { writable } from 'svelte/store';

export const loadingstore = writable({ isLoading: false });
