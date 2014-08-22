function insertToken(error, result) {
	console.log(result);
}

Template.token.rendered = function () {
	var clientId = Meteor.settings.public.uber.clientId;
	var clientSecret = Meteor.settings.public.uber.clientSecret;
	var redirectURI = Meteor.settings.public.uber.redirectURI;
	var code = getParameterByName('code');

	var accessToken = Meteor.call('accessToken', clientId, clientSecret, redirectURI, code, insertToken);
};
