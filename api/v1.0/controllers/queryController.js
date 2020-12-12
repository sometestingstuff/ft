
'use strict';

module.exports = ( ) => {

	const QueryService = require( '../services/queryService');

	const QueryController = {

		/**
		 * We can handle error here..
		 *
		 * @param err
		 * @private
		 */
		_handleError: ( err ) => {
			if ( err.status = 404 ) {
				// could handle this here.
			}
		},

		/**
		 *
		 * @param req
		 * @param res
		 * @param next
		 * @returns {Promise<void>}
		 */
		query: async ( req, res, next ) => {
			const defaultUrls = [
				'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
				'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
				'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
			];

			let reqUrls = defaultUrls;

			try {
				if ( req.query.urls ) {
					reqUrls = req.query.urls.split(',');
				}
				const responses = await QueryService ().getFromUrls ( reqUrls );
				await res.status ( 200 ).json ( responses );
			} catch (err)  {
				QueryController._handleError( err );
				res.status ( err.status ).send ( err );
			};
		}
	};

	return QueryController;

};
