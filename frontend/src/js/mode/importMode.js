import loadMode from './loadMode'

let fileUpload = null

// https://jsfiddle.net/Ln37kqc0/
window.addEventListener('load', () => {
  document.getElementById('import').addEventListener('click', () => {
    fileUpload = document.createElement('input')
    fileUpload.setAttribute('type', 'file')
    fileUpload.setAttribute('name', 'import-file')

    fileUpload.addEventListener('change', function() {
      const { files } = this
      if (files.length <= 0) return
      if (files[0].type !== 'application/json') return

      const fr = new FileReader()
      fr.onload = e => {
        if (e.target.result.length === 0) return
        loadMode(e.target.result)
      }
      fr.readAsText(files[0])
    })

    fileUpload.click()
  })
})
