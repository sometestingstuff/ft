const express = require ( 'express' );
const router = express.Router ();
const queryController = require( '../controllers/queryController') ();

/* GET home page. */
// router.get('/', [ queryController.get ] );

router.get ( '/',
	[
		queryController.query
	]
);

module.exports = router;
