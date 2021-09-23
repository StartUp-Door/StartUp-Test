const db = require("../../config/database");

exports.addPost = async (req, res) => {
  const cid = parseInt(req.params.id);
  const { category, description, location, price, image } = req.body;
  const { rows } = await db.query(
    "INSERT INTO clientposts (category, description, location, price, image, cid) VALUES ($1, $2, $3, $4, $5, $6)",
     [category, description, location, price, image, cid]
  );

  res.status(201).send({
    message: "Post added successfully!",
    body: {
      job: { category, description, location, price, image, cid }
    },
  });
};

exports.requestTech = async (req, res) => {
  const tid = parseInt(req.params.id);
  const { username, description, title, price, service_client_id } = req.body;
  const { rows } = await db.query(
    "INSERT INTO job_tech (username, description, title, price, tid, status, service_client_id) VALUES ($1, $2, $3, $4, $5, $6, $7)",
     [username, description, title, price, tid, 'pending', service_client_id]
  );

  res.status(201).send({
    message: "Job added to the technician successfully!",
    body: {
      job: { username, description, title, price, tid, service_client_id }
    },
  });
};

exports.requestPlant = async (req, res) => {
  const pid = parseInt(req.params.id);
  const { username, description, title, price, service_client_id } = req.body;
  const { rows } = await db.query(
    "INSERT INTO job_plant (username, description, title, price, pid, status, service_client_id) VALUES ($1, $2, $3, $4, $5, $6, $7)",
     [username, description, title, price, pid, 'pending', service_client_id]
  );

  res.status(201).send({
    message: "Job added to the plant successfully!",
    body: {
      job: { username, description, title, price, pid, service_client_id }
    },
  });
};

exports.requestFood = async (req, res) => {
  const fid = parseInt(req.params.id);
  const { username, description, title, price, service_client_id } = req.body;
  const { rows } = await db.query(
    "INSERT INTO job_food (username, description, title, price, fid, status, service_client_id) VALUES ($1, $2, $3, $4, $5, $6, $7)",
     [username, description, title, price, fid, 'pending', service_client_id]
  );

  res.status(201).send({
    message: "Job added to the food successfully!",
    body: {
      job: { username, description, title, price, fid }
    },
  });
};

exports.givejob = async (req, res) => {
  const post_id = parseInt(req.params.id);
  const { clientid_to, clientid_from } = req.body;
  const { rows } = await db.query(
    "INSERT INTO notify (clientid_to, clientid_from, post_id, message) VALUES ($1, $2, $3, 'Given this job from bidding.')",
     [clientid_to, clientid_from, post_id]
  );

  res.status(201).send({
    message: "Job has given successfully!",
    body: {
      job: { clientid_to, clientid_from, post_id }
    },
  });
};

exports.listClients = async (req, res) => {
  const response = await db.query('SELECT * FROM client');
  res.status(200).send(response.rows);
};

exports.listClient = async (req, res) => {
  const cid = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM client WHERE cid=$1',
  [cid]
  );
  res.status(200).send(response.rows);
};

exports.profile = async (req, res) => {
  const cid = parseInt(req.params.id);
  const response = await db.query(
    "SELECT * FROM clientposts WHERE cid=$1 ORDER BY post_id DESC", 
    [cid]
  );
  res.status(200).send(response.rows);
};

exports.noti = async (req, res) => {
  const cid = parseInt(req.params.id);
  const response = await db.query(
    "SELECT * FROM notification WHERE client_id=$1",
    [cid]
  );
  res.status(200).send(response.rows);
};

exports.notifromTech = async (req, res) => {
  const cid = parseInt(req.params.id);
  const response = await db.query(
    "select * from job_tech inner join client on job_tech.service_client_id= client.cid where status='Accepted' AND cid=$1 ORDER BY jobtech_id DESC",
    [cid]
  );
  res.status(200).send(response.rows);
};

exports.notify = async (req, res) => {
  const cid = parseInt(req.params.id);
  const response = await db.query(
    "select * from client inner join notify on notify.clientid_from = client.cid inner join clientposts on notify.post_id=clientposts.post_id WHERE notify.clientid_to=$1 ORDER BY id DESC",
    [cid]
  );
  res.status(200).send(response.rows);
};

