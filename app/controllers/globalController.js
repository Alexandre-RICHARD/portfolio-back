const pjson = require("../../package.json");

// Notre controller de base qui ne sert qu'à faire un test de fonctionnement et indique une réponse sur l'URL de base du server
const globalController = {
    test: (req, res) => {
        const fullUrl = `${req.protocol}://${req.headers.host}${req.originalUrl}`;
        res.json(`Serveur fonctionnel à l'adresse ${fullUrl} - Version actuelle : ${pjson.version}`);
    },
};

module.exports = globalController;
