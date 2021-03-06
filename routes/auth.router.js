const express = require("express");
const router = express.Router();
const { authController } = require("../controllers");
const { genericResponse } = require("../util/responses");

router.post("/login", [authController.login, genericResponse.get]);
router.get("/reissueToken", [authController.validateToken ,authController.reissueToken, genericResponse.get]);
router.delete("/logout", [authController.logout, genericResponse.get]);

module.exports = router;
