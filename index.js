const server = require("./api/server");
// const PORT = process.env.PORT || 3000;


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

module.exports = server;