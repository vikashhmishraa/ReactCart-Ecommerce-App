import React from "react";

const ReviewComment = ({ review }) => {
  const { rating, comment, reviewerName } = review;

  return (
    <div className="collapse collapse-arrow bg-base-200 m-2">
      <input type="radio" name="my-accordion-2" defaultChecked />
      <div className="collapse-title text-xl font-medium">{`${reviewerName} : ${rating} Star`}</div>
      <div className="collapse-content">
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default ReviewComment;
