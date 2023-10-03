require("dotenv").config();
const OktaJwtVerifier = require("@okta/jwt-verifier");

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: `https://${process.env.OKTA_ORG}/oauth2/default`,
  clientId: process.env.OKTA_CLIENT_ID,
  assertClaims: {
    aud: "api://default",
  },
});

function authenticationRequired(req, res, next) {
  const authHeader = req.headers.authorization || "";
  getToken = authHeader.split(" ")[1];

  console.log("getToken", getToken);

  if (!getToken) {
    console.log("error at oktaJwtVerifier L 23");
    return res
      .status(401)
      .json({ message: "Please try logging in first, then try again!" });
  }

  const accessToken = getToken;
  const expectedAudience = "api://default";

  return oktaJwtVerifier
    .verifyAccessToken(accessToken, expectedAudience)
    .then((jwt) => {
      req.jwt = jwt;
      next();
    })
    .catch((err) => {
      res.status(401).json(err.message);
      console.log(err);
    });
}

module.exports = authenticationRequired;
