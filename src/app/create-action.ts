import { createAction, props } from "@ngrx/store";

export const setUserName = createAction(
    '[User] Set User Name',
    props<{ userName: string }>()
)