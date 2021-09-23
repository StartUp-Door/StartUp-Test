import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
//import { RestaurantsContext } from "../context/RestaurantsContext";
import { RestaurantsContext } from "../../Client/feedback/context/RestaurantsContext";
import RestaurantFinder from "../../Client/feedback/apis/RestaurantFinder";
//import StarRating from "../components/StarRating";
import StarRating from "../../Client/feedback/components/StarRating";
import Reviews from "../../Client/feedback/components/Reviews";
//import AddReview from "../../Client/feedback/components/AddReview";


const AllFeedback = () => {
  //const { id } = useParams();
 // const { id } = 4;
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantsContext
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = await RestaurantFinder.get(`/${id}`);
        const response = await RestaurantFinder.get('/7');
        console.log(response);

        setSelectedRestaurant(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {selectedRestaurant && (
        <>
          <h1 className="text-center display-1">
            {selectedRestaurant.restaurant.name}
          </h1>
          <div className="text-center">
            <StarRating rating={selectedRestaurant.restaurant.average_rating} />
            <span className="text-warning ml-1">
              {selectedRestaurant.restaurant.count
                ? `(${selectedRestaurant.restaurant.count})`
                : "(0)"}
            </span>
          </div>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
         
        </>
      )}
    </div>
  );
};

export default AllFeedback;
