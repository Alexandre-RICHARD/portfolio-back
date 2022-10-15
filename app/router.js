const { Router } = require("express");
const router = Router();

// On importe nos différents controllers
const globalController = require("./controllers/globalController");
const portfolioController = require("./controllers/portfolioController");
const accountController = require("./controllers/accountController");
const chessController = require("./controllers/chessController");

// On associe chaque duo de requêtes/méthodes à un controller et à une fonction
router.get("/", globalController.test);

router.post("/contact", portfolioController.contactSendMail);

router.post("/registration", accountController.registration);
router.post("/connection", accountController.connection);

router.get("/chess/game/data", chessController.getChessGameData);
router.get("/chess/board/reset", chessController.resetBoardData);
router.post("/chess/move/verif", chessController.moveVerification);

// Si aucune la requête n'est pas géré par le serveur, le router renvoit une 404 avec un message
router.use((req, res) => {
    res.status(404).json("404 - Pas de route gérée par le serveur sur cette adresse");
});

module.exports = router;
