var express = require('express');
var router = express.Router();

//現在のサーバの環境変数を取得出来る
//herokuで導入したmongodbのURIを取得
const MONGO_URI = process.env.MONGO_URI;



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: MONGO_URI});
});

module.exports = router;
