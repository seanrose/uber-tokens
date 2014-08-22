function buildAuthorizeURL(clientId, response_type, options) {
	options = options || {};

	options.response_type = response_type || 'code'; // Uber currently only supports one response_type
	options.client_id = clientId;

	return authorizeURL + '?' + qstringify(options);
}

Template.home.events({
	// TODO(seanrose): add fadeout animation
	'click button': function (e) {
		e.preventDefault();
		//TODO(seanrose): make these actually come from the HTML form
		var clientId = Meteor.settings.public.uber.clientId;

		window.location.replace(buildAuthorizeURL(clientId));
	}
});
