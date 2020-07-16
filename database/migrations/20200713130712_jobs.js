
 exports.up = async function(knex) {
    await knex.schema.table("jobs", table => {
       table.dropColumn("url");
       table
         .text("urlText")
         .notNull()
         .defaultTo("Mitchell Trubisky");
       table.date("applicationDeadline");
       table.integer("rating");
       table.text("description");
       table.string("location");
       table.text("notes");
     });
   };
   
   exports.down = async function(knex) {
     await knex.schema.table("jobs", table => {
       table.dropColumn("urlText");
       table
         .string("url")
         .notNull()
         .defaultTo("Mitchell Trubisky");
       table.dropColumn("applicationDeadline");
       table.dropColumn("rating");
       table.dropColumn("description");
       table.dropColumn("location");
       table.dropColumn("notes");
     });
   };