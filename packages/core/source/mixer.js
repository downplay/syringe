const execute = async (formula, context) => {
  let nextContext = context;
  if (formula instanceof Injectable) {
    const outcome = await formular.inject(context);
    nextContext = Object.assign({}, nextContext, outcome);
  } else if (Array.isArray(formular)) {
    for (const ingredient of formular) {
      const outcome = execute(ingredient, context);
      nextContext = Object.assign({}, nextContext, outcome);
    }
  } else {
    throw new TypeError("Unhandled type of formula: " + typeof formula);
  }
  return nextContext;
};

const mix = (initialContext = {}, formula) => {
  return execute(formula, initialContext);
};

export default mix;
