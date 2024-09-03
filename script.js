let apictos = {};
let currentIndex = {1: 0, 2: 0, 3: 0};

async function fetchApictos() {
    try {
        const response = await fetch('apictos.json'); // URL to your JSON file
        apictos = await response.json();
        initializeCards();
    } catch (error) {
        console.error('Error fetching apicto data:', error);
    }
}

function initializeCards() {
    for (let cardId in apictos) {
        const apicto = apictos[cardId][0];
        document.getElementById(`apicto-name${cardId}`).innerText = apicto.name;
        document.getElementById(`apicto-image${cardId}`).src = apicto.img;
        document.getElementById(`apicto-image${cardId}`).alt = apicto.name;
    }
}

function changeApicto(cardId) {
    currentIndex[cardId] = (currentIndex[cardId] + 1) % apictos[cardId].length;
    const apicto = apictos[cardId][currentIndex[cardId]];
    document.getElementById(`apicto-name${cardId}`).innerText = apicto.name;
    document.getElementById(`apicto-image${cardId}`).src = apicto.img;
    document.getElementById(`apicto-image${cardId}`).alt = apicto.name;
}

// Fetch the apicto data and initialize the cards when the page loads
fetchApictos();