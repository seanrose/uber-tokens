/**
 * Clears all values currently stored via amplify
 * @return {undefined}
 */
amplify.clearStore = function() {
	_.each(amplify.store(), function(value, key) {
		amplify.store(key, null);
	});
};

/**
 * Inserts the access token into the page
 * If an error occurs, an error message is
 * inserted instead
 *
 * @param  {Object} error
 * @param  {Object} result
 * @return {undefined}
 */
function insertToken(error, result) {
	if (error) {
		var homePath = Router.routes.home.path();
		this.$('a').attr('href', homePath);
	} else {
		this.$('a').text(result.data.access_token);
	}

	this.$('a').addClass('fade-in');
	amplify.clearStore();
}

Template.token.rendered = function () {
	var clientId = amplify.store('clientId');
	var clientSecret = amplify.store('clientSecret');
	var redirectURI = amplify.store('redirectURI');
	var code = getParameterByName('code');
	var grantType = 'authorization_code';

	Meteor.call('accessToken', clientId, clientSecret, redirectURI, code, grantType, insertToken);
};
