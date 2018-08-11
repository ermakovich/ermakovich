const sizes = {
  large: 1110,
  mid: 768,
  small: 414
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = `(min-width: ${sizes[label]}px)`;
  acc['no_' + label] = `(max-width: ${sizes[label]}px)`;
  return acc;
}, {});
