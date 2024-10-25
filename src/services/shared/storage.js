const set = (key, value) => {
    if (value) {
        sessionStorage.setItem(key, value);
    } else {
        sessionStorage.removeItem(key);
    }
  };
  
  const get = (key) => {
    return sessionStorage.getItem(key);
  };

  const clear = () => {
    sessionStorage.clear();
  };
  
  const storage = { set, get, clear };
  
  export default storage;