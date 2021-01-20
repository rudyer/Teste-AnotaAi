import express, { request, response } from "express";

const routes = express.Router();
let product: { id: any; title: any; description: any; price: any; category: any; }[] = [];
let contador = 0;
routes.post('/product', (request, response) => {
    const {title, description, price, category } = request.body;
    const produto = { id : contador, title, description, price, category };
    product.push(produto);
    response.json(product);
    contador ++;
});
routes.get('/product/title', (request, response) => {
    const {filter} = request.query;
    console.log(filter)
    let title_filter = product.filter((product) => {
        return (product.title === filter);
    })
    response.json(title_filter);
});
routes.get('/product/category', (request, response) => {
    const {filter} = request.query;
    console.log(filter)
    let category_filter = product.filter((product) => {
        return (product.category === filter);
    })
    response.json(category_filter);
});
routes.get('/product', (request, response) => {
    response.json(product);

});
routes.delete('/product/:id', (request, response) => {
    const ids = request.params.id;
    const id = parseInt(ids)
    delete product[id];
    response.json({
        "message": "produto deletado",
        "id": id
    })
});
routes.put('/product/:id/title', (request, response) => {
    const ids = request.params.id;
    const {title} = request.body;
    const id = parseInt(ids);
    product[id].title = title;
    response.json(product[id]);
});
routes.put('/product/:id/description', (request, response) => {
    const ids = request.params.id
    const id = parseInt(ids);
    const {description} = request.body;
    product[id].description = description;
    response.json(product[id]);

});
routes.put('/product/:id/price', (request, response) => {
    const ids = request.params.id
    const id = parseInt(ids);
    const {price} = request.body;
    product[id].price = price;
    response.json(product[id]);

});
routes.put('/product/:id/category', (request, response) => {
    const ids = request.params.id
    const id = parseInt(ids);
    const {category} = request.body;
    product[id].category = category;
    response.json(product[id]);

});
export default routes;