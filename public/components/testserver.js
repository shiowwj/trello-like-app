(function() {
    console.log('TEST BUTTON JS COMPONENT')
    const template = document.createElement("template");
    template.setAttribute('id', 'column');
    template.innerHTML = `
    <link rel="stylesheet" href="./components/column/column.css">
    <div id="column-wrapper">
        <input id="server-stuff">Server stuff</input>
        <button id="add-card-button">
                ADD CARD
        </button>
    </div>
    `;



    class TestServer extends HTMLElement {

        constructor() {
            super();

        }
        connectedCallback() {
            if (!this.childElementCount) {
                this.appendChild(template.content.cloneNode(true));
            }

            this._serverInput = this.querySelector('input');
            this._serverInput.addEventListener('keydown', e => { this.inputField(e) });

            this._button = this.querySelector('button');
            this._button.addEventListener('click', this.buttonHandler);
            //Get all data
            let x = {
                "title": "stuff",
            };
            let y = {
                "title": "Random Card",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "columnId": 2
            };
            // db.create('columns', x);
            // db.create('cards', y);

        }

        inputField = (e) => {
            console.log(e.target.value);
        }

        buttonHandler = () => {
            console.log('BUTTON TIME')

        }
        initRender = (stuff) => {

            console.log('heyy', stuff);


        };

    }
    customElements.define('test-server', TestServer);

})();

/*
            async function fetchColumns() { // async request to db.json
    
                let response = await fetch(`http://localhost:3000/columns`);
                let data = await response.json();
                // console.log(Promise.resolve(data));
                return data
            }
    
            fetchColumns().then(f => {
                console.log('HERE', f)
                dataIn = f;
                return f;
            })
            */