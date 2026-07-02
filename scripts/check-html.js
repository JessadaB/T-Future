#!/usr/bin/env node
'use strict';

const fs = require('fs');

for (const file of ['index.html', 'mobile.html']) {
  const html = fs.readFileSync(file, 'utf8');
  const scripts = html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi);
  for (const match of scripts) {
    new Function(match[1]);
  }
  console.log(`${file} ok`);
}
