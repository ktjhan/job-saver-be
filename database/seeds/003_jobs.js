exports.seed = async knex => {
  await knex("jobs").insert([
    { jobTitle: "Senior Dev", logo: "", companyTitle: "Google", companyUrl: "amazon.com", users_id: 1, column_id: "Accepted", index: 1, urlText: "https://faridhamida.com", applicationDeadline: 7/7/20, rating: 5, description: "Software Engineer", location: "Los Angeles", notes: "Great" },
    { jobTitle: "Senior Dev", logo: "", companyTitle: "Tesla", companyUrl: "tesla.com", users_id: 3, column_id: "Negotiating", index: 2, urlText: "https://kavintjhan.com", applicationDeadline: 7/7/20, rating: 3, description: "Software Engineer", location: "San Francisco", notes: "Ok" },
    { jobTitle: "Junior Dev", logo: "", companyTitle: "Shopify", companyUrl: "shopify.com", users_id: 2, column_id: "Applied", index: 3, urlText: "https://nfl.com", applicationDeadline: 7/7/20, rating: 5, description: "Software Engineer", location: "New York", notes: "Not Bad" },
  ]);
};