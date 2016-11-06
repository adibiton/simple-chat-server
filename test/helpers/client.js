'use strict'

const net = require('net');

let client = net.connect({port: 8001}, () => {
    console.log('connected to a server');
});