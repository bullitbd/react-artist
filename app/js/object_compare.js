'use strict';

//compare function for sorts

module.exports = function(a,b) {
  if (a.artist < b.artist)
    return -1;
  if (a.artist > b.artist)
    return 1;
  return 0;
};
