
export default ({ $axios, store}) => {
  $axios.setHeader('Content-Type', 'application/json')
  
  
  $axios.onRequest((config) => {

    return config;
  });

  $axios.onError((error) => {
    const status = parseInt(error.response && error.response.status);

    if (status === 401) {
      window.location.href = '/login'
    }

    return Promise.reject(error);
  });
};