import axios from '../../core/axios';

export default {
  get: () => axios.get(`/patients/`),
  getById: ({id}) => axios.get(`/patients/${id}/`),
  remove: id => axios.delete('/patients/' + id),
  add: values => axios.post('/patients/', values),
  update: ({id, values}) => axios.patch(`/patients/${id}/`, values),
  show: id => axios.get('/patients/' + id),
};
