import { h, app } from 'hyperapp'
import { Header } from './components/Header.js'
import { ABCEditor } from './components/ABCEditor.js'
import { LoadDialog } from './components/LoadDialog.js'
import '../node_modules/bulma/bulma.sass'
import './main.css'

const state = {
  documentId: -1,
  showDialog: false
}

const actions = {
  saveDocument: value => state => ({})
  loadDocument: value => state => ({})
  showLoad: value => state => ({ showDialog: true })
}

const view = () =>
  <main>
    <Header></Header>
    <ABCEditor></ABCEditor>
    <LoadDialog showDialog={state.showDialog} ></LoadDialog>
  </main>

const application = app(state, actions, view, document.getElementById('app'))
