let data = [
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
];

module.exports = {
  get() {
    return data;
  },

  update(newJob) {
    data = newJob;
  },

  delete(id) {
    data = data.filter((job) => Number(job.id) !== Number(id));

    return data;
  },
};
