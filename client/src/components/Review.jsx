import { useState, useEffect } from "react";

const Review = ({ quizId }) => {
  const [quizReviews, setQuizReviews] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/review/quiz/:${quizId}`);
      const data = (await res.json()).payload;
      setQuizReviews(data);
    };

    fetchData();
  }, []);
  console.log(quizReviews);
  return (
    <>
      {quizReviews !== null && (
        <div>
          {quizReviews.map((review) => {
            return (
              <>
                <p
                  style={{
                    padding: "3px",
                    margin: "10px",
                    borderBottom: "red",
                    width: "100%",
                  }}
                >
                  {review.review}
                </p>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Review;
