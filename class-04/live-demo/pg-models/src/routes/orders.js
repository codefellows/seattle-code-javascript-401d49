'use strict';

const express = require('express');
const { orderInterface } = require('../models');

const router = express.Router();

router.get('/order', async (req, res, next) => {
  try {
    const orders = await orderInterface.read();
    res.status(200).send(orders);
  } catch (e) {
    next(e);
  }
});

// get One
router.get('/order/:id', async (req, res, next) => {
  const { id } = req.params;

  const singleOrder = await orderInterface.read(id);
  res.status(200).send(singleOrder);
});

router.post('/order', async (req, res, next) => {
  try {
    const newOrder = await orderInterface.create(req.body);
    res.status(200).send(newOrder);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
