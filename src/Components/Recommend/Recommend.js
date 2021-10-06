import React from 'react';
// import { Link } from "react-router-dom";

class Recommend extends React.Component {
  state = {
    recommendList: [],
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/main/Recommend.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          recommendList: data,
        })
      );
  }

  render() {
    const { recommendList } = this.state;
    const list = recommendList.map(item => {
      const {
        img,
        forign,
        korean,
        info,
        width,
        height,
        zIndex,
        unit,
        price,
        grade,
      } = item;
      return (
        <li>
          <img src={img} alt={`${forign}_img`} />
          <span className="name">{`${forign} ${korean}`}</span>
          <span className="info">{`${info}, ${width}x${height}x${zIndex} ${unit}`}</span>
          <span className="price">{`₩ ${price}`}</span>
          <span className="grade">{'★'.repeat(grade)}</span>
        </li>
      );
    });
    return (
      <>
        <hi>추천 제품</hi>
        {list}
      </>
    );
  }
}

export default Recommend;
