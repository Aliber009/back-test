/* eslint-disable no-param-reassign */

const paginate = (schema) => {
   
    schema.statics.paginate = async function (filter,options) {
      
      const limit = options.limit && parseInt(options.limit, 10) > 0 ? parseInt(options.limit, 10) : 10;
      const page = options.page && parseInt(options.page, 10) > 0 ? parseInt(options.page, 10) : 1;
      const skip = (page - 1) * limit;
  
      const countPromise = this.countDocuments(filter).exec();
      let docsPromise = this.find(filter).skip(skip).limit(limit);
  
  
      docsPromise = docsPromise.exec();
  
      return Promise.all([countPromise, docsPromise]).then((values) => {
        const [totalResults, results] = values;
        const totalPages = Math.ceil(totalResults / limit);
        const result = {
          results,
          page,
          limit,
          totalPages,
          totalResults,
        };
        return Promise.resolve(result);
      });
    };
  };
  
  module.exports = paginate;
  