/* global uber */

// TODO(seanrose): comment
function authorizeURL(response_type, client_id, options) {
	options = options || {};

	return uber.authorizeURL + $.param(options);
}

// TODO(seanrose): comment
function accessToken(client_id, client_secret, grant_type, options) {
	options = options || {};

	var data = {
		client_id: client_id,
		client_secret: client_secret,
		grant_type: grant_type
	};

	if (_.has(options, 'redirect_uri')) {
		data.redirect_uri = redirect_uri;
	}

	if (grant_type === 'authorization_code') {
		data.code = options.authorization_code;
	} else if (grant_type === 'refresh_token') {
		data.refresh_token = options.refresh_token;
	}

	stringifiedData = $.param(data);

	var tokenObject = HTTP.post(uber.tokenURL, {
		content: stringifiedData
	});

	return tokenObject;
}
