import fs from 'fs'
import path from 'path'

export const removeImage = image => {
  const pathImage = image.replace('/api/public/', '')
  const pathAbsolute = path.resolve(__dirname, '../../', `storage/imgs/${pathImage}`)

  if(fs.existsSync(pathAbsolute))
    fs.unlinkSync(pathAbsolute)
}
