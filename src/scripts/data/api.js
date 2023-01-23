import CONFIG from './config';

const API = {
  List: `${CONFIG.BASE_URL}list?api_key=${CONFIG.KEY}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}?api_key=${CONFIG.KEY}`,
};

export default API;
