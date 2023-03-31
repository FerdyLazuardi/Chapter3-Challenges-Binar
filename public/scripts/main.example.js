const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const app = new App();

app.loadButton.addEventListener('click', function() {
    const typeDriver = app.typeDriver.value;
    const passenger = app.passenger.value;
    
    if (passenger > 0 && typeDriver) {
        app.clear();
        app.load(passenger).then(app.run);
    }
})

app.clearButton.addEventListener('click', function () {
    app.clear();
})
