import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { getPurchaseHistory } from "./apiUser";
import moment from "moment";



  const purchaseHistory = (history) => {
    const {
        user: { _id, name, email, role },
        token,
      } = isAuthenticated();
      const [history, setHistory] = useState([]);
      const [orders, setOrders] = useState([]);
      const init = (userId, token) => {
        getPurchaseHistory(userId, token).then((data) => {
          if (data && data.error) {
            console.log(data.error);
          } else {
            setHistory(data);
          }
        });
      };
    return (
      <div className="card mb-5">
        <h3 className="card-header">Purchase history</h3>
        <ul className="list-group">
          <li className="list-group-item">
            {history.map((h, i) => {
              return (
                <div key={i + 1}>
                  <hr />
                  {h.products.map((p, i) => {
                    return (
                      <div key={i}>
                        <h6>Order Status: {orders.status}</h6>
                        <h6>Product name: {p.name}</h6>
                        <h6>Product price: ₹{p.price}</h6>
                        <h6>Purchased date: {moment(p.createdAt).fromNow()}</h6>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </li>
        </ul>
      </div>
    );
    return(
        <Layout
            className="container"
            >
                <div className="my-4">
                <div className="row">
                <div className="col-lg-9 col-md-9 col-sm-8 col-xs-8">
                    {purchaseHistory(history)}
                </div>
                </div>
            </div>

    </Layout>
    );

  };
