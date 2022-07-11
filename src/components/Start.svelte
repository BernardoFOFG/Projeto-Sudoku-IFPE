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
    margin: 20px auto 0 auto;
    transition: 0.5s;
    font-size: 16px;
    font-weight: 500;
    border-radius: 0.5rem;
    padding: 7px;
    background-color: #292721;
    color: white;
    font-weight: 500;
  }
  .status:hover {
    background-color: #29272180;
    cursor: pointer;
  }
</style>
