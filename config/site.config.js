const path = require('path');
const fs = require('fs');

let ROOT = process.env.PWD;

if (!ROOT) {
  ROOT = process.cwd();
}

const config = {
  // Your website's name, used for favicon meta tags
  site_name: 'Friendly Fire',

  // Your website's description, used for favicon meta tags
  site_description: 'Friendly Fire is a dialog-driven indie pixel platformer with metroidvania elements originally developed as a team effort for the game jam Ludum Dare #46 within three days. It is free to play an can be accessed via steam or browser.',

  // Your website's URL, used for sitemap
  site_url: 'https://www.friendlyfiregame.com',

  // Google Analytics tracking ID (leave blank to disable)
  googleAnalyticsUA: 'UA-166134094-2',

  // The viewport meta tag added to your HTML page's <head> tag
  viewport: 'width=device-width,initial-scale=1',

  // Source file for favicon generation. 512x512px recommended.
  favicon: path.join(ROOT, '/src/images/favicon.png'),

  // Local development URL
  dev_host: 'localhost',

  // Local development port
  port: process.env.PORT || 8000,

  // Advanced configuration, edit with caution!
  env: process.env.NODE_ENV,
  root: ROOT,
  paths: {
    config: 'config',
    src: 'src',
    dist: 'dist',
  },
  package: JSON.parse(
    fs.readFileSync(path.join(ROOT, '/package.json'), { encoding: 'utf-8' }),
  ),
};

module.exports = config;
