import mysql from 'mysql2/promise'

const connection=mysql.createPool({
    user:"root"
,port:"3306",
    host:"mysql.railway.internal",
    database:"railway",
    password:"ZlyUsTOMKsXudyFAokYxSDEPwatqYyZl",
}
)


export default connection;
