const jwt = require("jsonwebtoken");

const JWT_SECRET = "lerian123";

/* syncronous */
const token = jwt.sign({ data: { student: "Lerian Febriana" }}, JWT_SECRET, { expiresIn: "1m"});

/* asyncronous */
jwt.sign({ data: { student: "Lerian Febriana" }}, JWT_SECRET, { expiresIn: "1m"}, (err, token) => {
  if(err){
    console.log(err.message);
    return;
  }
  console.log(token);
})

jwt.verify(token, JWT_SECRET, (err, decoded) => {
  if(err){
    console.log(err.message);
    return;
  }
  console.log(decoded);
});