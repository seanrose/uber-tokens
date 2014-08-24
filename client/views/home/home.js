function buildAuthorizeURL(clientId, response_type, options) {
	options = options || {};

	options.response_type = response_type || 'code'; // Uber currently only supports one response_type
	options.client_id = clientId;
    options.redirect_uri = window.location.origin + '/token';

	return authorizeURL + '?' + qstringify(options);
}

Template.home.events({
    'submit form': function(e, template) {
        e.preventDefault();
        var $form = $(e.target);

        var clientId = $(e.target).find('[name=clientId]').val();
        var clientSecret = $(e.target).find('[name=clientSecret]').val();
        amplify.store('clientId', clientId);
        amplify.store('clientSecret', clientSecret);

        var url = buildAuthorizeURL(clientId);
        window.location.replace(url);
    }
});
