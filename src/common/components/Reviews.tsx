import Comments from "./commentField/Comments";

type Review = {
  _id: number;
  content: string;
  score: number;
  date: string;
  user: string;
};

type Props = {
  reviews: [Review];
  refetchReviews: () => void;
};

const Reviews = ({ reviews, refetchReviews = () => {} }: Props) => {
  return (
    <div id="reviews">
      <div className="grid grid-cols-3 gap-6 px-32 py-20 xxs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {reviews.map((p) => (
          <Comments refetchReviews={refetchReviews} review={p}></Comments>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
