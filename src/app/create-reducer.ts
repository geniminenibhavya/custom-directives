import { createReducer, on } from "@ngrx/store";
import { setUserName } from "./create-action";
import { initialState } from "./counterState";

export const userReducer = createReducer(
    initialState,
    on(setUserName, (state, {userName})=> ({
        ...state,
        userName
    }))
)