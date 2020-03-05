import fs from 'fs'
import path from 'path'
import multer from 'multer'

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    let dir = path.join(__dirname, '../', 'storage/imgs')
    if(!fs.existsSync(dir))
      fs.mkdirSync(dir)

    cb(null, dir)
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage })

export {
  upload
}
