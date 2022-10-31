import CustomizedRating from "./RatingComponent";

const Comments = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="px-10">
        <div className="max-w-xl px-10 py-8 transition duration-500 bg-white shadow-lg rounded-2xl hover:shadow-2xl">
          <div className="text-lg font-semibold text-gray-700 cursor-pointer hover:underline">
            Add your review:
          </div>
          <div className="mt-4">
            <div className="py-2 text-lg font-semibold text-gray-700">
              Title:
              <input className="px-3 text-lg border"></input>
            </div>
            <div className="flex text-lg font-semibold text-gray-700">
              Rating:
            </div>
            <div className="text-lg font-semibold text-gray-700">
              Review:
              <input className="mt-4 text-gray-600 border text-md"></input>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center mt-4 space-x-4">
                <div className="text-sm font-semibold">{"Username"}</div>
              </div>
              <div className="flex items-center justify-center p-2 mt-4 text-sm text-white bg-yellow-400 rounded shadow-lg cursor-pointer hover:bg-yellow-500">
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
