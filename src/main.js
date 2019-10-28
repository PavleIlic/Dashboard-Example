import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BoostrapVue from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCog, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faGift } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { faChartArea } from '@fortawesome/free-solid-svg-icons'
import { faStickyNote } from '@fortawesome/free-solid-svg-icons'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { faChartPie } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faSprayCan } from '@fortawesome/free-solid-svg-icons'


library.add(faUserSecret)
library.add(faGift)
library.add(faBars)
library.add(faSpaceShuttle)
library.add(faAngleDown)
library.add(faSearch)
library.add(faInbox)
library.add(faCopy)
library.add(faChartArea)
library.add(faStickyNote)
library.add(faCog)
library.add(faBullhorn)
library.add(faChartPie)
library.add(faCalendarAlt)
library.add(faPlane)
library.add(faPlus)
library.add(faStar)
library.add(faDesktop)
library.add(faGraduationCap)
library.add(faBuilding)
library.add(faAngleUp)
library.add(faCloudDownloadAlt)
library.add(faAngleLeft)
library.add(faAngleRight)
library.add(faSprayCan)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BoostrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

