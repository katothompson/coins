function getAmount (coinType) {

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
      p:  function(){return 1;},
      n:  function(){return 5;},
      d:  function(){return 10;},
      q:  function(){return 25;},
      default: function(){throw new Error('Unrecognized coin ' + coinType);}

  }
  coinType = coinTable.hasOwnProperty(coinType) ? coinType : 'default';
  return coinTable[coinType]();

}


var expect = require('chai').expect;


describe('getAmount()', function(){
  it('should return 1 for p', function(){
    expect(getAmount('p')).to.equal(1);
  });
  it('should return 5 for n', function(){
    expect(getAmount('n')).to.equal(5);
  });
  it('should return 10 for d', function(){
    expect(getAmount('d')).to.equal(10);
  });
  it('should return 25 for q', function(){
    expect(getAmount('q')).to.equal(25);
  });
  it('should return error for l', function(){
    expect(function(){getAmount('l')}).to.throw(Error, 'Unrecognized coin');
  })
})
