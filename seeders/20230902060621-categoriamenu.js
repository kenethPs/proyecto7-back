'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categoriamenu', [
      { "CodigoCategoria": 1, "Descripcion": "morbi porttitor lorem id ligula suspendisse", "FechaCreacion": "2023-01-30 16:57:35", "Estado": "leo" },
      { "CodigoCategoria": 2, "Descripcion": "accumsan odio curabitur convallis duis consequat", "FechaCreacion": "2023-04-06 18:25:49", "Estado": "pede" },
      { "CodigoCategoria": 3, "Descripcion": "proin eu mi nulla ac enim in tempor", "FechaCreacion": "2023-05-05 20:15:39", "Estado": "a nibh" },
      { "CodigoCategoria": 4, "Descripcion": "maecenas rhoncus aliquam lacus morbi", "FechaCreacion": "2023-06-06 03:18:40", "Estado": "ipsum" },
      { "CodigoCategoria": 5, "Descripcion": "lectus vestibulum quam sapien varius ut blandit", "FechaCreacion": "2023-08-23 01:31:01", "Estado": "risus auctor" },
      { "CodigoCategoria": 6, "Descripcion": "dolor vel est donec odio justo", "FechaCreacion": "2023-04-05 05:00:36", "Estado": "magna" },
      { "CodigoCategoria": 7, "Descripcion": "rhoncus sed vestibulum sit amet", "FechaCreacion": "2023-01-24 09:08:55", "Estado": "vivamus" },
      { "CodigoCategoria": 8, "Descripcion": "semper interdum mauris ullamcorper purus sit", "FechaCreacion": "2022-10-12 21:14:52", "Estado": "dapibus" },
      { "CodigoCategoria": 9, "Descripcion": "integer aliquet massa id lobortis convallis tortor", "FechaCreacion": "2023-08-29 17:42:46", "Estado": "aliquam augue" },
      { "CodigoCategoria": 10, "Descripcion": "mauris viverra diam vitae quam suspendisse potenti", "FechaCreacion": "2023-01-25 10:31:36", "Estado": "tellus" },
      { "CodigoCategoria": 11, "Descripcion": "aliquam non mauris morbi non lectus", "FechaCreacion": "2023-05-08 00:32:55", "Estado": "ipsum primis" },
      { "CodigoCategoria": 12, "Descripcion": "justo sit amet sapien vestibulum ante", "FechaCreacion": "2023-07-16 07:18:50", "Estado": "libero" },
      { "CodigoCategoria": 13, "Descripcion": "faucs posuere cubilia curae donec pharetra", "FechaCreacion": "2023-04-09 15:41:42", "Estado": "pede" },
      { "CodigoCategoria": 14, "Descripcion": "na vestibulum aliquet ultrices erat tortor", "FechaCreacion": "2022-11-02 06:29:09", "Estado": "nulla" },
      { "CodigoCategoria": 15, "Descripcion": "diam nam tristique tortor eu", "FechaCreacion": "2023-08-04 02:55:29", "Estado": "luctus tincidunt" },
      { "CodigoCategoria": 16, "Descripcion": "nulla elit ac nulla", "FechaCreacion": "2022-09-11 06:10:03", "Estado": "faucibus" },
      { "CodigoCategoria": 17, "Descripcion": "luctus rutrum nulla tellus in sagittis", "FechaCreacion": "2023-04-01 01:31:52", "Estado": "id lobortis" },
      { "CodigoCategoria": 18, "Descripcion": "nunc purus phasellus in felis donec", "FechaCreacion": "2023-05-08 05:00:13", "Estado": "sapien" },
      { "CodigoCategoria": 19, "Descripcion": "arcu sed augue aliquam erat", "FechaCreacion": "2023-06-27 09:49:16", "Estado": "maecenas" },
      { "CodigoCategoria": 20, "Descripcion": "id luctus neie ", "FechaCreacion": "2022-10-19 01:36:36", "Estado": "felis sed" },
      { "CodigoCategoria": 21, "Descripcion": "vi adipiscin ", "FechaCreacion": "2022-10-22 02:23:14", "Estado": "purus" },
      { "CodigoCategoria": 22, "Descripcion": "tisid", "FechaCreacion": "2022-10-04 03:49:45", "Estado": "at nibh" },
      { "CodigoCategoria": 23, "Descripcion": "utate ut ultrices vel augue vestibulum", "FechaCreacion": "2022-12-26 11:17:14", "Estado": "ultrices" },
      { "CodigoCategoria": 24, "Descripcion": "feum neque sapien placerat ante nulla justo", "FechaCreacion": "2023-06-29 16:42:23", "Estado": "arcu sed" },
      { "CodigoCategoria": 25, "Descripcion": "neque aenean auctor", "FechaCreacion": "2023-05-01 06:29:37", "Estado": "at" },
      { "CodigoCategoria": 26, "Descripcion": "sed sit amet sem fusce consequat nulla", "FechaCreacion": "2022-12-20 07:40:03", "Estado": "purus aliquet" },
      { "CodigoCategoria": 27, "Descripcion": "quaac consequat metus sapien ut", "FechaCreacion": "2023-03-22 14:31:40", "Estado": "sed vel" },
      { "CodigoCategoria": 28, "Descripcion": "nisi eu orci mauris lacinia", "FechaCreacion": "2023-02-27 15:36:57", "Estado": "tincidunt" },
      { "CodigoCategoria": 29, "Descripcion": "pre erat fermentum justo nec condimentum", "FechaCreacion": "2022-12-23 06:44:20", "Estado": "vitae" },
      { "CodigoCategoria": 30, "Descripcion": "nec nisi volutpat eleifend donec ut dolor morbi", "FechaCreacion": "2022-09-05 18:11:08", "Estado": "fringilla" },
      { "CodigoCategoria": 31, "Descripcion": "pela suspendisse potenti cras in purus eu", "FechaCreacion": "2023-06-11 08:25:21", "Estado": "in sagittis" },
      { "CodigoCategoria": 32, "Descripcion": "aliquis tortor id nulla ultrices aliquet", "FechaCreacion": "2023-08-31 16:56:42", "Estado": "vel enim" },
      { "CodigoCategoria": 33, "Descripcion": "sed ante vivamus tortor duis", "FechaCreacion": "2022-09-07 02:19:11", "Estado": "tellus nulla" },
      { "CodigoCategoria": 34, "Descripcion": "enierra dapibus nulla suscipit ligula in", "FechaCreacion": "2022-10-07 01:22:07", "Estado": "vel augue" },
      { "CodigoCategoria": 35, "Descripcion": "mauris morbi non lectus aliquam sit amet", "FechaCreacion": "2022-11-17 09:37:19", "Estado": "commodo vulputate" },
      { "CodigoCategoria": 36, "Descripcion": "vulputate nonummy maecenas tincidunt lacus at", "FechaCreacion": "2023-07-20 19:49:06", "Estado": "tortor eu" },
      { "CodigoCategoria": 37, "Descripcion": "porta volutpat erat quisque erat eros viverra", "FechaCreacion": "2022-11-28 22:54:49", "Estado": "odio" },
      { "CodigoCategoria": 38, "Descripcion": "velit vivamus vel nulla eget eros elementum", "FechaCreacion": "2023-02-13 00:07:15", "Estado": "risus dapibus" },
      { "CodigoCategoria": 39, "Descripcion": "ut volutpat sapien arcu sed", "FechaCreacion": "2022-09-19 16:20:23", "Estado": "tempus vel" },
      { "CodigoCategoria": 40, "Descripcion": "eu interdum eu tincidunt in leo", "FechaCreacion": "2022-11-12 21:57:31", "Estado": "ullamcorper" },
      { "CodigoCategoria": 41, "Descripcion": "in ante vestibulum ante ipsum primis in", "FechaCreacion": "2022-10-12 11:12:25", "Estado": "scelerisque" },
      { "CodigoCategoria": 42, "Descripcion": "duiconvallis duis", "FechaCreacion": "2022-10-12 09:25:15", "Estado": "suspendisse" },
      { "CodigoCategoria": 43, "Descripcion": "adipiscing molestie hendrerit at vulputate", "FechaCreacion": "2022-09-26 16:26:01", "Estado": "luctus" },
      { "CodigoCategoria": 44, "Descripcion": "sed magna at nunc commodo placerat", "FechaCreacion": "2023-03-28 23:06:19", "Estado": "massa quis" },
      { "CodigoCategoria": 45, "Descripcion": "a pmmy integer non velit donec diam neque", "FechaCreacion": "2023-08-15 14:46:26", "Estado": "proin leo" },
      { "CodigoCategoria": 46, "Descripcion": "lacus morbi sem mauris laoreet", "FechaCreacion": "2023-06-23 14:43:55", "Estado": "vulputate" },
      { "CodigoCategoria": 47, "Descripcion": "pris et ultrices posuere cubilia curae", "FechaCreacion": "2023-05-16 04:55:40", "Estado": "nulla" },
      { "CodigoCategoria": 48, "Descripcion": "in lectus pellentesque", "FechaCreacion": "2022-12-10 20:05:37", "Estado": "pellentesque" },
      { "CodigoCategoria": 49, "Descripcion": "arcu adipiscing molestie ", "FechaCreacion": "2022-11-29 10:09:45", "Estado": "pede" },
      { "CodigoCategoria": 50, "Descripcion": "interdum mauris non ligula pellentesque ultrices", "FechaCreacion": "2022-10-02 13:36:33", "Estado": "proin eu" }
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
