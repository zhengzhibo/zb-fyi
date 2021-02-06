import { createApp } from 'vue'
import router, { setupRouter } from '/@/router'

import App from '/@/App.vue'
import './styles/index.scss'

const app = createApp(App)

// Configure routing
setupRouter(app)

router.isReady().then(() => {
  app.mount('#app', true)
})

