import mysql from 'mysql2/promise'

const connection=mysql.createPool({
    user:"root"
,port:"3306",
    host:"mysql://root:ZlyUsTOMKsXudyFAokYxSDEPwatqYyZl@yamabiko.proxy.rlwy.net:26324/railway",
    database:"railway",
    password:"ZlyUsTOMKsXudyFAokYxSDEPwatqYyZl",
}
)


export default connection;