exports.updateClientProfile = async (req, res) => {
  const cid = parseInt(req.params.id);
  const { cname, cemail, caddress, cno, cgender, cimage } = req.body;

  const response = await db.query(
    "UPDATE client SET cname = $1, cemail = $2, caddress = $3, cno = $4, cgender = $5, cimage = $6 WHERE cid = $7", 
    [cname, cemail, caddress, cno, cgender, cimage, cid]
  );

  res.status(200).send({ message: "Client profile Updated Successfully!" });
};

exports.requestTechPut = async (req, res) => {
  const jobtech_id = parseInt(req.params.id);
  const response = await db.query(
    "UPDATE job_tech SET status = $1 WHERE jobtech_id=$2", 
    ['Accepted', jobtech_id]
  );

  res.status(200).send({ message: "Accepted the requested job!" });
};
exports.requestTechPutNot = async (req, res) => {
  const jobtech_id = parseInt(req.params.id);
  const response = await db.query(
    "UPDATE job_tech SET status = $1 WHERE jobtech_id=$2", 
    ['Declined', jobtech_id]
  );

  res.status(200).send({ message: "Declined the requested job!" });
};

exports.requestPlantPut = async (req, res) => {
  const jobplant_id = parseInt(req.params.id);
  const response = await db.query(
    "UPDATE job_plant SET status = $1 WHERE jobplant_id=$2", 
    ['Accepted', jobplant_id]
  );

  res.status(200).send({ message: "Accepted the requested job!" });
};
exports.requestPlantPutNot = async (req, res) => {
  const jobplant_id = parseInt(req.params.id);
  const response = await db.query(
    "UPDATE job_plant SET status = $1 WHERE jobplant_id=$2", 
    ['Declined', jobplant_id]
  );

  res.status(200).send({ message: "Declined the requested job!" });
};

exports.requestFoodPut = async (req, res) => {
  const jobfood_id = parseInt(req.params.id);
  const response = await db.query(
    "UPDATE job_food SET status = $1 WHERE jobfood_id=$2", 
    ['Accepted', jobfood_id]
  );

  res.status(200).send({ message: "Accepted the requested job!" });
};
exports.requestFoodPutNot = async (req, res) => {
  const jobfood_id = parseInt(req.params.id);
  const response = await db.query(
    "UPDATE job_food SET status = $1 WHERE jobfood_id=$2", 
    ['Declined', jobfood_id]
  );

  res.status(200).send({ message: "Declined the requested job!" });
};

exports.deleteTechRequest = async (req, res) => {
  const b_id = parseInt(req.params.id);
  try {
   const results = await db.query("DELETE FROM job_tech WHERE jobtech_id = $1", [b_id]);
   res.status(200).send(results.rows); 
  } 
    catch (err) {
      console.error(err.message);
    }
};
exports.deleteFoodRequest = async (req, res) => {
  const b_id = parseInt(req.params.id);
  try {
   const results = await db.query("DELETE FROM job_food WHERE jobfood_id = $1", [b_id]);
   res.status(200).send(results.rows); 
  } 
    catch (err) {
      console.error(err.message);
    }
};
exports.deletePlantRequest = async (req, res) => {
  const b_id = parseInt(req.params.id);
  try {
   const results = await db.query("DELETE FROM job_plant WHERE jobplant_id = $1", [b_id]);
   res.status(200).send(results.rows); 
  } 
    catch (err) {
      console.error(err.message);
    }
};




exports.addPlantprob = async (req, res) => {
  const cid = parseInt(req.params.id);
  const { category, description, location, price, image } = req.body;
  const { rows } = await db.query(
    "INSERT INTO plantproblem (category, description, location, price, image, cid) VALUES ($1, $2, $3, $4, $5, $6)",
     [category, description, location, price, image, cid]
  );

  res.status(201).send({
    message: "Post added successfully!",
    body: {
      job: { category, description, location, price, image, cid }
    },
  });
};

exports.noti = async (req, res) => {
  const cid = parseInt(req.params.id);
  const response = await db.query(
    "SELECT * FROM notification WHERE client_id=$1",
    [cid]
  );
  res.status(200).send(response.rows);
};