<template>
  <div class="sidebar">
    <!-- Logo -->
    <div class="sidebar-logo">
      <img src="@/assets/images/Logo%20.png" alt="Logo" />
    </div>

    <!-- Menú principal -->
    <ul class="menu-list">
      <li
          v-for="item in menuItems"
          :key="item.label"
          @click="navigateTo(item.route)"
          :class="{ active: $route.path === item.route }"
      >
        <i :class="item.icon"></i>
        <span>{{ item.label }}</span>
      </li>
    </ul>

    <!-- Botón de Cerrar sesión fijo abajo -->
    <div class="logout" @click="logout">
      <i class="pi pi-sign-out"></i>
      <span>Cerrar sesión</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenu',
  data() {
    return {
      menuItems: [
        { label: 'Módulos', icon: 'pi pi-th-large', route: '/modules' },
        { label: 'Música', icon: 'pi pi-volume-up', route: '/musics' },
        { label: 'Meditación', icon: 'pi pi-star', route: '/meditations-section' },
        { label: 'Profesionales', icon: 'pi pi-users', route: '/professionals' },
        { label: 'Notificaciones', icon: 'pi pi-bell', route: '/notifications' },
        { label: 'Patients', icon: 'pi pi-user', route: '/patients' }
      ]
    };
  },
  methods: {
    navigateTo(route) {
      if (this.$route.path !== route) {
        this.$router.push(route);
      }
    },
    logout() {
      // Aquí puedes agregar lógica adicional como limpiar tokens o cerrar sesión
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 220px;
  height: 100vh;
  background-color: #A9A1C7;
  color: #2b2f30;
  padding: 1rem;
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  font-weight: bold;
}

.sidebar-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
}

.sidebar-logo img {
  max-width: 250px;
  max-height: 140px;
  object-fit: contain;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
}

.menu-list li {
  display: flex;
  align-items: center;
  padding: 30px 0;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.2s ease;
  padding-left: 10px;
}

.menu-list li:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.menu-list li.active {
  background-color: rgba(255, 255, 255, 0.4);
  font-weight: bolder;
}

.sidebar i {
  font-size: 1.2rem;
  margin-right: 12px;
}

.logout {
  margin-top: auto;
  display: flex;
  align-items: center;
  padding: 70px 0;
  padding-left: 10px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.2s ease;
}

.logout:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.logout i {
  font-size: 1.2rem;
  margin-right: 12px;
}
</style>
