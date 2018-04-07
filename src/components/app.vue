<template>
  <div>
    Hello Rush!
  </div>
</template>

<script>
import Pusher from 'pusher-js';

export default {
  mounted() {
    this.socket = new Pusher('6a3acdaba86ad858948b', {
      cluster: 'eu',
    });

    const channel = this.socket.subscribe('lineups');

    channel.bind('lineup-updated', (data) => {
      this.$store.commit('saveLineup', data);
    });
  },

  beforeDestroy() {
    this.socket.disconnect();
  }
}
</script>

<style lang="scss" scoped>
</style>
