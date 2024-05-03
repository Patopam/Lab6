import './components/export';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		const something = this.ownerDocument.createElement('custom-card');
		this.shadowRoot?.appendChild(something);
	}
}

customElements.define('app-container', AppContainer);