const apiKey = '_EzHpr3BB9hVW3dALdJY6X9fs6ttnqVRqOIrJFmRnveUJS6UcSiD3KgMw5V5Qlb7TMVCmiou1297oB8f1n_O7nCARWecvlQw8JeUWYnPk9_wN3ZqQ-qwF3oUf9DaX3Yx';

export const Yelp = {
    search(term, location, sortBy) {
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            }
        ).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
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
                    }
                });
            }
        });
    }
};