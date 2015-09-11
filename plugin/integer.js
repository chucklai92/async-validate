/**
 *  Validates a number is an integer.
 *
 *  @param opts The validation options.
 *  @param cb The callback function.
 */
function integer(opts, cb) {
  var validate = this.rule.required
        || (!this.rule.required && this.source.hasOwnProperty(this.rule.field));

  if(validate) {
    if(this.value === undefined && !this.rule.required) {
      return cb();
    }
    this.required();
    this.type();
    this.range();
  }
  cb(this.errors);
}

module.exports = function() {
  this.main.integer = integer;
}