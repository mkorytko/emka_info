const express = require("express");
const router = express.Router();
const path = require("path");

const userRoutes = require("./user");
router.use("/api/user", userRoutes);

const adminApi = require("./adminApi");
router.use("/api/admin", adminApi);

const auth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/");
    }
}

router.get("/admin", auth, (req, res) => {
    res.sendFile(path.resolve("public_html/admin.html"));
});

router.get("/*", (req, res) => {
    res.sendFile(path.resolve("public_html/index.html"));
});

module.exports = router;
