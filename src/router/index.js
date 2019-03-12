import Vue from 'vue';
import Router from 'vue-router';
import home from '@/pages';
import form from '@/pages/testform';
import display from '@/pages/display';
import table from '@/pages/table-render';
import tableSlot from '@/pages/table-slot';
import button from '@/pages/button';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: home,
  },
  {
    path: '/form',
    name: 'form',
    component: form,
  },
  {
    path: '/display',
    name: 'display',
    component: display,
  },
  {
    path: '/table',
    name: 'table',
    component: table,
  },
  {
    path: '/table-slot',
    name: 'table-slot',
    component: tableSlot,
  },
  {
    path: '/button',
    name: 'button',
    component: button,
  },
  ],
});
