console.log('DB STUFF')
let colUrl = 'http://localhost:3000/columns';
let cardUrl = 'http://localhost:3000/cards';

const db = {
    //read
    getAll: (callback) => {
        let columnsData, cardsData;
        fetch(colUrl)
            .then(res => {
                return Promise.resolve(res.json());
            })
            .then(columns => {
                columnsData = columns;
                return fetch(cardUrl)
            })
            .then(res => {
                return Promise.resolve(res.json());
            })
            .then(cards => {
                cardsData = cards;
                callback({ cardsData, columnsData });
            });
    },

    //create
    create: (type, object) => {
        console.log('add stuff', { type, object });
        switch (type) {
            case 'columns':
                return fetch(colUrl, {
                        method: 'POST',
                        body: JSON.stringify(object),
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    }).then(res => res.json())
                    .then(res => console.log('okay added column', res))
                    .catch(error => console.error('Error:', error));
            case 'cards':
                return fetch(cardUrl, {
                        method: 'POST',
                        body: JSON.stringify(object),
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    }).then(res => res.json())
                    .then(res => console.log('okay added card', res))
                    .catch(error => console.error('Error:', error));
        }


    },

}