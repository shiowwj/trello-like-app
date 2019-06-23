console.log('APP JS')
class App extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.innerHTML = '<link rel="stylesheet" href="./app.css">';
        this.shadowRoot.appendChild(document.getElementById('app').content.cloneNode(true));


    }

    addColumnHandler = () => {

        console.log('helllo')
        let column = document.getElementById('column');
        console.log('I GOT ITTT', column);
    }
}

customElements.define('app-trello', App);