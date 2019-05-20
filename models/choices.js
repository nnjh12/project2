// module.exports = function(sequelize, DataTypes) {
//   var Choice = sequelize.define(
//     "choice",
//     {
//       question_id: DataTypes.INTEGER,
//     choice: DataTypes.STRING
//   },
//   {
//     timestamps: false
//   });
//   Choice.associate = function(models) {
//     // We're saying that a Post should belong to an Author
//     // A Post can't be created without an Author due to the foreign key constraint
//     Choice.belongsTo(models.question, { foreignKey: "question_id" });
//   };
//   // Choice.associate = function(models) {
//   //   // We're saying that a Post should belong to an Author
//   //   // A Post can't be created without an Author due to the foreign key constraint
//   //   Choice.belongsTo(models.question
//   //   );
//   // };
//   return Choice;
// };


// // Choice.associate = function(models) {
// //   // We're saying that a Post should belong to an Author
// //   // A Post can't be created without an Author due to the foreign key constraint
// //   Choice.belongsTo(models.question
// //     //  { foreignKey: "question_id" }
// //      );
// // };
module.exports = function(sequelize, DataTypes) {
  var Choice = sequelize.define(
    "choice",
    {
      // question_id: DataTypes.INTEGER,
      choice: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  Choice.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Choice.belongsTo(models.question);
  };
  return Choice;
};
