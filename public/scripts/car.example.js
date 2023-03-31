class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="card data-card" style="height: 586px;">
        <div class="card-body d-flex flex-column">
          <img src="${this.image}" class="card-img-top" alt="${this.manufacture}" 
          style="height:222px; object-fit:cover">
          <p class="card-text" style="font-weight: 400;">${this.manufacture} / ${this.model}</p>
          <p class="card-text fw-bold" style="font-size: 16px;">Rp ${this.rentPerDay} / hari</p>
          <p class="card-text">${this.description}</p>
          <p class="card-text"><img src="asset/icon/users.svg" alt="users"
              style="width:20px; height:20px; margin-right: 16px">${this.capacity} Orang
          </p>
          <p class="card-text"><img src="asset/icon/settings.svg" alt="settings"
              style="width:20px; height:20px; margin-right: 16px">${this.transmission}
          </p>
          <p class="card-text"><img src="asset/icon/calendar.svg" alt="calendar"
              style="width:20px; height:20px; margin-right: 16px">Tahun ${this.year}
          </p>
          <div class="mt-auto">
            <a href="#" class="d-grid btn btn-primary">Pilih Mobil</a>
          </div>
        </div>
      </div>
    `;
  }

}
