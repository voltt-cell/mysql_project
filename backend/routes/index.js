import express from "express";
import { getGpsSummary, addGpsSummary } from "../controllers/GpsSummary.js";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
 
const router = express.Router();
 
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.get('/getGpsSummary', getGpsSummary);
router.post('/addGpsSummary', addGpsSummary);

 
export default router;