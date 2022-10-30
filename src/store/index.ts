import {combineReducers, createStore} from "redux";
import {mobileSideMenuReducer} from "./reducers/mobileSideMenuReducer";


const rootReducer = combineReducers({
        mobileSideMenu: mobileSideMenuReducer,
    }
);

const store = createStore(rootReducer)

export default store;