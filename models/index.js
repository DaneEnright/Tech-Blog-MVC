const User = require("./User");
const Post = require("./Post");
const Comments = require("./Comments");
const { Router } = require("express");
const { belongsTo, hasMany } = require("./User");

Post.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Post.hasMany(Comments, {
  foreignKey: "postId",
  onDelete: "CASCADE",
});

Comments.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

module.exports = { User, Post, Comments };
