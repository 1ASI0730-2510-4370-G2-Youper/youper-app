<script>
import PurpleCard from "@/components/sidebar.vue";

export default {
  name: "patients",
  components: { PurpleCard }
};
</script>

<script setup>
import { useRouter } from 'vue-router';
import TopBar from "@/components/topBar.vue";

const router = useRouter();

const professionals = [
  {
    name: 'Valeria Mendoza',
    specialization: ' Self-esteem improvement',
    schedule: 'Mondays at 3:00 PM',
    description: 'Patient working on building self-confidence and managing social anxiety'
  },
  {
    name: 'Carlos Paredes',
    specialization: ' Sleep disturbances',
    schedule: ' Tuesdays at 7:30 PM',
    description: 'Has trouble falling asleep due to anxiety and seeks relaxation techniques.'
  },
  {
    name: 'Luis Ortega',
    specialization: 'Relationship Therapist',
    schedule: 'Wednesdays and Fridays, 10:00 AM – 6:00 PM',
    description: 'Supports couples and individuals to build healthier emotional bonds.'
  },
  {
    name: ' María Fernanda Ruiz',
    specialization: 'Relationship conflicts',
    schedule: 'Fridays at 11:00 AM',
    description: 'Facing emotional difficulties in her romantic relationship and improving communication.'
  },
  {
    name: 'Valeria Mendoza',
    specialization: 'Emotional regulation',
    schedule: 'Thursdays at 9:00 AM',
    description: 'Working on managing mood swings and understanding emotional triggers.'
  }
];

function goToPatientInfo(pro) {
  router.push({
    name: 'patient-information',
    query: {
      name: pro.name,
      specialization: pro.specialization,
      schedule: pro.schedule,
      description: pro.description
    }
  });
}
</script>

<template>
  <PurpleCard />
  <top-bar/>
  <div class="professionals-wrapper">
    <h1 class="title">Patient Report</h1>
    <div class="card-grid">
      <pv-card
          v-for="(pro, index) in professionals"
          :key="index"
          class="professional-card"
      >
        <template #title>
          <div class="card-header">
            <i class="pi pi-user icon" />
            <div class="pro-name">{{ pro.name }}</div>
          </div>
        </template>
        <template #content>
          <div class="info"><strong>Specialization:</strong> {{ pro.specialization }}</div>
          <div class="info"><strong>Schedule:</strong> {{ pro.schedule }}</div>
          <div class="desc">{{ pro.description }}</div>
        </template>
        <template #footer>
          <div class="card-footer">
            <pv-button
                label="report"
                severity="primary"
                outlined
                rounded
                @click="goToPatientInfo(pro)"
            />
          </div>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<style scoped>
.professionals-wrapper {
  padding: 3rem 2rem;
  background-color: #f9fafb;
  min-height: 100vh;
}

.title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 600;
  color: #333;
  margin-left: 110px;
}

.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-left: 500px;
  max-width: 60%;
}

.professional-card {
  width: 320px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
  background-color: white;
  margin-left: 20px;
}

.professional-card:hover {
  transform: translateY(-5px);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  padding: 0.5rem 0;
}

.icon {
  font-size: 1.8rem;
  color: #3f51b5;
}

.info {
  margin: 0.5rem 0;
  font-size: 0.95rem;
  color: #555;
}

.desc {
  margin-top: 1rem;
  font-size: 0.9rem;
  line-height: 1.4;
  color: #666;
}

.card-footer {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}
</style>
