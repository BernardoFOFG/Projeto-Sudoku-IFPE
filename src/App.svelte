<!-- Script -->
<script>
  import Modo from "./components/Modo.svelte";
  import Sobre from "./components/Sobre.svelte";
  import Ajuda from "./components/Ajuda.svelte";
  import Menu from "./components/Menu.svelte";

  import { status } from "../scripts/Status.js";
</script>

<!-- HTML -->
{#if $status === "menu"}
  <Menu />
{:else if $status === "jogar"}
  <Modo />
{:else if $status === "sobre"}
  <Sobre />
{:else if $status === "ajuda"}
  <Ajuda />
{/if}

<!-- CSS -->
<style>
</style>
