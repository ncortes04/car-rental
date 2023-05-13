import authService from './auth'
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
      authorization: `Bearer ${authService.getToken()}`,
    },
  });
  }
  export const getCarBookings = async (car_id) => {
    return await fetch(`/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
      authorization: `Bearer ${authService.getToken()}`,
    },
    body: JSON.stringify({car_id})
  });
  }
  export const createBooking = async (car_id, bookedDays) => {
    return await fetch(`/bookings/${car_id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
      authorization: `Bearer ${authService.getToken()}`,
    },
    body: JSON.stringify({bookedDays})
  });
  }
  export const getSingle = async () => {
    return fetch(`/users/me`, {
     method: 'POST',
     headers: { 'Content-Type': 'application/json',
     authorization: `Bearer ${authService.getToken()}`,
   },
 });
}
export const getIndividual = async (id) => {
  return await fetch(`/car/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json',
  },
});
}
export const addCar = async (formData) => {
  return await fetch(`/car`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
      authorization: `Bearer ${authService.getToken()}`,
    },
    body: JSON.stringify(formData)
  });
}
export const getPopular = async () => {
  return await fetch(`/popular`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
    },
  });
}
export const addReview = async (id, comment, rating, header) => {
    return await fetch(`/review`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        authorization: `Bearer ${authService.getToken()}`,
      },
      body: JSON.stringify({comment, car_id: id, rating, header})
    });
  }
  export const deleteReview = async (id) => {
    return await fetch(`/review`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json',
        authorization: `Bearer ${authService.getToken()}`,
      },
      body: JSON.stringify({id})
    });
  }
  export const getTop5 = async () => {
    return await fetch(`/admin/top`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        authorization: `Bearer ${authService.getToken()}`,
      },
    });
  }
  export const getRecent = async () => {
    return await fetch(`/admin/recent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        authorization: `Bearer ${authService.getToken()}`,
      },
    });
  }
  