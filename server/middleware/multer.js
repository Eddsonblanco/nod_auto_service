import fs from 'fs'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'
import multer from 'multer'

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    let dir = path.resolve(__dirname, '../../', 'storage/imgs')
    if(!fs.existsSync(dir))
      fs.mkdirSync(dir, {
        recursive: true
      })

    cb(null, dir)
  },
  filename: function(req, file, cb) {
    const uuid = uuidv4()
    const ext = path.extname(file.originalname)
    cb(null, `${uuid}${ext}`)
  }
})

const fileFilter = function (req, file, cb) {
  // Accept images only
  if(!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|svg)$/)) {
    req.fileValidationError = 'Only image files are allowed!'

    return cb(new Error('Only image files are allowed!'), false)
  }
  cb(null, true)
}

const upload = multer({ fileFilter, storage })

export {
  upload
}
