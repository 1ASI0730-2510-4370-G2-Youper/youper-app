<script>
export default {
  name: "topBar",
  data() {
    return {
      language: 'ES'
    };
  },
  methods: {
    setLanguage(lang) {
      this.language = lang;
    }
  }
};
</script>

<template>
  <div class="top-bar">
    <div class="language-selector">
      <span :class="{ active: language === 'EN' }" @click="setLanguage('EN')">EN</span>
      <button class="check-button" disabled>✓</button>
      <span :class="{ active: language === 'ES' }" @click="setLanguage('ES')">ES</span>
    </div>
    <button class="settings-btn">
      <i class="pi pi-cog"></i>
    </button>
  </div>
</template>

<style scoped>
.top-bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #A9A1C7; /* azul oscuro */
  padding: 0.5rem 1rem;
  color: white;
  height: 60px;
  position: relative;
}

.language-selector {
  display: flex;
  align-items: center;
  margin-right: 1rem;
  background-color: #856dc8;
  border-radius: 1rem;
  padding: 8px;

}

.language-selector span {
  cursor: pointer;
  padding: 0 0.5rem;
  font-weight: bold;
  color: white;
  opacity: 0.7;
}

.language-selector span.active {
  opacity: 1;
  text-decoration: underline;
}

.check-button {
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1rem;
  margin: 0 0.2rem;
  cursor: default;
}

.settings-btn {
  background: transparent;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
