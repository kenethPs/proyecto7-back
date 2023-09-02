'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ingrediente', [
      { "CodigoIngrediente": 1, "Nombre": "Bread - Corn Muffaletta", "Proveedor": "Barrie Biset", "CodigoProveedor": 2, "Stock": 6, "CodigoProducto": 21, "FechaCreacion": "2023-04-29 16:57:26", "Estado": "donec" },
      { "CodigoIngrediente": 2, "Nombre": "Foam Dinner Plate", "Proveedor": "Tilly Gillaspy", "CodigoProveedor": 20, "Stock": 22, "CodigoProducto": 12, "FechaCreacion": "2023-07-29 12:51:21", "Estado": "volutpat dui" },
      { "CodigoIngrediente": 3, "Nombre": "Ecolab - Medallion", "Proveedor": "Danette Haslock(e)", "CodigoProveedor": 42, "Stock": 82, "CodigoProducto": 22, "FechaCreacion": "2022-11-07 06:31:06", "Estado": "dapibus" },
      { "CodigoIngrediente": 4, "Nombre": "Split Peas - Yellow, Dry", "Proveedor": "Mychal Dymidowicz", "CodigoProveedor": 35, "Stock": 91, "CodigoProducto": 44, "FechaCreacion": "2022-12-24 15:20:46", "Estado": "nulla suscipit" },
      { "CodigoIngrediente": 5, "Nombre": "Lamb - Sausage Casings", "Proveedor": "Steward Rapkins", "CodigoProveedor": 4, "Stock": 16, "CodigoProducto": 28, "FechaCreacion": "2023-04-10 12:26:13", "Estado": "tellus" },
      { "CodigoIngrediente": 6, "Nombre": "Beef - Rib Roast, Capless", "Proveedor": "Woodie Twohig", "CodigoProveedor": 49, "Stock": 91, "CodigoProducto": 38, "FechaCreacion": "2022-10-19 00:34:01", "Estado": "hac" },
      { "CodigoIngrediente": 7, "Nombre": "Pail With Metal Handle 16l White", "Proveedor": "Milicent Bill", "CodigoProveedor": 23, "Stock": 31, "CodigoProducto": 7, "FechaCreacion": "2023-03-04 22:48:43", "Estado": "neque libero" },
      { "CodigoIngrediente": 8, "Nombre": "Bread - Flat Bread", "Proveedor": "Vergil Mulderrig", "CodigoProveedor": 12, "Stock": 46, "CodigoProducto": 36, "FechaCreacion": "2023-03-02 15:36:17", "Estado": "in faucibus" },
      { "CodigoIngrediente": 9, "Nombre": "Salmon Steak - Cohoe 8 Oz", "Proveedor": "Krissie Yewdall", "CodigoProveedor": 6, "Stock": 68, "CodigoProducto": 39, "FechaCreacion": "2023-05-14 23:58:56", "Estado": "eu tincidunt" },
      { "CodigoIngrediente": 10, "Nombre": "Sauce - White, Mix", "Proveedor": "Amalle Molan", "CodigoProveedor": 11, "Stock": 74, "CodigoProducto": 33, "FechaCreacion": "2023-07-30 20:55:06", "Estado": "mattis pulvinar" },
      { "CodigoIngrediente": 11, "Nombre": "Pork Loin Bine - In Frenched", "Proveedor": "Pat Rappa", "CodigoProveedor": 29, "Stock": 71, "CodigoProducto": 18, "FechaCreacion": "2023-05-23 11:10:10", "Estado": "potenti cras" },
      { "CodigoIngrediente": 12, "Nombre": "Fish - Scallops, Cold Smoked", "Proveedor": "Salomon Thresh", "CodigoProveedor": 21, "Stock": 53, "CodigoProducto": 40, "FechaCreacion": "2022-12-18 20:53:57", "Estado": "aliquam erat" },
      { "CodigoIngrediente": 13, "Nombre": "Coffee - Frthy Coffee Crisp", "Proveedor": "Robinson Emlin", "CodigoProveedor": 28, "Stock": 94, "CodigoProducto": 23, "FechaCreacion": "2023-07-22 03:46:29", "Estado": "vehicula" },
      { "CodigoIngrediente": 14, "Nombre": "Cumin - Ground", "Proveedor": "Jehu Reagan", "CodigoProveedor": 43, "Stock": 44, "CodigoProducto": 21, "FechaCreacion": "2023-03-03 22:55:17", "Estado": "a nibh" },
      { "CodigoIngrediente": 15, "Nombre": "Sauce - Marinara", "Proveedor": "Silvester Baldelli", "CodigoProveedor": 45, "Stock": 11, "CodigoProducto": 23, "FechaCreacion": "2022-11-09 23:36:10", "Estado": "ipsum dolor" },
      { "CodigoIngrediente": 16, "Nombre": "Croissant, Raw - Mini", "Proveedor": "Mort Buckthorpe", "CodigoProveedor": 29, "Stock": 59, "CodigoProducto": 50, "FechaCreacion": "2023-03-10 01:54:13", "Estado": "metus vitae" },
      { "CodigoIngrediente": 17, "Nombre": "Broom - Corn", "Proveedor": "Reuben Brando", "CodigoProveedor": 39, "Stock": 48, "CodigoProducto": 50, "FechaCreacion": "2023-02-27 21:27:51", "Estado": "at nibh" },
      { "CodigoIngrediente": 18, "Nombre": "Water - Tonic", "Proveedor": "Patrica Shickle", "CodigoProveedor": 19, "Stock": 67, "CodigoProducto": 30, "FechaCreacion": "2022-11-19 16:29:19", "Estado": "feugiat" },
      { "CodigoIngrediente": 19, "Nombre": "Chocolate - Dark", "Proveedor": "Paule Dumberell", "CodigoProveedor": 29, "Stock": 64, "CodigoProducto": 49, "FechaCreacion": "2023-02-26 20:23:03", "Estado": "sem fusce" },
      { "CodigoIngrediente": 20, "Nombre": "Soup - French Can Pea", "Proveedor": "Torin Curror", "CodigoProveedor": 5, "Stock": 79, "CodigoProducto": 33, "FechaCreacion": "2022-11-08 17:00:46", "Estado": "diam" },
      { "CodigoIngrediente": 21, "Nombre": "Mustard - Dijon", "Proveedor": "Gilles Presley", "CodigoProveedor": 43, "Stock": 18, "CodigoProducto": 37, "FechaCreacion": "2022-12-17 02:53:26", "Estado": "nulla justo" },
      { "CodigoIngrediente": 22, "Nombre": "Sausage - Blood Pudding", "Proveedor": "Donaugh Hitzke", "CodigoProveedor": 25, "Stock": 74, "CodigoProducto": 49, "FechaCreacion": "2023-08-10 06:24:34", "Estado": "enim" },
      { "CodigoIngrediente": 23, "Nombre": "Beer - Upper Canada Light", "Proveedor": "Diane-marie Maddinon", "CodigoProveedor": 42, "Stock": 93, "CodigoProducto": 12, "FechaCreacion": "2022-10-07 20:25:47", "Estado": "volutpat erat" },
      { "CodigoIngrediente": 24, "Nombre": "Milk - Chocolate 500ml", "Proveedor": "Tabbi O'Shevlin", "CodigoProveedor": 3, "Stock": 95, "CodigoProducto": 30, "FechaCreacion": "2023-03-09 08:49:36", "Estado": "varius integer" },
      { "CodigoIngrediente": 25, "Nombre": "Spice - Chili Powder Mexican", "Proveedor": "Bryon Gathwaite", "CodigoProveedor": 37, "Stock": 90, "CodigoProducto": 22, "FechaCreacion": "2022-09-28 17:48:03", "Estado": "nisi" },
      { "CodigoIngrediente": 26, "Nombre": "Nantucket Cranberry Juice", "Proveedor": "Heidie Beurich", "CodigoProveedor": 37, "Stock": 42, "CodigoProducto": 45, "FechaCreacion": "2023-01-08 19:29:23", "Estado": "justo" },
      { "CodigoIngrediente": 27, "Nombre": "Asparagus - Mexican", "Proveedor": "Bone Linkie", "CodigoProveedor": 21, "Stock": 1, "CodigoProducto": 6, "FechaCreacion": "2023-01-27 11:07:40", "Estado": "est" },
      { "CodigoIngrediente": 28, "Nombre": "Oil - Peanut", "Proveedor": "Wiley MacCartair", "CodigoProveedor": 34, "Stock": 82, "CodigoProducto": 47, "FechaCreacion": "2022-10-07 03:08:30", "Estado": "ligula" },
      { "CodigoIngrediente": 29, "Nombre": "Bread - Pumpernickel", "Proveedor": "Berk MacConnal", "CodigoProveedor": 8, "Stock": 33, "CodigoProducto": 12, "FechaCreacion": "2022-10-17 02:58:40", "Estado": "sem" },
      { "CodigoIngrediente": 30, "Nombre": "Chicken Giblets", "Proveedor": "Annalise Hasely", "CodigoProveedor": 31, "Stock": 42, "CodigoProducto": 40, "FechaCreacion": "2023-08-16 23:59:14", "Estado": "in" },
      { "CodigoIngrediente": 31, "Nombre": "Rum - Dark, Bacardi, Black", "Proveedor": "Roldan Burberye", "CodigoProveedor": 12, "Stock": 96, "CodigoProducto": 4, "FechaCreacion": "2022-10-12 06:56:22", "Estado": "lorem" },
      { "CodigoIngrediente": 32, "Nombre": "Pasta - Gnocchi, Potato", "Proveedor": "Tobias Waiting", "CodigoProveedor": 46, "Stock": 5, "CodigoProducto": 50, "FechaCreacion": "2023-08-21 12:01:17", "Estado": "lacinia erat" },
      { "CodigoIngrediente": 33, "Nombre": "Red Currants", "Proveedor": "Tremayne Bolsover", "CodigoProveedor": 48, "Stock": 74, "CodigoProducto": 6, "FechaCreacion": "2023-06-15 23:23:52", "Estado": "aliquet" },
      { "CodigoIngrediente": 34, "Nombre": "Veal - Sweetbread", "Proveedor": "Phil Reck", "CodigoProveedor": 30, "Stock": 67, "CodigoProducto": 49, "FechaCreacion": "2022-11-23 19:53:26", "Estado": "orci" },
      { "CodigoIngrediente": 35, "Nombre": "Nescafe - Frothy French Vanilla", "Proveedor": "Arabel Aldwich", "CodigoProveedor": 48, "Stock": 26, "CodigoProducto": 46, "FechaCreacion": "2022-12-12 08:25:46", "Estado": "consequat dui" },
      { "CodigoIngrediente": 36, "Nombre": "Rosemary - Dry", "Proveedor": "Jorie Swancott", "CodigoProveedor": 23, "Stock": 88, "CodigoProducto": 35, "FechaCreacion": "2023-06-16 10:54:34", "Estado": "vivamus" },
      { "CodigoIngrediente": 37, "Nombre": "Eggs - Extra Large", "Proveedor": "Alikee Surphliss", "CodigoProveedor": 35, "Stock": 57, "CodigoProducto": 40, "FechaCreacion": "2023-02-08 15:21:28", "Estado": "hac" },
      { "CodigoIngrediente": 38, "Nombre": "Lamb - Loin Chops", "Proveedor": "Merissa Radcliffe", "CodigoProveedor": 3, "Stock": 93, "CodigoProducto": 42, "FechaCreacion": "2023-01-24 02:05:58", "Estado": "lacus" },
      { "CodigoIngrediente": 39, "Nombre": "Mustard Prepared", "Proveedor": "Lisha Serchwell", "CodigoProveedor": 43, "Stock": 10, "CodigoProducto": 36, "FechaCreacion": "2022-09-15 00:48:01", "Estado": "nibh in" },
      { "CodigoIngrediente": 40, "Nombre": "Plums - Red", "Proveedor": "Tressa Lenoir", "CodigoProveedor": 34, "Stock": 68, "CodigoProducto": 18, "FechaCreacion": "2022-11-29 23:24:52", "Estado": "vivamus" },
      { "CodigoIngrediente": 41, "Nombre": "Anchovy Fillets", "Proveedor": "Dalia Downs", "CodigoProveedor": 34, "Stock": 95, "CodigoProducto": 8, "FechaCreacion": "2023-01-05 13:21:07", "Estado": "fermentum justo" },
      { "CodigoIngrediente": 42, "Nombre": "Tea - Black Currant", "Proveedor": "Kenn Brasier", "CodigoProveedor": 39, "Stock": 93, "CodigoProducto": 44, "FechaCreacion": "2022-11-07 09:56:38", "Estado": "in" },
      { "CodigoIngrediente": 43, "Nombre": "Marjoram - Dried, Rubbed", "Proveedor": "Isidore Catenot", "CodigoProveedor": 39, "Stock": 9, "CodigoProducto": 15, "FechaCreacion": "2023-07-07 12:07:08", "Estado": "sapien quis" },
      { "CodigoIngrediente": 44, "Nombre": "Lettuce - Radicchio", "Proveedor": "Diannne Vasilov", "CodigoProveedor": 23, "Stock": 55, "CodigoProducto": 14, "FechaCreacion": "2022-11-02 18:02:49", "Estado": "donec ut" },
      { "CodigoIngrediente": 45, "Nombre": "Canada Dry", "Proveedor": "Derby Riggott", "CodigoProveedor": 7, "Stock": 19, "CodigoProducto": 45, "FechaCreacion": "2022-09-21 21:09:35", "Estado": "quis" },
      { "CodigoIngrediente": 46, "Nombre": "Beef - Kobe Striploin", "Proveedor": "Happy Cleaton", "CodigoProveedor": 6, "Stock": 53, "CodigoProducto": 2, "FechaCreacion": "2022-12-30 22:33:00", "Estado": "suspendisse potenti" },
      { "CodigoIngrediente": 47, "Nombre": "Coconut - Creamed, Pure", "Proveedor": "Raimondo Alliott", "CodigoProveedor": 2, "Stock": 42, "CodigoProducto": 35, "FechaCreacion": "2023-07-29 16:26:31", "Estado": "non velit" },
      { "CodigoIngrediente": 48, "Nombre": "Sauce - Chili", "Proveedor": "Eddi Chimenti", "CodigoProveedor": 39, "Stock": 60, "CodigoProducto": 30, "FechaCreacion": "2022-12-23 16:13:33", "Estado": "est" },
      { "CodigoIngrediente": 49, "Nombre": "Duck - Legs", "Proveedor": "Goldi Prudence", "CodigoProveedor": 32, "Stock": 41, "CodigoProducto": 26, "FechaCreacion": "2023-01-12 00:39:17", "Estado": "nibh ligula" },
      { "CodigoIngrediente": 50, "Nombre": "Gingerale - Schweppes, 355 Ml", "Proveedor": "Ira La Vigne", "CodigoProveedor": 33, "Stock": 24, "CodigoProducto": 8, "FechaCreacion": "2023-01-27 03:14:13", "Estado": "quisque" }


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
