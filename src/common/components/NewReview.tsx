import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useProfile from "../hooks/useProfile";
import { useReview } from "../hooks/useReview";
import CustomizedRating from "./commentField/RatingComponent";

type Props = {
  refetchReviews: () => void;
};

export const NewReview = ({ refetchReviews }: Props) => {
  const { id } = useParams<{ id: string }>();
  const contentInput = useRef<HTMLInputElement>(null);
  const { review } = useReview(refetchReviews);
  const [score, setScore] = useState<number | null>(0);
  const { name } = useProfile();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const date = new Date().toLocaleDateString();
    if (contentInput.current && score && id) {
      const content = contentInput.current.value;
      review(score, content, parseInt(id), date, name);
    }
    refetchReviews();
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 mx-auto mt-10 lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Leave a review
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            action="#"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="flex items-center h-5">
              <CustomizedRating
                onChange={(event, newValue) => {
                  setScore(newValue);
                  if (contentInput.current) {
                  }
                }}
              ></CustomizedRating>
            </div>
            <div>
              <input
                ref={contentInput}
                type="text"
                name="review"
                id="review"
                className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your review"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-start"></div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
