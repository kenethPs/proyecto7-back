'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('mesa', [
      { "NumeroMesa": 1, "Capacidad": 30, "Estado": "nulla ultrices", "Ubicacion": "tempor" },
      { "NumeroMesa": 2, "Capacidad": 41, "Estado": "lobortis", "Ubicacion": "lacus purus" },
      { "NumeroMesa": 3, "Capacidad": 20, "Estado": "luctus", "Ubicacion": "in" },
      { "NumeroMesa": 4, "Capacidad": 18, "Estado": "porta", "Ubicacion": "convallis" },
      { "NumeroMesa": 5, "Capacidad": 45, "Estado": "maecenas rhoncus", "Ubicacion": "sed" },
      { "NumeroMesa": 6, "Capacidad": 30, "Estado": "justo in", "Ubicacion": "eu pede" },
      { "NumeroMesa": 7, "Capacidad": 50, "Estado": "eget", "Ubicacion": "in" },
      { "NumeroMesa": 8, "Capacidad": 20, "Estado": "nunc", "Ubicacion": "porttitor" },
      { "NumeroMesa": 9, "Capacidad": 42, "Estado": "eros", "Ubicacion": "duis" },
      { "NumeroMesa": 10, "Capacidad": 37, "Estado": "tempor", "Ubicacion": "vivamus" },
      { "NumeroMesa": 11, "Capacidad": 17, "Estado": "sodales", "Ubicacion": "dis parturient" },
      { "NumeroMesa": 12, "Capacidad": 12, "Estado": "bibendum", "Ubicacion": "aliquam" },
      { "NumeroMesa": 13, "Capacidad": 43, "Estado": "aenean lectus", "Ubicacion": "amet" },
      { "NumeroMesa": 14, "Capacidad": 24, "Estado": "faucibus orci", "Ubicacion": "ultrices libero" },
      { "NumeroMesa": 15, "Capacidad": 10, "Estado": "elementum nullam", "Ubicacion": "risus semper" },
      { "NumeroMesa": 16, "Capacidad": 47, "Estado": "lectus in", "Ubicacion": "donec" },
      { "NumeroMesa": 17, "Capacidad": 10, "Estado": "pellentesque", "Ubicacion": "etiam" },
      { "NumeroMesa": 18, "Capacidad": 1, "Estado": "pede venenatis", "Ubicacion": "ut rhoncus" },
      { "NumeroMesa": 19, "Capacidad": 5, "Estado": "porta volutpat", "Ubicacion": "id sapien" },
      { "NumeroMesa": 20, "Capacidad": 37, "Estado": "auctor", "Ubicacion": "nulla quisque" },
      { "NumeroMesa": 21, "Capacidad": 36, "Estado": "ipsum", "Ubicacion": "in eleifend" },
      { "NumeroMesa": 22, "Capacidad": 34, "Estado": "ipsum dolor", "Ubicacion": "ligula" },
      { "NumeroMesa": 23, "Capacidad": 17, "Estado": "cras", "Ubicacion": "tincidunt" },
      { "NumeroMesa": 24, "Capacidad": 26, "Estado": "aliquam augue", "Ubicacion": "tellus in" },
      { "NumeroMesa": 25, "Capacidad": 42, "Estado": "in libero", "Ubicacion": "at ipsum" },
      { "NumeroMesa": 26, "Capacidad": 4, "Estado": "aenean", "Ubicacion": "risus praesent" },
      { "NumeroMesa": 27, "Capacidad": 24, "Estado": "tristique tortor", "Ubicacion": "tristique in" },
      { "NumeroMesa": 28, "Capacidad": 28, "Estado": "gravida nisi", "Ubicacion": "cursus" },
      { "NumeroMesa": 29, "Capacidad": 10, "Estado": "volutpat", "Ubicacion": "diam nam" },
      { "NumeroMesa": 30, "Capacidad": 2, "Estado": "lectus", "Ubicacion": "tempus vivamus" },
      { "NumeroMesa": 31, "Capacidad": 37, "Estado": "orci vehicula", "Ubicacion": "nam nulla" },
      { "NumeroMesa": 32, "Capacidad": 43, "Estado": "orci luctus", "Ubicacion": "mi in" },
      { "NumeroMesa": 33, "Capacidad": 44, "Estado": "nulla", "Ubicacion": "mi nulla" },
      { "NumeroMesa": 34, "Capacidad": 39, "Estado": "ante vestibulum", "Ubicacion": "parturient montes" },
      { "NumeroMesa": 35, "Capacidad": 41, "Estado": "cursus", "Ubicacion": "justo" },
      { "NumeroMesa": 36, "Capacidad": 13, "Estado": "vestibulum", "Ubicacion": "purus" },
      { "NumeroMesa": 37, "Capacidad": 46, "Estado": "congue", "Ubicacion": "tempus" },
      { "NumeroMesa": 38, "Capacidad": 39, "Estado": "erat", "Ubicacion": "dapibus" },
      { "NumeroMesa": 39, "Capacidad": 43, "Estado": "augue", "Ubicacion": "dui" },
      { "NumeroMesa": 40, "Capacidad": 11, "Estado": "imperdiet et", "Ubicacion": "ut tellus" },
      { "NumeroMesa": 41, "Capacidad": 19, "Estado": "tristique", "Ubicacion": "eu" },
      { "NumeroMesa": 42, "Capacidad": 44, "Estado": "amet erat", "Ubicacion": "maecenas" },
      { "NumeroMesa": 43, "Capacidad": 25, "Estado": "at", "Ubicacion": "mauris" },
      { "NumeroMesa": 44, "Capacidad": 7, "Estado": "non mattis", "Ubicacion": "morbi odio" },
      { "NumeroMesa": 45, "Capacidad": 19, "Estado": "magna bibendum", "Ubicacion": "nam" },
      { "NumeroMesa": 46, "Capacidad": 48, "Estado": "at velit", "Ubicacion": "iaculis congue" },
      { "NumeroMesa": 47, "Capacidad": 33, "Estado": "nunc", "Ubicacion": "eu interdum" },
      { "NumeroMesa": 48, "Capacidad": 34, "Estado": "a libero", "Ubicacion": "rutrum rutrum" },
      { "NumeroMesa": 49, "Capacidad": 6, "Estado": "nam tristique", "Ubicacion": "quis" },
      { "NumeroMesa": 50, "Capacidad": 29, "Estado": "suspendisse", "Ubicacion": "rhoncus dui" }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
