#!/usr/bin/env node
'use strict';

const crypto = require('crypto');

const password = process.argv.slice(2).join(' ');
if (!password) {
  console.error('Usage: node scripts/make-password-hash.js "your-password"');
  process.exit(1);
}

const digest = 'sha256';
const iterations = 210000;
const salt = crypto.randomBytes(16);
const hash = crypto.pbkdf2Sync(password, salt, iterations, 32, digest);

console.log(`pbkdf2$${digest}$${iterations}$${salt.toString('base64')}$${hash.toString('base64')}`);
