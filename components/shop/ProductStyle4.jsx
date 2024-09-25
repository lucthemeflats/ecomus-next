"use client";
import { layouts, sortingOptions } from "@/data/shop";
import { useState } from "react";
import Pagination from "../common/Pagination";
import { products1 } from "@/data/products";
import Productcard4 from "../shopCards/Productcart4";
import ShopFilter from "./ShopFilter";
import Sorting from "./Sorting";

export default function ProductStyle4() {
  const [gridItems, setGridItems] = useState(4);
  const [products, setProducts] = useState([]);
  const [finalSorted, setFinalSorted] = useState([]);
  return (
    <>
      <section className="flat-spacing-2">
        <div className="container">
          <div className="tf-shop-control grid-3 align-items-center">
            <div className="tf-control-filter">
              <a
                href="#filterShop"
                data-bs-toggle="offcanvas"
                aria-controls="offcanvasLeft"
                className="tf-btn-filter"
              >
                <span className="icon icon-filter" />
                <span className="text">Filter</span>
              </a>
            </div>
            <ul className="tf-control-layout d-flex justify-content-center">
              {layouts.map((layout, index) => (
                <li
                  key={index}
                  className={`tf-view-layout-switch ${layout.className} ${
                    gridItems == layout.dataValueGrid ? "active" : ""
                  }`}
                  onClick={() => setGridItems(layout.dataValueGrid)}
                >
                  <div className="item">
                    <span className={`icon ${layout.iconClass}`} />
                  </div>
                </li>
              ))}
            </ul>
            <div className="tf-control-sorting d-flex justify-content-end">
              <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
                <Sorting setFinalSorted={setFinalSorted} products={products} />
              </div>
            </div>
          </div>
          <div className="wrapper-control-shop">
            <div className="meta-filter-shop" />
            <div
              className="grid-layout wrapper-shop"
              data-grid={`grid-${gridItems}`}
            >
              {/* card product 1 */}
              {finalSorted.map((elm, i) => (
                <Productcard4 product={elm} key={i} />
              ))}
            </div>
            {/* pagination */}
            <ul className="tf-pagination-wrap tf-pagination-list tf-pagination-btn">
              <Pagination />
            </ul>
          </div>
        </div>
      </section>
      <ShopFilter setProducts={setProducts} />{" "}
    </>
  );
}
