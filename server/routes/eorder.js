import { Router } from "express";
import { getAllEorder,getEorderById,addEorder,updateEorder,deleteEorder} from "../controllers/eorder-controllers.js";

const eorderRouter = Router();

eorderRouter.get("/", getAllEorder);
eorderRouter.get("/:id", getEorderById);
eorderRouter.post("/add", addEorder);
eorderRouter.put("/:id", updateEorder);
eorderRouter.delete("/:id", deleteEorder);


export default eorderRouter;