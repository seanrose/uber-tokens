Meteor.methods({
	/**
	 * Serverside HTTP request to generate
	 * an OAuth2 access token
	 *
	 * @param  {String} clientId
	 * @param  {String} clientSecret
	 * @param  {String} redirectURI
	 * @param  {String} code
	 * @param  {String} grantType
	 * @return {String}
	 */
	accessToken: function(clientId, clientSecret, redirectURI, code, grantType) {
		var data = {
			client_id: clientId,
			client_secret: clientSecret,
			grant_type: grantType || 'authorization_code',
			redirect_uri: redirectURI
		};

		if (grantType === 'authorization_code') {
			data.code = code;
		} else if (grantType === 'refresh_token') {
			data.refresh_token = code;
		}

		try {
			var tokenObject = HTTP.post(tokenURL, {
				params: data
			});
			return tokenObject;
		} catch(error) {
			console.log(error.response);
			throw new Meteor.Error(error.response.statusCode, error.response.data.error, error.response);
		}

	}
});
