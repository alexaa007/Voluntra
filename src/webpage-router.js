
const express = require('express');
const Router = require('express').Router;
const path = require('path');

const router = new Router();

router.use(express.static(path.join(__dirname, '..', 'public')))

router.get('/', (req, res) => {
    res.sendFile('main.html', { root: `${__dirname}/../public/html` });
})

router.get('/auth', (req, res) => {
    res.sendFile('login.html', { root: `${__dirname}/../public/html` });
})


module.exports = router;

