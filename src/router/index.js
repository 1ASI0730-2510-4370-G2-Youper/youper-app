import {createRouter, createWebHistory} from "vue-router";
import loginComponent from "@/public/pages/login.component.vue";
import registerComponent from "@/public/pages/register.component.vue";
import objetivoComponent from "@/public/pages/objetivo.component.vue";
import testComponent from "@/public/pages/test.component.vue";
import phraseComponent from "@/public/pages/phrase.component.vue";
import interpersonalModuleComponent from "@/public/pages/interpersonal-module.component.vue";
import meditationVideoComponent from "@/public/pages/meditation-video.component.vue";
import meditationsSectionComponent from "@/public/pages/meditations-section.component.vue";
import modulesComponent from "@/public/pages/modules.component.vue";
import musicsComponent from "@/public/pages/musics.component.vue";
import notificationsComponent from "@/public/pages/notifications.component.vue";
import patientInformationComponent from "@/public/pages/patient-information.component.vue";
import professionalsComponent from "@/public/pages/professionals.component.vue";
import selfModuleComponent from "@/public/pages/self-module.component.vue";
import stressModuleComponent from "@/public/pages/stress-module.component.vue";
import tipsComponent from "@/public/pages/tips.component.vue";
import patientsComponent from "@/public/pages/patients.component.vue";
/**
 * Vue Router instance
 * @property {Object} history
 * @property {Array} routes
 */

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',           // Ruta raíz
            redirect: '/login'   // Redirección automática al login
        },
        {
            path: '/login',
            name: 'login',
            component: loginComponent
        },
        {
            path: '/register',
            name: 'register',
            component: registerComponent
        },
        {
            path: '/objetivo',
            name: 'objetivo',
            component: objetivoComponent
        },
        {
            path: '/test',
            name: 'test',
            component: testComponent
        },
        {
            path: '/phrase',
            name: 'phrase',
            component: phraseComponent
        },
        {
            path: '/interpersonal-module',
            name:'interpersonal-module',
            component:interpersonalModuleComponent
        },
        {
            path:'/meditation-video',
            name:'meditation-video',
            component:meditationVideoComponent
        },
        {
            path:'/meditations-section',
            name:'meditations-section',
            component:meditationsSectionComponent
        },
        {
            path:'/modules',
            name:'modules',
            component:modulesComponent
        },
        {
            path:'/musics',
            name:'musics',
            component:musicsComponent
        },
        {
            path:'/notifications',
            name:'notifications',
            component:notificationsComponent
        },
        {
            path:'/patient-information',
            name:'patient-information',
            component:patientInformationComponent
        },
        {
            path:'/professionals',
            name:'professionals',
            component:professionalsComponent
        },
        {
            path:'/self-module',
            name:'self-module',
            component:selfModuleComponent
        },
        {
            path:'/stress-module',
            name:'stress-module',
            component:stressModuleComponent
        },
        {
            path:'/tips',
            name:'tips',
            component:tipsComponent
        },
        {
            path:'/patients',
            name:'patients',
            component:patientsComponent
        }
    ]
});
export default router;



/**
 const router= createRouter({
 history: createWebHistory(),
 routes: [
 {path: '/login', name:"login", component:loginComponent},
 ]

 });
 */
