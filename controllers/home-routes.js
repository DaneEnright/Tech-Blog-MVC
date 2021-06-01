const router = require('express').Router();
const {} = require("../models");

router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            // include: [
            //     {

            //     }
            // ]
        });

        const blogs = blogData.map(() =>
        blogs.get({ plain: true})
        );
        res.render('homepage', {
            blogs,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

router.get('/blog/:id' async (req,res) => {
    try { await

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;