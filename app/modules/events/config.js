function config($stateProvider) {
  $stateProvider
    .state('events', {
      url: '/events/:id',
      controller: 'EventsController as eventCtrl',
      template: require('./event.html')
    })
}

export default config;
