const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema  = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema  = new Schema({
firstname: { type: String, required: true },
lastname: { type: String, required: true },
idnumber: { type: Number, required: true, unique:true },
phonenumber: { type: Number, required: true, unique:true },
email: { type: String, required: true, unique:true, lowercase: true },
password: { type: String, required: true },
});

userSchema.pre("save", function (next) {
  const user = this

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError)
      } else {
        bcrypt.hash(user.password, salt, function(hashError, hash) {
          if (hashError) {
            return next(hashError)
          }

          user.password = hash
          next()
        })
      }
    })
  } else {
    return next()
  }
})
userSchema.methods.comparePassword = function(password, callback) {
  bcrypt.compare(password, this.password, function(error, isMatch) {
    if (error) {
      return callback(error)
    } else {
      callback(null, isMatch)
    }
  })
}
module.exports = mongoose.model('User', userSchema);