import express from "express";
import { router as cartRouter } from "./CartRouter";
import { router as orderRouter } from "./OrderRouter";
import { restaurantRouter } from "./RestaurantRouter";
import { menuRouter } from "./MenuRouter";

export const routes = express.Router();
routes.use("/api/v1/carts", cartRouter);
routes.use("/api/v1/orders", orderRouter);
routes.use("/api/v1/restaurants", restaurantRouter);
routes.use("/api/v1", menuRouter);
