function createElement(type, props, ...children) {
  if (typeof type === 'function') {
    return type(props, children);
  }
  
  return {
    type,
    props: {
      ...props,
      children
    }
  };
}
