import { writable } from "svelte/store";

export let modo = writable("facil");

export function Dificuldade(novoModo) {
  modo.set(novoModo);
  console.log("a")
}
