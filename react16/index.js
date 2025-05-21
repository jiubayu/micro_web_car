import React from 'react'
import "./index.scss"
import ReactDOM from 'react-dom'
import BasicMap from './src/router';
import { setMain } from './src/utils/global'
import singleSpaReact from 'single-spa-react'; 

export const render = () => {
  ReactDOM.render(<BasicMap />, document.getElementById('app-react'))
}

if (!window.singleSpaNavigate) {
  render()
}

const lifecycle = singleSpaReact({
  React,
  ReactDOM,
  // 根组件
  rootComponent: BasicMap,
  domElementGetter,
});

// export async function bootstrap() {
//   console.log('react bootstrap')
// }

// export async function mount(app) {
//   setMain(app)
//   console.log(app, 'react mount')
//   render()
//   // setTimeout(() => {
//   //   // 调用隐藏底部方法 false 隐藏  true 显示
//   //   app.appInfo.footerState.changeFooter(false)
//   //
//   //   // 调用隐藏头部方法 false 隐藏  true 显示
//   //   app.appInfo.headerState.changeHeader(false)
//   // }, 3000)
// }

// export async function unmount(ctx) {
//   console.log('react unmout')
//   // const { container } = ctx
//   // if (container) {
//   //   document.querySelector(container).innerHTML = ''
//   // }
// }
export const bootstrap = lifecycle.bootstrap;
export const mount = lifecycle.mount;
export const unmount = lifecycle.unmount;

function domElementGetter() {
  let el = document.getElementById('app-react');
  if (!el) {
    el = document.createElement('div');
    el.id = 'people';
    document.body.appendChild(el);
  }

  return el;
}


