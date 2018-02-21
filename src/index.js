/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  for(var i = 0; i < preferences.length; i++) {
      var a = preferences[i];
      var b = preferences[a - 1];
      if (preferences[b - 1] == i + 1 ) {
          count++;
      }
  }
  return Math.floor(count / 3);

};
