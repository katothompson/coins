module.exports = function getAmount (coinType) {

  // COINS:
  // [p]enny
  // [n]ickel
  // [d]ime
  // [q]uarter

  // switch (coinType) {
  //   case 'p': return 1
  //   case 'n': return 5
  //   case 'd': return 10
  //   case 'q': return 25
  //   default: throw new Error('Unrecognized coin ' + coinType)
  // }

  var coinTable = {
      p:  1,
      n:  5,
      d:  10,
      q:  25,
      //default: function(){throw new Error('Unrecognized coin ' + coinType);}

  }
  // coinType = coinTable.hasOwnProperty(coinType) ? coinType : 'default';
  // return coinTable[coinType];

  //return coinTable.hasOwnProperty(coinType) ? coinTable[coinType] : coinTable['default'];
  return coinTable.hasOwnProperty(coinType) ? coinTable[coinType] : function(){throw new Error('Unrecognized coin ' + coinType);};
}
