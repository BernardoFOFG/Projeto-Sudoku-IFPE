import { writable } from 'svelte/store'

export let status = writable("menu");

export function statusPage(newStatus) {
    status.set(newStatus)
}