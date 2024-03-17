/* ================================= SETUP ================================= */

const router = require('express').Router();

/* =========================== INIT CONTROLLERS ============================ */

const staticCtrl = require('../controllers/static.ctrl');


/* ================================ ROUTES ================================= */

// Serve client frontend
router.get('/', staticCtrl.serveClient);


/* ================================ EXPORT ================================= */

module.exports = router;
