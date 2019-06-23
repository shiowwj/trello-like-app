(function() {
    console.log('CARD JS COMPONENT');
    const template = document.createElement("template");
    template.setAttribute('id', 'card');
    template.innerHTML = `
    <link rel="stylesheet" href="./components/cards/cards.css">
    <div id="card">
        <h3 id="card-task">
            HEllO
        </h3>
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
        }
    }
    customElements.define('card-task', Card);
})();