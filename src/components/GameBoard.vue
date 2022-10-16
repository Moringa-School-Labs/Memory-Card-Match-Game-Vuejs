<script>
import CardView from "./CardView.vue";
import cardData from "../data/memoryCards8.js";
export default {
  components: {
    CardView,
  },
  data() {
    return {
      cardsData: cardData,
    };
  },
};
</script>

<template>
  <div class="game-board">
    <p>I am the GameBoard.vue component</p>
    <ul class="cards">
      <li class="card">
        <CardView viewType="front" />
        <CardView
          viewType="back"
          imageUrl="../static_site/images/img-1.png"
          imageAltText="An emerald cut into a diamond shape."
        />
      </li>
    </ul>
  </div>
</template>
