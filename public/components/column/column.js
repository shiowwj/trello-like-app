(function() {
    console.log('COLUMN JS COMPONENT')
    const template = document.createElement("template");
    template.setAttribute('id', 'column');
    template.innerHTML = `
        <link rel="stylesheet" href="./components/column/column.css">
        <div id="column-wrapper">
            <div id="column-content">
                <h1 id="column-title">
                    (Nil)
                </h1>
                <p id="column-delete">
                    X
                </p>
            </div>
            <button id="add-card-button">
                    ADD CARD
            </button>
        </div>
    `;

    class Column extends HTMLElement {

        constructor() {
            super();
            this.attachShadow({ mode: "open" });
            this.shadowRoot.appendChild(template.content.cloneNode(true));

        }
        connectedCallback() {
            console.log('column js callback');
            let addCardbutton = this.shadowRoot.querySelector('button');
            // console.log(addCardbutton);
            addCardbutton.addEventListener('click', this.createCardForm);

            this._columnContent = this.shadowRoot.getElementById('column-content');
            console.log(this._columnContent);
        }

        createCardForm = () => {
            var x = {
                    key: 'value',
                }
                //when create card button is clicked
                //creates text field
            let textarea = document.createElement('textarea');
            textarea.placeholder = 'Enter a title for this card...';

            let form = document.createElement('form');
            form.id = 'add-card-form';
            form.append(textarea);
            //remmoves button display
            let addCardButton = this.shadowRoot.getElementById('add-card-button');
            addCardButton.style.display = 'none';
            //appends form to specified column 
            this.shadowRoot.getElementById('column-wrapper').appendChild(form);

            //text box reverts back to add button if clicked away
            textarea.focus();
            textarea.addEventListener('blur', e => {
                addCardButton.style.display = 'block';
                this.shadowRoot.getElementById('add-card-form').remove();
            });

            let createCard = this.shadowRoot.getElementById('add-card-form');
            //when user presses enter, new card to be created
            createCard.addEventListener('keydown', e => {
                if (e.keyCode === 13) {
                    if (e.target.value.trim().length === 0) {
                        return;
                    }
                    this._columnContent.appendChild(ca.createCard(x));
                }
            })


        }
    }
    customElements.define('column-task', Column);
})();