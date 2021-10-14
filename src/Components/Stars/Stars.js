import React from 'react';
import './Stars.scss';

class Stars extends React.Component {
  roundAverage = average => {
    return Math.round(average * 2) / 2;
  };

  isHaveHalf = average => {
    return this.roundAverage(average) % 1;
  };

  calculateAverage = (reviewList, key) => {
    let sum = 0;
    reviewList.map(review => (sum += review[key]));
    return sum / reviewList.length;
  };

  render() {
    const { id, reviewList, reviewNum } = this.props;
    const { roundAverage, isHaveHalf, calculateAverage } = this;
    const review = !id
      ? {
          installation: calculateAverage(reviewList, 'installation'),
          cost_performance: calculateAverage(reviewList, 'cost_performance'),
          quality: calculateAverage(reviewList, 'quality'),
          appearance: calculateAverage(reviewList, 'appearance'),
          functionality: calculateAverage(reviewList, 'functionality'),
        }
      : reviewList[0];

    const average =
      (review.installation +
        review.cost_performance +
        review.quality +
        review.appearance +
        review.functionality) /
      5;

    return (
      <div className="Stars">
        <span className="background">
          {[...Array(5)].map((i, idx) => (
            <i key={idx} className="fas fa-star" />
          ))}
          {reviewNum && <span className="review-length">({reviewNum})</span>}
        </span>
        <span className="fill">
          {[...Array(Math.floor(roundAverage(average)))].map((i, idx) => (
            <i key={idx} className="fas fa-star" />
          ))}
          {isHaveHalf(average) ? <i className="fas fa-star-half" /> : ''}
        </span>
      </div>
    );
  }
}

export default Stars;
