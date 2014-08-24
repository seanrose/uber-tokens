function insertToken(error, result) {
	if (error) {
		var homePath = Router.routes.home.path();
		this.$('a').attr('href', homePath);
	} else {
		this.$('a').text(result.data.access_token);
	}

	this.$('a').addClass('fade-in');
}

Template.token.rendered = function () {
	var clientId = amplify.store('clientId');
	var clientSecret = amplify.store('clientSecret');
	var redirectURI = amplify.store('redirectURI');
	var code = getParameterByName('code');
	var grantType = 'authorization_code';

	Meteor.call('accessToken', clientId, clientSecret, redirectURI, code, grantType, insertToken);
};
