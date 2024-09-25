import React from "react";
import Link from "next/link";
import LanguageSelect from "../common/LanguageSelect";
import CurrencySelect from "../common/CurrencySelect";
export default function Topbar2({ bgColor = "bg_dark" }) {
  return (
    <div className={`tf-top-bar bg_dark line ${bgColor}`}>
      <div className="px_15 lg-px_40">
        <div className="tf-top-bar_wrap grid-3 gap-30 align-items-center">
          <div className="tf-top-bar_left">
            <div className="d-flex gap-30 text_white fw-5">
              <span>(+333) 123-1688</span>
              <span>sayhello@ecomus.com</span>
            </div>
          </div>
          <div className="text-center overflow-hidden">
            <div
              className="swiper tf-sw-top_bar"
              data-preview={1}
              data-space={0}
              data-loop="true"
              data-speed={1000}
              data-delay={2000}
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <p className="top-bar-text fw-5 text_white">
                    Spring Fashion Sale{" "}
                    <Link
                      href={`/shop-default`}
                      title="all collection"
                      className="tf-btn btn-line"
                    >
                      {" "}
                      Shop now
                      <i className="icon icon-arrow1-top-left" />
                    </Link>
                  </p>
                </div>
                <div className="swiper-slide">
                  <p className="top-bar-text fw-5 text_white">
                    <a>Summer sale discount off 70%</a>
                  </p>
                </div>
                <div className="swiper-slide">
                  <p className="top-bar-text fw-5 text_white">
                    <a>Time to refresh your wardrobe.</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="top-bar-language tf-cur justify-content-end">
            <div className="tf-currencies">
              <CurrencySelect light topStart />
            </div>
            <div className="tf-languages">
              <LanguageSelect
                parentClassName={
                  "image-select center style-default type-languages color-white"
                }
                topStart
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
