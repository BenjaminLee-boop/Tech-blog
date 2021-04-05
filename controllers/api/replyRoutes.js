const router = require('express').Router();
const { Reply } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const allrep = await Reply.findAll({});
        res.status(200).json(allrep)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const makeReply = await Reply.create({
            ...req.body,
            post_id: req.body.post_id,
            user_id: req.session.user_id,
        });
        console.log(makeReply);
        res.status(200).json(makeReply);
        if (!makeReply) {
            res.status(404).json({ message: `not found :(` })
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;