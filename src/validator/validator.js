const mongoose = require('mongoose')

//=========================// isValidEmail //===================================

const isValidEmail = function (value) {
  let emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
  if (emailRegex.test(value)) return true;
};

//============================// idCharacterValid //============================

const isIdValid = function (value) {
  return mongoose.Types.ObjectId.isValid(value);
};

//==========================// isValidString //==================================



const isValidNumber = function (value) {
  if (typeof value === "undefined" || value === 'null') return false;
  if (typeof value === "Number" && value.trim().length === 0) return false;
  return true;
};

//==============================// isValidName //===============================

const isValidName = function (name) {
  if (/^[a-zA-Z ]+$/.test(name)) {
    return true;
  }
};



//==============================// isValidMobile //===============================

const isValidMobile = function (mobile) {
  if (/^[0]?[6789]\d{9}$/.test(mobile)) {
    return true
  }
}

const isValidadd = function (value) {
  return (/^[a-zA-Z0-9_ ,.-]{2,50}$/).test(value)
}


//==============================// isValidPassword //==============================




const isValidPrice = function (price) {
  return /^[1-9]\d{0,7}(?:\.\d{1,2})?$/.test(price)
}
//=============================// module exports //================================

module.exports = { isValidEmail, isIdValid, isValidNumber, isValidName, isValidadd, isValidMobile, isValidPrice }