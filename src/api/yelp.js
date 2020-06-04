import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 15NiGAib0U9fF0tsplvuk-c-v_uD-3__fn3MkQJdxId34p0g57KY8cK4BVATlu8pAmV3WUzY7TpVkJrCiMDKWxZ3t7n7cA1BTgVv5f0pWs7kmr-OTg1sAU9MGxzZXnYx',
  }
});
