console.log('COMPONENT ADDER')
const ca = {
    createColumn: column => {
        console.log('create COLUMN!?')
        const columnNode = document.createElement('column-task');
        columnNode.setAttribute('id', '2');
        columnNode.setAttribute('title', 'NEW COLuMN YAY');
        return columnNode;
    },
    createCard: card => {
        console.log('create CARD!>?');
        const cardNode = document.createElement('card-task');
        cardNode.setAttribute('id', '2');
        cardNode.setAttribute('title', 'NEW CARD YAY');
        return cardNode;
    }
}