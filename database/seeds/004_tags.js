  
exports.seed = async knex => {
  await knex("jobTags").insert([
    { tagName: "Full Time", jobPosts_id: 1 },
    { tagName: "Part Time", jobPosts_id: 2 },
    { tagName: "Remote", jobPosts_id: 3 },
  ]);
};
