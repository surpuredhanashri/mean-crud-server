module.exports = {
  host: "localhost",
  user: "postgres",
  password: "MTX$2021",
  database: "crud",
  dialect: "postgres",
  // logging: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// sequelize
// .authenticate()
// .then(function (err) {
//   console.log("Connection has been established successfully.");
// })
// .catch(function (err) {
//   console.log("Unable to connect to the database:", err);
// });
