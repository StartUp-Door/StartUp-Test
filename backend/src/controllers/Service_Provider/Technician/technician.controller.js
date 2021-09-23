const db = require("../../../config/database");

exports.addTech = async (req, res) => {
  const cid = parseInt(req.params.id);
  const { tdesc, tloca, tavail } = req.body; //tcat,
  const { rows } = await db.query(
    "INSERT INTO technician (tcat, tdesc, tloca, tavail, cid) VALUES ($1, $2, $3, $4, $5)", ['Electrician, Motor Mechanic, IT Service', tdesc, tloca, tavail, cid]
  );

  res.status(201).send({
    message: "Technician job added successfully!", 
    body: {
      job: { tcat, tdesc, tloca, tavail, cid }
    },
  });
};

exports.addBid = async (req, res) => {
  const service_client_id = 2;  
  // const service_client_id = findById(req.params.id);
  const post_id = parseInt(req.params.id);
  const { name, price } = req.body; 
  const { rows } = await db.query(
    "INSERT INTO bidding (post_id, name, price, service_client_id) VALUES ($1, $2, $3, $4)", [post_id, name, price, service_client_id]
  );

  res.status(201).send({
    message: "Bid price added successfully!", 
    body: {
      job: { name, price, post_id, service_client_id } 
    },
  });
};

exports.viewBid = async (req, res) => {
  const post_id = parseInt(req.params.id);
  try {
   const results = await db.query("SELECT * FROM bidding WHERE post_id = $1 ORDER BY price DESC", [post_id]);
 
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

exports.deleteBid = async (req, res) => {
  const b_id = parseInt(req.params.id);
  try {
   const results = await db.query("DELETE FROM bidding WHERE b_id = $1", [b_id]);
   res.status(200).send(results.rows); 

    // res.status(200).json({
    //    status: "Success",
    //    data: {
    //        problems:results.rows,
    //    },       
    //  });
    } 
    catch (err) {
      console.error(err.message);
    }
};

exports.listTech = async (req, res) => {
  const response = await db.query('SELECT * FROM technician INNER JOIN client ON technician.cid = client.cid ORDER BY tid DESC');
  res.status(200).send(response.rows); 
};

exports.listTechID = async (req, res) => {
  const tid = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM technician INNER JOIN client ON technician.cid = client.cid WHERE tid=$1', [tid]);
  res.status(200).send(response.rows); 
};

exports.right = async (req, res) => {
  const cid = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM technician WHERE cid=$1', [cid]);
  res.status(200).send(response.rows); 
};

exports.listPosts = async (req, res) => {
  // const tid = parseInt(req.params.id);
  const response = await db.query("SELECT * FROM clientposts INNER JOIN client ON clientposts.cid = client.cid WHERE category='Technician' ORDER BY post_id DESC ");
  res.status(200).send(response.rows); 
};

exports.updateTechJob = async (req, res) => {
  const cid = parseInt(req.params.id);
  const { tdesc, tloca, tavail } = req.body; //tcat, 

  const response = await db.query(
    "UPDATE technician SET tcat = $1, tdesc = $2, tloca = $3, tavail=$4 WHERE cid = $5", 
    ['Electrician, Motor Mechanic, IT Service', tdesc, tloca, tavail, cid]
  );

  res.status(200).send({ message: "Tech Job Updated Successfully!" });
};

exports.ongoingID = async (req, res) => {
  const cid = parseInt(req.params.id);
  try {
   const results = await db.query("select * from job_tech inner join client on job_tech.service_client_id= client.cid where cid=$1 ORDER BY jobtech_id DESC", [cid]);
 
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
   const results = await db.query("select * from job_tech inner join client on job_tech.service_client_id= client.cid where username='Tharaka Athukorala' ORDER BY jobtech_id DESC");
 
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

exports.addSolu = async (req, res) => {
  const post_id = parseInt(req.params.id);
  const { name, price } = req.body; 
  const { rows } = await db.query(
    "INSERT INTO solutions (post_id, name, price) VALUES ($1, $2, $3)", [post_id, name, price]
  );

  res.status(201).send({
    message: "Bid price added successfully!", 
    body: {
      job: { name, price, post_id } 
    },
  });
};

exports.viewSolu = async (req, res) => {
  const post_id = parseInt(req.params.id);
  try {
   const results = await db.query("SELECT * FROM solutions WHERE post_id = $1 ", [post_id]);
 
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

exports.deleteSolu = async (req, res) => {
  const b_id = parseInt(req.params.id);
  try {
   const results = await db.query("DELETE FROM solutions WHERE b_id = $1", [b_id]);
   res.status(200).send(results.rows); 

    // res.status(200).json({
    //    status: "Success",
    //    data: {
    //        problems:results.rows,
    //    },       
    //  });
    } 
    catch (err) {
      console.error(err.message);
    }
};