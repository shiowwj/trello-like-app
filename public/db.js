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
        fetch(colUrl, {
                method: 'POST',
                body: JSON.stringify(object.key),
            }).then(res => res.json())
            .then(res => console.log('okay added', res))
            .catch(error => console.error('Messed up:', error));

    },

}

// fetch(url, {
//     method: 'POST', // or 'PUT'
//     body: JSON.stringify(data), // data can be `string` or {object}!
//     headers:{
//       'Content-Type': 'application/json'
//     }
//   }).then(res => res.json())
//   .then(response => console.log('Success:', JSON.stringify(response)))
//   .catch(error => console.error('Error:', error));