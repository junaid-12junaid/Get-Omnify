
const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true
  }
  
  const validString = function (value) {
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true
  }
  
  const isValidName = /^[A-Z][a-z,.'-]+(?: [A-Z][a-z,.'-]+)*$/
  
  const isvalidEmail = /^\s*[a-zA-Z0-9]+([\.\-\_\+][a-zA-Z0-9]+)*@[a-zA-Z]+([\.\-\_][a-zA-Z]+)*(\.[a-zA-Z]{2,3})+\s*$/

  
  const isValidPassword = function (pw) {
    let pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,15}$/;
    if (pass.test(pw)) return true;
  };
  
  const pincodeValid = /^(\d{4}|\d{6})$/
  
  
  const keyValid = function (value) {
    if (Object.keys(value).length > 0) return true;
    return false;
  };
  
  

  module.exports = { isValid, isValidName, isvalidEmail, isValidPassword, pincodeValid, keyValid, validString }