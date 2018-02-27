import Vue from 'vue'
import Router from 'vue-router'

import g_index from '@/components/index'
import g_blank from '@/components/blank'
import g_settings from '@/components/settings'
import g_settings_index from '@/components/settings/settings_index'
import g_settings_chromelinks from '@/components/settings/settings_chromelinks'
import g_settings_grapplr from '@/components/settings/settings_grapplr'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: g_index,
      children: [
        {
          path: '',
          name: 'grapplr-index',
          component: g_blank
        },
        {
          path: '/settings',
          component: g_settings,
          children: [
            {
              path: '',
              name: 'settings-index',
              component: g_settings_index
            },
            {
              path: 'grapplr',
              name: 'settings-grapplr',
              component: g_settings_grapplr
            },
            {
              path: 'chrome',
              name: 'settings-chromelinks',
              component: g_settings_chromelinks
            }
          ]
        }
      ]
    },
  ]
})
