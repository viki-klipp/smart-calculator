class SmartCalculator {
  constructor(initialValue) {
    this.val = [initialValue];
  }

  add(number) {
    this.val.push('+', number);
    return this;
  }
  
  subtract(number) {
    this.val.push('-', number);
    return this;
  }

  multiply(number) {
    this.val.push('*', number);
    return this;
  }

  devide(number) {
    this.val.push('/', number);
    return this;
  }

  pow(number) {
    this.val.push('**', number);
    return this;
  }

  valueOf() {
    var result = eval(this.val.join().replace(/,/gi, ''));
    return result;
  }
}

module.exports = SmartCalculator;
