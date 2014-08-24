/**
 * Builds the OAuth2 authorization URL
 *
 * @param  {String} clientId
 * @param  {String} redirectURI
 * @param  {String} response_type
 * @param  {String} options
 * @return {String}
 */
function buildAuthorizeURL(clientId, redirectURI, response_type, options) {
	options = options || {};

	options.response_type = response_type || 'code'; // Uber currently only supports one response_type
	options.client_id = clientId;
    options.redirect_uri = redirectURI;

	return authorizeURL + '?' + qstringify(options);
}

Template.home.events({
    'submit form': function(e) {
        e.preventDefault();
        var $form = $(e.target);

        // The OAuth 2 Parameters
        var clientId = $(e.target).find('[name=clientId]').val();
        var clientSecret = $(e.target).find('[name=clientSecret]').val();
        var redirectURI = window.location.origin + '/token';

        // Store them all on the client
        amplify.store('clientId', clientId);
        amplify.store('clientSecret', clientSecret);
        amplify.store('redirectURI', redirectURI);

        var url = buildAuthorizeURL(clientId, redirectURI);
        window.location.replace(url);
    }
});
