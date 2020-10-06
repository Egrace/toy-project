import React from "react";
import {connect} from "react-redux";
import MenuActions from "../actions/MenuActions";
import MenuConstants from "../constants/MenuConstants";
import MenuItem from "./MenuItem";

const mapStateToProps = state => ({
  currentItem: state.menu.item
})

const mapDispatchToProps = dispatch => ({
  onHomeClick: () => dispatch(MenuActions.changeMenuItem(MenuConstants.ITEM_HOME)),
  onDigitRecognizerClick: () => dispatch(MenuActions.changeMenuItem(MenuConstants.ITEM_DIGIT_RECOGNIZER))
})

const Menu = ({ currentItem, onHomeClick, onDigitRecognizerClick }) => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top'>
      <a className='navbar-brand' href="#">Egrace</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <MenuItem
              onClick={onHomeClick}
              text='Home'
              isActive={currentItem === MenuConstants.ITEM_HOME} />
          <MenuItem
              onClick={onDigitRecognizerClick}
              text='Digit Recognizer'
              isActive={currentItem === MenuConstants.ITEM_DIGIT_RECOGNIZER} />
        </ul>
      </div>
    </nav>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
