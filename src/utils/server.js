#!/usr/bin/env node
/**
 * @document https://github.com/scottcorgan/pushstate-server#usage
 * @type {{start?: function(*=, *=): *}}
 */
// eslint-disable-next-line import/no-extraneous-dependencies
const server = require('pushstate-server');

server.start({
    port: 5000,
    host: '127.0.0.1',
    directory: './dist',
});
