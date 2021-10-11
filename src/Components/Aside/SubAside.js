import React, { Component } from 'react';
import './SubAside.scss';
import SubCategory from './SubCategory';

export default class SubAside extends Component {
  state = {
    subcategory: [],
  };

  componentDidMount() {
    fetch('/data/subCategory.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          subcategory: data.sub_categories,
        });
      });
  }

  render() {
    const { isExpand, catName } = this.props;
    return (
      <article className={`${isExpand ? 'expandShow' : null}`}>
        <div className="sideBar">
          <h1>모든 제품</h1>
          <ul>
            {this.state.subcategory.map(el => {
              return (
                <SubCategory id={el.id} name={el.name} catName={catName} />
              );
            })}
          </ul>
        </div>
      </article>
    );
  }
}
