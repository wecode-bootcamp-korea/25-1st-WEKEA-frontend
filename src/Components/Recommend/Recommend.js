import React from 'react';
import { Link } from 'react-router-dom';
import './Recommend.scss';

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
          <Link to="">
            <img src={img} alt={`${forign}_img`} />
            <div className="text">
              <span className="name">{`${forign} ${korean}`}</span>
              <span className="info">{`${info}, ${width}x${height}x${zIndex} ${unit}`}</span>
              <span className="price">{`₩ ${price}`}</span>
              <span className="grade">{'★'.repeat(grade)}</span>
            </div>
          </Link>
        </li>
      );
    });
    return (
      <div className="Recommend">
        <h2>추천 제품</h2>
        <ul>{list}</ul>
      </div>
    );
  }
}

export default Recommend;
