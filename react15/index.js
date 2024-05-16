import React from 'react'
import ReactDOM from 'react-dom'
import BasicMap from './src/router/index.jsx';
import "./index.scss"
import { setMain, main } from './src/utils/global'

const render = () => {
  ReactDOM.render((
    <BasicMap />
  ), document.getElementById('app-react'))
}

if (!window.__MICRO_WEB__) {
  console.log(main, 111);
  render()
}

export async function bootstrap() {
  console.log('react bootstrap')
}

export async function mount(app) {
  setMain(app) // 记录主应用传过来的方法
  window.customEvent.on('test', (e) => console.log(e.detail, 'detail---'))
  console.log('react mount')
  render()
}

export async function unmount(ctx) {
  console.log('react unmout')
  const { container } = ctx
  if (container) {
    document.querySelector(container).innerHTML = ''
  }
}
