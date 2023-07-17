const Api = {
  get: async (url, options = {}) => {
    const response = await fetch(url, {
      ...options,
    });
  
    if (response.ok) {
      return response.json();
    }
  
    return Promise.reject(response);
  }
}

export default Api;





