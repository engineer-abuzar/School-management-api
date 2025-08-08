import mysql from 'mysql2/promise'

const connection=mysql.createPool({
    user:"root"
,
    host:"localhost",
    database:"schools",
    password:"husna34",
}
)


export default connection;
