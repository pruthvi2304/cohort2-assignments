let counter = 0;

function updateCounter() {
    counter = counter + 1;
    console.log(counter);
    setTimeout(() => updateCounter(), 1000);
}


updateCounter();


