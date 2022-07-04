<!-- Script -->
<script>
  import Jogar from "./components/Jogar.svelte";
  import Sobre from "./components/Sobre.svelte";
  import Ajuda from "./components/Ajuda.svelte";
  import Menu from "./components/Menu.svelte";

  import { status } from "../scripts/Status.js";
</script>

<!-- HTML -->
{#if $status === "menu"}
  <Ajuda />
{:else if $status === "jogar"}
  <Jogar />
{:else if $status === "sobre"}
  <Sobre />
{:else if $status === "ajuda"}
  <Ajuda />
{/if}

<!-- CSS -->
<style>
</style>
