'use strict';

const express = require('express');
// left in this code since delete functionality isn't complete
const { CustomerModel } = require('../models');
const { customerInterface, orderInterface } = require('../models');



const router = express.Router();

router.get('/customer', async (req, res, next) => {
  try {
    const customers = await customerInterface.read();
    res.status(200).send(customers);
  } catch (e) {
    next(e);
  }
});

// get One
router.get('/customer/:id', async (req, res, next) => {
  const { id } = req.params;

  const singleCustomer = await customerInterface.read(id);
  res.status(200).send(singleCustomer);
});

router.get('/customerWithOrders/:id', async (req, res, next) => {
  const customerWithOrders = await customerInterface.readManyToOne(req.params.id, orderInterface.model);
  res.status(200).send(customerWithOrders);
});

router.post('/customer', async (req, res, next) => {
  try {
    const newCustomer = await customerInterface.create(req.body);
    res.status(200).send(newCustomer);
  } catch (e) {
    next(e);
  }
});

router.put('/customer/:id', async (req, res, next) => {
  try {
    const updatedCustomer = await customerInterface.update(req.body, req.params.id);
    res.status(200).send(updatedCustomer);
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
