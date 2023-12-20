const express = require("express");
const router = express.Router();

const {
  AddToListService,
  DeleteFromListService,
  GetFavorite,
  GetList,
  LikedService,
} = require("../services/UserService");

const {
  AddToListValidator,
  DeleteFromListValidator,
  LikeValidator,
} = require("../utils/validator/UserValidator");




router.post("/" , AddToListValidator , AddToListService);

router.delete("/:id" , DeleteFromListValidator , DeleteFromListService);

router.put('/:id' , LikeValidator , LikedService);

router.get("/favorite/:userId",GetFavorite);

router.get("/list/:userId",GetList);

module.exports = router;