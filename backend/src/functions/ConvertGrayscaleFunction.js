import cv from 'opencv4nodejs'
import path from 'path'
import { sayFileName, saveFile } from './imagePath'

export default (data) => {
  return new Promise((resolve, reject) => {
    const fileName = sayFileName(data)
    const img = cv.imread(fileName)

    const grayscale = img.cvtColor(cv.COLOR_BGR2GRAY)

    resolve(saveFile(grayscale))
  })
}
