import mysql from 'mysql2/promise'

const connection=mysql.createPool({
    user:"root"
,port:"3306",
    host:"yamabiko.proxy.rlwy.net:26324",
    database:"railway",
    password:"ZlyUsTOMKsXudyFAokYxSDEPwatqYyZl",
}
)


export default connection;
