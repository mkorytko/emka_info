const express = require("express");
const multer  = require("multer");
const router = express.Router();
const fs = require('fs');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        console.log(file.mimetype)
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + "_" + file.originalname;
        cb(null, uniqueSuffix);
    }
})

const upload = multer({ storage });

router.post("/content/upload", upload.single("file"), function (req, res) {
    console.log(req.file)
    let filedata = req.file;
    if(!filedata)
        res.status(404).send("Ошибка при загрузке файла");
    else
        res.json({ success: true, payload: "Файл загружен" });
});

module.exports = router;
