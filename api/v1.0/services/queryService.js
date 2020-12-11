module.exports = () => {

	const requestMultipleUrls = require('jy-ft-request-multiple-urls') ();

	/**
	 * Query Service
	 * @type {{get: (function(*=): Promise<unknown>)}}
	 */
	const QueryService = {

		getFromUrls: ( urls ) => {
			return requestMultipleUrls.get( urls );
		}
	}

	return QueryService;
}
