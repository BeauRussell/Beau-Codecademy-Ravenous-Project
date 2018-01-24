const apiKey = 'ny8EkxUEYjTWdlaYZjLj1zL_qM_3AbXw6b_io1jGqYm0gWWdbQXHUIF067SkyKPGfgFJN1ojE61Qeai8PVYOIkvjz7O-JEUHXkJRhH2c2Y4dY8VjjppDnUZu4f5nWnYx';

const yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default yelp;