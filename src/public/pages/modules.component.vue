<template>
  <PurpleCard/>
  <top-bar/>
  <div class="modules-container">
    <h1 class="modules-title">Main Modules</h1>
    <div class="modules-grid">

      <!-- Stress Module -->
      <div class="module-card">
        <div class="module-icon">💥</div>
        <h2 class="module-name">Stress module</h2>
        <p class="module-description">
          The Stress Module is designed to help users identify, understand, and manage the causes of their daily stress, whether academic, work-related, family-related, or emotional.
        </p>
        <div class="module-buttons">
          <Button label="Start" class="p-button-sm p-button-raised p-button-secondary" @click="$router.push('/stress-module')"/>
          <Button label="More Info" class="p-button-sm p-button-text custom-more-info" />
        </div>
      </div>

      <!-- Self-Esteem Module -->
      <div class="module-card">
        <div class="module-icon">🧍‍♂️</div>
        <h2 class="module-name">Self-Esteem Module</h2>
        <p class="module-description">
          The Self-Esteem Module focuses on strengthening users' self-perception. It helps develop self-worth, reduce self-criticism, and foster a more compassionate relationship with oneself.
        </p>
        <div class="module-buttons">
          <Button label="Start" class="p-button-sm p-button-raised p-button-secondary"  @click="$router.push('/self-module')"/>
          <Button label="More Info" class="p-button-sm p-button-text custom-more-info" />
        </div>
      </div>

      <!-- Interpersonal Module -->
      <div class="module-card">
        <div class="module-icon">🧠</div>
        <h2 class="module-name">Interpersonal Module</h2>
        <p class="module-description">
          The Interpersonal Module focuses on improving the quality of the user's relationships: romantic, family, friendships, and work. It provides tools to relate with empathy and security.
        </p>
        <div class="module-buttons">
          <Button label="Start" class="p-button-sm p-button-raised p-button-secondary" @click="$router.push('/interpersonal-module')"/>
          <Button label="More Info" class="p-button-sm p-button-text custom-more-info" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Button from 'primevue/button'
import PurpleCard from '@/components/sidebar.vue'
import TopBar from "@/components/topBar.vue";

export default {
  name: 'modules',
  components: {
    TopBar,
    PurpleCard,
    Button
  }
}
</script>

<style scoped>
.modules-container {
  padding: 2rem;
  background-color: #f9f9fb;
  min-height: 100vh;
}

.modules-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #6b21a8;
  margin-bottom: 2.5rem;
  margin-left: 220px;
  margin-top: 150px;

}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  max-width: 68%;
  margin-left: 390px;
  margin-top: 70px;
  gap: 2rem;
}

.module-card {
  background-color: #ffffff;
  border: 2px solid #d8b4fe;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: box-shadow 0.3s ease;
}

.module-card:hover {
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
}

.module-icon {
  width: 48px;
  height: 48px;
  background-color: #ede9fe;
  color: #6b21a8;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  margin-bottom: 1rem;
}

.module-name {
  font-size: 1.25rem;
  font-weight: bold;
  color: #4c1d95;
  margin-bottom: 0.75rem;
}

.module-description {
  font-size: 0.95rem;
  color: #444;
  line-height: 1.5;
  margin-bottom: 1.25rem;
}

.module-buttons {
  display: flex;
  gap: 0.75rem;
}

.custom-more-info {
  color: #6b21a8 !important;
}
</style>
