const db = require("../database/db-config");

function getTasks(jobId) {
  return db("tasks").where({ job_id: jobId }).select();
}

function getTaskById(taskId) {
  return db("tasks").where("tasks.id", taskId).select();
}

async function addTask(jobId, newTask) {
  const added = await db("tasks").insert(newTask);
  return added;
}

async function updateTask(jobId, taskId, updates) {
  await db("tasks").where({ id: taskId }).update(updates);
  return getTaskById(jobId, taskId);
}

function deleteTask(taskId) {
  return db("tasks").where({ id: taskId }).del();
}

module.exports = {
  getTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
};
