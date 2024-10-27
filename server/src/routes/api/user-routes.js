const express = require('express');
const User  = require('../../models/user');


const router = express.Router();

// GET /users - Get all users
router.get('/', async (_req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] }
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'users not found' });
  }
});

// GET /users/:id - Get a user by id
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            attributes: { exclude: ['password'] }
        });
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({message: 'problem getting user'});
    }
});

//POST
router.post('/', async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const newUser = await User.create({ username, email, password });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: 'problem creating user' });
    }
  });

//PUT
router.put('/:id', async (req, res) => {
    try {
      const userData = await User.update(req.body, {
        where: {
          id: req.params.id,
        },
        individualHooks: true
      });
      if (!userData[0]) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (user) {
        await user.destroy();
        res.json({ message: 'User deleted' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'error deleting user' });
    }
  });

module.exports = router;
