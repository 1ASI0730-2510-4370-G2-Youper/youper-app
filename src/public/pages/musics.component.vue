<script>
import PurpleCard from "@/components/sidebar.vue";
import music1 from '@/assets/images/music-img1.png';
import music2 from '@/assets/images/music-img2.png';
import music3 from '@/assets/images/music-img3.png';
import music4 from '@/assets/images/music-img4.png';
import music5 from '@/assets/images/music-img5.png';
import music6 from '@/assets/images/music-img6.png';
import music7 from '@/assets/images/music-img7.png';
import music8 from '@/assets/images/music-img8.png';
import music9 from '@/assets/images/music-img9.png';
import music10 from '@/assets/images/music-img10.png';



import TopBar from "@/components/topBar.vue"; // Reemplaza por la ruta real de tu imagen

export default {
  name: "musics",
  components: {TopBar, PurpleCard },
  data() {
    return {
      youperTop: [
        { image: music1, title: 'Weightless', videoUrl: 'https://www.youtube.com/watch?v=UfcAVejslrU' },
        { image: music2, title: 'Night Owl', videoUrl: 'https://www.youtube.com/watch?v=1ZYbU82GVz4' },
        { image: music3, title: 'Music for Deep Sleep', videoUrl: 'https://www.youtube.com/watch?v=inpok4MKVLM' },
        { image: music4, title: 'Ocean Waves', videoUrl: 'https://www.youtube.com/watch?v=ZToicYcHIOU' },
        { image: music5, title: 'Night Owl', videoUrl: 'https://www.youtube.com/watch?v=1vx8iUvfyCY' },
        { image: music6, title: 'Breathe', videoUrl: 'https://www.youtube.com/watch?v=Hk9dON9tgH8' },
      ],
      youperAlbums: [
        { image: music7, title: 'Cold Little Heart', videoUrl: 'https://www.youtube.com/watch?v=MIr3RsUWrdo' },
        { image: music8, title: 'The Ocean', videoUrl: 'https://www.youtube.com/watch?v=1ZYbU82GVz4' },
        { image: music9, title: 'Pavane', videoUrl: 'https://www.youtube.com/watch?v=inpok4MKVLM' },
        { image: music10, title: 'Morning Light', videoUrl: 'https://www.youtube.com/watch?v=ZToicYcHIOU' }
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
  <PurpleCard />
  <top-bar/>
  <div class="musics-container">
    <h1 class="title">Relaxing tunes</h1>

    <h3 class="section-title">YouPer Top</h3>
    <div class="grid-top">
      <pv-card
          v-for="(item, index) in youperTop"
          :key="index"
          class="top-card"
          @click="openVideo(item.videoUrl)"
      >
        <template #content>
          <div class="top-card-content">
            <div class="image-box" :style="{ backgroundImage: 'url(' + item.image + ')' }">
              <i class="pi pi-play play-icon"></i>
            </div>
            <p class="text-title">{{ item.title }}</p>
          </div>
        </template>
      </pv-card>
    </div>

    <h3 class="section-title">YouPer Albums</h3>
    <div class="grid-albums">
      <pv-card
          v-for="(album, index) in youperAlbums"
          :key="index"
          class="album-card"
          @click="openVideo(album.videoUrl)"
      >
        <template #content>
          <div class="album-image" :style="{ backgroundImage: 'url(' + album.image + ')' }">
            <i class="pi pi-play play-icon"></i>
            <div class="album-title">{{ album.title }}</div>
          </div>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<style scoped>
.musics-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: black;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.section-title {
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.grid-top {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.top-card {
  display: flex;
  background: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
  min-width: 280px;
  max-width: 360px;
  width: 100%;
  border: none !important;
}

.top-card:hover {
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  transform: translateY(-4px);
}

.top-card-content {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1px;
  background-color: #e5e7ed;
}

.image-box {
  position: relative;
  width: 120px;
  height: 90px;
  border-radius: 4px;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  margin-right: 1rem;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease;
}

.top-card:hover .image-box {
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
}

.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.8rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.55);
  border-radius: 50%;
  padding: 0.4rem 0.5rem;
  pointer-events: none;
  transition: background-color 0.3s ease;
}

.top-card:hover .play-icon {
  background-color: rgba(0, 0, 0, 0.75);
}

.text-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: black;
  user-select: none;
}

/* Albums */

.grid-albums {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
}

.album-card {
  border-radius: 8px;
  overflow: hidden;
  background: transparent;
  cursor: pointer;
}

/* Aquí usamos ::v-deep para eliminar borde y sombra internos del pv-card */
::v-deep(.album-card .p-card) {
  border: none !important;
  box-shadow: none !important;
  background: transparent !important;
}

.album-image {
  position: relative;
  width: 100%;
  padding-top: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
}

.album-title {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-size: 1rem;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
}

.album-card:hover .album-title {
  color: #ffd700;
}

.album-card:hover .play-icon {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
