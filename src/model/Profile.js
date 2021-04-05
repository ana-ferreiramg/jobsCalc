let data = {
  name: 'Ana Ferreira',
  avatar: 'https://i.pinimg.com/564x/d6/eb/00/d6eb00f69daea2fb862d90c0c6cf8f36.jpg',
  'monthly-budget': 3000,
  'hours-per-day': 5,
  'days-per-week': 5,
  'vacation-per-year': 4,
  'value-hour': 80,
};

module.exports = {
  get() {
    return data;
  },

  update(newData) {
    data = newData;
  },
};
