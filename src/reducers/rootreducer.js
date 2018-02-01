import links from "./linksreducer";
import comments from "./commentsreducer"
import { combineReducers } from "redux";


//one store with multiple reducers combined
// 
export default combineReducers({ 
  links: links, 
  comments: comments
});
