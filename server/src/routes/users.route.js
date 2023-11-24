import express from "express";
import userController from "../controllers/users.controller.js";

const router = express.Router();

router.get('/', userController.getAll);
router.post('/', userController.create);
router.get('/:id', userController.getById);
router.delete('/:id', userController.delete);
router.patch("/:id", userController.update);
// router.get("/completed", userController.getUserWhereTaskStatus);


export default router
