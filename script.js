const jwt = require('jsonwebtoken');

const encrypt = (payload, secret) => {
  try {
    const token = jwt.sign(payload, secret, { expiresIn: '1h' }); // 1 hour expiry
    console.log('✅ JWT Token Created Successfully');
    return token;
  } catch (error) {
    console.error('❌ Error generating token:', error.message);
    return null;
  }
};

module.exports = encrypt;