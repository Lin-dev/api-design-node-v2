import merge from 'lodash.merge';
const testData = { message: 'hello' };

// These are generic methods used in the generic controllers for all models
export const controllers = {
  createOne(model, body) {
    return Promise.resolve(testData);
  },

  updateOne(docToUpdate, update) {
    return Promise.resolve(testData);
  },

  deleteOne(docToDelete) {
    return Promise.resolve(testData);
  },

  getOne(docToGet) {
    return Promise.resolve(testData);
  },

  getAll(model) {
    return Promise.resolve(testData);
  },

  findByParam(model, id) {
    return Promise.resolve(testData);
  },
};

export const createOne = model => async (req, res, next) => {
  try {
    const { body } = req;
    const doc = await controllers.createOne(model, body);
    return res.status(201).json(doc);
  } catch(e) {
    console.log(e)
  }
};

export const updateOne = model => async (req, res, next) => {
  try {
    const { docFromId, body } = req;
    const doc = await controllers.updateOne(docFromId, body);
    return res.json(doc);
  } catch(e) {
    console.log(e)
  }
};

export const deleteOne = model => async (req, res, next) => {
  try {
    const { docFromId } = req;
    const doc = await controllers.deleteOne(docFromId);
    return res.json(doc);
  } catch(e) {
    console.log(e)
  }
};

export const getOne = model => async (req, res, next) => {
  try {
    const { docFromId } = req;
    const doc = await controllers.getOne(docFromId);
    return res.json(doc);
  } catch(e) {
    console.log(e)
  }
};

export const getAll = model => async (req, res, next) => {
  try {
    const docs = await controllers.getAll(model);
    return res.json(docs);
  } catch(e) {
    console.log(e)
  }
};

export const findByParam = model => async (req, res, next, id) => {
  try {
    const doc = await controllers.findByParam(model, id);
    if (!doc) next(new Error('Not Found'));
    req.docFromId = doc;
    next();
  } catch(e) {
    console.log(e)
  }
};

export const generateControllers = (model, overrides = {}) => {
  const defaults = {
    findByParam: findByParam(model),
    getAll: getAll(model),
    getOne: getOne(model),
    deleteOne: deleteOne(model),
    updateOne: updateOne(model),
    createOne: createOne(model),
  };

  return { ...defaults, ...overrides };
};
