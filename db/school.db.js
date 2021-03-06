const { genericDb } = require("../util");
const tablename = "schools";

const schoolDb = {
    get: genericDb.get(tablename),
    create: genericDb.create(tablename),
    update: genericDb.update(tablename),
    remove: genericDb.remove(tablename)
};
module.exports = schoolDb;
