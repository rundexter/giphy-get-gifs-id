var assert = require('assert');

module.exports = {
  run: function (step, dexter) {
    //access token
    var accessToken = dexter.environment('access_token');
    var giphy = require('giphy-api')(accessToken);

    //inputs
    var gif_id = step.input('gif_id').first();
    console.log(gif_id);
    //validation
    assert(gif_id, 'Array of ID\'s of GIFs is required.');

    //execution
    giphy.id(gif_id, function (err, res) {
      if (err) return this.fail(err);
      this.complete(res);
    }.bind(this));
  }
};
