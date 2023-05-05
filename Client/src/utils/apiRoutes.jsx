export const register = async (formData) => {
    return await fetch(`/users/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
      };
      
 export const login = async (formData) => {
        return await fetch(`/users/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
  };
  export const getCarData = async () => {
    return await fetch(`/car/`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json',
    },
  });
  }