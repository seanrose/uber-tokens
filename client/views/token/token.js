function insertToken(error, result) {
	if (error) {
		var homePath = Router.routes.home.path();
		var message = 'Something went wrong! Try again?';
		this.$('a').text(message).attr('href', homePath);
	} else {
		this.$('a').text(result.data.access_token);
	}
}

Template.token.rendered = function () {
	var clientId = amplify.store('clientId');
	var clientSecret = amplify.store('clientSecret');
	var redirectURI = Meteor.settings.public.uber.redirectURI;
	var code = getParameterByName('code');
	var grantType = 'authorization_code';

	Meteor.call('accessToken', clientId, clientSecret, redirectURI, code, grantType, insertToken);
};
