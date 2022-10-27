import CustomizedRating from "./RatingComponent";

const Comments = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="px-10">
        <div className="max-w-xl px-10 py-8 transition duration-500 bg-white shadow-lg rounded-2xl hover:shadow-2xl">
          <div className="mt-4">
            <h1 className="text-lg font-semibold text-gray-700 cursor-pointer hover:underline">
              Product Review
            </h1>
            <CustomizedRating></CustomizedRating>
            <p className="mt-4 text-gray-600 text-md">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human happines.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center mt-4 space-x-4">
                <div className="text-sm font-semibold">
                  {"Username"}
                  <span className="font-normal"> 5 minutes ago</span>
                </div>
              </div>
              <div className="flex items-center justify-center w-4 h-4 p-6 mt-4 text-2xl text-white bg-yellow-400 rounded-full shadow-lg cursor-pointer">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
