const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { email, password } = req.body;
        const users = await connection('users')
            .where('email', email).where('password', password)
            .select('crypto', 'username')
            .first();

        if(!users) {
            return res.status(400).json({ error: 'Invalid username.' })
        }

        return res.json(users);
    }
}