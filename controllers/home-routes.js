const router = require("express").Router();
const { Post, Comments } = require("../models");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: Comments,
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("login", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPK(req.params.id, {
      include: [
        {
          model: Comments,
        },
      ],
    });

    const posts = postData.get({ plain: true });
    res.render("createpost", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
