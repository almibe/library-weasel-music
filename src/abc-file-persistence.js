import { remote } from 'electron';

export function newDoc(v) {
  if (saveCheck(v)) {
    v.editorContent = v.abcTemplate;
    v.$nextTick(() => { v.abcEditor.fireChanged(); })
    v.$refs.abcEditor.focus();
  }
}

export function saveDoc() {
  if (this.fileReference != null) {
    this.handleSaveAs();
  } else {
    this.writeFile();
  }
}

export function saveDocAs() {
  this.handleSaveAs()
}

export function loadDoc() {
  if (this.saveCheck()) {
    this.handleLoad()
  }
}

function saveCheck(v) {
  if (v.editorContent === v.abcTemplate && v.fileReference === null) {
    return true;
  } else {
    if (v.fileReference === null || v.checkUnsavedFile()) {
      const result = promptSave()
      if (result === 0) { //yes
        return handleSave();
      } else if (result === 1) { //no
        return true;
      } else { //cancel
        return false;
      }
    } else {
      return true;
    }
  }
}

function checkUnsavedFile() {
  //TODO
}

function promptSave() {
  return remote.dialog.showMessageBox({
    type: 'question',
    buttons: ['Yes', 'No', 'Cancel'],
    defaultId: 0,
    title: 'Do you want to save?',
    message: 'Do you want to save?',
    cancelId: 2
  });
}

function handleSaveAs() {
  //TODO show show as dialog
  //TODO update file reference
  this.writeFile();
}

function handleLoad() {
  //TODO show load dialog
  //TODO set file reference
  //TODO load file
}

function writeFile() {
  //TODO
}
