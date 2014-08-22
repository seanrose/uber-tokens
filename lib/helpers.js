qstringify = function(object) {
	var str = [];
		for(var p in object) {
			if (object.hasOwnProperty(p)) {
      			str.push(encodeURIComponent(p) + "=" + encodeURIComponent(object[p]));
    		}
		}
	return str.join("&");
};

getParameterByName = function(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
