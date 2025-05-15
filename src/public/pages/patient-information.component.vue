<template>
  <PurpleCard/>
  <top-bar/>
  <div class="container">
    <!-- Título centrado -->
    <h1 class="title">Información del Paciente</h1>

    <!-- Inputs alineados horizontalmente -->
    <div class="form-row">
      <div class="form-group">
        <label for="name" class="subtitle">Nombre</label>
        <InputText id="name" v-model="patient.name" disabled class="input" />
      </div>
      <div class="form-group">
        <label for="lastName" class="subtitle">Apellido</label>
        <InputText id="lastName" v-model="patient.lastName" disabled class="input" />
      </div>
      <div class="form-group">
        <label for="age" class="subtitle">Edad</label>
        <InputText id="age" v-model="patient.age" disabled class="input small" />
      </div>
    </div>

    <!-- Sección principal con texto y cuadro de imagen -->
    <div class="content-row">
      <!-- Texto descriptivo -->
      <Card class="text-card">
        <template #content>
          <p class="description">
            {{ patient.description }}
          </p>
        </template>
      </Card>

      <div class="image-placeholder">
        <img :src="footImage" alt="Foto de Valeria" class="profile-image" />
      </div>

    </div>
  </div>
</template>

<script>
import PurpleCard from "@/components/sidebar.vue";
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import footImage from '@/assets/images/foot.png';
import TopBar from "@/components/topBar.vue"; // ✅ imagen importada correctamente

export default {
  name: "patient-information",
  components: {
    TopBar,
    PurpleCard,
    InputText,
    Card
  },
  data() {
    return {
      patient: {
        name: 'Valeria',
        lastName: 'Mendoza Ríos',
        age: '23',
        description: `Valeria Mendoza Ríos, 23, is a young university student who has started using the Youper app with the goal of improving her emotional well-being. In her initial evaluation, Valeria reported feeling constantly overwhelmed by her academic workload, conflicts in her relationship, and the pressure she perceives from her family. During the initial check-in, Valeria indicated that she experiences high levels of anxiety, difficulty sleeping, and low self-esteem. She commented on statements such as: "I have a hard time concentrating and sometimes feel like I'm not enough" and "I sleep poorly almost every night; my mind won't turn off." These statements reflect a pattern of persistent negative thoughts and emotional overload that affects her quality of life.
Based on her answers to the welcome test, the app activated the stress management module, which recommended deep breathing exercises, 10-minute guided meditations before bed, and the use of sleep stories, starting with "The Traveling Cloud." Additionally, daily emotional tracking and mindfulness reminders were activated every six hours to promote moments of pause and self-connection throughout the day.`
      },
      footImage
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 70%;
  padding: 2rem;
  margin-left:500px
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  color: black;
  text-align: center;
  margin-bottom: 2rem;
}

.form-row {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  margin-right: 860px;
  align-items: flex-start;
}

@media (min-width: 768px) {
  .form-row {
    flex-direction: row;
    justify-content: center;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
}

.input {
  width: 16rem;
  margin-top: 0.25rem;
  background-color: #ffffff !important; /* fuerza fondo blanco */
  color: #1f2937 !important; /* fuerza color texto gris oscuro */
}

/* Aplica color al texto dentro del input PrimeVue */
::v-deep(.p-inputtext) {
  background-color: #ffffff !important;
  color: #1f2937 !important;
  border-radius: 5px;
  border: 1px solid #d1d5db; /* opcional: para bordes suaves */

}

.subtitle{
  color: black;
  font-size: 15px;
}

/* Input pequeño */
.input.small {
  width: 5rem;
}



.input.small {
  width: 5rem;
}

.content-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .content-row {
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
  }
}

.description {
  text-align: justify;
  white-space: pre-line;
  color: black;
  line-height: 1.75;
  font-size: 19px;
}

.image-placeholder {
  border: 2px solid #cbd5e0; /* gray-400 */
  border-radius: 0.5rem;
  height: 24rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-text {
  color: #a0aec0; /* gray-500 */
  font-size: 1.125rem;
}

.text-card {
  background-color: #ffffff;
  border: none;
  box-shadow: none;
}

/* Eliminar borde del contenido interno del Card de PrimeVue */
::v-deep(.p-card) {
  border: none !important;
  box-shadow: none !important;
}

.bottom-card {
  margin-top: 3rem;
}


.profile-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 0.5rem;
}

.image-placeholder {
  height: 600px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none; /* elimina el borde si lo había */
}

</style>
