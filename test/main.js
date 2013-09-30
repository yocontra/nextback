var nextback = require('../');
var should = require('should');
require('mocha');

describe('nextback', function() {
  it('should pass arguments correctly', function(done) {
    var fn = function(err, one, two) {
      should.not.exist(err);
      should.exist(one);
      should.exist(two);
      one.should.equal(1);
      two.should.equal(2);
      done();
    };
    nextback(fn)(null, 1, 2);
  });

  it('should run things in order', function(done) {
    var ran = false;

    var fn = function() {
      ran = true;
    };
    ran.should.equal(false);
    nextback(fn)();
    ran.should.equal(false);
    setTimeout(function(){
      ran.should.equal(true);
      done();
    }, 10);
  });

});
