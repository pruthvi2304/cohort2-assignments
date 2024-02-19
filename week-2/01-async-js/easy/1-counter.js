let counter = 0;

function updateCounter() {
    counter = counter + 1;
    console.log(counter);
}

const intervalId = setInterval(updateCounter, 1000);

setTimeout(() => clearInterval(intervalId), 10000);

