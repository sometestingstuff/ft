module.exports = () => {

	const axios = require ( 'axios' );

	const RequestMultipleUrls = {

		/**
		 * Given a URL, return the response
		 *
		 * Note: AXIOS returns response.data   Return this..not response by itself.
		 * @param url
		 * @returns {Promise<unknown>}
		 * @private
		 */
		_getData: ( url ) => {
			return new Promise ( ( resolve, reject ) => {
				//url = null;
				axios.get ( url ).then ( ( response ) => {
					resolve ( response.data );
				} ).catch ( ( err ) => {
					reject ( err );
				} );
			} )
		},

		/**
		 * ~Given an array of URLs, return a promise that will resolve
		 * with the content.
		 *
		 * @param urls
		 * @returns {Promise<unknown>}
		 */
		get: ( urls ) => {
			return new Promise ( ( resolve, reject ) => {
				const promiseArray = [];
				urls.forEach ( ( url ) => {
					promiseArray.push ( RequestMultipleUrls._getData ( url ) );
				} );

				Promise.all ( promiseArray ).then ( ( response ) => {
					resolve ( response );
				} ).catch ( ( err ) => {
					reject( err );
				} )
			} );
		}
	}

	return RequestMultipleUrls;
}
