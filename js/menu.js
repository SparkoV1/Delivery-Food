const restourant = 'food-band'

const renderItems = (data) => {
    console.log(data)
}

fetch(`https://food-delivery-58576-default-rtdb.firebaseio.com/db/${restourant}.json`)
    .then((response) => response.json())
    .then((data) => {
        renderItems(data)
    })
    .catch((error) => {
        console.log(error)
    })