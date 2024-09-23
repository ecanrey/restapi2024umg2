const env = {
    database: 'umg_antigua_web2153',
    username: 'umg_antigua_web2153_user',
    password: 'NO0FWl4vFFI9zSHbp8DfW5fo6orwobR0',
    //host: 'dpg-cqc7lng8fa8c73ckr19g-a.oregon-postgres.render.com',
    host: 'dpg-cqc7lng8fa8c73ckr19g-a',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = env;