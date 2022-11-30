'use strict';

module.exports = (error, req, res, next) => {
  //                      w                         t         f
  let errorMessage = typeof(error) === 'string' ? error : error.message;
  let status = 500;
  res.status(status).send({
    error: 500,
    route: req.path,
    query: req.query,
    body: req.body,
    message: `SERVER ERROR: ${errorMessage}`,
  });
};
