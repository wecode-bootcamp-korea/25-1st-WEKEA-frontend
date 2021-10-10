import React from 'react';
import { Link } from 'react-router-dom';
import './Recommend.scss';

class Recommend extends React.Component {
  state = {
    recommendList: [],
  };

  componentDidMount() {
    fetch('/data/main/Recommend.json', {
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
    return (
      <div className="Recommend">
        <h2>추천 제품</h2>
        <ul>
          {recommendList.map(item => {
            return (
              <li key={item.id}>
                <Link to="">
                  <img src={item.img} alt={`${item.forign}_img`} />
                  <div className="text">
                    <p className="name">{`${item.forign} ${item.korean}`}</p>
                    <p className="info">{`${item.info}, ${item.width}x${item.height}x${item.zIndex} ${item.unit}`}</p>
                    <p className="price">{`₩ ${item.price}`}</p>
                    <p className="grade">{'★'.repeat(item.grade)}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Recommend;
