<template>
  <div
    id="app"
    :class="{ 'has-mouse': hasMouse }"
    @touchstart="hasMouse = false"
  >
    <Flipbook
      class="flipbook"
      :pages="pages"
      :pagesHiRes="pagesHiRes"
      :startPage="pageNum"
      :zooms="zoom"
      v-slot="flipbook"
      ref="flipbook"
      @flip-left-start="onFlipLeftStart"
      @flip-left-end="onFlipLeftEnd"
      @flip-right-start="onFlipRightStart"
      @flip-right-end="onFlipRightEnd"
      @zoom-start="onZoomStart"
      @zoom-end="onZoomEnd">
      <div class="action-bar">
        <left-icon
          class="btn left"
          :class="{ disabled: !flipbook.canFlipLeft }"
          @click="flipbook.flipLeft"
        />
        <plus-icon
          class="btn plus"
          :class="{ disabled: !flipbook.canZoomIn }"
          @click="flipbook.zoomIn"
        />
        <span class="page-num">
          {{ flipbook.page }} / {{ flipbook.numPages }}
        </span>
        <minus-icon
          class="btn minus"
          :class="{ disabled: !flipbook.canZoomOut }"
          @click="flipbook.zoomOut"
        />
        <right-icon
          class="btn right"
          :class="{ disabled: !flipbook.canFlipRight }"
          @click="flipbook.flipRight"
        />
      </div>
    </Flipbook>
  </div>
</template>

<script>
import Flipbook from 'flipbook-vue';
import 'vue-material-design-icons/styles.css'
import LeftIcon from 'vue-material-design-icons/ChevronLeftCircle'
import RightIcon from 'vue-material-design-icons/ChevronRightCircle'
import PlusIcon from 'vue-material-design-icons/PlusCircle'
import MinusIcon from 'vue-material-design-icons/MinusCircle'

import { requestCatalog } from './contents';

export default {
  name: 'app',
  components: {
    Flipbook, LeftIcon, RightIcon, PlusIcon, MinusIcon
  },
  mounted() {
    const self = this;

    requestCatalog().then(({ pages }) => {
      self.pages = pages;
      self.pagesHiRes = pages;
    });

    window.addEventListener('hashchange', this.setPageFromHash);
    this.setPageFromHash();
  },
  data() {
    return {
      pages: [],
      pagesHiRes: [],
      hasMouse: true,
      pageNum: null,
      zoom: [ 1 ]
    };
  },
  methods: {
    onFlipLeftStart(page) {
      console.log('left-start', page);
    },
    onFlipLeftEnd(page) {
      console.log('left-end', page);
      window.location.hash = `#${page}`;
    },
    onFlipRightStart(page) {
      console.log('right-start', page);
    },
    onFlipRightEnd(page) {
      console.log('right-end', page);
      window.location.hash = `#${page}`;
    },
    onZoomStart(zoom) {
      console.log('zoom-start', zoom);
    },
    onZoomEnd(zoom) {
      console.log('zoom-end', zoom);
    },
    setPageFromHash() {
      const n = parseInt(window.location.hash.slice(1));
      if (isFinite(n)) {
        this.pageNum = n;
      }
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333;
  color: #ccc;
  overflow: hidden;
}

a {
  color: inherit;
}

.action-bar {
  width: 100%;
  height: 20px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-bar {
  height: 100px;
  width: 100%;
}

.action-bar .btn {
  font-size: 30px;
  color: #999;
}

.action-bar .btn svg {
  bottom: 0;
}

.action-bar .btn:not(:first-child) {
  margin-left: 10px;
}

.has-mouse .action-bar .btn:hover {
  color: #ccc;
  filter: drop-shadow(1px 1px 5px #000);
  cursor: pointer;
}

.action-bar .btn:active {
  filter: none !important;
}

.action-bar .btn.disabled {
  color: #666;
  pointer-events: none;
}

.action-bar .page-num {
  font-size: 12px;
  margin-left: 10px;
}

.flipbook {
  width: 90vw;
  height: calc(100vh - 50px - 40px);
}

.flipbook .viewport {
  width: 90vw;
  height: calc(100vh - 50px - 40px);
}

.flipbook .bounding-box {
  box-shadow: 0 0 20px #000;
}

.credit {
  font-size: 12px;
  line-height: 20px;
  margin: 10px;
}
</style>
