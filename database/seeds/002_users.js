
exports.seed = async knex => {
  await knex("users").insert([
    { firstName: "Farid", lastName: "Hamida", email: "farid@email.com" },
    { firstName: "Kavin", lastName: "Tjhan", email: "kavin@email.com" },
    { firstName: "Chance", lastName: "Rutledge", email: "chance@gmail.com" }
  ]);
};
