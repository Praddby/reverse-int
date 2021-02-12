module.exports =  reverse = number => +(String(number)).split('').filter(item => item !== '-').reverse().join('');

