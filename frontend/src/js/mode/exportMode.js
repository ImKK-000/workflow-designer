import { getDataFromGlobal } from '../utility/editorMode'

// http://www.codevoila.com/post/30/export-json-data-to-downloadable-file-using-javascript
const exportMode = () => {
  const nodes = getDataFromGlobal('NODES')
  const lines = getDataFromGlobal('LINES')

  const newNodes = Object.values(nodes).map(node => {
    const { settings } = node

    // remove value depth 0
    delete node.label
    delete node.limitInput

    // remove value depth 1: settings
    Object.keys(settings).map(settingKey => {
      const { value } = settings[settingKey]
      settings[settingKey] = { value }
      return true
    })

    return node
  })

  const newLines = Object.keys(lines).map(lineId => ({
    lineId,
    ...lines[lineId],
  }))

  return {
    nodes: newNodes,
    lines: newLines,
  }
}

window.addEventListener('load', () => {
  document.getElementById('export').addEventListener('click', () => {
    const jsonData = exportMode()
    const dataStr = JSON.stringify(jsonData)
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`
    const exportFileDefaultName = 'workflow-export.json'

    // fake click for download file
    const linkElement = document.createElement('a')
    linkElement.setAttribute('href', dataUri)
    linkElement.setAttribute('download', exportFileDefaultName)
    linkElement.click()
  })
})

export default exportMode
