
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Fluent 2014 - Introduction to ExpressJS' });
};