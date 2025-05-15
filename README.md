# Youper App

## Descripción
Aplicación web desarrollada con Vue.js y ASP.NET Core, siguiendo los principios de Material Design.

## Tecnologías Utilizadas
- Vue.js 3
- PrimeVue (Biblioteca de componentes UI)
- Material Design
- ASP.NET Core (Backend)
- Axios (Cliente HTTP)

## Requisitos Previos
- Node.js (versión 16 o superior)
- npm (incluido con Node.js)
- .NET Core SDK 6.0 o superior

## Configuración del Proyecto

### Frontend (Vue.js)
1. Instalar dependencias:
```bash
npm install
```

2. Crear archivo .env en la raíz del proyecto:
```
VITE_API_URL=http://localhost:5000/api
VITE_APP_TITLE=Youper App
```

3. Iniciar servidor de desarrollo:
```bash
npm run dev
```

### Backend (ASP.NET Core)
1. Navegar al directorio del backend
2. Restaurar paquetes NuGet:
```bash
dotnet restore
```

3. Iniciar el servidor:
```bash
dotnet run
```

## Estructura del Proyecto
```
src/
├── assets/
│   └── styles/        # Estilos globales y variables CSS
├── components/        # Componentes reutilizables
├── views/            # Vistas/páginas de la aplicación
├── services/         # Servicios para API y lógica de negocio
└── store/            # Estado global de la aplicación
```

## Convenciones de Código
- Seguir las guías de estilo de Vue.js
- Utilizar Composition API para los componentes
- Seguir los principios de Material Design para la UI
- Mantener los componentes pequeños y reutilizables

## Scripts Disponibles
- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Compila el proyecto para producción
- `npm run preview`: Vista previa de la build de producción

## Contribución
1. Crear un branch para la feature
2. Commit de los cambios
3. Push al branch
4. Crear Pull Request

## Licencia
[MIT](https://choosealicense.com/licenses/mit/)
