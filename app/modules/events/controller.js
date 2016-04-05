class EventsController {

	constructor($http, $stateParams) {
    this._$http = $http;
		this.id = $stateParams.id;

		this.getData();
	}

  getData() {
		this._$http
			.get(`http://gateway.marvel.com:80/v1/public/events/${this.id}?apikey=6e7bd33438a14b84d91097cd3cfc46b5`)
			.then((response) => {
				console.log(response);
				this.title = response.data.data.results[0].title;
				this.description = response.data.data.results[0].description;
				this.characters = response.data.data.results[0].characters;
				this.image = `${response.data.data.results[0].thumbnail.path}.${response.data.data.results[0].thumbnail.extension}`;
				console.log(this.image);

				this._$http
					.get(`http://gateway.marvel.com:80/v1/public/events/${this.id}/characters?apikey=6e7bd33438a14b84d91097cd3cfc46b5`)
					.then((response) => {
						console.log(response);
					});
			});
  }

}

export default EventsController;
