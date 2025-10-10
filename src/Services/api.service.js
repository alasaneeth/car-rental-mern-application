// services/apiService.js
const API_BASE_URL = import.meta.env.REACT_APP_API_URL;

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Common request handler
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Auth endpoints
  async login(email, password) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async register(name, email, password) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
  }

  // Car endpoints
  async addCar(carData, imageFile) {
    const formData = new FormData();
    
    // Append car data
    formData.append('carData', JSON.stringify(carData));
    
    // Append image if exists
    if (imageFile) {
      formData.append('image', imageFile);
    }

    return this.request('/cars', {
      method: 'POST',
      headers: {}, // Let browser set content-type for FormData
      body: formData,
    });
  }

  async getOwnerCars() {
    return this.request('/cars/owner');
  }

  async updateCar(carId, carData) {
    return this.request(`/cars/${carId}`, {
      method: 'PUT',
      body: JSON.stringify(carData),
    });
  }

  async deleteCar(carId) {
    return this.request(`/cars/${carId}`, {
      method: 'DELETE',
    });
  }

  async toggleCarAvailability(carId) {
    return this.request(`/cars/${carId}/availability`, {
      method: 'PATCH',
    });
  }

  // Booking endpoints
  async getMyBookings() {
    return this.request('/bookings/my-bookings');
  }

  async cancelBooking(bookingId) {
    return this.request(`/bookings/${bookingId}/cancel`, {
      method: 'PATCH',
    });
  }
}

export default new ApiService();