(function() {
    console.log('APP JS')
    const template = document.createElement('template');
    template.setAttribute('id', 'app');
    template.innerHTML = `
        <link rel="stylesheet" href="./app.css">
        <div id="app-wrapper">
            <div id="button-wrapper">
                <button>
                    Add Column
                </button>
                <div id="search-bar-wrapper">
                <input id="search-bar" placeholder="Search stuff">
                </input>
                </div>
            </div>
            <div id="columns-wrapper">
            </div>
        </div>
        `;

    class App extends HTMLElement {
        constructor() {
            super();

            // const shadowRoot = this.attachShadow({
            //     mode: 'open'
            // });
            // this.shadowRoot.innerHTML = '<link rel="stylesheet" href="./app.css">';
            // this.shadowRoot.appendChild(document.getElementById('app').content.cloneNode(true));


        }

        connectedCallback() {
            if (!this.childElementCount) {
                this.appendChild(template.content.cloneNode(true));
            }

            this._addNewColumn = this.querySelector('button');
            this._columnList = document.getElementById('columns-wrapper');

            this._addNewColumn.addEventListener('click', this._newColumnHandler);


        }

        _newColumnHandler = () => {

            console.log('do something with new columnn');

            var x = {
                key: 'value',
            }

            this._columnList.appendChild(ca.createColumn(x));


        }

    }

    customElements.define('app-trello', App);
})();