const express = require('express');
const router = express.Router();
// Contact model
const Contacts = require('../models/contacts');


// @route   GET /api/contacts/
// @desc    Get all contacts
// @access  Public
router.get('/', async (req, res) => {
  try {
    const contacts = await Contacts.find({});
    res.send({ contacts })
    console.log('contacts',contacts);
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   POST /api/contacts/
// @desc    Create a contact
// @access  Public
router.post('/', async (req, res) => {
  console.log('req', req.body);
  try {
    const newContact = await Contacts.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      adresse: req.body.adresse,
      creationDate: req.body.creationDate,
      fonction: req.body.fonction,
      CA: req.body.CA,
    });
    res.send({ newContact });
  } catch (err) {
    res.status(400).send({ error: err });
  }

});


// @route   GET /api/contacts/:id
// @desc    Get a specific contact
// @access  Public
router.get('/:id', async (req, res) => {
  console.log('req.params.id', req.params.id);
  try {
    const contact = await Contacts.findById({ _id: req.params.id });
    res.send({ contact });
  } catch (err) {
    res.status(404).send({ message: 'Contact not found!' });
  }
});


// @route   PUT /api/contacts/:id
// @desc    Update a contact
// @access  Public
router.put('/:id', async (req, res) => {
  console.log('req update', req.body);
  try {
    const updatedContact = await Contacts.findByIdAndUpdate(req.params.id, req.body);
    res.send({ message: 'The contact was updated' });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   DELETE /api/contacts/:id
// @desc    Delete a contact
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const removeContact = await Contacts.findByIdAndRemove(req.params.id);
    res.send({ message: 'The contact was removed' });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});


module.exports = router;