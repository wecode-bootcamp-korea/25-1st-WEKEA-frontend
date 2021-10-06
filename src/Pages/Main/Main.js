import React, { Component } from 'react';
import Banner from './Banner/Banner';
import Gallary from './Gallary/Gallary';
import Recommend from '../../Components/Recommend/Recommend';

export default class Main extends Component {
  state = {
    newProduct: [],
    homeOffice: [],
    homePunishing: [],
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/main/Gallary.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        const { newProduct, homeOffice, homePunishing } = data;
        this.setState({
          newProduct: newProduct,
          homeOffice: homeOffice,
          homePunishing: homePunishing,
        });
      });
  }

  render() {
    const { newProduct, homeOffice, homePunishing } = this.state;
    return (
      <div className="Main">
        <Banner />
        <Recommend />
        <Gallary title="신제품을 만나보세요" items={newProduct} />
        <Gallary title="똑똑한 나만의 홈 오피스" items={homeOffice} />
        <Gallary title="홈퍼니싱 아이디어 더 보기" items={homePunishing} />
      </div>
    );
  }
}
