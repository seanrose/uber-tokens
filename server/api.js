// TODO(seanrose): comment
function accessToken(clientId, clientSecret, redirectURI, grantType, code) {

	var data = {
		client_id: clientId,
		client_secret: clientSecret,
		grant_type: grantType,
		redirect_uri: redirectURI
	};

	if (grantType === 'authorization_code') {
		data.code = code;
	} else if (grantType === 'refresh_token') {
		data.refresh_token = code;
	}

	var tokenObject = HTTP.post(tokenURL, {
		params: data
	});

	return tokenObject;
}

Meteor.methods({
	accessToken: function(clientId, clientSecret, redirectURI, code) {
		return accessToken(clientId, clientSecret, redirectURI, 'authorization_code', code);
	}
});
