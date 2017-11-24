var router = require('express').Router();
var GameService = require ('../services/game.js');
var multer  = require('multer');
var storage = multer.diskStorage({
  destination (req, file, cb) {cb(null, './uploads/games');},
  filename (req, file, cb) {cb(null, Date.now() + file.originalname.replace(' ', '_'));}
});
var upload = multer({ storage });

var GameController = function(app) {

  router.get('/:gameID', GameController.fetchGame);
  // Post game from Affinity Space every second
  router.post('/student/:studentID/game/:gameID', upload.single('file'), GameController.submitAndProcess);
  router.post('/students/:studentID/assignments/:assignmentID/results', upload.single('file'), GameController.searchSubmitAndProcess);
  app.use('/games', router);
};

GameController.fetchGame = (req, res, next) => {
	let {gameID} = req.params.gameID;
	res.send('Current game ID is ' + req.params.gameID + GameService.overview());
};

GameController.submitAndProcess = (req, res, next) => {

  console.log("Parsing Game:"+ req.params.gameID + " for student " + req.params.studentID);
  for (val of req.body.children) {
    //console.log(val.objName)
    let properties = {
      gameID: req.params.gameID, studentID: req.params.studentID, jsonString: req.body, sprite: val
    };

    GameService.submitGame(properties);
    //GameService.submitGame(properties).then((game) => res.send("Game " + req.params.gameID + " uploaded")).catch((err) => next(err));
  }
  console.log("Game", req.params.gameID, "uploaded");
  res.send("Game " + req.params.gameID + " uploaded");
};

GameController.searchSubmitAndProcess = (req, res, next) => {

  console.log("Processing Student's submission" + req.params.studentID);
  console.log("Parsing Game:"+ req.body);
  for (val of req.body.children) {
    //console.log(val.objName)
    let properties = {
      gameID: req.params.gameID, lastUpdatedsb2FileLocation: "in database", jsonString: req.body, sprite: val
    };

    //GameService.submitGame(properties);
    //GameService.submitGame(properties).then((game) => res.send(game)).catch((err) => next(err));
  }
  res.send("Game submission complete");
};

module.exports = GameController;
