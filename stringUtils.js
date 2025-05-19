
const stringUtils = {

  reverse: (str) => {
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }
    return str.split('').reverse().join('');
  },


  isPalindrome: (str) => {
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }
    const cleaned = str.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
    return cleaned === stringUtils.reverse(cleaned);
  },


  countWords: (str) => {
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }
    return str.trim() === '' ? 0 : str.trim().split(/\s+/).length;
  }
};

module.exports = stringUtils;
