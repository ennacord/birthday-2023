<script setup>
import Tweet from "vue-tweet";
</script>

<template>
  <div class="cards-container">
    <div v-masonry="'bdaycards'" transition-duration="0.3s" item-selector=".card" stagger="0s">
      <div v-masonry-tile class="card card-tweet">
        <Tweet tweet-id="1627008338868436992" @tweet-load-success="redraw()"></Tweet>
      </div>
      <div v-masonry-tile class="card card-tweet">
        <Tweet tweet-id="1627447048483250177" @tweet-load-success="redraw()"></Tweet>
      </div>
      <div
        v-masonry-tile @click="redraw()"
        :class="[ 'card', `card-style-${item.aloupeep}`]"
        v-for="(item, ix) in cards" :key="`card-${ix}`">
        <div class="card-name text-h6 pr-12 py-2">{{item.name}}</div>
        <div class="card-text text-body-1 pr-4 pb-2">{{item.message}}</div>
        <div class="card-aloupeep"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import twemoji from 'twemoji';
import MessageData from '@/data/messages.json?url';

// 1 01, 2 02, 3 art, 4 cb, 5 fh, 6 ld, 7 ms, 8 rich, 9 slp, 10 td, 11 wave, 12 wiz
const FixedAloupeeps = {
  jetrico: 12,
  Zer0Pendragon6: 5,
  MiikeMQ: 10,
  guGGy: 7,
  'Professor Nobu': 4,
  Magspark: 10,
  Elodie: 9,
  'Domo Espresso': 4,
  Garfield: 3,
  'Frank Akanoru': 3,
  Lili: 7,
  DarkDisasterKid: 10,
  'Shadow Cortex': 10,
  Nuit: 7,
  Cirnein: 4,
  Kyzo: 3,
  Morirgan420: 8,
  'Hazel Sokolov': 3,
  Suwu: 9,
  'Yeou Yuko': 5,
};

// kuwusaki = td ?
// sei = ms ?

export default {
  data: () => ({
    cards: [],
  }),
  methods: {
    shuffleCards() {
      for (let i = this.cards.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        // eslint-disable-next-line no-param-reassign
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    },
    reSortCards() {
      this.cards = this.cards.sort((a, b) => {
        if (a.time > b.time) return 1;
        if (a.time < b.time) return -1;
        return 0;
      });
    },
    redraw() {
      this.$redrawVueMasonry('bdaycards');
    },
  },
  mounted() {
    // Load data
    (async () => {
      const fetchSource = await axios.get(MessageData).catch(() => null);
      const data = fetchSource && fetchSource.data ? fetchSource.data : {};
      this.cards = Object.values(data.messages)
        .map((card) => ({
          ...card,
          aloupeep: FixedAloupeeps[card.name] || Math.ceil(Math.random() * 12),
        }))
        .sort((a, b) => a.time - b.time);
      this.$nextTick(() => {
        twemoji.parse(document.body);
        this.$redrawVueMasonry('bdaycards');
        setTimeout(() => { this.$redrawVueMasonry('bdaycards'); }, 1200);
        setTimeout(() => { this.$redrawVueMasonry('bdaycards'); }, 3000);
        setTimeout(() => { this.$redrawVueMasonry('bdaycards'); }, 9000);
      });
    })();
  },
  components: [
    Tweet,
  ],
};
</script>

<style lang="scss" scoped>
.cards-container {
  width:calc(100% - 10px);
  height:100%;
  margin:0px auto;
  overflow-x:hidden;
  overflow-y:scroll;
  padding:15px 10px;
}

.card {
  background:rgba(183, 189, 231, 0.7);
  position:relative;
  padding:0px 10px 10px 10px;
  min-height:100px;
  width:24%;
  margin:10px 0.5%;
  border-radius:8px;
  background-repeat: repeat-y;
  background-size: contain;
  &.card-tweet {
    // background:none;
    padding:2px;
  }
  .card-aloupeep {
    width:100px;
    height:100px;
    position:absolute;
    top:-30px;
    right:-10px;
    z-index:1;
    background-size:contain;
  }
  &.card-style-1 {
    .card-aloupeep {
      background-image:url('@/assets/aloupeeps/aloupeep-01.png');
    }
  }
  &.card-style-2 {
    .card-aloupeep {
      background-image:url('@/assets/aloupeeps/aloupeep-02.png');
    }
  }
  &.card-style-3 {
    .card-aloupeep {
      background-image:url('@/assets/aloupeeps/aloupeep-art.png');
    }
  }
  &.card-style-4 {
    .card-aloupeep {
      background-image:url('@/assets/aloupeeps/aloupeep-cb.png');
    }
  }
  &.card-style-5 {
    .card-aloupeep {
      background-image:url('@/assets/aloupeeps/aloupeep-fh.png');
      top:-13px;
      z-index:3;
    }
  }
  &.card-style-6 {
    .card-aloupeep {
      background-image:url('@/assets/aloupeeps/aloupeep-ld.png');
    }
  }
  &.card-style-7 {
    .card-aloupeep {
      background-image:url('@/assets/aloupeeps/aloupeep-ms.png');
    }
  }
  &.card-style-8 {
    .card-aloupeep {
      background-image:url('@/assets/aloupeeps/aloupeep-rich.png');
      top:-9px;
      z-index:3;
    }
  }
  &.card-style-9 {
    .card-aloupeep {
      background-image:url('@/assets/aloupeeps/aloupeep-slp.png');
    }
  }
  &.card-style-10 {
    .card-aloupeep {
      background-image:url('@/assets/aloupeeps/aloupeep-td.png');
    }
  }
  &.card-style-11 {
    .card-aloupeep {
      background-image:url('@/assets/aloupeeps/aloupeep-wave.png');
      top:-17px;
      z-index:3;
    }
  }
  &.card-style-12 {
    .card-aloupeep {
      background-image:url('@/assets/aloupeeps/aloupeep-wiz.png');
    }
  }
  .card-name {
    color:#343c75;
    font-weight:bold;
    text-shadow:
      0px 0px 3px #fff,
      0px 0px 3px #fff,
      1px 1px 2px #fff;
  }
  .card-text {
    white-space: pre-line;
    font-weight:bold;
    padding:5px 10px;
    background-color:rgba(255, 255, 255, 0.7);
    border-radius:10px;
    position:relative;
    z-index:2;
    color:#000;
    text-shadow:
      0px 0px 3px #fff,
      0px 0px 3px #fff,
      0px 0px 15px #b7bde7;
  }
}

@media only screen and (max-width: 1800px) {
  .card {
    width:32%;
    margin:10px 0.5%;
  }
}
@media only screen and (max-width: 1264px) {
  .card {
    width:48%;
    margin:10px 1%;
  }
}
@media only screen and (max-width: 700px) {
  .card {
    width:96%;
    margin:10px 2%;
  }
}
</style>

<style lang="scss">
.card-text {
  img {
    height:1.4rem;
  }
}
</style>
