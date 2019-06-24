console.log('COMPONENT ADDER')
const ca = {
    createColumn: column => {
        // console.log('create COLUMN!?', column)
        const columnComponent = document.createElement('column-task');
        columnComponent.setAttribute('id', column.id);
        columnComponent.setAttribute('title', column.title);
        return columnComponent;
    },
    createCard: card => {
        // console.log('create CARD!>?', card);
        const cardComponent = document.createElement('card-task');
        cardComponent.setAttribute('id', card.id);
        cardComponent.setAttribute('title', card.title);
        cardComponent.setAttribute('description', card.description);
        cardComponent.setAttribute('columnId', card.columnId);
        return cardComponent;
    }
}