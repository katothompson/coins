var getAmount = require('../lib/index.js');


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
    expect(getAmount('l')).to.throw(Error, 'Unrecognized coin');
  })
})
