import Vue from 'vue'
// 剧情模块
import Character from '../components/element/Character'// 角色
import Deduction from '../components/element/Deduction'// 背景推演
import Letter from '../components/element/Letter'// 角色日信件
// 导航卡片
import NavHun from '../components/element/NavHun'// 监管者
import NavSur from '../components/element/NavSur'// 求生者

const components = {
  // 导航卡片
  NavSur,
  NavHun,
  // 剧情模块
  Character,
  Deduction,
  Letter
}

Object.keys(components).forEach((key) => {
  Vue.component(key, components[key])
})
