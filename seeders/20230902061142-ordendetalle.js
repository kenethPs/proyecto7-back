'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ordendetalle', [
      { "IdOrdenDetalle": 1, "LineaOrden": 2, "FormaPago": "nisi", "Fecha": "2022-12-04 22:17:11", "NumeroTransaccion": "786350986-6", "Monto": 41.76, "Saldo": 75.49, "Comentario": "curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend", "Banco": "leo pellentesque", "Cantidad": 60, "Aplicado": "ut suscipit", "IdOrden": 17, "CodigoProducto": 39 },
      { "IdOrdenDetalle": 2, "LineaOrden": 11, "FormaPago": "rutrum", "Fecha": "2023-02-02 17:18:45", "NumeroTransaccion": "245777547-7", "Monto": 88.19, "Saldo": 67.26, "Comentario": "convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis", "Banco": "ut", "Cantidad": 66, "Aplicado": "molestie nibh", "IdOrden": 43, "CodigoProducto": 27 },
      { "IdOrdenDetalle": 3, "LineaOrden": 31, "FormaPago": "et", "Fecha": "2023-08-14 13:31:36", "NumeroTransaccion": "635743231-8", "Monto": 91.18, "Saldo": 30.02, "Comentario": "potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum", "Banco": "sed", "Cantidad": 35, "Aplicado": "mauris laoreet", "IdOrden": 16, "CodigoProducto": 27 },
      { "IdOrdenDetalle": 4, "LineaOrden": 35, "FormaPago": "id", "Fecha": "2022-11-23 17:06:22", "NumeroTransaccion": "221560373-9", "Monto": 62.05, "Saldo": 28.3, "Comentario": "amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus", "Banco": "sapien cum sociis", "Cantidad": 77, "Aplicado": "ante", "IdOrden": 46, "CodigoProducto": 36 },
      { "IdOrdenDetalle": 5, "LineaOrden": 41, "FormaPago": "ultrices", "Fecha": "2023-08-18 05:34:38", "NumeroTransaccion": "393052987-4", "Monto": 78.41, "Saldo": 13.07, "Comentario": "ipsum praesent blandit lacinia erat vestibulum sed magna at nunc", "Banco": "curae mauris", "Cantidad": 100, "Aplicado": "et eros", "IdOrden": 14, "CodigoProducto": 39 },
      { "IdOrdenDetalle": 6, "LineaOrden": 35, "FormaPago": "ridiculus mus", "Fecha": "2022-12-06 11:55:38", "NumeroTransaccion": "815784648-X", "Monto": 56.84, "Saldo": 86.75, "Comentario": "quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas", "Banco": "vestibulum", "Cantidad": 30, "Aplicado": "proin interdum", "IdOrden": 48, "CodigoProducto": 20 },
      { "IdOrdenDetalle": 7, "LineaOrden": 2, "FormaPago": "luctus tincidunt", "Fecha": "2023-08-11 04:42:01", "NumeroTransaccion": "667621422-9", "Monto": 1.9, "Saldo": 27.14, "Comentario": "molestie lorem quisque ut erat curabitur gravida nisi at nibh in", "Banco": "sit amet sem", "Cantidad": 34, "Aplicado": "justo", "IdOrden": 5, "CodigoProducto": 32 },
      { "IdOrdenDetalle": 8, "LineaOrden": 25, "FormaPago": "justo", "Fecha": "2023-02-28 13:05:35", "NumeroTransaccion": "268834349-1", "Monto": 63.14, "Saldo": 25.26, "Comentario": "ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at", "Banco": "potenti in", "Cantidad": 5, "Aplicado": "aenean", "IdOrden": 22, "CodigoProducto": 8 },
      { "IdOrdenDetalle": 9, "LineaOrden": 11, "FormaPago": "rutrum", "Fecha": "2022-12-19 02:22:13", "NumeroTransaccion": "033228801-3", "Monto": 51.58, "Saldo": 42.17, "Comentario": "sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci", "Banco": "erat nulla", "Cantidad": 4, "Aplicado": "donec semper", "IdOrden": 27, "CodigoProducto": 9 },
      { "IdOrdenDetalle": 10, "LineaOrden": 18, "FormaPago": "elementum", "Fecha": "2023-02-10 04:12:11", "NumeroTransaccion": "459536375-3", "Monto": 18.74, "Saldo": 3.27, "Comentario": "id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada", "Banco": "ipsum", "Cantidad": 72, "Aplicado": "fermentum", "IdOrden": 4, "CodigoProducto": 31 },
      { "IdOrdenDetalle": 11, "LineaOrden": 13, "FormaPago": "mi nulla", "Fecha": "2022-10-18 09:49:43", "NumeroTransaccion": "686342794-X", "Monto": 72.26, "Saldo": 23.94, "Comentario": "at turpis a pede posuere nonummy integer non velit donec diam", "Banco": "lacinia eget", "Cantidad": 65, "Aplicado": "amet justo", "IdOrden": 38, "CodigoProducto": 3 },
      { "IdOrdenDetalle": 12, "LineaOrden": 31, "FormaPago": "sapien", "Fecha": "2023-08-28 19:35:48", "NumeroTransaccion": "029350531-4", "Monto": 43.29, "Saldo": 33.17, "Comentario": "in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula", "Banco": "eleifend pede libero", "Cantidad": 81, "Aplicado": "eget", "IdOrden": 45, "CodigoProducto": 24 },
      { "IdOrdenDetalle": 13, "LineaOrden": 42, "FormaPago": "consequat varius", "Fecha": "2022-10-06 07:19:08", "NumeroTransaccion": "199053986-6", "Monto": 62.95, "Saldo": 22.2, "Comentario": "ipsum dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien", "Banco": "nisi at", "Cantidad": 54, "Aplicado": "ut dolor", "IdOrden": 2, "CodigoProducto": 28 },
      { "IdOrdenDetalle": 14, "LineaOrden": 42, "FormaPago": "in", "Fecha": "2023-02-09 00:47:10", "NumeroTransaccion": "766202536-5", "Monto": 20.05, "Saldo": 77.63, "Comentario": "magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum", "Banco": "phasellus", "Cantidad": 8, "Aplicado": "at nunc", "IdOrden": 45, "CodigoProducto": 3 },
      { "IdOrdenDetalle": 15, "LineaOrden": 9, "FormaPago": "nulla ut", "Fecha": "2022-11-16 00:18:46", "NumeroTransaccion": "128866195-9", "Monto": 52.05, "Saldo": 50.0, "Comentario": "nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum", "Banco": "et", "Cantidad": 34, "Aplicado": "rutrum", "IdOrden": 6, "CodigoProducto": 4 },
      { "IdOrdenDetalle": 16, "LineaOrden": 14, "FormaPago": "et", "Fecha": "2023-08-11 04:41:09", "NumeroTransaccion": "578251398-5", "Monto": 81.21, "Saldo": 48.88, "Comentario": "molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse", "Banco": "duis bibendum felis", "Cantidad": 6, "Aplicado": "aliquam convallis", "IdOrden": 39, "CodigoProducto": 27 },
      { "IdOrdenDetalle": 17, "LineaOrden": 21, "FormaPago": "suscipit", "Fecha": "2022-09-18 07:56:29", "NumeroTransaccion": "948946645-X", "Monto": 98.59, "Saldo": 90.98, "Comentario": "ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed", "Banco": "mauris", "Cantidad": 23, "Aplicado": "vestibulum sed", "IdOrden": 23, "CodigoProducto": 25 },
      { "IdOrdenDetalle": 18, "LineaOrden": 6, "FormaPago": "sem mauris", "Fecha": "2022-09-08 11:27:20", "NumeroTransaccion": "022189281-8", "Monto": 20.0, "Saldo": 20.66, "Comentario": "vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum", "Banco": "nulla", "Cantidad": 52, "Aplicado": "quis libero", "IdOrden": 3, "CodigoProducto": 42 },
      { "IdOrdenDetalle": 19, "LineaOrden": 47, "FormaPago": "elementum", "Fecha": "2023-04-24 18:01:12", "NumeroTransaccion": "387747364-4", "Monto": 69.59, "Saldo": 13.7, "Comentario": "commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit", "Banco": "at ipsum ac", "Cantidad": 92, "Aplicado": "eleifend pede", "IdOrden": 38, "CodigoProducto": 8 },
      { "IdOrdenDetalle": 20, "LineaOrden": 29, "FormaPago": "diam", "Fecha": "2023-02-04 08:10:33", "NumeroTransaccion": "162592737-1", "Monto": 17.75, "Saldo": 1.79, "Comentario": "elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget", "Banco": "rhoncus", "Cantidad": 8, "Aplicado": "faucibus orci", "IdOrden": 2, "CodigoProducto": 23 },
      { "IdOrdenDetalle": 21, "LineaOrden": 26, "FormaPago": "justo morbi", "Fecha": "2022-09-05 06:04:48", "NumeroTransaccion": "399349439-3", "Monto": 76.7, "Saldo": 4.61, "Comentario": "ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque", "Banco": "diam cras pellentesque", "Cantidad": 96, "Aplicado": "nibh ligula", "IdOrden": 22, "CodigoProducto": 29 },
      { "IdOrdenDetalle": 22, "LineaOrden": 3, "FormaPago": "diam", "Fecha": "2023-01-16 20:24:16", "NumeroTransaccion": "142031212-X", "Monto": 45.82, "Saldo": 44.31, "Comentario": "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla", "Banco": "eget", "Cantidad": 80, "Aplicado": "id luctus", "IdOrden": 2, "CodigoProducto": 31 },
      { "IdOrdenDetalle": 23, "LineaOrden": 9, "FormaPago": "convallis", "Fecha": "2023-08-10 12:41:06", "NumeroTransaccion": "632628826-6", "Monto": 5.09, "Saldo": 88.49, "Comentario": "magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient", "Banco": "odio", "Cantidad": 50, "Aplicado": "vel", "IdOrden": 6, "CodigoProducto": 23 },
      { "IdOrdenDetalle": 24, "LineaOrden": 6, "FormaPago": "blandit", "Fecha": "2023-08-17 04:43:46", "NumeroTransaccion": "494019961-4", "Monto": 12.86, "Saldo": 50.65, "Comentario": "magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus", "Banco": "erat tortor sollicitudin", "Cantidad": 28, "Aplicado": "non velit", "IdOrden": 32, "CodigoProducto": 20 },
      { "IdOrdenDetalle": 25, "LineaOrden": 45, "FormaPago": "accumsan tellus", "Fecha": "2023-08-24 09:02:31", "NumeroTransaccion": "268248075-6", "Monto": 75.16, "Saldo": 51.81, "Comentario": "pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie", "Banco": "nec", "Cantidad": 5, "Aplicado": "porta volutpat", "IdOrden": 3, "CodigoProducto": 44 },
      { "IdOrdenDetalle": 26, "LineaOrden": 9, "FormaPago": "elementum pellentesque", "Fecha": "2023-08-31 17:55:41", "NumeroTransaccion": "423470767-8", "Monto": 39.37, "Saldo": 96.66, "Comentario": "metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci", "Banco": "leo", "Cantidad": 11, "Aplicado": "varius", "IdOrden": 44, "CodigoProducto": 17 },
      { "IdOrdenDetalle": 27, "LineaOrden": 9, "FormaPago": "platea", "Fecha": "2023-04-30 00:20:17", "NumeroTransaccion": "559634787-6", "Monto": 98.02, "Saldo": 44.35, "Comentario": "lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus", "Banco": "elit proin interdum", "Cantidad": 1, "Aplicado": "montes nascetur", "IdOrden": 21, "CodigoProducto": 30 },
      { "IdOrdenDetalle": 28, "LineaOrden": 19, "FormaPago": "etiam", "Fecha": "2023-03-03 23:10:18", "NumeroTransaccion": "359063333-6", "Monto": 74.74, "Saldo": 6.78, "Comentario": "consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat", "Banco": "mus", "Cantidad": 54, "Aplicado": "proin eu", "IdOrden": 13, "CodigoProducto": 25 },
      { "IdOrdenDetalle": 29, "LineaOrden": 27, "FormaPago": "tellus in", "Fecha": "2022-09-18 15:19:31", "NumeroTransaccion": "175420939-4", "Monto": 61.2, "Saldo": 61.73, "Comentario": "purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio", "Banco": "leo odio", "Cantidad": 49, "Aplicado": "nec dui", "IdOrden": 48, "CodigoProducto": 31 },
      { "IdOrdenDetalle": 30, "LineaOrden": 24, "FormaPago": "diam nam", "Fecha": "2023-04-02 04:07:34", "NumeroTransaccion": "908346736-8", "Monto": 75.61, "Saldo": 53.51, "Comentario": "eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet", "Banco": "et", "Cantidad": 34, "Aplicado": "orci", "IdOrden": 8, "CodigoProducto": 38 },
      { "IdOrdenDetalle": 31, "LineaOrden": 48, "FormaPago": "felis ut", "Fecha": "2023-01-17 15:27:57", "NumeroTransaccion": "326156339-7", "Monto": 84.17, "Saldo": 26.38, "Comentario": "duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer", "Banco": "ultrices", "Cantidad": 14, "Aplicado": "orci vehicula", "IdOrden": 26, "CodigoProducto": 23 },
      { "IdOrdenDetalle": 32, "LineaOrden": 22, "FormaPago": "quisque porta", "Fecha": "2022-11-05 11:34:28", "NumeroTransaccion": "436748163-8", "Monto": 18.37, "Saldo": 57.58, "Comentario": "vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor", "Banco": "vestibulum", "Cantidad": 22, "Aplicado": "vivamus metus", "IdOrden": 36, "CodigoProducto": 33 },
      { "IdOrdenDetalle": 33, "LineaOrden": 33, "FormaPago": "donec", "Fecha": "2023-03-24 05:47:01", "NumeroTransaccion": "649335403-X", "Monto": 44.56, "Saldo": 65.11, "Comentario": "faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti", "Banco": "morbi", "Cantidad": 3, "Aplicado": "gravida", "IdOrden": 41, "CodigoProducto": 37 },
      { "IdOrdenDetalle": 34, "LineaOrden": 28, "FormaPago": "viverra eget", "Fecha": "2023-04-28 22:45:31", "NumeroTransaccion": "039952322-7", "Monto": 98.52, "Saldo": 56.35, "Comentario": "scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis", "Banco": "tellus nulla", "Cantidad": 27, "Aplicado": "etiam pretium", "IdOrden": 14, "CodigoProducto": 12 },
      { "IdOrdenDetalle": 35, "LineaOrden": 20, "FormaPago": "nulla", "Fecha": "2022-10-12 11:19:30", "NumeroTransaccion": "009475159-5", "Monto": 32.9, "Saldo": 16.06, "Comentario": "morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum", "Banco": "ut erat curabitur", "Cantidad": 95, "Aplicado": "quis lectus", "IdOrden": 3, "CodigoProducto": 29 },
      { "IdOrdenDetalle": 36, "LineaOrden": 14, "FormaPago": "in porttitor", "Fecha": "2023-05-03 02:32:14", "NumeroTransaccion": "632094096-4", "Monto": 25.83, "Saldo": 50.93, "Comentario": "nulla ut erat id mauris vulputate elementum nullam varius nulla", "Banco": "ante ipsum primis", "Cantidad": 88, "Aplicado": "molestie lorem", "IdOrden": 32, "CodigoProducto": 43 },
      { "IdOrdenDetalle": 37, "LineaOrden": 1, "FormaPago": "sed justo", "Fecha": "2023-04-08 06:18:18", "NumeroTransaccion": "875393383-4", "Monto": 95.33, "Saldo": 20.12, "Comentario": "metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et", "Banco": "sapien quis libero", "Cantidad": 12, "Aplicado": "non", "IdOrden": 47, "CodigoProducto": 19 },
      { "IdOrdenDetalle": 38, "LineaOrden": 29, "FormaPago": "quam", "Fecha": "2023-07-02 14:44:58", "NumeroTransaccion": "905380452-8", "Monto": 24.76, "Saldo": 94.68, "Comentario": "potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis", "Banco": "ac", "Cantidad": 40, "Aplicado": "nibh", "IdOrden": 7, "CodigoProducto": 9 },
      { "IdOrdenDetalle": 39, "LineaOrden": 40, "FormaPago": "odio", "Fecha": "2023-01-02 11:41:00", "NumeroTransaccion": "921727829-7", "Monto": 92.9, "Saldo": 53.29, "Comentario": "primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna", "Banco": "hac habitasse platea", "Cantidad": 22, "Aplicado": "diam vitae", "IdOrden": 32, "CodigoProducto": 24 },
      { "IdOrdenDetalle": 40, "LineaOrden": 32, "FormaPago": "in", "Fecha": "2023-06-02 17:14:59", "NumeroTransaccion": "341488147-0", "Monto": 40.3, "Saldo": 78.17, "Comentario": "sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis", "Banco": "orci", "Cantidad": 21, "Aplicado": "lacinia nisi", "IdOrden": 48, "CodigoProducto": 21 },
      { "IdOrdenDetalle": 41, "LineaOrden": 13, "FormaPago": "pede", "Fecha": "2023-06-11 09:06:39", "NumeroTransaccion": "207989131-6", "Monto": 25.15, "Saldo": 61.07, "Comentario": "sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien", "Banco": "varius", "Cantidad": 45, "Aplicado": "ac", "IdOrden": 40, "CodigoProducto": 48 },
      { "IdOrdenDetalle": 42, "LineaOrden": 32, "FormaPago": "libero", "Fecha": "2023-02-20 06:29:28", "NumeroTransaccion": "038582352-5", "Monto": 4.94, "Saldo": 36.29, "Comentario": "justo eu massa donec dapibus duis at velit eu est", "Banco": "sapien ut", "Cantidad": 57, "Aplicado": "nulla", "IdOrden": 7, "CodigoProducto": 4 },
      { "IdOrdenDetalle": 43, "LineaOrden": 48, "FormaPago": "ac", "Fecha": "2023-04-25 00:06:16", "NumeroTransaccion": "869023090-4", "Monto": 76.91, "Saldo": 83.93, "Comentario": "interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus", "Banco": "neque duis", "Cantidad": 84, "Aplicado": "dictumst aliquam", "IdOrden": 12, "CodigoProducto": 12 },
      { "IdOrdenDetalle": 44, "LineaOrden": 26, "FormaPago": "orci", "Fecha": "2023-06-17 10:25:30", "NumeroTransaccion": "741430484-1", "Monto": 80.65, "Saldo": 81.25, "Comentario": "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in", "Banco": "pretium quis lectus", "Cantidad": 22, "Aplicado": "platea", "IdOrden": 8, "CodigoProducto": 8 },
      { "IdOrdenDetalle": 45, "LineaOrden": 44, "FormaPago": "blandit ultrices", "Fecha": "2023-02-05 06:16:48", "NumeroTransaccion": "387592461-4", "Monto": 87.41, "Saldo": 97.97, "Comentario": "arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget", "Banco": "vestibulum rutrum rutrum", "Cantidad": 39, "Aplicado": "vivamus vestibulum", "IdOrden": 30, "CodigoProducto": 6 },
      { "IdOrdenDetalle": 46, "LineaOrden": 2, "FormaPago": "purus", "Fecha": "2023-04-05 20:36:30", "NumeroTransaccion": "691242071-0", "Monto": 60.16, "Saldo": 93.15, "Comentario": "elementum ligula vehicula consequat morbi a ipsum integer a nibh", "Banco": "amet", "Cantidad": 93, "Aplicado": "natoque penatibus", "IdOrden": 29, "CodigoProducto": 15 },
      { "IdOrdenDetalle": 47, "LineaOrden": 42, "FormaPago": "lobortis", "Fecha": "2023-07-30 00:31:03", "NumeroTransaccion": "396627457-4", "Monto": 68.83, "Saldo": 85.04, "Comentario": "et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet", "Banco": "nullam", "Cantidad": 76, "Aplicado": "id ligula", "IdOrden": 13, "CodigoProducto": 7 },
      { "IdOrdenDetalle": 48, "LineaOrden": 42, "FormaPago": "interdum", "Fecha": "2023-01-05 10:12:51", "NumeroTransaccion": "634232218-X", "Monto": 80.95, "Saldo": 82.52, "Comentario": "at velit eu est congue elementum in hac habitasse platea dictumst", "Banco": "suscipit", "Cantidad": 38, "Aplicado": "duis faucibus", "IdOrden": 48, "CodigoProducto": 20 },
      { "IdOrdenDetalle": 49, "LineaOrden": 2, "FormaPago": "euismod", "Fecha": "2023-06-28 17:31:54", "NumeroTransaccion": "417047510-0", "Monto": 82.94, "Saldo": 48.44, "Comentario": "duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor", "Banco": "ac lobortis vel", "Cantidad": 9, "Aplicado": "ante", "IdOrden": 37, "CodigoProducto": 45 },
      { "IdOrdenDetalle": 50, "LineaOrden": 7, "FormaPago": "ante", "Fecha": "2022-10-06 08:44:19", "NumeroTransaccion": "679427726-3", "Monto": 8.2, "Saldo": 15.96, "Comentario": "pede ac diam cras pellentesque volutpat dui maecenas tristique est", "Banco": "ultrices vel augue", "Cantidad": 97, "Aplicado": "vivamus", "IdOrden": 36, "CodigoProducto": 49 }
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
