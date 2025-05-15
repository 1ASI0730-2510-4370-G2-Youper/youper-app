<script>
import PurpleCard from "@/components/sidebar.vue";
import guide1 from '@/assets/images/guide-img1.png';
import guide2 from '@/assets/images/guide-img2.png';
import guide3 from '@/assets/images/guide-img3.png';
import guide4 from '@/assets/images/guide-img4.png';
import guide5 from '@/assets/images/guide-img5.png';
import guide6 from '@/assets/images/guide-img6.png';


import TopBar from "@/components/topBar.vue"; // Usa tu imagen real aquí

export default {
  name: "meditations-section",
  components: {TopBar, PurpleCard },
  data() {
    return {
      meditations: [
        {
          image: guide1,
          caption: 'Guided meditation for sleep',
          videoUrl: 'https://www.youtube.com/watch?v=1ZYbU82GVz4'
        },
        {
          image: guide2,
          caption: 'Guided Meditation for a POSITIVE DAY',
          videoUrl: 'https://www.youtube.com/watch?v=inpok4MKVLM'
        },
        {
          image: guide3,
          caption: 'Guided Meditation Increasing Self-Confidence',
          videoUrl: 'https://www.youtube.com/watch?v=ZToicYcHIOU'
        },
        {
          image: guide4,
          caption: 'Guided meditation to start the day with gratitude',
          videoUrl: 'https://www.youtube.com/watch?v=1vx8iUvfyCY'
        },
        {
          image: guide5,
          caption: 'Guided Meditation to Renew your Energy',
          videoUrl: 'https://www.youtube.com/watch?v=Hk9dON9tgH8'
        },
        {
          image: guide6,
          caption: 'GUIDED MEDITATION to let go of STRESS and ANXIETY',
          videoUrl: 'https://www.youtube.com/watch?v=MIr3RsUWrdo'
        }
      ]
    };
  },
  methods: {
    openVideo(url) {
      window.open(url, '_blank');
    }
  }
};
</script>

<template>
  <div>
    <PurpleCard />
    <top-bar/>
    <div class="meditations-container">
      <h1 class="title">Guided Meditations</h1>
      <div class="card-grid">
        <pv-card
            v-for="(meditation, index) in meditations"
            :key="index"
            class="meditation-card"
            @click="openVideo(meditation.videoUrl)"
            style="cursor: pointer;"
        >
          <template #content>
            <div class="card-content" :style="{ backgroundImage: 'url(' + meditation.image + ')' }">
              <i class="pi pi-play play-icon"></i>
            </div>
            <p class="caption">{{ meditation.caption }}</p>
          </template>
        </pv-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.meditations-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: left;
  margin-bottom: 2rem;
  color: black; /* texto negro */
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.meditation-card {
  box-shadow: none;
  border: none;
  background-color: transparent;
}

.card-content {
  position: relative;
  width: 100%;
  height: 180px;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.play-icon {
  font-size: 2.5rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  padding: 1rem;
  transition: transform 0.3s ease;
}

.card-content:hover .play-icon {
  transform: scale(1.1);
}

::v-deep(.meditation-card) {
  border: none !important;
  box-shadow: none !important;
  background-color: transparent !important;
}

.caption {
  text-align: center;
  font-size: 1rem;
  margin-top: 0.75rem;
  color: black; /* texto negro */
}
</style>
