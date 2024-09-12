import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <div>
        <h3 className="font-palanquin text-center text-4xl font-bold">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h3>
        <p className="info-text m-auto mt-4 max-w-lg text-center">
          Hear genuine stories from our satisfied customers about their
          expectational experiences with us.
        </p>
        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((reviews) => (
            <ReviewCard
              key={reviews.customerName}
              imgURL={reviews.imgURL}
              customerName={reviews.customerName}
              rating={reviews.rating}
              feedback={reviews.feedback}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
