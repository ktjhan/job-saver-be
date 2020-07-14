const db = require("../database/db-config");

function findJob() {
  return db("jobs").select();
}

async function addJob(newJob, id) {
  return db("jobs")
    .where({ id })
    .insert(newJob);
}

async function findJobById(id) {
  const job = await db("jobs")
    .select()
    .where({ id })
    .first();

  return job ? job : null;
}

function findJobByUser(users_id) {
  return db("jobs")
    .select()
    .where({ users_id });
}

function removeJob(id) {
  return db("jobs")
    .where({ id })
    .del();
}

async function updateJob(id, job_update) {
  await db("jobs")
    .where({ id })
    .update(job_update);
  return findJobById(id);
}

function findColumn() {
  return db("jobs").select("column_id");
}

module.exports = {
  addJob,
  findJob,
  findJobById,
  removeJob,
  findJobByUser,
  updateJob,
  findColumn
};