import logger from "./logger";
import thunk from "redux-thunk";
import authenticate from "./authenticate";
import { applyMiddleware } from "redux";

export default applyMiddleware(thunk, authenticate, logger);
