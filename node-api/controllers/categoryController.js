import { initLogPlaceholder, pagination } from '../libs';
import { Category } from '../models';

const Model = Category;
let _model = 'Category';

const getAll = async (req, res, next) => {
  try {
    initLogPlaceholder(req, `read${_model}List`);
    let _pagination = pagination(req.query);

    let where = {};
    req.query.name ? (where.name = req.query.name) : '';
    req.query.parent_id ? (where.parent_id = req.query.parent_id) : '';
    req.query.status ? (where.status = req.query.status) : '';

    let dataList = await Model.findAndCountAll({
      where,
      limit: _pagination.limit,
      offset: _pagination.skip
    });

    res.status(200).json({
      success: true,
      message: `from  ${_model} list `,
      total: dataList.count,
      limit: _pagination.limit || 'all',
      skip: _pagination.skip,
      page: _pagination.page,
      data: dataList.rows
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `error from  ${_model}  list `,
      error
    });
  }
};

const getOne = async (req, res, next) => {
  try {
    initLogPlaceholder(req, 'readSingleProduct');

    let where = {};
    where.id = req.params._id;

    if (req.query.name) {
      where.name = req.query.name;
    }

    let data = await Model.findOne({
      where
    });
    res.status(200).json({
      success: true,
      message: `from  readSingle${_model}   `,
      data
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `error from single ${_model}  of id ` + req.params._id,
      error
    });
  }
};

/*.....................post......................................*/
const create = async (req, res, next) => {
  try {
    initLogPlaceholder(req, 'createSingleProduct');
    let data = await Product.create(req.body);

    res.status(200).json({
      success: true,
      message: `from  create single ${_model}  `,
      data
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `error from  create single ${_model}   `,
      error
    });
  }
};

/*.....................edit......................................*/
const edit = async (req, res, next) => {
  try {
    initLogPlaceholder(req, `editSingle${_model} `);
    let data = await Product.update(req.body, {
      where: {
        id: req.params._id
      }
    });
    if (data[0]) {
      let data = await Product.findOne({
        where: {
          id: req.params._id
        }
      });
      res.status(200).json({
        success: true,
        message: `from  edit single ${_model}   `,
        data
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'something went wrong in update single product  '
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'error from  edit single product  ',
      error
    });
  }
};

/*.....................delete......................................*/
const _delete = async (req, res, next) => {
  try {
    initLogPlaceholder(req, 'deleteSingleProduct');

    let data = await Product.destroy({
      where: {
        id: req.params._id
      }
    });
    res.status(200).json({
      success: true,
      message: 'from  delete single product  '
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'error from  delete single product ',
      error
    });
  }
};

// custom....................................

export const categoryController = {
  getAll,
  getOne,
  create,
  edit,
  _delete
};
