import  Express from "express";
import { create,getAll, getone,update,delet } from "../Controller/usercontroller.js";
const router = Express.Router(); // Use express.Router() to create a router
router.post("/create", create); // Define the route for creating a user
router.get("/getall", getAll); 
router.get("/getone/:id", getone);
router.put("/update/:id", update); 
router.delete("/delet/:id", delet); 
export default router; 