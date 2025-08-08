import mysql from 'mysql2/promise'

const connection=mysql.createPool({
    user:"root"
,port:"26324",
    host:"yamabiko.proxy.rlwy.net",
    database:"railway",
    password:"ZlyUsTOMKsXudyFAokYxSDEPwatqYyZl",
}
)


export default connection;
