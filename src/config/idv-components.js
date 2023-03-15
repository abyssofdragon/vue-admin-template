import Vue from 'vue'
// 编辑模块
import NoteEditor from '../components/element/NoteEditor'// 富文本编辑器Quill
import Editor from '../components/element/Editor'// 富文本编辑器Quill
// 剧情模块
import Character from '../components/element/Character'// 角色
import Description from '../components/element/Description'// 背景故事
import Deduction from '../components/element/Deduction'// 背景推演
import Letter from '../components/element/Letter'// 角色日信件
// 导航卡片
import NavHun from '../components/element/NavHun'// 监管者
import NavSur from '../components/element/NavSur'// 求生者

const components = {
  // 导航卡片
  NavSur,
  NavHun,
  // 编辑模块
  Editor,
  NoteEditor,
  // 剧情模块
  Character,
  Deduction,
  Description,
  Letter
}

Object.keys(components).forEach((key) => {
  Vue.component(key, components[key])
})
