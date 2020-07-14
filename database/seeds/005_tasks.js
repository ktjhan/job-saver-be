exports.seed = async knex => {
  await knex("tasks").insert([
      { job_id: 1, taskName: "Cover Leter" },
      { job_id: 2, taskName: "Work Harder" },
      { job_id: 3, taskName: "Sign Acceptance Letter" },
  ]);
};