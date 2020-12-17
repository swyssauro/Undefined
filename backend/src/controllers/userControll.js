const crypt = require('crypto');
const connection = require('../database/connection');
const date = require('date-and-time');
const now = new Date();

module.exports = {

    async index(req, res) {
        const users = await connection('users')
            .select('username', 'description', 'created_at');

        return res.json(users);
    },

    async show(req, res) {
        const { username } = req.params;
        const users = await connection('animes')
            .where('username', username)
            .join('users', 'crypto', '=', 'crypto_a')
            .select(['animes.*'])

        if (!users) {
            return res.status(400).json({ error: 'usuario não cadastrado...' })
        }

        return res.json(users)
    },

    async profile(req, res) {
        const { username } = req.params;
        const users = await connection('users')
            .where('username', username)
            .select('username', 'description', 'created_at');

        if (!users) {
            return res.status(400).json({ error: 'usuario não cadastrado...' })
        }

        return res.json(users)
    },

    async create(req, res) {
        const { username, email, password } = req.body;
        const crypto = crypt.randomBytes(13).toString('base64');

        const created_at = date.format(now, 'DD/MM/YYYY');
        const description = `I'am ${username}`;

        if (await connection('users').where('username', username).first()) {
            return res.status(400).json({ error: 'esse username já foi cadastrado.' });
        }

        if (await connection('users').where('email', email).first()) {
            return res.status(400).json({ error: 'esse email já foi cadastrado.' });
        }

        await connection('users').insert({
            crypto,
            username,
            email,
            password,
            description,
            created_at
        });

        return res.status(201).json({ crypto })
    }
}