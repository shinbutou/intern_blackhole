import { createRouter, createWebHistory } from 'vue-router'
//引入views頁面的.vue檔案供router設置渲染路徑
import Index from "@/views/Index.vue";

const routes = [
  {
    path: '/', //網址domain後的router設定，此處即為https:{domain}/
    name: 'Index',
    component: Index,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
