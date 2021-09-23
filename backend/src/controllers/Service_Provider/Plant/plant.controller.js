const db = require("../../../config/database");

exports.addPlant = async (req, res) => {
  const cid = parseInt(req.params.id);
  const { pcat, pdesc, ploca, pprice, pimage } = req.body;
  const { rows } = await db.query(
    "INSERT INTO plant (pcat, pdesc, ploca, pprice, pimage, cid) VALUES ($1, $2, $3, $4, $5, $6)", 
    [pcat, pdesc, ploca, pprice, pimage, cid]
  );

  res.status(201).send({
    message: "Plant job added successfully!",
    body: {
      job: { pcat, pdesc, ploca, pprice, pimage, cid }
    },
  });
};

exports.listPlant = async (req, res) => {
  const response = await db.query('SELECT * FROM plant INNER JOIN client ON plant.cid = client.cid ORDER BY pid DESC');
  res.status(200).send(response.rows);
};

exports.listPlantID = async (req, res) => {
  const pid = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM plant INNER JOIN client ON plant.cid = client.cid WHERE pid=$1', [pid]);
  res.status(200).send(response.rows);
};

exports.listPosts = async (req, res) => {
  const response = await db.query("SELECT * FROM clientposts INNER JOIN client ON clientposts.cid = client.cid WHERE category='Plants & Crops' ORDER BY post_id DESC");
  res.status(200).send(response.rows);
};

exports.ongoingID = async (req, res) => {
  const cid = parseInt(req.params.id);
  try {
   const results = await db.query("select * from job_plant inner join client on job_plant.service_client_id= client.cid where cid=$1 ORDER BY jobplant_id DESC", [cid]);
 
    res.status(200).json({
       status: "Success",
       data: {
           problems:results.rows,
       },       
     });
    } 
    catch (err) {
      console.error(err.message);
    }
};

exports.ongoing = async (req, res) => {
  // const cid = parseInt(req.params.id);
  try {
   const results = await db.query("select * from job_plant inner join client on job_plant.service_client_id= client.cid where username='Tharaka Athukorala' ORDER BY jobplant_id DESC");
 
    res.status(200).json({
       status: "Success",
       data: {
           problems:results.rows,
       },       
     });
    } 
    catch (err) {
      console.error(err.message);
    }
};



exports.listProblems = async (req, res) => {
  const response = await db.query("SELECT * FROM plantproblem INNER JOIN client ON plantproblem.cid = client.cid ORDER BY post_id DESC");
  res.status(200).send(response.rows);
};