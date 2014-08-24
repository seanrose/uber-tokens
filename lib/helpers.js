/**
 * Turns an object into a querystring e.g.
 * {foo: bar, bleep: bloop}
 * becomes
 * foo=bar&bleep=bloop
 *
 * @param  {Object} object
 * @return {String}
 */
qstringify = function(object) {
	var str = [];
		for(var p in object) {
			if (object.hasOwnProperty(p)) {
      			str.push(encodeURIComponent(p) + "=" + encodeURIComponent(object[p]));
    		}
		}
	return str.join("&");
};

/**
 * Fetches the value for the specific query string
 * parameter
 *
 * @param  {String} name
 * @return {String}
 */
getParameterByName = function(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
