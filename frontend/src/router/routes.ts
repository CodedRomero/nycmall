import { RouteRecordRaw } from 'vue-router';
import AddProductPage from '../pages/add_product.vue';
import ViewProductPage from '../pages/view_product.vue';
import EditProductPage from '../pages/edit_product.vue';
import IndexPage from '../pages/indexPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => IndexPage,
      },
      {
        path: 'add',
        component: () => AddProductPage,
      },
      {
        path: 'view',
        component: () => ViewProductPage,
      },
      {
        path: 'edit',
        component: () => EditProductPage,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
