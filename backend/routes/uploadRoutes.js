import express from 'express';
import multer from 'multer';
import path from 'path';
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/')
    },
    filename:  (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      // cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`)
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
  })
  

  function checkFileType(file, cb){
      const filetypes = /jpg|jpeg|png/;
      const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
      const mimetype = filetypes.test(file.mimetype);

      if(extname && mimetype) {
          return cb(null, true)
      }else {
          cb('images only!');
      }
  }

  const upload = multer({ 
                          storage: storage,
                          fileFilter: function(req, file, cb) {
                              checkFileType(file, cb);
                          }

                        });

router.post('/', upload.single('image'), (req, res) => {
    res.send(`/${req.file.path}`);
});

export default router;