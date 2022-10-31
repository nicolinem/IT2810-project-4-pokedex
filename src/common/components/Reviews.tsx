import Comments from "./commentField/Comments"

type Review = {
    _id: number
    content: string
    score: number
    date: string
    user: string
}

type Props = {
    reviews: [Review]
    refetchReviews: () => void
}

const Reviews = ({ reviews, refetchReviews = () => { } }: Props) => {

  return (
    <div className="flex flex-col items-center justify-center px-6 mx-auto mt-10 lg:py-0">
          {reviews.map(p => (
              <Comments refetchReviews={refetchReviews} review={p}></Comments>
          )
      )}
    </div>
  );
};

export default Reviews;