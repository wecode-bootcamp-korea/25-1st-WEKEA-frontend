import React from 'react';
import Stars from '../../../../Components/Stars/Stars';
import Grade from './Grade/Grade';
import './ReviewBox.scss';

class ReviewBox extends React.Component {
  changeFormToDate = s => {
    return `${s.split('-')[0]}/${s.split('-')[1]}/${s.split('-')[2]}`;
  };

  render() {
    const { id, reviewList, reviewNum } = this.props;
    const thisReviewList = id
      ? reviewList.filter(x => x.id === id)
      : reviewList;

    return (
      <div className="ReviewBox">
        <div className="top">
          <Stars id={id} reviewList={thisReviewList} reviewNum={reviewNum} />
          <span className="date">
            {id !== 0 &&
              this.changeFormToDate(thisReviewList[0].created_at.split('T')[0])}
          </span>
        </div>
        <div className="review">{id !== 0 && thisReviewList[0].review}</div>
        <div className="installation">
          <div className="tag">손쉬운 조립</div>
          <Grade reviewList={thisReviewList[0]} tag="installation" />
        </div>
        <div className="cost">
          <div className="tag">제품 가성비</div>
          <Grade reviewList={thisReviewList[0]} tag="cost_performance" />
        </div>
        <div className="quality">
          <div className="tag">제품 품질</div>
          <Grade reviewList={thisReviewList[0]} tag="quality" />
        </div>
        <div className="appearance">
          <div className="tag">제품 외관</div>
          <Grade reviewList={thisReviewList[0]} tag="appearance" />
        </div>
        <div className="function">
          <div className="tag">제품 기능</div>
          <Grade reviewList={thisReviewList[0]} tag="functionality" />
        </div>
      </div>
    );
  }
}
export default ReviewBox;
