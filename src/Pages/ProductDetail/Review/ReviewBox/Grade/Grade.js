import React from 'react';
import GradeBar from './GradeBar/GradeBar';

class Grade extends React.Component {
  render() {
    const { reviewList, tag } = this.props;

    return (
      <>
        <GradeBar grade={reviewList[tag]} />
        <div className="grade">{reviewList[tag].toFixed(1)}</div>
      </>
    );
  }
}

export default Grade;
