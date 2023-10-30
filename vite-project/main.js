import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import EmbedJS from 'embed-js'
import url from 'embed-plugin-url'
import emoji from 'embed-plugin-emoji'



document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    <div id="element">
      <!--===== your string here =======-->
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))

const x = new EmbedJS({
  input: document.getElementById('element'),
  plugins: [
    url(),
    emoji()
  ]
})