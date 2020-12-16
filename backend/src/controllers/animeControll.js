const connection = require('../database/connection');

module.exports = {

    async index(req, res) {
        const animes = await connection('animes')
            .select('*');

        return res.json(animes);
    },

    async show(req, res) {
        const { title } = req.params;
        const animes = await connection('animes')
            .where('title', title)
            .select('*')
            .first();

        if (!animes) {
            return res.status(400).json({ error: 'anime não cadastrado...' })
        }

        return res.json(animes)
    },

    async follow(req, res) {
        const { username } = req.params;

        const animes = await connection('animes')
            .join('users', 'crypto', '=', 'crypto_a')
            .where('follow', 1)
            .where('username', username)
            .select('animes.*');

        return res.json(animes)
    },

    async years(req, res) {
        const { years } = req.params;
        const animes = await connection('animes')
            .where('data', years)
            .select('*');

        return res.json(animes);
    },

    async create(req, res) {
        const { title, sinopse, duration, rating, data, poster, backdrop, follow } = req.body;
        const crypto_a = req.headers.authorization;

        if (await connection('animes').where('title', title).first()) {
            return res.status(400).json({ error: 'esse anime já foi cadastrado.' });
        }

        await connection('animes').insert({
            crypto_a,
            title,
            sinopse,
            duration,
            rating,
            data,
            poster,
            backdrop,
            follow
        });

        return res.status(201).json({ title })
    }
}