'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('factura', [
      { "IdFactura": 1, "Cliente": 33, "Fecha": "2022-09-05 07:21:52", "Total": 87, "Detalle": "vitae nisi nam ultrices libero non" },
      { "IdFactura": 2, "Cliente": 27, "Fecha": "2023-07-28 15:19:01", "Total": 43, "Detalle": "posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a" },
      { "IdFactura": 3, "Cliente": 11, "Fecha": "2023-06-29 13:40:31", "Total": 31, "Detalle": "platea dictumst morbi vestibulum velit id pretium iaculis diam erat" },
      { "IdFactura": 4, "Cliente": 20, "Fecha": "2022-11-08 15:38:05", "Total": 36, "Detalle": "semper rutrum nulla nunc purus phasellus in felis donec semper sapien a" },
      { "IdFactura": 5, "Cliente": 50, "Fecha": "2023-08-04 21:41:36", "Total": 23, "Detalle": "neque vestibulum eget vulputate ut ultrices vel augue vestibulum" },
      { "IdFactura": 6, "Cliente": 3, "Fecha": "2023-07-17 11:22:36", "Total": 90, "Detalle": "nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique" },
      { "IdFactura": 7, "Cliente": 34, "Fecha": "2023-06-23 17:35:58", "Total": 71, "Detalle": "suspendisse potenti nullam porttitor lacus at turpis donec" },
      { "IdFactura": 8, "Cliente": 10, "Fecha": "2023-02-09 03:55:41", "Total": 26, "Detalle": "nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper" },
      { "IdFactura": 9, "Cliente": 19, "Fecha": "2022-11-16 07:24:54", "Total": 23, "Detalle": "ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse" },
      { "IdFactura": 10, "Cliente": 41, "Fecha": "2022-09-02 21:47:27", "Total": 53, "Detalle": "justo maecenas rhoncus aliquam lacus morbi quis tortor id" },
      { "IdFactura": 11, "Cliente": 7, "Fecha": "2023-07-08 23:48:46", "Total": 73, "Detalle": "egestas metus aenean fermentum donec ut mauris" },
      { "IdFactura": 12, "Cliente": 1, "Fecha": "2023-06-04 13:53:58", "Total": 35, "Detalle": "nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur" },
      { "IdFactura": 13, "Cliente": 12, "Fecha": "2023-08-03 04:42:27", "Total": 86, "Detalle": "lobortis convallis tortor risus dapibus" },
      { "IdFactura": 14, "Cliente": 9, "Fecha": "2022-10-28 16:16:39", "Total": 65, "Detalle": "at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum" },
      { "IdFactura": 15, "Cliente": 6, "Fecha": "2023-02-18 04:54:43", "Total": 85, "Detalle": "orci mauris lacinia sapien quis" },
      { "IdFactura": 16, "Cliente": 41, "Fecha": "2022-12-02 07:31:23", "Total": 68, "Detalle": "iaculis diam erat fermentum justo nec" },
      { "IdFactura": 17, "Cliente": 4, "Fecha": "2022-12-04 16:50:35", "Total": 79, "Detalle": "posuere metus vitae ipsum aliquam non mauris" },
      { "IdFactura": 18, "Cliente": 36, "Fecha": "2023-07-26 03:46:21", "Total": 27, "Detalle": "suspendisse potenti in eleifend quam a odio" },
      { "IdFactura": 19, "Cliente": 30, "Fecha": "2023-02-05 15:19:47", "Total": 74, "Detalle": "nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum" },
      { "IdFactura": 20, "Cliente": 33, "Fecha": "2023-04-20 23:57:57", "Total": 82, "Detalle": "tristique in tempus sit amet sem fusce consequat nulla nisl nunc" },
      { "IdFactura": 21, "Cliente": 27, "Fecha": "2023-03-27 18:55:26", "Total": 37, "Detalle": "ac nibh fusce lacus purus" },
      { "IdFactura": 22, "Cliente": 13, "Fecha": "2023-05-28 08:46:57", "Total": 60, "Detalle": "morbi odio odio elementum eu interdum eu tincidunt in leo" },
      { "IdFactura": 23, "Cliente": 29, "Fecha": "2023-08-10 20:53:05", "Total": 95, "Detalle": "potenti nullam porttitor lacus at turpis donec posuere" },
      { "IdFactura": 24, "Cliente": 3, "Fecha": "2022-10-17 16:23:33", "Total": 74, "Detalle": "cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat" },
      { "IdFactura": 25, "Cliente": 21, "Fecha": "2023-04-30 23:45:53", "Total": 78, "Detalle": "proin risus praesent lectus vestibulum quam sapien varius ut" },
      { "IdFactura": 26, "Cliente": 9, "Fecha": "2023-04-30 23:51:36", "Total": 68, "Detalle": "accumsan tellus nisi eu orci mauris lacinia" },
      { "IdFactura": 27, "Cliente": 13, "Fecha": "2023-08-10 22:49:16", "Total": 22, "Detalle": "hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla" },
      { "IdFactura": 28, "Cliente": 17, "Fecha": "2023-04-13 20:15:37", "Total": 91, "Detalle": "posuere metus vitae ipsum aliquam non" },
      { "IdFactura": 29, "Cliente": 16, "Fecha": "2023-07-28 08:47:53", "Total": 24, "Detalle": "hac habitasse platea dictumst morbi vestibulum velit id" },
      { "IdFactura": 30, "Cliente": 24, "Fecha": "2023-02-17 09:56:24", "Total": 53, "Detalle": "id massa id nisl venenatis lacinia" },
      { "IdFactura": 31, "Cliente": 40, "Fecha": "2023-01-29 13:30:11", "Total": 24, "Detalle": "aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet" },
      { "IdFactura": 32, "Cliente": 39, "Fecha": "2023-07-13 17:35:23", "Total": 81, "Detalle": "lobortis sapien sapien non mi integer ac neque duis bibendum morbi non" },
      { "IdFactura": 33, "Cliente": 32, "Fecha": "2022-09-16 14:25:03", "Total": 13, "Detalle": "convallis nulla neque libero convallis eget" },
      { "IdFactura": 34, "Cliente": 41, "Fecha": "2022-12-04 23:10:53", "Total": 47, "Detalle": "viverra diam vitae quam suspendisse potenti nullam" },
      { "IdFactura": 35, "Cliente": 29, "Fecha": "2022-11-30 06:56:04", "Total": 26, "Detalle": "suspendisse potenti in eleifend quam a" },
      { "IdFactura": 36, "Cliente": 48, "Fecha": "2023-01-02 18:20:20", "Total": 35, "Detalle": "ac enim in tempor turpis nec euismod" },
      { "IdFactura": 37, "Cliente": 8, "Fecha": "2023-05-06 16:03:52", "Total": 48, "Detalle": "adipiscing elit proin interdum mauris non ligula pellentesque" },
      { "IdFactura": 38, "Cliente": 4, "Fecha": "2023-06-22 14:26:50", "Total": 39, "Detalle": "enim sit amet nunc viverra dapibus nulla suscipit ligula" },
      { "IdFactura": 39, "Cliente": 7, "Fecha": "2023-05-11 02:14:13", "Total": 16, "Detalle": "lorem integer tincidunt ante vel ipsum praesent blandit lacinia" },
      { "IdFactura": 40, "Cliente": 4, "Fecha": "2022-12-25 02:39:19", "Total": 95, "Detalle": "quisque porta volutpat erat quisque erat" },
      { "IdFactura": 41, "Cliente": 28, "Fecha": "2023-01-30 13:20:13", "Total": 70, "Detalle": "dui vel sem sed sagittis nam congue risus semper porta" },
      { "IdFactura": 42, "Cliente": 29, "Fecha": "2022-12-15 16:37:03", "Total": 70, "Detalle": "velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla" },
      { "IdFactura": 43, "Cliente": 6, "Fecha": "2023-07-22 23:53:51", "Total": 11, "Detalle": "luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui" },
      { "IdFactura": 44, "Cliente": 50, "Fecha": "2023-03-01 18:03:18", "Total": 28, "Detalle": "mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis" },
      { "IdFactura": 45, "Cliente": 4, "Fecha": "2023-03-04 14:59:01", "Total": 30, "Detalle": "proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing" },
      { "IdFactura": 46, "Cliente": 16, "Fecha": "2023-07-12 10:30:43", "Total": 40, "Detalle": "in quis justo maecenas rhoncus aliquam lacus morbi quis" },
      { "IdFactura": 47, "Cliente": 1, "Fecha": "2023-05-23 13:04:22", "Total": 52, "Detalle": "ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien" },
      { "IdFactura": 48, "Cliente": 35, "Fecha": "2023-01-15 16:24:24", "Total": 23, "Detalle": "leo odio porttitor id consequat in consequat ut nulla" },
      { "IdFactura": 49, "Cliente": 33, "Fecha": "2023-05-01 15:20:13", "Total": 31, "Detalle": "sit amet eleifend pede libero quis orci nullam molestie" },
      { "IdFactura": 50, "Cliente": 23, "Fecha": "2023-07-09 17:01:44", "Total": 81, "Detalle": "purus phasellus in felis donec semper" }
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
