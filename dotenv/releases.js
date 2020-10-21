'use strict';

var github = require('../_common/github.js');
var owner = 'therootcompany';
var repo = 'dotenv';

module.exports = function (request) {
  return github(request, owner, repo).then(function (all) {
    // remove checksums and .deb
    return all;
  });
};

if (module === require.main) {
  module.exports(require('@root/request')).then(function (all) {
    all = require('../_webi/normalize.js')(all);
    console.info(JSON.stringify(all));
  });
}