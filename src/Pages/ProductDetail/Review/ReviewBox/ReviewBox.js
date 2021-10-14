import React from 'react';
import Stars from '../../../../Components/Stars/Stars';
import GradeBar from './GradeBar/GradeBar';
import './ReviewBox.scss';

class ReviewBox extends React.Component {
  changeFormToDate = s => {
    return `${s.split('-')[0]}/${s.split('-')[1]}/${s.split('-')[2]}`;
  };

  render() {
    const { id, reviewList } = this.props;
    const thisReviewList = id
      ? reviewList.filter(x => x.id === id)
      : reviewList;

    return (
      <div className="ReviewBox">
        <div className="top">
          <Stars id={id} reviewList={thisReviewList} />
          <span className="date">
            {id &&
              this.changeFormToDate(thisReviewList[0].created_at.split('T')[0])}
          </span>
        </div>
        <div className="review">{id && thisReviewList[0].review}</div>
        <div className="installation">
          <div className="tag">손쉬운 조립</div>
          <GradeBar grade={thisReviewList[0].installation} />
          <div className="grade">{thisReviewList[0].installation}</div>
        </div>
        <div className="cost">
          <div className="tag">제품 가성비</div>
          <GradeBar grade={thisReviewList[0].cost_performance} />
          <div className="grade">{thisReviewList[0].cost_performance}</div>
        </div>
        <div className="quality">
          <div className="tag">제품 품질</div>
          <GradeBar grade={thisReviewList[0].quality} />
          <div className="grade">{thisReviewList[0].quality}</div>
        </div>
        <div className="appearance">
          <div className="tag">제품 외관</div>
          <GradeBar grade={thisReviewList[0].appearance} />
          <div className="grade">{thisReviewList[0].appearance}</div>
        </div>
        <div className="function">
          <div className="tag">제품 기능</div>
          <GradeBar grade={thisReviewList[0].functionality} />
          <div className="grade">{thisReviewList[0].functionality}</div>
        </div>
      </div>
    );
  }
}
export default ReviewBox;
