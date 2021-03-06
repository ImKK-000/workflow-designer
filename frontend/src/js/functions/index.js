import { setDataToGlobal } from '../utility/editorMode'

import LoadImageFunction from './nodeProperties/LoadImageFunction'
import BlurFunction from './nodeProperties/BlurFunction'
import GaussianBlurFunction from './nodeProperties/GaussianBlurFunction'
import BGR2GrayFunction from './nodeProperties/BGR2GrayFunction'
import CannyFunction from './nodeProperties/CannyFunction'
import DilateFunction from './nodeProperties/DilateFunction'
import ErodeFunction from './nodeProperties/ErodeFunction'
import SobelFunction from './nodeProperties/SobelFunction'
import ResizeFunction from './nodeProperties/ResizeFunction'
import ThresholdFunction from './nodeProperties/ThresholdFunction'
import OpeningFunction from './nodeProperties/OpeningFunction'
import ClosingFunction from './nodeProperties/ClosingFunction'

window.addEventListener('load', () => {
  const functionsInclude = [
    LoadImageFunction,
    BGR2GrayFunction,
    GaussianBlurFunction,
    DilateFunction,
    CannyFunction,
    ErodeFunction,
    SobelFunction,
    BlurFunction,
    ResizeFunction,
    ThresholdFunction,
    OpeningFunction,
    ClosingFunction,
  ].sort((a, b) => a.label.length < b.label.length)

  const defaultSettings = {
    x: 0,
    y: 0,
    settings: {},
    files: {
      fileId: '',
    },
  }

  // build node properties
  const properties = {}

  functionsInclude.map(property => {
    const { type, settings } = property

    // set default value by defaultValue
    if (settings) {
      Object.values(settings).map(setting => {
        setting.value = setting.defaultValue
        return true
      })
    }

    properties[type] = {
      files: [],
      ...defaultSettings,
      ...property,
    }

    return true
  })

  setDataToGlobal('NODES_PROPERTIES', properties)
})
