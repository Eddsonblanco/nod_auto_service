import fs from 'fs'
import path from 'path'
import { v5 as uuidv5 } from 'uuid'
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
    const uuid = uuidv5('http://example.com/hello', uuidv5.URL)
    const ext = path.extname(file.originalname)
    cb(null, `${uuid}${ext}`)
  }
})

const fileFilter = function (req, file, cb) {
  // Accept images only
  if(!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = 'Only image files are allowed!'

    return cb(new Error('Only image files are allowed!'), false)
  }
  cb(null, true)
}

const upload = multer({ fileFilter, storage })

export {
  upload
}
