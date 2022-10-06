import { Router } from 'express'
import passport from 'passport';
import { getRoot, getLogin, postLogin, getFaillogin, getLogout, failRoute, getSignup, postSignup, getFailregister, home } from '../controllers/usuariosController.js'
import { uploadFile } from '../middleware/uploadFiles.js'
import checkAuth from '../middleware/checkLogueo.js'
const router = Router()

//USUARIOS
router.get("/register", getSignup);
router.post(
    "/register", uploadFile.single('avatar'),
    passport.authenticate("register", { failureRedirect: "/failregister" }),
    postSignup
);
router.get("/failregister", getFailregister);
router.get("/login", getLogin);
router.post(
    "/login",
    passport.authenticate("login", { failureRedirect: "/faillogin" }),
    postLogin
);
router.get("/faillogin", getFaillogin);
router.get("/logout", checkAuth, getLogout);
router.get("/home", checkAuth, home)

export default router