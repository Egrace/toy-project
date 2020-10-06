import React from "react";
import {connect} from "react-redux";
import MenuConstants from "../../menu/constants/MenuConstants";
import DigitsRecognizer from "../../digits_recognizer/components/DigitsRecognizer";
import Home from "../../home/components/Home";

const mapStateToProps = state => ({
  item: state.menu.item
})

const Content = ({ item }) => {
  if (item === MenuConstants.ITEM_HOME)
    return <Home />
  if (item === MenuConstants.ITEM_DIGIT_RECOGNIZER)
    return <DigitsRecognizer />
}

export default connect(mapStateToProps)(Content)
