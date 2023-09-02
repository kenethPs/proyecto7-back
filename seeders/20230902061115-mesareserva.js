'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('mesareserva', [
      { "IdReserva": 1, "Cliente": 50, "FechaReserva": "2022-09-02 02:45:21", "NumeroMesa": 9 },
      { "IdReserva": 2, "Cliente": 28, "FechaReserva": "2023-07-27 02:23:53", "NumeroMesa": 43 },
      { "IdReserva": 3, "Cliente": 39, "FechaReserva": "2023-01-05 18:26:01", "NumeroMesa": 9 },
      { "IdReserva": 4, "Cliente": 46, "FechaReserva": "2023-08-02 11:50:55", "NumeroMesa": 7 },
      { "IdReserva": 5, "Cliente": 30, "FechaReserva": "2023-05-12 13:24:09", "NumeroMesa": 33 },
      { "IdReserva": 6, "Cliente": 49, "FechaReserva": "2023-08-31 09:13:54", "NumeroMesa": 14 },
      { "IdReserva": 7, "Cliente": 45, "FechaReserva": "2022-11-02 14:07:41", "NumeroMesa": 29 },
      { "IdReserva": 8, "Cliente": 50, "FechaReserva": "2023-06-20 09:24:39", "NumeroMesa": 44 },
      { "IdReserva": 9, "Cliente": 7, "FechaReserva": "2023-03-29 20:00:22", "NumeroMesa": 4 },
      { "IdReserva": 10, "Cliente": 29, "FechaReserva": "2023-05-19 03:42:22", "NumeroMesa": 9 },
      { "IdReserva": 11, "Cliente": 6, "FechaReserva": "2022-09-26 15:08:49", "NumeroMesa": 36 },
      { "IdReserva": 12, "Cliente": 6, "FechaReserva": "2023-05-28 22:09:42", "NumeroMesa": 22 },
      { "IdReserva": 13, "Cliente": 10, "FechaReserva": "2022-11-20 21:35:22", "NumeroMesa": 37 },
      { "IdReserva": 14, "Cliente": 23, "FechaReserva": "2023-03-23 13:24:51", "NumeroMesa": 14 },
      { "IdReserva": 15, "Cliente": 30, "FechaReserva": "2022-09-17 19:43:28", "NumeroMesa": 15 },
      { "IdReserva": 16, "Cliente": 48, "FechaReserva": "2022-09-25 06:47:44", "NumeroMesa": 39 },
      { "IdReserva": 17, "Cliente": 14, "FechaReserva": "2023-05-17 16:18:17", "NumeroMesa": 35 },
      { "IdReserva": 18, "Cliente": 5, "FechaReserva": "2023-01-19 00:08:43", "NumeroMesa": 29 },
      { "IdReserva": 19, "Cliente": 30, "FechaReserva": "2023-07-29 23:25:43", "NumeroMesa": 36 },
      { "IdReserva": 20, "Cliente": 13, "FechaReserva": "2023-02-24 15:55:03", "NumeroMesa": 26 },
      { "IdReserva": 21, "Cliente": 20, "FechaReserva": "2023-04-23 15:20:06", "NumeroMesa": 17 },
      { "IdReserva": 22, "Cliente": 9, "FechaReserva": "2023-05-06 21:12:07", "NumeroMesa": 40 },
      { "IdReserva": 23, "Cliente": 5, "FechaReserva": "2023-06-14 20:34:42", "NumeroMesa": 35 },
      { "IdReserva": 24, "Cliente": 41, "FechaReserva": "2023-08-23 08:54:06", "NumeroMesa": 31 },
      { "IdReserva": 25, "Cliente": 3, "FechaReserva": "2022-11-20 04:38:12", "NumeroMesa": 10 },
      { "IdReserva": 26, "Cliente": 14, "FechaReserva": "2023-08-23 11:22:52", "NumeroMesa": 46 },
      { "IdReserva": 27, "Cliente": 4, "FechaReserva": "2023-06-27 20:11:11", "NumeroMesa": 22 },
      { "IdReserva": 28, "Cliente": 30, "FechaReserva": "2023-03-01 00:57:02", "NumeroMesa": 19 },
      { "IdReserva": 29, "Cliente": 46, "FechaReserva": "2023-07-08 02:22:14", "NumeroMesa": 10 },
      { "IdReserva": 30, "Cliente": 31, "FechaReserva": "2023-03-07 15:08:49", "NumeroMesa": 32 },
      { "IdReserva": 31, "Cliente": 40, "FechaReserva": "2023-08-06 11:32:48", "NumeroMesa": 27 },
      { "IdReserva": 32, "Cliente": 25, "FechaReserva": "2023-01-23 03:07:12", "NumeroMesa": 23 },
      { "IdReserva": 33, "Cliente": 27, "FechaReserva": "2023-08-14 02:33:34", "NumeroMesa": 12 },
      { "IdReserva": 34, "Cliente": 45, "FechaReserva": "2023-08-30 19:21:49", "NumeroMesa": 39 },
      { "IdReserva": 35, "Cliente": 34, "FechaReserva": "2023-07-08 10:52:19", "NumeroMesa": 25 },
      { "IdReserva": 36, "Cliente": 40, "FechaReserva": "2023-03-05 03:53:12", "NumeroMesa": 44 },
      { "IdReserva": 37, "Cliente": 42, "FechaReserva": "2022-10-14 00:11:38", "NumeroMesa": 28 },
      { "IdReserva": 38, "Cliente": 30, "FechaReserva": "2023-01-30 08:45:13", "NumeroMesa": 31 },
      { "IdReserva": 39, "Cliente": 34, "FechaReserva": "2023-08-12 03:01:20", "NumeroMesa": 48 },
      { "IdReserva": 40, "Cliente": 20, "FechaReserva": "2022-10-29 12:06:40", "NumeroMesa": 22 },
      { "IdReserva": 41, "Cliente": 38, "FechaReserva": "2023-08-24 15:31:41", "NumeroMesa": 49 },
      { "IdReserva": 42, "Cliente": 17, "FechaReserva": "2023-06-02 00:31:06", "NumeroMesa": 45 },
      { "IdReserva": 43, "Cliente": 21, "FechaReserva": "2023-03-20 17:12:27", "NumeroMesa": 24 },
      { "IdReserva": 44, "Cliente": 8, "FechaReserva": "2022-11-27 04:19:48", "NumeroMesa": 37 },
      { "IdReserva": 45, "Cliente": 37, "FechaReserva": "2023-04-16 22:15:00", "NumeroMesa": 20 },
      { "IdReserva": 46, "Cliente": 16, "FechaReserva": "2023-07-17 01:58:43", "NumeroMesa": 42 },
      { "IdReserva": 47, "Cliente": 16, "FechaReserva": "2023-05-26 07:16:16", "NumeroMesa": 21 },
      { "IdReserva": 48, "Cliente": 37, "FechaReserva": "2022-09-19 00:48:43", "NumeroMesa": 1 },
      { "IdReserva": 49, "Cliente": 35, "FechaReserva": "2023-02-15 12:55:15", "NumeroMesa": 37 },
      { "IdReserva": 50, "Cliente": 22, "FechaReserva": "2023-08-29 19:39:43", "NumeroMesa": 30 }
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
