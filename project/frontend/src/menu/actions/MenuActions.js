import MenuConstants from "../constants/MenuConstants";

export default {
  changeMenuItem: item => ({ type: MenuConstants.CHANGE_MENU_ITEM, payload: item })
}
