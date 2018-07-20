#!/usr/bin/env node

var asciiFace = require('./');
var args = process.argv.splice(2);

if (args.indexOf('-a') !== -1 || args.indexOf('--all') !== -1) {
  asciiFace.faces.forEach(function (face) {
    process.stdout.write(face + '\n');
  });

  return;
}

process.stdout.write(asciiFace() + '\n');
