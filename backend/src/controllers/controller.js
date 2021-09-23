const db = require("../config/database");

exports.product = async (req, res) => {
  const { productname, quantity, price } = req.body;
  const { rows } = await db.query(
    "INSERT INTO products (productname, quantity, price) VALUES ($1, $2, $3)",
    [productname, quantity, price]
  );

  res.status(201).send({
    message: "Product added successfully!",
    body: {
      product: { productname, quantity, price }
    },
  });
};

exports.test = async (req, res) => {
  const { tname } = req.body;
  const { rows } = await db.query(
    "INSERT INTO test (tname) VALUES ($1)",
    [tname]
  );

  res.status(201).send({
    message: "name added successfully!",
    body: {
      test: { tname }
    },
  });
};

exports.listAllCategory = async (req, res) => {
    const response = await db.query('SELECT * FROM products ORDER BY productname ASC');
    res.status(200).send(response.rows);
};

exports.findCategoryById = async (req, res) => {
    const catId = parseInt(req.params.id);
    const response = await db.query('SELECT * FROM category WHERE catid = $1', [catId]);
    res.status(200).send(response.rows);
};

exports.deleteCategoryById = async (req, res) => {
  const catId = parseInt(req.params.id);
  await db.query('DELETE FROM category WHERE catid = $1', [catId]);

  res.status(200).send({ message: 'category deleted successfully!', catId });
};