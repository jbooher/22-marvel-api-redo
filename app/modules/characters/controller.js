class CharactersController {

	constructor($http, $stateParams) {
    this._$http = $http;
		this.name = $stateParams.character;

		this.getData();
	}

  getData() {

		this._$http
			.get(`http://gateway.marvel.com:80/v1/public/characters?name=${this.name}&apikey=6e7bd33438a14b84d91097cd3cfc46b5`)
			.then((response) => {

				this.id = response.data.data.results[0].id;
				this.description = response.data.data.results[0].description;
				this.image = `${response.data.data.results[0].thumbnail.path}.${response.data.data.results[0].thumbnail.extension}`;

				this._$http
					.get(`http://gateway.marvel.com/v1/public/characters/${this.id}/events?apikey=6e7bd33438a14b84d91097cd3cfc46b5`)
					.then((response) => {
						this.events = response.data.data.results;
				});
		});
  }
}

export default CharactersController
