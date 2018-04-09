<template>
  <div class="container">

    <div class="formation" :class="formationLayout">

      <div
        class="formation-row"
        :class="{'extra-row': extraRow}"
        v-for="row in formation">

        <div class="formation-player" :class="formationPlayer(position)" v-for="position in row">
          <player :player="findPlayer(position)" />
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import Pusher from 'pusher-js';
import { mapGetters } from 'vuex';
import Player from './player.vue';
import formations from '../js/formations';

export default {
  components: {
    Player
  },

  mounted() {
    this.socket = new Pusher('6a3acdaba86ad858948b', {
      cluster: 'eu',
    });

    const channel = this.socket.subscribe('lineups');

    channel.bind('lineup-updated', (data) => {
      this.$store.commit('saveLineup', data);
    });
  },

  computed: {
    ...mapGetters([
      'teamFormation',
      'team'
    ]),

    formation() {
      return formations[this.teamFormation];
    },

    formationLayout() {
      return `formation-${this.teamFormation}`;
    },

    extraRow() {
      return this.teamFormation.length > 3;
    }
  },

  methods: {
    findPlayer(id) {
      return this.$store.getters.player(id);
    },

    formationPlayer(pos) {
      return `player-${pos}`;
    }
  },

  beforeDestroy() {
    this.socket.disconnect();
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 10px;
}

.formation-row {
  display: flex;
  justify-content: space-around;
  height: 25%;
}

.extra-row {
  height: 20%;
}

.formation-player {
  width: 25%;
}

@media (max-width: 320px) {
  .formation-row {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
  }

  .formation-player {
    width: auto;
  }
}
</style>
