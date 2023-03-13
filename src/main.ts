import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
//如果后缀名是.ts就报错，将.ts删除就不会
import router from './router/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// createApp(App).mount('#app')
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)
app.use(createPinia())
app.mount("#app")
