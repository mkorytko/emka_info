const express = require("express");
const router = express.Router();
const passport = require("passport");

router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user) => {
        if (err) {
            return next(err);
        }
        if(!user) {
            return res.send("Bad response");
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            return res.json({ success: true });
        })
    })(req, res, next);
});

router.get("/info", (req, res) => {
    if (req.user) {
        return res.json({
            success: true,
            payload: req.user,
        });
    }
    return res.json({
        success: false,
    })
});

router.get('/logout', function(req, res){
    req.session.destroy(() => {
        res.json({ success: true });
    });
});

module.exports = router;
