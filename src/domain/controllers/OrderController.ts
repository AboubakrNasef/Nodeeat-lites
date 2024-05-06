import { Request, Response } from "express";
import { Order } from "../models/Order";
import { OrderDetails } from "../models/OrderDetails";
import { OrderRepository } from "../repositry/OrderRepositry";
import { orderService } from "../service/OrderService";
import { MenuItem } from "../models/MenuItem";
import { customerService } from "../service/CustomerService";
import { HttpException } from "../../common/exceptions";
import { StatusCodes, getReasonPhrase } from "http-status-codes";
import { logger } from "../../common/logger";

export const PlaceOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  // Extract data from the request body
  const customerId = parseInt(req.params.customerId);

  try {
    logger.debug(req.body);

    let order = await orderService.PlaceOrder(customerId);

    res
      .status(StatusCodes.CREATED)
      .json({ message: "Order created successfully", order: order });
  } catch (error: any) {
    if (error instanceof HttpException) {
      res.status(error.status).json({ error: error.message });
    } else {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: "Something went wrong. Please try again later" });
    }
  }
};

export const CancelOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
  } catch (error: any) {}
};
export const UpdateOrderStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
  } catch (error: any) {}
};
export const OrdersHistory = async (
  req: Request,
  res: Response
): Promise<void> => {
  const customerId = parseInt(req.params.customerId);
  console.log("customerId: ", customerId);

  try {
    const result = await orderService.historyOfOrders(customerId);
    res.status(200).json({ message: result });
  } catch (error: any) {
    res.status(400).json({ message: error.details });
  }
};

export const Order_Details = async (
  req: Request,
  res: Response
): Promise<void> => {
  const orderId = parseInt(req.params.orderId);
  console.log(orderId);

  try {
    const result = await orderService.detailsOfOrders(orderId);
    res.status(200).json({ message: result });
  } catch (error: any) {
    res.status(400).json({ message: error.details });
  }
};

export const OrderSummary = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    res.status(200).json({});
  } catch (error: any) {}
};