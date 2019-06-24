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
        }

        connectedCallback() {
            if (!this.childElementCount) {
                this.appendChild(template.content.cloneNode(true));
            }

            this._addNewColumn = this.querySelector('button');
            this._columnList = document.getElementById('columns-wrapper');

            this._addNewColumn.addEventListener('click', this._newColumnHandler);
            db.getAll(this.initRender);

        }

        _newColumnHandler = () => {

            console.log('do something with new columnn');

            var x = {
                key: 'value',
            }

            this._columnList.appendChild(ca.createColumn(x));


        }

        initRender = (all) => {

            let cards = all.cardsData;
            let columns = all.columnsData;

            columns.forEach(column => {
                let colComponent = ca.createColumn(column);
                this._columnList.appendChild(colComponent);
                // console.log('a column is:', column);
                cards.forEach(card => {
                    if (colComponent.id === 'column' + card.columnId) {
                        let cardComponent = ca.createCard(card);
                        colComponent.shadowRoot.getElementById('column-content').appendChild(cardComponent);
                    }
                })
            })
        };

    }

    customElements.define('app-trello', App);
})();