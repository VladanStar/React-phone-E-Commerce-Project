import React, { Component } from "react";
import Product from "../Product/Product";
import Title from "../Title/Title";
import { storeProducts } from "../../data";
import { ProductConsumer } from "../../context";

export default class ProductList extends Component {
  state = {
    products: storeProducts,
  };

  render() {

    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
                <ProductConsumer>
                    {(value)=>{
                      return value.products.map(product= >{
                          
                      })


                    }}

                </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
