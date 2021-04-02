const express = require('express');
const routes = express.Router();

const views = __dirname + '/views';

const profile = {
  name: 'Ana Ferreira',
  avatar: 'https://i.pinimg.com/564x/d6/eb/00/d6eb00f69daea2fb862d90c0c6cf8f36.jpg',
  'monthly-budget': 3000,
  'hours-per-day': 5,
  'days-per-week': 5,
  'vacation-per-year': 4,
  'value-hour': 80,
};

const Job = {
  data: [
    {
      id: 1,
      name: 'Pizzaria Guloso',
      'daily-hours': 4,
      'total-hours': 7,
      created_at: Date.now(),
    },
    {
      id: 2,
      name: 'OneTwo Project',
      'daily-hours': 3,
      'total-hours': 9,
      created_at: Date.now(),
    },
    {
      id: 3,
      name: 'OneTwo Project',
      'daily-hours': 3,
      'total-hours': 3,
      created_at: Date.now(),
    },
  ],
  controllers: {
    index(req, res) {
      const updatedJobs = Job.data.map((job) => {
        const remaining = Job.services.remainingDays(job);
        const status = remaining <= 0 ? 'done' : 'progress';

        return {
          ...job,
          remaining,
          status,
          budget: profile['value-hour'] * job['total-hours'],
        };
      });

      return res.render(`${views}/index`, { jobs: updatedJobs });
    },
  },
  services: {
    remainingDays(job) {
      const remainingDays = (job['total-hours'] / job['daily-hours']).toFixed();
      const createdDate = new Date(job.created_at);
      const dueDay = createdDate.getDate() + Number(remainingDays);
      const dueDateInMs = createdDate.setDate(dueDay);
      const timeDiffInMs = dueDateInMs - Date.now();

      // transformar milissegundos em dias
      const dayInMs = 1000 * 60 * 60 * 24;
      const dayDiff = Math.floor(timeDiffInMs / dayInMs);

      // restam x dias
      return dayDiff;
    },
  },
};

routes.get('/', Job.controllers.index);

routes.get('/job', (req, res) => res.render(`${views}/job`));
routes.post('/job', (req, res) => {
  const lastID = jobs[jobs.length - 1]?.id || 1;

  jobs.push({
    id: lastID + 1,
    name: req.body.name,
    'daily-hours': req.body['daily-hours'],
    'total-hours': req.body['total-hours'],
    created_at: Date.now(), // milissegundos da data em que foi criado o job
  });

  return res.redirect('/');
});

routes.get('/job/edit', (req, res) => res.render(`${views}/job-edit`));

routes.get('/profile', (req, res) => res.render(`${views}/profile`, { profile }));

module.exports = routes;
