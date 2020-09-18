const userMod = require("../users/users-model");

async function checkUser(req, res, next) {

  // if (process.env.NODE_ENV === 'production') {
  //   req.userId = 1;
  //   return next();
  // }

  try {
    console.log("jwt",req.jwt.claims);
    const firstName = req.jwt.claims.uid; //TODO
    const lastName = req.jwt.claims.cid; //TODO
    const email = req.jwt.claims.sub;
    const user = await userMod.findByEmail(email);
  console.log("user",user);
    if (user) {
      req.userId = user.id;
      
      next();
    } else {
      const appUser = {
        firstName,
        lastName,
        email
      };

      const id = await userMod.add(appUser);

      console.log('res', res);
      if (id) {
        req.userId = 1; //TODO
        next();
      } else {
        console.log("reached here");
        res.status(500).json({ message: "Failed saving user to database" });
      }
    }
  } catch (err) {
    console.log("error",err);
    res.status(500).json(err);
  }
}

module.exports = checkUser;