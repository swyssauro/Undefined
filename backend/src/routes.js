const express = require('express');
const router = express.Router();

const sessionControll = require('./controllers/sessionControll');
const userControll = require('./controllers/userControll');
const animeControll = require('./controllers/animeControll');

router.post('/auth', sessionControll.create);

router.post('/sing_up', userControll.create);
router.get('/user/:username', userControll.profile);
router.get('/user/:username/animes', userControll.show);
router.get('/user/:username/follows', animeControll.follow);
router.get('/users', userControll.index);

router.post('/anime/create', animeControll.create);
router.get('/anime/:title', animeControll.show);
router.get('/animes', animeControll.index);
router.get('/animes/years/:years', animeControll.years);

module.exports = router;