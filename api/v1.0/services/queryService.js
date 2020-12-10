module.exports = () => {

	const requestMultipleUrls = require('../utils/request-multiple-urls') ();

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
