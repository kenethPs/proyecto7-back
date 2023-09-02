'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('orden', [
      { "IdOrden": 1, "Recibo": "ultrices", "Fecha": "2023-01-26 16:05:51", "Inicio": "2023-06-05 18:30:26", "Fin": "2023-01-26 15:50:46", "Estado": "sit amet", "Total": 85, "CodigoCliente": 7 },
      { "IdOrden": 2, "Recibo": "justo sit amet sapien", "Fecha": "2022-09-22 02:25:29", "Inicio": "2023-07-22 12:10:54", "Fin": "2023-02-25 21:52:00", "Estado": "nisl", "Total": 19, "CodigoCliente": 50 },
      { "IdOrden": 3, "Recibo": "dignissim", "Fecha": "2022-12-02 04:58:14", "Inicio": "2022-09-24 02:54:03", "Fin": "2023-04-16 18:58:59", "Estado": "at", "Total": 34, "CodigoCliente": 34 },
      { "IdOrden": 4, "Recibo": "viverra", "Fecha": "2022-12-19 19:17:19", "Inicio": "2023-05-17 13:07:10", "Fin": "2022-11-22 19:27:44", "Estado": "lobortis", "Total": 45, "CodigoCliente": 28 },
      { "IdOrden": 5, "Recibo": "aliquet pulvinar", "Fecha": "2023-05-11 21:56:39", "Inicio": "2023-04-02 14:42:43", "Fin": "2022-12-25 18:49:10", "Estado": "bibendum felis", "Total": 32, "CodigoCliente": 29 },
      { "IdOrden": 6, "Recibo": "vitae nisi", "Fecha": "2023-02-05 18:16:36", "Inicio": "2023-03-31 05:50:13", "Fin": "2023-05-11 04:48:25", "Estado": "vestibulum", "Total": 57, "CodigoCliente": 41 },
      { "IdOrden": 7, "Recibo": "at", "Fecha": "2023-02-16 09:30:26", "Inicio": "2023-02-23 15:48:37", "Fin": "2022-12-04 18:06:46", "Estado": "duis mattis", "Total": 32, "CodigoCliente": 15 },
      { "IdOrden": 8, "Recibo": "ultrices libero non mattis", "Fecha": "2022-12-11 18:07:58", "Inicio": "2023-01-21 22:35:08", "Fin": "2023-08-26 22:21:17", "Estado": "sit", "Total": 39, "CodigoCliente": 48 },
      { "IdOrden": 9, "Recibo": "sodales scelerisque mauris sit amet", "Fecha": "2022-12-29 00:00:15", "Inicio": "2023-03-11 21:58:52", "Fin": "2023-03-06 00:18:56", "Estado": "posuere", "Total": 54, "CodigoCliente": 35 },
      { "IdOrden": 10, "Recibo": "vitae quam suspendisse potenti nullam", "Fecha": "2023-06-29 11:56:55", "Inicio": "2023-04-18 19:53:53", "Fin": "2023-05-05 23:16:46", "Estado": "nulla neque", "Total": 77, "CodigoCliente": 32 },
      { "IdOrden": 11, "Recibo": "varius ut blandit non", "Fecha": "2023-07-21 15:58:00", "Inicio": "2022-11-04 03:18:45", "Fin": "2023-06-26 08:43:06", "Estado": "semper sapien", "Total": 17, "CodigoCliente": 23 },
      { "IdOrden": 12, "Recibo": "aenean", "Fecha": "2023-03-27 10:11:14", "Inicio": "2022-12-23 18:10:02", "Fin": "2022-09-04 04:57:40", "Estado": "in consequat", "Total": 26, "CodigoCliente": 33 },
      { "IdOrden": 13, "Recibo": "odio", "Fecha": "2023-01-13 00:46:25", "Inicio": "2023-08-11 21:25:46", "Fin": "2023-07-17 07:04:41", "Estado": "metus aenean", "Total": 12, "CodigoCliente": 5 },
      { "IdOrden": 14, "Recibo": "justo eu massa donec", "Fecha": "2023-08-22 09:28:39", "Inicio": "2023-08-30 02:16:31", "Fin": "2023-03-18 13:52:29", "Estado": "magna", "Total": 32, "CodigoCliente": 32 },
      { "IdOrden": 15, "Recibo": "nonummy", "Fecha": "2023-01-07 13:04:01", "Inicio": "2023-04-28 04:07:32", "Fin": "2022-09-05 19:58:34", "Estado": "est", "Total": 57, "CodigoCliente": 10 },
      { "IdOrden": 16, "Recibo": "ac", "Fecha": "2023-03-15 12:52:06", "Inicio": "2023-04-13 12:55:50", "Fin": "2022-11-29 05:02:13", "Estado": "venenatis lacinia", "Total": 83, "CodigoCliente": 35 },
      { "IdOrden": 17, "Recibo": "maecenas leo odio condimentum id", "Fecha": "2022-10-14 06:51:05", "Inicio": "2023-03-26 15:40:14", "Fin": "2022-12-25 21:12:07", "Estado": "mattis pulvinar", "Total": 57, "CodigoCliente": 27 },
      { "IdOrden": 18, "Recibo": "ornare imperdiet", "Fecha": "2023-06-22 22:58:17", "Inicio": "2022-12-06 10:55:32", "Fin": "2023-05-31 17:15:35", "Estado": "turpis a", "Total": 18, "CodigoCliente": 25 },
      { "IdOrden": 19, "Recibo": "id nisl venenatis lacinia", "Fecha": "2023-04-23 11:44:38", "Inicio": "2022-10-23 06:28:58", "Fin": "2023-03-23 14:10:11", "Estado": "dui", "Total": 24, "CodigoCliente": 18 },
      { "IdOrden": 20, "Recibo": "pellentesque eget", "Fecha": "2023-07-20 08:17:10", "Inicio": "2023-03-23 07:30:53", "Fin": "2023-01-09 02:49:42", "Estado": "tincidunt eu", "Total": 92, "CodigoCliente": 41 },
      { "IdOrden": 21, "Recibo": "duis ac nibh fusce lacus", "Fecha": "2022-12-26 03:03:44", "Inicio": "2022-10-09 08:53:28", "Fin": "2022-09-10 22:38:31", "Estado": "quis turpis", "Total": 26, "CodigoCliente": 10 },
      { "IdOrden": 22, "Recibo": "sapien", "Fecha": "2023-07-26 06:50:44", "Inicio": "2023-04-11 00:56:28", "Fin": "2023-05-17 19:48:18", "Estado": "rhoncus", "Total": 38, "CodigoCliente": 11 },
      { "IdOrden": 23, "Recibo": "id", "Fecha": "2023-07-22 16:38:04", "Inicio": "2023-05-16 05:48:02", "Fin": "2023-02-18 08:32:10", "Estado": "dui", "Total": 66, "CodigoCliente": 42 },
      { "IdOrden": 24, "Recibo": "praesent blandit", "Fecha": "2023-01-03 13:46:28", "Inicio": "2022-09-03 14:24:19", "Fin": "2023-08-14 12:39:26", "Estado": "donec pharetra", "Total": 65, "CodigoCliente": 1 },
      { "IdOrden": 25, "Recibo": "felis fusce", "Fecha": "2023-02-09 00:23:45", "Inicio": "2023-01-20 17:59:59", "Fin": "2023-06-30 09:06:01", "Estado": "magna ac", "Total": 82, "CodigoCliente": 26 },
      { "IdOrden": 26, "Recibo": "tortor duis mattis", "Fecha": "2022-12-25 15:30:04", "Inicio": "2023-03-31 19:43:44", "Fin": "2022-09-23 00:40:40", "Estado": "sem fusce", "Total": 50, "CodigoCliente": 2 },
      { "IdOrden": 27, "Recibo": "tortor", "Fecha": "2022-10-07 07:01:27", "Inicio": "2022-10-08 03:10:11", "Fin": "2022-11-13 04:36:48", "Estado": "a", "Total": 21, "CodigoCliente": 30 },
      { "IdOrden": 28, "Recibo": "eget tincidunt eget", "Fecha": "2022-10-17 06:57:08", "Inicio": "2023-08-07 21:07:19", "Fin": "2022-12-01 16:26:36", "Estado": "erat volutpat", "Total": 100, "CodigoCliente": 27 },
      { "IdOrden": 29, "Recibo": "aenean lectus pellentesque eget", "Fecha": "2022-10-11 05:03:12", "Inicio": "2023-06-01 21:34:28", "Fin": "2023-01-21 00:17:29", "Estado": "viverra", "Total": 61, "CodigoCliente": 25 },
      { "IdOrden": 30, "Recibo": "leo", "Fecha": "2022-12-04 12:46:36", "Inicio": "2023-08-07 12:50:56", "Fin": "2023-01-25 22:48:38", "Estado": "morbi ut", "Total": 11, "CodigoCliente": 28 },
      { "IdOrden": 31, "Recibo": "donec diam", "Fecha": "2022-12-13 17:43:22", "Inicio": "2023-05-18 17:44:50", "Fin": "2023-06-01 06:22:52", "Estado": "rhoncus aliquam", "Total": 31, "CodigoCliente": 29 },
      { "IdOrden": 32, "Recibo": "interdum mauris non ligula pellentesque", "Fecha": "2023-07-02 22:41:12", "Inicio": "2023-03-06 21:48:12", "Fin": "2023-06-03 23:50:25", "Estado": "massa donec", "Total": 70, "CodigoCliente": 2 },
      { "IdOrden": 33, "Recibo": "ornare", "Fecha": "2023-07-13 03:53:48", "Inicio": "2023-05-04 09:57:43", "Fin": "2023-05-25 20:15:32", "Estado": "ante", "Total": 53, "CodigoCliente": 20 },
      { "IdOrden": 34, "Recibo": "sit amet", "Fecha": "2023-06-17 02:50:54", "Inicio": "2023-04-29 09:20:02", "Fin": "2023-04-08 05:04:20", "Estado": "nulla dapibus", "Total": 60, "CodigoCliente": 48 },
      { "IdOrden": 35, "Recibo": "felis eu sapien", "Fecha": "2022-11-14 05:29:55", "Inicio": "2023-07-19 15:40:40", "Fin": "2023-02-01 15:43:41", "Estado": "nulla sed", "Total": 20, "CodigoCliente": 31 },
      { "IdOrden": 36, "Recibo": "eu nibh", "Fecha": "2022-09-11 17:42:54", "Inicio": "2023-08-09 16:59:42", "Fin": "2023-04-03 20:10:53", "Estado": "neque vestibulum", "Total": 93, "CodigoCliente": 17 },
      { "IdOrden": 37, "Recibo": "blandit ultrices enim", "Fecha": "2022-09-02 00:25:22", "Inicio": "2022-10-16 19:35:01", "Fin": "2023-08-17 09:03:30", "Estado": "lectus in", "Total": 36, "CodigoCliente": 14 },
      { "IdOrden": 38, "Recibo": "massa volutpat convallis morbi odio", "Fecha": "2023-08-30 21:57:21", "Inicio": "2023-06-06 21:05:02", "Fin": "2023-08-20 21:12:29", "Estado": "quam", "Total": 89, "CodigoCliente": 40 },
      { "IdOrden": 39, "Recibo": "tellus semper", "Fecha": "2023-04-15 06:22:29", "Inicio": "2023-01-31 05:35:16", "Fin": "2023-02-26 20:58:14", "Estado": "etiam vel", "Total": 41, "CodigoCliente": 27 },
      { "IdOrden": 40, "Recibo": "sit amet turpis elementum", "Fecha": "2022-09-20 21:18:09", "Inicio": "2023-05-14 11:25:40", "Fin": "2023-02-11 18:24:47", "Estado": "ligula suspendisse", "Total": 29, "CodigoCliente": 18 },
      { "IdOrden": 41, "Recibo": "tristique fusce congue", "Fecha": "2023-07-01 22:09:00", "Inicio": "2022-09-21 01:25:43", "Fin": "2023-07-22 19:23:16", "Estado": "nibh", "Total": 20, "CodigoCliente": 12 },
      { "IdOrden": 42, "Recibo": "ligula vehicula", "Fecha": "2023-03-11 23:26:44", "Inicio": "2023-05-01 11:49:39", "Fin": "2023-05-09 11:11:26", "Estado": "morbi", "Total": 69, "CodigoCliente": 43 },
      { "IdOrden": 43, "Recibo": "vel enim sit amet nunc", "Fecha": "2022-11-28 00:48:23", "Inicio": "2023-07-03 11:33:20", "Fin": "2023-08-17 20:01:00", "Estado": "a", "Total": 46, "CodigoCliente": 21 },
      { "IdOrden": 44, "Recibo": "aliquam", "Fecha": "2023-01-20 03:00:58", "Inicio": "2023-02-16 11:37:03", "Fin": "2023-06-10 21:25:53", "Estado": "curae donec", "Total": 73, "CodigoCliente": 28 },
      { "IdOrden": 45, "Recibo": "sapien a libero", "Fecha": "2023-08-14 07:31:38", "Inicio": "2023-07-14 03:44:01", "Fin": "2023-08-28 20:50:21", "Estado": "ridiculus", "Total": 48, "CodigoCliente": 47 },
      { "IdOrden": 46, "Recibo": "eu interdum eu tincidunt in", "Fecha": "2022-09-03 07:29:19", "Inicio": "2023-05-23 11:35:35", "Fin": "2023-02-20 13:53:47", "Estado": "amet", "Total": 28, "CodigoCliente": 45 },
      { "IdOrden": 47, "Recibo": "molestie hendrerit at", "Fecha": "2022-11-23 05:55:13", "Inicio": "2022-10-06 06:59:45", "Fin": "2023-03-15 10:40:44", "Estado": "diam cras", "Total": 36, "CodigoCliente": 48 },
      { "IdOrden": 48, "Recibo": "feugiat et eros vestibulum ac", "Fecha": "2023-03-31 14:14:42", "Inicio": "2023-03-05 14:48:12", "Fin": "2023-03-11 17:35:10", "Estado": "nibh fusce", "Total": 27, "CodigoCliente": 12 },
      { "IdOrden": 49, "Recibo": "vitae nisi", "Fecha": "2023-01-11 22:57:52", "Inicio": "2022-10-03 13:45:58", "Fin": "2023-07-08 00:11:09", "Estado": "lacus", "Total": 44, "CodigoCliente": 12 },
      { "IdOrden": 50, "Recibo": "mauris viverra diam", "Fecha": "2023-01-16 05:52:07", "Inicio": "2023-01-06 01:21:03", "Fin": "2022-11-21 21:40:34", "Estado": "orci", "Total": 40, "CodigoCliente": 42 }
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
