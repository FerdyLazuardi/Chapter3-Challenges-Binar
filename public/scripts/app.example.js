class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.typeDriver = document.getElementById("type-driver");
    this.date = document.getElementById("date");
    this.time = document.getElementById("time");
    this.passenger = document.getElementById("passenger");
  }

  async load(penumpang) {
    const date = app.date.value;
    const time = app.time.value;

    const inputTime = new Date(`${date} ${time}`); 
    const miliTimeInput = inputTime.getTime();

    const cars = await Binar.listCars((item) => {
      const dataTime = new Date(item.availableAt); 
      const miliDataTime = Number(dataTime.getTime()); 
      const dateFilter = miliDataTime < miliTimeInput;
      const capacityFilter = item.capacity >= penumpang;

      return capacityFilter && dateFilter;
    });
    Car.init(cars);
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.classList.add('col-lg-4', 'col-sm-12', "my-3")
      node.innerHTML = car.render();

      this.carContainerElement.appendChild(node);
    });
  };

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}