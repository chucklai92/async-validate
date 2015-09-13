var expect = require('chai').expect
  , Schema = require('../../index');

describe("async-validate:", function() {

  var descriptor = {
    name: {type: "string", len: 8},
  }

  it("should use default series iteration", function(done) {
    var schema = new Schema(descriptor);
    schema.validate({name: "username", surname: 'foo'},
      function(errors, fields) {
        expect(errors).to.eql(null);
        done();
      }
    );
  });

  it("should use parallel iteration", function(done) {
    var schema = new Schema(descriptor)
      , source = {name: "username", surname: 'foo'};

    schema.validate(source, {parallel: true},
      function(errors, fields) {
        expect(errors).to.eql(null);
        done();
      }
    );
  });

});
