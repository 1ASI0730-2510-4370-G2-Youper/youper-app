<template>
  <PurpleCard/>
  <top-bar/>
  <div class="pero">Perro</div>
  <div class="scroll-container">
    <div class="stress-module">
      <h1 class="title">Self-Esteem Module</h1>

      <!-- Recomendaciones -->
      <section class="section">
        <h2 class="section-title">Recommendations</h2>
        <div class="card-grid">
          <Card v-for="(rec, i) in recommendations" :key="i" class="light-card">
            <template #header>
              <img :src="rec.image" alt="Recommendation" class="card-image" />
            </template>
            <template #content>
              <p class="card-text">{{ rec.text }}</p>
            </template>
            <template #footer>
              <Button label="Read more" link class="read-more-btn" />
            </template>
          </Card>
        </div>
      </section>

      <!-- Música -->
      <section class="section">
        <h2 class="section-title">Music</h2>
        <div class="music-row">
          <div v-for="(track, i) in music" :key="i" class="music-card">
            <div class="music-image-container">
              <img :src="track.image" alt="Track" class="music-image" />
              <div class="play-button">&#9658;</div>
            </div>
            <div class="music-text">
              <p class="music-title">{{ track.title }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Videos -->
      <section class="section">
        <h2 class="section-title">Videos</h2>
        <div class="video-grid">
          <div v-for="(video, i) in videos" :key="i" class="video-card">
            <div class="video-image-wrapper">
              <img :src="video.thumbnail" alt="Video" class="video-image" />
              <div class="video-title-overlay">{{ video.title }}</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import PurpleCard from '@/components/sidebar.vue'
import TopBar from "@/components/topBar.vue";

export default {
  name: "self-module",
  components: {
    TopBar,
    Card,
    Button,
    PurpleCard
  },
  setup() {
    const recommendations = ref([
      {
        image: 'src/assets/images/self-esteem-img1.png',
        text: 'This article provides strategies such as recognizing your strengths, challenging negative thoughts, stepping out of your comfort zone.'
      },
      {
        image: 'src/assets/images/self-esteem-img2.png',
        text: ' proposes key steps like self-care, avoiding negative thoughts, speaking to yourself respectfully, and staying close to supportive people'
      },
      {
        image: 'src/assets/images/self-esteem-img3.png',
        text: 'This article helps you identify situations that hurt your self-esteem, recognize negative self-talk, and replace it with more positive, realistic thoughts.'
      },
      {
        image: 'src/assets/images/self-esteem-img4.png',
        text: 'Covers habits like positive thinking, setting realistic goals, avoiding comparison, taking care of your health, and practicing self-forgiveness.'
      }
    ])

    const music = ref([
      {
        image: 'src/assets/images/self-esteem-music1.png',
        title: 'Inner Confidence'
      },
      {
        image: 'src/assets/images/self-esteem-music2.png',
        title: 'You Are Enough'
      },
      {
        image: 'src/assets/images/self-esteem-music3.png',
        title: 'Awaken Your Power'
      }
    ])

    const videos = ref([
      {
        thumbnail: 'src/assets/images/self-esteem-video1.png',
        title: ' Small Habits to Improve Self-Esteem'
      },
      {
        thumbnail: 'src/assets/images/self-esteem-video2.png',
        title: 'P​sychologist Explains Self-Esteem: How It Develops & How To Improve '
      },
      {
        thumbnail: 'src/assets/images/self-esteem-video3.png',
        title: 'S​elf-Worth: 20 Ideas to Build Your Self-Esteem'
      }
    ])

    return {
      recommendations,
      music,
      videos
    }
  }
}
</script>


<style scoped>
.scroll-container {
  max-height: 100vh;
  overflow-y: auto;
}

.stress-module {
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  max-width: 70%;
  margin-left: 400px;
}

.title {
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: black;
}

.section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.9rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: black;
  padding: 20px;
}

.card-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.light-card {
  background-color: #f3f3f3 !important;
  color: #333;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.light-card img {
  width: 100%;
  object-fit: cover;
  border-radius: 6px 6px 0 0;
}

.light-card .p-card-body {
  padding: 1rem;
}

.light-card .p-card-content {
  padding: 0;
}

.light-card a {
  color: #007bff;
  font-weight: 500;
  text-decoration: none;
}

.card-image {
  height: 160px;
}

.card-text {
  font-size: 15px;
  color: rgb(43, 47, 48);
}

.read-more-btn {
  font-size: 15px;
  color: #007ad9;
}

.music-grid .music-image {
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 6px 6px 0 0;
}

.music-title {
  font-weight: 500;
  color: #444;
}

.video-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.video-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
}

.video-image-wrapper {
  position: relative;
  width: 100%;
  height: 160px;
}

.video-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.video-title-overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0.75rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-weight: bold;
  font-size: 1rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
}


.music-row {
  display: flex;
  flex-wrap: wrap;
  margin-left: 80px;
  gap: 1rem;
}

.music-card {
  display: flex;
  background-color: #f1f1f1;
  border-radius: 8px;
  overflow: hidden;
  width: 400px;
  min-height: 100px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.music-image-container {
  position: relative;
  width: 100px;
  height: 100px;
  flex-shrink: 0;
}

.music-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.music-text {
  padding: 0.75rem;
  display: flex;
  align-items: center;
}
</style>








