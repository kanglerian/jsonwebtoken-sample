const jwt = require("jsonwebtoken");

const JWT_SECRET = "lerian123";

/* syncronous */
const token = jwt.sign({ data: { student: "Lerian Febriana" }}, JWT_SECRET, { expiresIn: "20s"});

/* asyncronous */
// jwt.sign({ data: { student: "Lerian Febriana" }}, JWT_SECRET, { expiresIn: "1m"}, (err, token) => {
//   if(err){
//     console.log(err.message);
//     return;
//   }
//   console.log(token);
// }

try {
  const decoded = jwt.verify(token, JWT_SECRET);
  console.log(decoded);
} catch (error) {
  console.log(error.message);
}

/* asyncronous */
// jwt.verify(token, JWT_SECRET, (err, decoded) => {
//   if(err){
//     console.log(err.message);
//     return;
//   }
//   console.log(decoded);
// });

