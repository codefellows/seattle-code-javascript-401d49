'use strict';

const express = require('express');
const { CustomerModel } = require('../models');

const router = express.Router();

router.get('/customer', async (req, res, next) => {
  // const users = await User.findAll();
  try {
    const customers = await CustomerModel.findAll();
    res.status(200).send(customers);
  } catch (e) {
    next(e);
  }
});

// get One
router.get('/customer/:id', async (req, res, next) => {
  // const { id } = req.params;
  const id = req.params.id;

  const singleCustomer = await CustomerModel.findOne({ where: { id } });
  res.status(200).send(singleCustomer);
});

router.post('/customer', async (req, res, next) => {
  try {
    const newCustomer = await CustomerModel.create(req.body);
    res.status(200).send(newCustomer);
  } catch (e) {
    next(e);
  }
});

router.put('/customer/:id', async (req, res, next) => {
  try {
    const result = await CustomerModel.update(req.body, { where: { id: req.params.id } });
    // if I want to return modified data, do a get ONE here and send it to client
    res.status(200).send(result);
  } catch (e) {
    next(e);
  }
});

router.delete('/customer/:id', async (req, res, next) => {
  try {
    await CustomerModel.destroy({ where: { id: req.params.id } });
    // option one 
    // res.status(200).send('Item Deleted');
    // option two
    // res.status(204).send('deleted');
    // option three
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
