import { Router } from 'express';
const userRoutes = Router();
import { register, login, currentUser } from '../controllers/userController.js';
import validateToken from '../middleware/validateTokenHandler.js';

userRoutes.post('/register', register);
userRoutes.post('/login', login);
// router.post('/reset-password', resetPassword);
userRoutes.get("/current", validateToken, currentUser);
export default userRoutes;
