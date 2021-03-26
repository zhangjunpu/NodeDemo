const express = require("express");

const error = require("../error/error");

const router = express.Router();

function newResult(code, msg, data) {
    return {
        code: code || 100000,
        msg: msg || "执行成功",
        data: data || null
    };
}

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// get /user/list
router.get("/list", (req, res, next) => {
    console.log(req.query);
    const result = newResult();
    result.data = [{ userId: 111, name: "Jack" }, { userId: 222, name: "Tom" }];
    res.json(result);
});

// get /user/:userId
router.get("/:userId", (req, res, next) => {
    console.log(req.params);
    const flag = false;
    if (flag) {
        const result = newResult();
        result.data = {
            userId: req.params.userId,
            name: "Bob"
        };
        res.json(result);
    } else {
        next(new Error(error.ERR_USER_NOT_FOUND));
    }
});

// post /user
router.post("/", (req, res, next) => {
    console.log(req.body);
    const result = newResult();
    result.data = req.body;
    res.json(result);
});

// delete /user/:id
router.delete("/:userId", (req, res, next) => {
    console.log(req.params);
    const flag = false;
    if (flag) {
        const result = newResult();
        result.data = `User ${req.params.userId} delete success`;
        res.json(result);
    } else {
        next(new Error(error.ERR_USER_DELETE_FAILURE));
    }
});

// patch /user/:id
router.patch("/:userId", (req, res, next) => {
    console.log(req.params);
    console.log(req.body);

    const result = newResult();
    result.data = { userId: req.params.userId, name: req.body.name };
    res.json(result);
});

router.use((err, req, res, next) => {
    console.log(err.name);
    console.log(err.message);
    const result = newResult();
    switch (err.message) {
        case error.ERR_USER_NOT_FOUND:
            result.code = 100001;
            break;
        case error.ERR_USER_DELETE_FAILURE:
            result.code = 100002;
            break;
        default:
            result.code = 100010;
            break;
    }
    result.msg = err.message;
    res.json(result);
});

module.exports = router