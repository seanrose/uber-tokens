Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('token', {
        path: '/',
        template: 'tokens'
    });

    this.route('webhook', {
        path: '/webhook',

        where: 'server',

        action: function() {
            var request = this.request.body;



            this.response.writeHead(200, {'Content-Type': 'text/html'});
            this.response.end('yolo\n');
        }
    });
});
