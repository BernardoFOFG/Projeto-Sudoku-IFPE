<!-- Script -->
<script>
  import { statusPage } from "../../scripts/Status.js";
</script>

<!-- HTML -->
<div class="status" on:click={() => statusPage("menu")}>Retornar ao menu</div>

<!-- CSS -->
<style>
  .status {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 60px;
    margin: 0 auto;
    transition: 0.5s;
    background-color: #81a140;
    font-size: 16px;
    font-weight: 500;
    border: 2px solid black;
    border-radius: 0.5rem;
    padding: 7px;
  }
  .status:hover {
    background-color: #617b30;
    cursor: pointer;
  }
</style>
