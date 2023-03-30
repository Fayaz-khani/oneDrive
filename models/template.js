const dbmgr = require("./dbmgr");
const db = dbmgr.db;
  

exports.getNames  = () => {
 const sql = "SELECT * FROM data";
 let stmt = db.prepare(sql);
 let res = stmt.all();
 return res;
}