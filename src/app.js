import message from 'message';

export class App {
	constructor() {
		console.log( 'MESSAGE: ', message );
	}
}

var theApp = new App();