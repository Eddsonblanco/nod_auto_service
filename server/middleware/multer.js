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
