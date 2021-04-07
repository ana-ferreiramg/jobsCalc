const Database = require('./config');

const initDb = {
  async init() {
    // iniciar conexão com banco de dados
    const db = await Database();

    // criar tabelas
    await db.exec(
      `CREATE TABLE profile(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        avatar TEXT,
        monthly_budget INT,
        hours_per_day INT,
        days_per_week INT,
        vacation_per_year INT,
        value_hour INT
      );`,
    );

    await db.exec(
      `CREATE TABLE jobs(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        daily_hours INT,
        total_hours INT,
        created_at DATETIME
      );`,
    );

    // inserir dados
    await db.run(
      `INSERT INTO profile(
        name,
        avatar,
        monthly_budget,
        hours_per_day,
        days_per_week,
        vacation_per_year,
        value_hour
      ) VALUES (
        "Ana Ferreira",
        "https://i.pinimg.com/564x/d6/eb/00/d6eb00f69daea2fb862d90c0c6cf8f36.jpg",
        3000,
        5,
        5,
        4,
        80
      );`,
    );

    await db.run(
      `INSERT INTO jobs(
        name,
        daily_hours,
        total_hours,
        created_at
      ) VALUES (
        "Pizzaria Guloso",
        4,
        7,
        1617514376018
      );`,
    );

    await db.run(
      `INSERT INTO jobs(
        name,
        daily_hours,
        total_hours,
        created_at
      ) VALUES (
        "OneTwo Project",
        3,
        47,
        1617514376018
      );`,
    );

    // fechar conexão com banco de dados
    await db.close((error) => (error ? error.message : 'Close the database connection.'));
  },
};

initDb.init();
