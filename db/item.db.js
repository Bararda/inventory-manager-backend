const { genericDb } = require("../util");
const tablename = "items";

const itemDb = {
    get: genericDb.get(tablename),
    create: genericDb.create(tablename),
    update: genericDb.update(tablename),
    remove: genericDb.remove(tablename)
};
module.exports = itemDb;
