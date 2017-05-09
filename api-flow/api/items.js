let items = [];

module.exports = (app, rutaitems) => {

  // api/pub/items
  app.route(rutaitems)
    .get((req, res) => {
      if (items && items.length > 0)
        res.json(items);
      else
        res.status(204).send();
    })
    .post((req, res) => {
      let nuevoItem = req.body
      nuevoItem._id = items.length;
      items.push(nuevoItem)
      res.status(201).json(nuevoItem);
    })
    .delete((req, res) => {
      items = [];
      res.status(204).send();
    });
  // // api/pub/items/159
  app.route(`${rutaitems}/:id`)
    .get((req, res) => {
      let items = getItemById(req.params.id);
      if (items && items.length > 0)
        res.json(items[0]);
      else
        res.status(404).send();
    })
    .put((req, res) => {
      let items = getItemById(req.params.id);
      if (items && items.length > 0) {
        items[0] = req.body;
        res.json(1);
      } else {
        res.status(404).send(0);
      }

    })
    .delete((req, res) => {
      let items = getItemById(req.params.id);
      if (items && items.length > 0) {
        items.splice(req.params.id, 1)
        res.status(204).send(1);
      } else {
        res.status(404).send(0);
      }
    });


  var getItemById = (id) => items.filter(m._id == id);


  var resError = (err, res) => {
    console.error(err);
    res.status(500).send(err);
  }
}