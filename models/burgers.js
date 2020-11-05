var orm = require("../config/orm");

var burger = {
    all: function (cb) {
        console.log("Before ORM");
        orm.all("burgers", function (res) {
            console.log("Before CB");
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;





















// // var burger = {
//     selectAll: function (cb) {
//         orm.selectAll("burgers", function (res) {
//             cb(res);
//         });
//     },
//     // The variables cols and vals are arrays.
//     insertOne: function (cols, vals, cb) {
//         orm.selectAll("burgers", cols, vals, function (res) {
//             cb(res);
//         });
//     },
//     updateOne: function (objColVals, condition, cb) {
//         orm.selectAll("burgers", objColVals, condition, function (res) {
//             cb(res);
//         });
//     },
//     deleteOne: function (condition, cb) {
//         orm.selectAll("burgers", condition, function (res) {
//             cb(res);
//         });
//     }
// };

// module.exports = burger;





















