const { address } = require('../models');

const getAllByEmployeeId = async (employeeId) => {
  const addresses = await address.findAll({
    where: { employeeId },
  });

  return addresses;
};

module.exports = {
  getAllByEmployeeId,
};