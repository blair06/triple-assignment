const easeOutQuint = (x: number) => {
  return 1 - Math.pow(1 - x, 4);
};

export default easeOutQuint;
