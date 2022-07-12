import { writable } from "svelte/store";

const storedbodyWeight = localStorage.getItem("bodyWeight");
export let bodyWeight = writable(storedbodyWeight);
bodyWeight.subscribe(value => {
    localStorage.setItem("bodyWeight", value);
});