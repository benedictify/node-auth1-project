/*
  If the user does not have a session saved in the server

  status 401
  {
    "message": "You shall not pass!"
  }
*/
function restricted(req, res, next) {
  console.log('restricted() middleware: checks if user has an active session saved in the server');
  next();
}

/*
  If the username in req.body already exists in the database

  status 422
  {
    "message": "Username taken"
  }
*/
function checkUsernameFree(req, res, next) {
  console.log('checkUsernameFree() mw: on register, check if username is already taken')
  next();
}

/*
  If the username in req.body does NOT exist in the database

  status 401
  {
    "message": "Invalid credentials"
  }
*/
function checkUsernameExists(req, res, next) {
  console.log('checkUsernameExists() mw: on login, check if username is in db');
  next()
}

/*
  If password is missing from req.body, or if it's 3 chars or shorter

  status 422
  {
    "message": "Password must be longer than 3 chars"
  }
*/
function checkPasswordLength(req, res, next) {
  console.log('checkPasswordLength() mw: on register, error if pw < 3 characters');
  next();
}

module.exports = {
  restricted,
  checkUsernameFree,
  checkUsernameExists,
  checkPasswordLength,
}
