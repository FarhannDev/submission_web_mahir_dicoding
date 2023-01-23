import API from './api';

class HarmonyCafeSource {
  static async Home() {
    const response = await fetch(API.List);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async Detail(id) {
    const response = await fetch(API.DETAIL(id));
    return response.json();
  }
}

export default HarmonyCafeSource;
