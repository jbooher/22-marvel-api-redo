function config($stateProvider) {
  $stateProvider
    .state('characters', {
      url: '/characters/:character',
      controller: 'CharactersController as charCtrl',
      template: require('./character.html')
    });
}

export default config;
