Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('home', {
        path: '/',
        template: 'home'
    });

    this.route('token', {
        path: '/token',
        template: 'token'
    });
});
