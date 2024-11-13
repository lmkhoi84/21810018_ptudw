'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let data = [{
      "name": "sit amet diam",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 22.33,
      "price": 77.07,
      "summary": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      "specification": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      "starts": 0.0,
      "quantity": 33,
      "categoryId": 3,
      "brandId": 2
    }, {
      "name": "sapien varius ut",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 11.29,
      "price": 64.74,
      "summary": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
      "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "specification": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "starts": 0.0,
      "quantity": 56,
      "categoryId": 3,
      "brandId": 3
    }, {
      "name": "vel nisl",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 7.38,
      "price": 31.62,
      "summary": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
      "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      "specification": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      "starts": 0.0,
      "quantity": 19,
      "categoryId": 2,
      "brandId": 5
    }, {
      "name": "leo odio",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 27.16,
      "price": 33.37,
      "summary": "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
      "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      "specification": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      "starts": 0.0,
      "quantity": 42,
      "categoryId": 4,
      "brandId": 1
    }, {
      "name": "semper sapien",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 63.2,
      "price": 47.41,
      "summary": "Donec semper sapien a libero. Nam dui.",
      "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      "specification": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      "starts": 0.0,
      "quantity": 57,
      "categoryId": 3,
      "brandId": 3
    }, {
      "name": "erat fermentum justo",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 9.59,
      "price": 65.69,
      "summary": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
      "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      "specification": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
      "starts": 0.0,
      "quantity": 91,
      "categoryId": 2,
      "brandId": 3
    }, {
      "name": "penatibus et magnis",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 17.07,
      "price": 71.67,
      "summary": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      "specification": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      "starts": 0.0,
      "quantity": 35,
      "categoryId": 2,
      "brandId": 2
    }, {
      "name": "sollicitudin mi",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 58.44,
      "price": 52.33,
      "summary": "Duis mattis egestas metus. Aenean fermentum.",
      "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      "specification": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      "starts": 0.0,
      "quantity": 50,
      "categoryId": 1,
      "brandId": 2
    }, {
      "name": "potenti nullam porttitor",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 93.7,
      "price": 69.31,
      "summary": "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
      "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      "specification": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      "starts": 0.0,
      "quantity": 22,
      "categoryId": 2,
      "brandId": 3
    }, {
      "name": "justo sollicitudin",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 40.78,
      "price": 80.23,
      "summary": "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
      "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      "specification": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      "starts": 0.0,
      "quantity": 52,
      "categoryId": 1,
      "brandId": 4
    }, {
      "name": "hac habitasse platea",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 4.63,
      "price": 34.24,
      "summary": "Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      "specification": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      "starts": 0.0,
      "quantity": 35,
      "categoryId": 4,
      "brandId": 6
    }, {
      "name": "viverra dapibus",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 81.64,
      "price": 81.72,
      "summary": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
      "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      "specification": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      "starts": 0.0,
      "quantity": 25,
      "categoryId": 4,
      "brandId": 4
    }, {
      "name": "eu magna",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 87.45,
      "price": 33.72,
      "summary": "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      "specification": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      "starts": 0.0,
      "quantity": 41,
      "categoryId": 1,
      "brandId": 6
    }, {
      "name": "porta volutpat quam",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 17.3,
      "price": 80.83,
      "summary": "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      "description": "Fusce consequat. Nulla nisl. Nunc nisl.",
      "specification": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      "starts": 0.0,
      "quantity": 81,
      "categoryId": 3,
      "brandId": 3
    }, {
      "name": "non ligula",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 1.39,
      "price": 76.04,
      "summary": "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
      "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      "specification": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      "starts": 0.0,
      "quantity": 14,
      "categoryId": 4,
      "brandId": 6
    }, {
      "name": "proin eu mi",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 7.67,
      "price": 97.18,
      "summary": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
      "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      "specification": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      "starts": 0.0,
      "quantity": 82,
      "categoryId": 1,
      "brandId": 6
    }, {
      "name": "et tempus semper",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 3.11,
      "price": 6.37,
      "summary": "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
      "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      "specification": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      "starts": 0.0,
      "quantity": 3,
      "categoryId": 3,
      "brandId": 4
    }, {
      "name": "lorem id ligula",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 78.46,
      "price": 44.69,
      "summary": "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
      "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      "specification": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      "starts": 0.0,
      "quantity": 8,
      "categoryId": 4,
      "brandId": 1
    }, {
      "name": "in faucibus",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 6.1,
      "price": 16.71,
      "summary": "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
      "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      "specification": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      "starts": 0.0,
      "quantity": 84,
      "categoryId": 2,
      "brandId": 5
    }, {
      "name": "purus eu",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 86.05,
      "price": 74.07,
      "summary": "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      "specification": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      "starts": 0.0,
      "quantity": 9,
      "categoryId": 2,
      "brandId": 3
    }, {
      "name": "eget elit",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 4.48,
      "price": 22.54,
      "summary": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
      "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      "specification": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      "starts": 0.0,
      "quantity": 69,
      "categoryId": 4,
      "brandId": 4
    }, {
      "name": "turpis elementum",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 76.99,
      "price": 49.71,
      "summary": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      "specification": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "starts": 0.0,
      "quantity": 30,
      "categoryId": 3,
      "brandId": 3
    }, {
      "name": "dis parturient montes",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 34.92,
      "price": 53.41,
      "summary": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      "specification": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      "starts": 0.0,
      "quantity": 67,
      "categoryId": 2,
      "brandId": 6
    }, {
      "name": "rhoncus dui",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 42.18,
      "price": 78.86,
      "summary": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      "specification": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "starts": 0.0,
      "quantity": 65,
      "categoryId": 1,
      "brandId": 3
    }, {
      "name": "quisque arcu",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 12.73,
      "price": 58.39,
      "summary": "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
      "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      "specification": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      "starts": 0.0,
      "quantity": 25,
      "categoryId": 1,
      "brandId": 6
    }, {
      "name": "pellentesque ultrices",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 25.97,
      "price": 67.34,
      "summary": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      "specification": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      "starts": 0.0,
      "quantity": 60,
      "categoryId": 1,
      "brandId": 6
    }, {
      "name": "turpis sed ante",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 18.18,
      "price": 49.1,
      "summary": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
      "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      "specification": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      "starts": 0.0,
      "quantity": 53,
      "categoryId": 4,
      "brandId": 2
    }, {
      "name": "fermentum justo nec",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 38.47,
      "price": 51.56,
      "summary": "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      "specification": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      "starts": 0.0,
      "quantity": 23,
      "categoryId": 1,
      "brandId": 1
    }, {
      "name": "magna ac consequat",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 51.1,
      "price": 59.34,
      "summary": "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      "specification": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      "starts": 0.0,
      "quantity": 14,
      "categoryId": 4,
      "brandId": 6
    }, {
      "name": "nulla integer",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 17.03,
      "price": 46.59,
      "summary": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
      "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      "specification": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      "starts": 0.0,
      "quantity": 79,
      "categoryId": 3,
      "brandId": 4
    }, {
      "name": "donec diam neque",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 82.31,
      "price": 82.01,
      "summary": "Donec posuere metus vitae ipsum. Aliquam non mauris.",
      "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      "specification": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "starts": 0.0,
      "quantity": 48,
      "categoryId": 1,
      "brandId": 6
    }, {
      "name": "sed augue",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 33.11,
      "price": 26.28,
      "summary": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      "specification": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      "starts": 0.0,
      "quantity": 77,
      "categoryId": 1,
      "brandId": 6
    }, {
      "name": "molestie lorem quisque",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 14.2,
      "price": 62.78,
      "summary": "Nunc purus. Phasellus in felis.",
      "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      "specification": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      "starts": 0.0,
      "quantity": 49,
      "categoryId": 4,
      "brandId": 1
    }, {
      "name": "massa id",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 81.8,
      "price": 26.31,
      "summary": "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
      "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      "specification": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      "starts": 0.0,
      "quantity": 87,
      "categoryId": 3,
      "brandId": 3
    }, {
      "name": "tortor quis",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 5.21,
      "price": 32.62,
      "summary": "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      "specification": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      "starts": 0.0,
      "quantity": 52,
      "categoryId": 2,
      "brandId": 3
    }, {
      "name": "magna vulputate",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 12.81,
      "price": 52.84,
      "summary": "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
      "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      "specification": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      "starts": 0.0,
      "quantity": 97,
      "categoryId": 1,
      "brandId": 1
    }, {
      "name": "sagittis nam congue",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 76.97,
      "price": 7.47,
      "summary": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
      "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      "specification": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      "starts": 0.0,
      "quantity": 80,
      "categoryId": 2,
      "brandId": 5
    }, {
      "name": "erat nulla tempus",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 47.79,
      "price": 29.46,
      "summary": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
      "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      "specification": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "starts": 0.0,
      "quantity": 68,
      "categoryId": 3,
      "brandId": 3
    }, {
      "name": "magna ac",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 18.04,
      "price": 72.19,
      "summary": "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
      "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "specification": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      "starts": 0.0,
      "quantity": 61,
      "categoryId": 3,
      "brandId": 5
    }, {
      "name": "ultrices phasellus",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 75.01,
      "price": 67.48,
      "summary": "Donec posuere metus vitae ipsum. Aliquam non mauris.",
      "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      "specification": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      "starts": 0.0,
      "quantity": 51,
      "categoryId": 3,
      "brandId": 3
    }, {
      "name": "posuere cubilia",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 86.05,
      "price": 24.9,
      "summary": "Pellentesque at nulla. Suspendisse potenti.",
      "description": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      "specification": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      "starts": 0.0,
      "quantity": 15,
      "categoryId": 2,
      "brandId": 6
    }, {
      "name": "ut ultrices",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 11.68,
      "price": 40.6,
      "summary": "Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
      "description": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      "specification": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      "starts": 0.0,
      "quantity": 23,
      "categoryId": 3,
      "brandId": 4
    }, {
      "name": "blandit non",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 35.07,
      "price": 33.17,
      "summary": "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      "specification": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      "starts": 0.0,
      "quantity": 43,
      "categoryId": 1,
      "brandId": 4
    }, {
      "name": "duis consequat dui",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 19.51,
      "price": 61.99,
      "summary": "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
      "specification": "Fusce consequat. Nulla nisl. Nunc nisl.",
      "starts": 0.0,
      "quantity": 66,
      "categoryId": 1,
      "brandId": 4
    }, {
      "name": "erat fermentum justo",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 30.58,
      "price": 21.21,
      "summary": "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      "specification": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      "starts": 0.0,
      "quantity": 8,
      "categoryId": 1,
      "brandId": 5
    }, {
      "name": "pede posuere nonummy",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 89.17,
      "price": 75.59,
      "summary": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
      "description": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      "specification": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      "starts": 0.0,
      "quantity": 11,
      "categoryId": 4,
      "brandId": 2
    }, {
      "name": "justo maecenas rhoncus",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 98.94,
      "price": 94.61,
      "summary": "In congue. Etiam justo. Etiam pretium iaculis justo.",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      "specification": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      "starts": 0.0,
      "quantity": 26,
      "categoryId": 3,
      "brandId": 2
    }, {
      "name": "amet consectetuer",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 82.04,
      "price": 96.88,
      "summary": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
      "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      "specification": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      "starts": 0.0,
      "quantity": 33,
      "categoryId": 2,
      "brandId": 6
    }, {
      "name": "erat volutpat in",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 30.35,
      "price": 34.19,
      "summary": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
      "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      "specification": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      "starts": 0.0,
      "quantity": 6,
      "categoryId": 2,
      "brandId": 5
    }, {
      "name": "orci luctus et",
      "imagePath": "Syntax error in formula 'CONCAT(\"img/product-\", random(1,9),\".png\"'",
      "oldPrice": 77.45,
      "price": 46.28,
      "summary": "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
      "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
      "specification": "In congue. Etiam justo. Etiam pretium iaculis justo.",
      "starts": 0.0,
      "quantity": 39,
      "categoryId": 3,
      "brandId": 3
    }];

    data.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })

    await queryInterface.bulkInsert('Products', data, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkInsert('Prodcuts', null, {});
  }
};
