<script>
import PurpleCard from "@/components/sidebar.vue";

export default {
  name: "notifications",
  components: { PurpleCard }
};
</script>

<template>
  <PurpleCard />
  <top-bar/>
  <div class="notifications-container">
    <h1 class="title">Notifications</h1>
    <div v-for="(note, i) in notifications" :key="i" class="notification">
      <div class="icon">
        <i class="pi pi-comments" />
      </div>
      <div class="message">
        <p class="message-title">{{ note.title }}</p>
        <p class="message-body">{{ note.body }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import TopBar from "@/components/topBar.vue";

const notifications = [
  {
    title: "Too much on your mind?",
    body: "Take a deep breath. You don’t have to fix everything today. Start by caring for yourself."
  },
  {
    title: "You are not your worst thoughts.",
    body: "Sometimes the voice in your head can be harsh. But those thoughts don’t define your worth. Let’s challenge that inner critic together—tap here for a gentle journaling prompt to reframe it with kindness."
  },
  {
    title: "Tonight, make rest your priority.",
    body: "You’ve done enough. Let go of today’s weight and allow yourself the rest you deserve. We’ve prepared soft ocean sounds and gentle breathing to help you sleep better."
  },
  {
    title: "You didn’t sleep well last night",
    body: "Try a sleep story and some relaxing sounds tonight."
  },
  {
    title: "It’s okay to feel hurt. It’s okay to take space.",
    body: "When a conversation leaves you feeling heavy, the best thing you can do is pause. Let’s process what happened, step by step—without judgment."
  },
  {
    title: "The world can wait. Your peace can’t.",
    body: "Silence the notifications. Close your eyes. Inhale for 4... exhale for 6. Let’s start small, right here."
  },
  {
    title: "You’ve been under pressure lately. I see it.",
    body: "Let’s acknowledge how much you’ve been carrying. You don’t have to do this alone. I’m here."
  }
];
</script>

<style scoped>
.notifications-container {
  max-width: 800px;
  margin: 3rem auto;
  padding: 0 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #1f1f1f;
  text-align: left;
}

.notification {
  display: flex;
  align-items: flex-start;
  background-color: #ececec;
  padding: 1rem 1.2rem;
  border-radius: 12px;
  margin-bottom: 1.2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s ease;
}

.notification:hover {
  background-color: #e0e0e0;
}

.icon {
  flex-shrink: 0;
  font-size: 1.8rem;
  margin-right: 1rem;
  color: #444;
}

.message-title {
  font-weight: 600;
  margin: 0 0 0.4rem 0;
  color: #222;
}

.message-body {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #333;
}
</style>
