import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import  { StyledRating } from "./RatingComponent";


type Review = {
    _id: number
    content: string
    score: number
    date: string
    user: string
}

type Props = {
  refetchReviews: () => void;
  review: Review
}

const Comments = (props: Props) => {

  return (
        <div className="flex items-center justify-center m-5">
            <div className="max-w-xl w-96 px-10 py-4  bg-white shadow-md rounded-2xl ">
        <div className="mt-2">
          <div className="flex justify-between">
                <h1 className="text-lg font-semibold text-gray-700">
                  {props.review.user}
                </h1>
          
          <StyledRating
            readOnly
            name="customized-color"
            value={props.review.score}
            icon={<FavoriteIcon />}
            emptyIcon={<FavoriteBorderIcon />}
            />
            </div>
                <p className="mt-4 text-gray-600 text-md">
                  {props.review.content}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center mt-4 space-x-4">
                    <div className="text-sm font-semibold">
                      {"Posted"}
                      <span className="font-normal"> {props.review.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
  );
};

export default Comments;
