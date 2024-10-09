const spellBook = ['Accio', 'Expecto Patronum', 'Wingardium Leviosa' ];
let manaPoints = 50;

const castSpell = () => {
    if(manaPoints >= 5) {
        const randomIndex = Math.floor(Math.random() * spellBook.length);
        const randomSpell = spellBook[randomIndex];

        const spellElement = document.getElementById('spell');
        const message = `You cast the ${randomSpell} spell`;
        spellElement.textContent = message;
    
        manaPoints = manaPoints - 5;
        console.log('manaPoints', manaPoints);

        const manaElement = document.getElementById('mana-points');
        manaElement.textContent = manaPoints; 
    } else { 
        const outOfManaMessage = "You are out of mana!";
        spellElement.textContent = outOfManaMessage; 
        manaElement.textContent = manaPoints; // Unsure how to get this to display but dwont let user go below 0
    }
    
}

