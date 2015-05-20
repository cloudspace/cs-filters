/*
 * @iops: number
 * @maxSize: number
 * @maxIops: number
 *
 * Returns the amount of bandwidth being currently used
 */

var Bandwidth = function (iops, maxSize, maxIops) {
  return maxSize * iops / (maxIops / 100);
};

module.exports = Bandwidth;
