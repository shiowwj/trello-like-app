(function() {
    console.log('COLUMN JS COMPONENT')
    const template = document.createElement("template");
    template.setAttribute('id', 'column');
    template.innerHTML = `
        <link rel="stylesheet" href="./components/column/column.css">
        <div id="column-wrapper">
            <div id="column-content">
                <div id="column-header">
                    <div id="column-title">
                        
                    </div>
                    <div id="column-delete">
                       <p> X</p>
                    </div>
                </div>
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
            this.setColumnContent();
            console.log('column js callback');
            let addCardButton = this.shadowRoot.querySelector('button');
            // console.log(addCardbutton);
            addCardButton.addEventListener('click', this.createCardForm);

            this._columnContent = this.shadowRoot.getElementById('column-content');
            // console.log(this._columnContent);
            this._columnTitle = this.shadowRoot.getElementById('column-title');
            this._columnTitle.addEventListener('click', (e) => { this.editColumnTitle(e) });
        }

        createCardForm = () => {
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
            // need to save into db.json
            createCard.addEventListener('keydown', e => {

                let columnId = parseInt((e.path[4].id).slice(7, e.path[4].id.length));
                if (e.keyCode === 13) {
                    if (e.target.value.trim().length === 0) {
                        return;
                    }
                    textarea.blur();
                    console.log('HELLO WHAT IS THE TITLE:', e);
                    console.log('HELLO WHAT IS THE COLUMN ID STUFF:', columnId);
                    let cardInput = {
                        "title": e.target.value,
                        "description": "Add a description!",
                        "columnId": columnId,
                    }
                    db.create('cards', cardInput);

                    this._columnContent.appendChild(ca.createCard(cardInput));
                }
            })


        }

        editColumnTitle = (e) => {
            console.log('Edit column title', e.target);
            //creates text field
            let textarea = document.createElement('textarea');
            textarea.placeholder = 'What is this list for...';

            let form = document.createElement('form');
            form.id = 'column-title-form';
            form.append(textarea);

            let columnTitleDiv = this.shadowRoot.getElementById('column-title');
            columnTitleDiv.style.display = 'none';

            let currentColumnDiv = this.shadowRoot.getElementById('column-wrapper')
            currentColumnDiv.insertBefore(form, currentColumnDiv.firstChild);


            textarea.focus();
            textarea.addEventListener('blur', e => {
                columnTitleDiv.style.display = 'block';
                this.shadowRoot.getElementById('column-title-form').remove();
            });


        }

        setColumnContent() {
            if (this.hasAttribute('title')) {
                this.shadowRoot.getElementById('column-title').innerText = this.title;

            }
            if (this.hasAttribute('id')) {
                this.id = 'column_' + this.id;
            }
        }
    }
    customElements.define('column-task', Column);
})();