class TotalCounter {
    constructor() {
      this.value = 0;
    }
    getTotalValue() {
      if (this.value < 0) console.error("Invalid value: check your functions");
      return this.value;
    }
    incrementValue(value) {
      if (typeof value !== "string") console.error("Invalid value type");
      return (this.value += parseInt(value));
    }
    decrementValue(value) {
      if (typeof value !== "string") console.error("Invalid value type");
      return (this.value -= parseInt(value));
    }
    resetCounter() {
      return (this.value = 0);
    }
  }

  export const totalCounter = new TotalCounter()