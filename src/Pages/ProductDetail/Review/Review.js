import React from 'react';
import ReviewBox from './ReviewBox/ReviewBox';
import './Review.scss';

class Review extends React.Component {
  calculateAverage = (reviewList, key) => {
    let sum = 0;
    reviewList.map(review => (sum += review[key]));
    return sum / reviewList.length;
  };

  render() {
    const { reviewList } = this.props;
    const { calculateAverage } = this;

    const totalAverage =
      (calculateAverage(reviewList, 'installation') +
        calculateAverage(reviewList, 'cost_performance') +
        calculateAverage(reviewList, 'quality') +
        calculateAverage(reviewList, 'appearance') +
        calculateAverage(reviewList, 'functionality')) /
      5;

    const averageObj = [
      {
        id: 0,
        installation: calculateAverage(reviewList, 'installation'),
        cost_performance: calculateAverage(reviewList, 'cost_performance'),
        quality: calculateAverage(reviewList, 'quality'),
        appearance: calculateAverage(reviewList, 'appearance'),
        functionality: calculateAverage(reviewList, 'functionality'),
      },
    ];

    return (
      <>
        <h2 className="title">상품평</h2>
        <div className="main">
          <span className="total-average">{totalAverage.toFixed(1)}</span>
          <ReviewBox
            id={0}
            reviewList={averageObj}
            reviewNum={reviewList.length}
          />
          {reviewList.map(review => (
            <ReviewBox key={review.id} id={review.id} reviewList={reviewList} />
          ))}
        </div>
      </>
    );
  }
}

export default Review;
