(function() {
    console.log('CARD JS COMPONENT');
    const template = document.createElement("template");
    template.setAttribute('id', 'card');
    template.innerHTML = `
    <link rel="stylesheet" href="./components/cards/cards.css">
    <div class="card" id="card">
        <h4 id="card-title">
            (Add a Title!)
        </h4>
        <p id="card-description">
        </p>
        <p id="card-edit">
            Edit
        </p>
    </div>
    `;
    class Card extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: "open" });
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }

        connectedCallback() {
            console.log('card js callback');
            this.initCards();
        }

        initCards = () => {

            for (let i = 0; i < this.attributes.length; i++) {
                this.cardContent(this.attributes[i].name, this.attributes[i].value);
            }
        }

        cardContent = (type, value) => {
            if (type === 'title') {
                this.shadowRoot.getElementById('card-title').innerText = value;
            }
            if (type === 'id') {
                this.shadowRoot.querySelector('div').id = 'card' + value;
            }
            if (type === 'description') {
                this.shadowRoot.getElementById('card-description').innerText = value;
            }
            if (type === 'columnId') {
                this.shadowRoot.querySelector('div').setAttribute('columnId', value);

            }
        }
    }
    customElements.define('card-task', Card);
})();