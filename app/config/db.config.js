module.exports = {
    HOST: 'ep-wild-thunder-aex6ejhj-pooler.c-2.us-east-2.aws.neon.tech',
    USER: 'neondb_owner',
    PASSWORD: 'npg_rz32VgkoKvfh',
    DB: 'sistema_notas',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
}
