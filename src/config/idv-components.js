import Vue from 'vue'
// 剧情模块
import Letter from '../components/element/Letter'// 角色日信件
// 导航卡片
import NavHun from '../components/element/NavHun'// 监管者
import NavSur from '../components/element/NavSur'// 求生者

const components = {
  NavHun,
  NavSur,
  Letter
}

Object.keys(components).forEach((key) => {
  Vue.component(key, components[key])
})
