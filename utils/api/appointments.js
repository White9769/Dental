import axios from '../../core/axios';

export default {
  get: () => axios.get('/appointments'),
  getById: ({id}) => axios.get(`/appointments/${id}/`),
  remove: id => axios.delete('/appointments/' + id),
  add: values => axios.post('/appointments', values),
  update: ({id, values}) => axios.patch(`/appointments/${id}/`, values),
};
