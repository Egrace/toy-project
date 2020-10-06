import MenuConstants from "../constants/MenuConstants";

export const menuReducer = (state = {}, action) => {
  switch (action.type) {
    case MenuConstants.CHANGE_MENU_ITEM:
      return {
        ...state,
        item: action.payload
      }
    default:
      return state
  }
}
