'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('valoraciones', [
      { "IdValoracion": 1, "Cliente": 12, "Fecha": "2023-07-30 10:30:47", "Descripcion": "vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus", "Puntuacion": 4 },
      { "IdValoracion": 2, "Cliente": 49, "Fecha": "2023-02-25 15:07:31", "Descripcion": "dui proin leo odio porttitor id consequat in consequat ut nulla", "Puntuacion": 3 },
      { "IdValoracion": 3, "Cliente": 19, "Fecha": "2022-12-07 03:12:39", "Descripcion": "ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna", "Puntuacion": 2 },
      { "IdValoracion": 4, "Cliente": 5, "Fecha": "2022-12-15 04:58:41", "Descripcion": "ultrices mattis odio donec vitae nisi nam", "Puntuacion": 4 },
      { "IdValoracion": 5, "Cliente": 21, "Fecha": "2022-11-12 05:09:48", "Descripcion": "massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt", "Puntuacion": 2 },
      { "IdValoracion": 6, "Cliente": 43, "Fecha": "2023-05-24 17:39:15", "Descripcion": "nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend", "Puntuacion": 4 },
      { "IdValoracion": 7, "Cliente": 13, "Fecha": "2023-06-17 19:08:23", "Descripcion": "volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus", "Puntuacion": 5 },
      { "IdValoracion": 8, "Cliente": 14, "Fecha": "2022-12-06 08:58:18", "Descripcion": "ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at", "Puntuacion": 1 },
      { "IdValoracion": 9, "Cliente": 47, "Fecha": "2023-06-15 22:50:38", "Descripcion": "accumsan felis ut at dolor quis odio consequat", "Puntuacion": 4 },
      { "IdValoracion": 10, "Cliente": 20, "Fecha": "2023-04-04 21:21:30", "Descripcion": "primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus", "Puntuacion": 3 },
      { "IdValoracion": 11, "Cliente": 27, "Fecha": "2022-10-21 17:41:38", "Descripcion": "primis in faucibus orci luctus et ultrices posuere cubilia curae donec", "Puntuacion": 5 },
      { "IdValoracion": 12, "Cliente": 24, "Fecha": "2022-11-25 07:42:53", "Descripcion": "a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus", "Puntuacion": 5 },
      { "IdValoracion": 13, "Cliente": 37, "Fecha": "2023-04-17 20:37:46", "Descripcion": "justo eu massa donec dapibus duis", "Puntuacion": 4 },
      { "IdValoracion": 14, "Cliente": 43, "Fecha": "2023-08-12 03:08:22", "Descripcion": "sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi", "Puntuacion": 1 },
      { "IdValoracion": 15, "Cliente": 25, "Fecha": "2023-02-22 05:14:34", "Descripcion": "aenean fermentum donec ut mauris eget", "Puntuacion": 3 },
      { "IdValoracion": 16, "Cliente": 6, "Fecha": "2023-02-17 17:02:23", "Descripcion": "at turpis donec posuere metus vitae ipsum aliquam", "Puntuacion": 3 },
      { "IdValoracion": 17, "Cliente": 39, "Fecha": "2023-06-18 00:31:04", "Descripcion": "potenti in eleifend quam a odio in hac habitasse platea", "Puntuacion": 1 },
      { "IdValoracion": 18, "Cliente": 46, "Fecha": "2022-11-11 04:35:32", "Descripcion": "mattis egestas metus aenean fermentum donec ut", "Puntuacion": 4 },
      { "IdValoracion": 19, "Cliente": 1, "Fecha": "2022-12-25 11:48:25", "Descripcion": "justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia", "Puntuacion": 4 },
      { "IdValoracion": 20, "Cliente": 48, "Fecha": "2022-12-16 02:01:07", "Descripcion": "etiam pretium iaculis justo in hac", "Puntuacion": 5 },
      { "IdValoracion": 21, "Cliente": 21, "Fecha": "2023-08-20 02:59:54", "Descripcion": "sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat", "Puntuacion": 5 },
      { "IdValoracion": 22, "Cliente": 42, "Fecha": "2022-10-24 00:35:20", "Descripcion": "ligula pellentesque ultrices phasellus id sapien", "Puntuacion": 2 },
      { "IdValoracion": 23, "Cliente": 42, "Fecha": "2023-03-30 23:46:15", "Descripcion": "velit nec nisi vulputate nonummy maecenas tincidunt lacus", "Puntuacion": 2 },
      { "IdValoracion": 24, "Cliente": 6, "Fecha": "2022-12-22 21:19:21", "Descripcion": "cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac", "Puntuacion": 3 },
      { "IdValoracion": 25, "Cliente": 45, "Fecha": "2023-08-10 18:16:18", "Descripcion": "felis ut at dolor quis odio consequat varius integer ac leo", "Puntuacion": 3 },
      { "IdValoracion": 26, "Cliente": 8, "Fecha": "2023-07-17 00:21:44", "Descripcion": "dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae", "Puntuacion": 3 },
      { "IdValoracion": 27, "Cliente": 34, "Fecha": "2023-06-14 16:00:25", "Descripcion": "ut massa volutpat convallis morbi odio odio", "Puntuacion": 4 },
      { "IdValoracion": 28, "Cliente": 39, "Fecha": "2022-10-02 16:05:58", "Descripcion": "nulla pede ullamcorper augue a suscipit nulla", "Puntuacion": 5 },
      { "IdValoracion": 29, "Cliente": 14, "Fecha": "2023-06-09 05:11:55", "Descripcion": "libero quis orci nullam molestie nibh in lectus", "Puntuacion": 1 },
      { "IdValoracion": 30, "Cliente": 14, "Fecha": "2023-02-09 22:50:30", "Descripcion": "sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut", "Puntuacion": 5 },
      { "IdValoracion": 31, "Cliente": 24, "Fecha": "2023-07-28 16:03:22", "Descripcion": "lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus", "Puntuacion": 2 },
      { "IdValoracion": 32, "Cliente": 11, "Fecha": "2023-01-28 07:53:46", "Descripcion": "ipsum dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum", "Puntuacion": 2 },
      { "IdValoracion": 33, "Cliente": 37, "Fecha": "2023-02-14 11:40:30", "Descripcion": "lobortis sapien sapien non mi integer ac neque duis", "Puntuacion": 2 },
      { "IdValoracion": 34, "Cliente": 13, "Fecha": "2023-02-04 23:59:26", "Descripcion": "sem praesent id massa id nisl venenatis lacinia aenean sit", "Puntuacion": 1 },
      { "IdValoracion": 35, "Cliente": 13, "Fecha": "2023-01-13 16:08:19", "Descripcion": "accumsan tellus nisi eu orci mauris lacinia", "Puntuacion": 1 },
      { "IdValoracion": 36, "Cliente": 33, "Fecha": "2023-06-16 09:20:23", "Descripcion": "odio elementum eu interdum eu tincidunt in", "Puntuacion": 5 },
      { "IdValoracion": 37, "Cliente": 7, "Fecha": "2023-07-13 02:42:55", "Descripcion": "elementum ligula vehicula consequat morbi a", "Puntuacion": 2 },
      { "IdValoracion": 38, "Cliente": 15, "Fecha": "2022-12-31 19:39:25", "Descripcion": "libero nam dui proin leo odio porttitor id consequat in consequat", "Puntuacion": 4 },
      { "IdValoracion": 39, "Cliente": 45, "Fecha": "2023-07-26 11:48:34", "Descripcion": "id justo sit amet sapien dignissim vestibulum vestibulum", "Puntuacion": 2 },
      { "IdValoracion": 40, "Cliente": 14, "Fecha": "2023-08-06 05:56:58", "Descripcion": "vel nulla eget eros elementum pellentesque quisque porta", "Puntuacion": 4 },
      { "IdValoracion": 41, "Cliente": 25, "Fecha": "2023-08-11 05:57:46", "Descripcion": "in felis donec semper sapien a libero nam dui", "Puntuacion": 4 },
      { "IdValoracion": 42, "Cliente": 48, "Fecha": "2022-09-04 00:36:53", "Descripcion": "dui proin leo odio porttitor id consequat in consequat", "Puntuacion": 3 },
      { "IdValoracion": 43, "Cliente": 34, "Fecha": "2023-02-12 02:03:11", "Descripcion": "curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi", "Puntuacion": 1 },
      { "IdValoracion": 44, "Cliente": 42, "Fecha": "2023-08-04 01:02:26", "Descripcion": "odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi", "Puntuacion": 5 },
      { "IdValoracion": 45, "Cliente": 37, "Fecha": "2023-06-12 23:41:38", "Descripcion": "id justo sit amet sapien dignissim vestibulum vestibulum ante", "Puntuacion": 2 },
      { "IdValoracion": 46, "Cliente": 37, "Fecha": "2023-06-19 11:05:46", "Descripcion": "ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices", "Puntuacion": 2 },
      { "IdValoracion": 47, "Cliente": 23, "Fecha": "2023-08-24 09:42:35", "Descripcion": "a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus", "Puntuacion": 2 },
      { "IdValoracion": 48, "Cliente": 39, "Fecha": "2023-04-10 12:28:10", "Descripcion": "ut at dolor quis odio consequat varius integer ac leo", "Puntuacion": 2 },
      { "IdValoracion": 49, "Cliente": 21, "Fecha": "2023-04-30 07:12:30", "Descripcion": "in faucibus orci luctus et", "Puntuacion": 2 },
      { "IdValoracion": 50, "Cliente": 37, "Fecha": "2023-02-17 18:43:39", "Descripcion": "blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla", "Puntuacion": 1 }
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
