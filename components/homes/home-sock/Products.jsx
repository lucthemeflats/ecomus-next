"use client";

import { products36 } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useContextElement } from "@/context/Context";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
export default function Products() {
  const { setQuickViewItem } = useContextElement();
  const {
    setQuickAddItem,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
  } = useContextElement();
  return (
    <section className="flat-spacing-27 pt_0">
      <div className="container">
        <div className="flat-title">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            <svg
              style={{
                display: "inline-block",
                marginInlineEnd: "1.8px",
                position: "relative",
                top: "-2px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M23.1441 2.75113L25.5372 0.54679L26.3588 3.69517C26.6529 4.82217 27.3601 5.79733 28.34 6.42702C29.3199 7.0567 30.5007 7.29485 31.648 7.09418L34.853 6.53387L33.8421 9.62757C33.4804 10.7346 33.5482 11.9372 34.032 12.9966C34.5159 14.0559 35.3804 14.8947 36.4539 15.3462L39.4538 16.6075L36.9314 18.6624C36.0283 19.3981 35.435 20.4465 35.2693 21.5994C35.1035 22.7524 35.3775 23.9255 36.0367 24.8857L37.8779 27.5682L34.6442 27.9329C33.4868 28.0637 32.4209 28.6249 31.6581 29.5052C30.8954 30.3855 30.4915 31.5204 30.5268 32.6847L30.6252 35.9368L27.7081 34.4959C26.6639 33.9806 25.4642 33.8767 24.347 34.2048C23.2298 34.5329 22.2767 35.2691 21.677 36.2671L20.0004 39.0564L18.3251 36.2671C17.7254 35.2691 16.7723 34.5329 15.6551 34.2048C14.5379 33.8767 13.3382 33.9806 12.294 34.4959L9.37561 35.9368L9.47436 32.6847C9.50964 31.5204 9.10576 30.3854 8.34293 29.5051C7.58009 28.6248 6.5141 28.0636 5.35662 27.9329L2.12355 27.5676L3.96477 24.8851C4.62392 23.9248 4.89783 22.7517 4.73208 21.5988C4.56634 20.4459 3.97307 19.3975 3.07009 18.6618L0.547637 16.6068L3.54759 15.3456C4.62111 14.894 5.4856 14.0553 5.96944 12.9959C6.45328 11.9366 6.52109 10.734 6.15942 9.62695L5.14849 6.53325L8.35344 7.09355C9.50059 7.29408 10.6812 7.05593 11.6609 6.42639C12.6406 5.79684 13.3478 4.82193 13.6421 3.69517L14.4636 0.54679L16.8567 2.75113C17.7135 3.54025 18.8356 3.97831 20.0004 3.97831C21.1652 3.97831 22.2874 3.54025 23.1441 2.75113Z"
                fill="#FFE671"
              />
              <path
                d="M30.7799 21.2431C31.7459 15.2898 27.7029 9.68056 21.7496 8.71453C15.7963 7.74848 10.187 11.7915 9.22099 17.7448C8.25495 23.6981 12.2979 29.3074 18.2513 30.2734C24.2046 31.2394 29.8138 27.1965 30.7799 21.2431Z"
                fill="#FFAE4D"
              />
              <path
                d="M27.8812 20.0258C27.7403 20.0258 27.6052 19.9699 27.5056 19.8702C27.406 19.7706 27.35 19.6355 27.35 19.4946C27.348 17.546 26.573 15.6777 25.1952 14.2999C23.8173 12.922 21.949 12.147 20.0004 12.145C19.8592 12.145 19.7238 12.0889 19.6239 11.9891C19.524 11.8892 19.4679 11.7538 19.4679 11.6125C19.4679 11.4713 19.524 11.3359 19.6239 11.236C19.7238 11.1361 19.8592 11.08 20.0004 11.08C22.231 11.0826 24.3695 11.9699 25.9467 13.5473C27.5239 15.1247 28.4109 17.2634 28.4131 19.494C28.4132 19.5638 28.3995 19.633 28.3728 19.6976C28.3461 19.7622 28.3069 19.8208 28.2575 19.8702C28.2081 19.9196 28.1494 19.9588 28.0849 19.9855C28.0203 20.0122 27.9511 20.0259 27.8812 20.0258Z"
                fill="#FF9B36"
              />
              <path
                d="M8.53187 19.494C8.5315 22.137 9.44404 24.6991 11.1151 26.7468C12.7862 28.7945 15.1133 30.2021 17.7028 30.7316C20.2922 31.2611 22.9851 30.88 25.3259 29.6527C27.6667 28.4254 29.5118 26.4272 30.549 23.9962C31.5862 21.5652 31.7519 18.8505 31.0181 16.3114C30.2842 13.7723 28.6959 11.5645 26.5218 10.0616C24.3476 8.55871 21.7211 7.85288 19.0865 8.06351C16.4518 8.27414 13.9708 9.3883 12.0631 11.2175C12.0113 11.2672 11.9697 11.3267 11.9409 11.3924C11.912 11.4581 11.8964 11.5289 11.8949 11.6007C11.8934 11.6725 11.9061 11.7438 11.9322 11.8107C11.9583 11.8776 11.9973 11.9387 12.047 11.9905C12.0967 12.0423 12.1561 12.0838 12.2218 12.1127C12.2876 12.1415 12.3583 12.1571 12.4301 12.1586C12.5019 12.1601 12.5733 12.1475 12.6401 12.1214C12.707 12.0953 12.7681 12.0563 12.8199 12.0066C14.5457 10.3518 16.7901 9.34384 19.1735 9.15326C21.5568 8.96268 23.9329 9.60116 25.8997 10.9607C27.8665 12.3202 29.3034 14.3174 29.9673 16.6143C30.6312 18.9113 30.4813 21.367 29.5431 23.5662C28.6049 25.7654 26.9358 27.5731 24.8183 28.6834C22.7008 29.7937 20.2647 30.1386 17.9222 29.6596C15.5797 29.1807 13.4745 27.9073 11.9627 26.055C10.4509 24.2026 9.62535 21.8849 9.6256 19.494C9.6256 19.4221 9.61146 19.351 9.58398 19.2847C9.55649 19.2183 9.51621 19.1581 9.46543 19.1073C9.41465 19.0565 9.35436 19.0162 9.28802 18.9887C9.22167 18.9612 9.15055 18.9471 9.07874 18.9471C9.00692 18.9471 8.93581 18.9612 8.86946 18.9887C8.80311 19.0162 8.74283 19.0565 8.69205 19.1073C8.64127 19.1581 8.60098 19.2183 8.5735 19.2847C8.54602 19.351 8.53187 19.4221 8.53187 19.494Z"
                fill="black"
              />
              <path
                d="M9.63717 16.5884C9.75205 16.5883 9.86398 16.552 9.95709 16.4847C10.0502 16.4174 10.1198 16.3224 10.1559 16.2134C10.3063 15.7623 10.4877 15.3221 10.6987 14.8959C10.734 14.8313 10.7558 14.7602 10.763 14.6869C10.7701 14.6136 10.7623 14.5396 10.7402 14.4694C10.718 14.3991 10.6819 14.3341 10.634 14.2782C10.5861 14.2222 10.5274 14.1766 10.4614 14.1439C10.3954 14.1112 10.3235 14.0922 10.2499 14.088C10.1764 14.0838 10.1028 14.0945 10.0335 14.1194C9.9642 14.1443 9.90065 14.183 9.84667 14.2331C9.79269 14.2832 9.74939 14.3437 9.71935 14.4109C9.48601 14.8825 9.28544 15.3696 9.11905 15.8687C9.09192 15.9509 9.08467 16.0383 9.09788 16.1238C9.11108 16.2093 9.14439 16.2905 9.19504 16.3606C9.2457 16.4308 9.31227 16.4879 9.38929 16.5273C9.46631 16.5668 9.55158 16.5874 9.6381 16.5875L9.63717 16.5884ZM27.3344 19.494C27.3344 19.639 27.392 19.7781 27.4945 19.8807C27.5971 19.9832 27.7362 20.0408 27.8812 20.0408C28.0263 20.0408 28.1654 19.9832 28.2679 19.8807C28.3705 19.7781 28.4281 19.639 28.4281 19.494C28.4255 17.2596 27.5368 15.1175 25.9569 13.5375C24.3769 11.9576 22.2348 11.0689 20.0004 11.0663C19.8554 11.0663 19.7163 11.1239 19.6137 11.2265C19.5112 11.329 19.4536 11.4681 19.4536 11.6132C19.4536 11.7582 19.5112 11.8973 19.6137 11.9999C19.7163 12.1024 19.8554 12.16 20.0004 12.16C21.9447 12.1626 23.8086 12.9361 25.1835 14.3109C26.5583 15.6857 27.3318 17.5497 27.3344 19.494Z"
                fill="black"
              />
              <path
                d="M37.2764 19.0858L39.7985 17.0306C39.8717 16.9709 39.9282 16.8934 39.9626 16.8055C39.9969 16.7175 40.0079 16.6222 39.9944 16.5288C39.981 16.4353 39.9436 16.3469 39.8859 16.2722C39.8282 16.1975 39.7521 16.139 39.6651 16.1025L36.6651 14.8415C35.9534 14.5431 35.3409 14.049 34.8986 13.4166C34.8577 13.3572 34.8054 13.3065 34.7448 13.2674C34.6842 13.2283 34.6164 13.2016 34.5454 13.1888C34.4745 13.176 34.4017 13.1774 34.3312 13.1929C34.2608 13.2083 34.1941 13.2376 34.135 13.2789C34.0759 13.3202 34.0255 13.3729 33.9869 13.4337C33.9482 13.4946 33.9219 13.5625 33.9096 13.6336C33.8973 13.7046 33.8991 13.7774 33.915 13.8478C33.931 13.9181 33.9606 13.9846 34.0024 14.0434C34.5629 14.845 35.3391 15.4712 36.2411 15.8497L38.4011 16.7581L36.5845 18.2377C35.5813 19.0645 34.9227 20.2359 34.7377 21.5227C34.5528 22.8095 34.8547 24.119 35.5845 25.1948L36.9104 27.1266L34.5824 27.3898C33.291 27.5422 32.1032 28.1715 31.2517 29.1542C30.4003 30.137 29.9466 31.4023 29.9796 32.7022L30.0509 35.044L27.9497 34.0065C26.7812 33.437 25.4422 33.3243 24.195 33.6904C22.9478 34.0565 21.8822 34.8751 21.207 35.9859L20.0004 37.9943L18.7939 35.9859C18.1188 34.8748 17.0532 34.0559 15.8058 33.6896C14.5584 33.3233 13.2192 33.436 12.0506 34.0056L9.94935 35.0431L10.0206 32.7012C10.0536 31.4014 9.59986 30.1361 8.74841 29.1533C7.89696 28.1706 6.70917 27.5413 5.41787 27.3888L3.08978 27.1257L4.4157 25.1939C5.14549 24.118 5.44747 22.8085 5.26252 21.5217C5.07756 20.235 4.41898 19.0635 3.41571 18.2368L1.59887 16.7581L3.75883 15.8497C4.95496 15.3395 5.91741 14.4009 6.45751 13.218C6.99761 12.0351 7.07641 10.6931 6.67847 9.45507L5.95067 7.22918L8.25875 7.63292C9.54051 7.85028 10.8572 7.58117 11.9509 6.87831C13.0446 6.17545 13.8364 5.08952 14.1712 3.8333L14.7627 1.56615L16.4861 3.15331C17.4472 4.02876 18.7004 4.51399 20.0004 4.51399C21.3005 4.51399 22.5537 4.02876 23.5147 3.15331L25.2381 1.56615L25.8297 3.8333C26.1645 5.08952 26.9562 6.17545 28.0499 6.87831C29.1436 7.58117 30.4603 7.85028 31.7421 7.63292L34.0502 7.22918L33.3224 9.45507C33.3001 9.52334 33.2914 9.59534 33.2969 9.66695C33.3024 9.73856 33.3219 9.80839 33.3544 9.87244C33.3869 9.9365 33.4317 9.99353 33.4862 10.0403C33.5408 10.087 33.604 10.1226 33.6722 10.1449C33.7405 10.1672 33.8125 10.1759 33.8841 10.1704C33.9557 10.1649 34.0255 10.1453 34.0896 10.1129C34.1537 10.0804 34.2107 10.0356 34.2574 9.98106C34.3042 9.92653 34.3397 9.86333 34.3621 9.79507L35.373 6.70137C35.4023 6.61164 35.408 6.51583 35.3893 6.42327C35.3707 6.33072 35.3284 6.24457 35.2665 6.17321C35.2047 6.10185 35.1255 6.04772 35.0365 6.01607C34.9476 5.98443 34.8519 5.97635 34.7589 5.99263L31.554 6.55325C30.5423 6.72435 29.5031 6.51163 28.64 5.95674C27.777 5.40185 27.1521 4.54475 26.8878 3.5533L26.0666 0.40898C26.0428 0.31762 25.9957 0.233979 25.93 0.166197C25.8643 0.098415 25.7821 0.0488011 25.6916 0.0221839C25.601 -0.00443328 25.505 -0.00714703 25.4131 0.0143067C25.3212 0.0357605 25.2363 0.080651 25.1669 0.144609L22.7735 2.34895C22.0152 3.03988 21.0262 3.42285 20.0003 3.42285C18.9744 3.42285 17.9854 3.03988 17.227 2.34895L14.834 0.144609C14.7645 0.080651 14.6797 0.0357605 14.5877 0.0143067C14.4958 -0.00714703 14.3999 -0.00443328 14.3093 0.0221839C14.2187 0.0488011 14.1366 0.098415 14.0709 0.166197C14.0051 0.233979 13.9581 0.31762 13.9343 0.40898L13.1127 3.55705C12.8484 4.5484 12.2236 5.4054 11.3606 5.96028C10.4976 6.51515 9.45852 6.72794 8.44688 6.557L5.24193 5.99513C5.14879 5.97875 5.05299 5.9868 4.96389 6.0185C4.87479 6.0502 4.79543 6.10447 4.73357 6.176C4.6717 6.24753 4.62944 6.33388 4.61092 6.42662C4.5924 6.51936 4.59824 6.61531 4.62788 6.70512L5.6388 9.79882C5.95248 10.7757 5.89012 11.8344 5.46393 12.7677C5.03774 13.7009 4.27843 14.4414 3.33478 14.844L0.334828 16.105C0.247851 16.1416 0.171825 16.2001 0.114136 16.2748C0.0564469 16.3495 0.0190557 16.4378 0.0055948 16.5312C-0.00786609 16.6246 0.00306098 16.7199 0.0373145 16.8079C0.0715681 16.8958 0.127984 16.9734 0.20108 17.0331L2.72354 19.0883C3.51558 19.7405 4.03556 20.6649 4.18158 21.6804C4.32759 22.6959 4.08912 23.7294 3.5129 24.5783L1.67262 27.2582C1.6192 27.3361 1.58687 27.4265 1.57877 27.5206C1.57068 27.6147 1.5871 27.7093 1.62644 27.7952C1.66577 27.8811 1.72668 27.9553 1.80323 28.0107C1.87978 28.066 1.96936 28.1006 2.06324 28.111L5.2963 28.4763C6.31513 28.5968 7.25227 29.0933 7.92413 29.8686C8.59598 30.644 8.95414 31.6422 8.92843 32.6678L8.82968 35.9199C8.82674 36.0143 8.8483 36.1078 8.89225 36.1914C8.93621 36.275 9.00106 36.3457 9.08049 36.3968C9.15992 36.4478 9.25122 36.4774 9.3455 36.4827C9.43977 36.4879 9.5338 36.4687 9.61842 36.4268L12.5356 34.9862C13.4578 34.5368 14.5146 34.4478 15.499 34.7368C16.4834 35.0259 17.3244 35.672 17.8573 36.5487L19.5326 39.3377C19.5812 39.4186 19.6499 39.4855 19.7321 39.532C19.8142 39.5784 19.907 39.6029 20.0014 39.6029C20.0957 39.6029 20.1885 39.5784 20.2706 39.532C20.3528 39.4855 20.4215 39.4186 20.4701 39.3377L22.1454 36.5487C22.6782 35.6719 23.5192 35.0257 24.5036 34.7366C25.4881 34.4476 26.5449 34.5366 27.4672 34.9862L30.3843 36.4268C30.4689 36.4687 30.563 36.4879 30.6572 36.4827C30.7515 36.4774 30.8428 36.4478 30.9222 36.3968C31.0017 36.3457 31.0665 36.275 31.1105 36.1914C31.1544 36.1078 31.176 36.0143 31.173 35.9199L31.0743 32.6678C31.0485 31.6422 31.4067 30.6439 32.0785 29.8686C32.7504 29.0932 33.6876 28.5967 34.7064 28.4763L37.9376 28.111C38.0314 28.1004 38.1209 28.0658 38.1973 28.0104C38.2737 27.955 38.3345 27.8807 38.3738 27.7949C38.413 27.709 38.4293 27.6145 38.4212 27.5204C38.413 27.4264 38.3807 27.336 38.3273 27.2582L36.4861 24.5758C35.91 23.7268 35.6716 22.6933 35.8178 21.6777C35.964 20.6622 36.4842 19.7379 37.2764 19.0858Z"
                fill="black"
              />
            </svg>
            Summer Styles
          </span>
        </div>
        <div className="wrap-carousel wrap-sw-2">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            breakpoints={{
              1024: { slidesPerView: 4, spaceBetween: 30 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              640: { slidesPerView: 3, spaceBetween: 15 },
              0: { slidesPerView: 2, spaceBetween: 15 },
            }}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp274",
              nextEl: ".snbn274",
            }}
            pagination={{ clickable: true, el: ".spd274" }}
          >
            {products36.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="card-product">
                  <div className="card-product-wrapper rounded-0">
                    <Link
                      href={`/product-detail/${product.id}`}
                      className="product-img"
                    >
                      <Image
                        className="lazyload img-product"
                        data-src={product.imgSrc}
                        alt="image-product"
                        src={product.imgSrc}
                        width={360}
                        height={360}
                      />
                      <Image
                        className="lazyload img-hover"
                        data-src={product.imgHoverSrc}
                        alt="image-product"
                        src={product.imgHoverSrc}
                        width={360}
                        height={450}
                      />
                    </Link>
                    <div className="list-product-btn absolute-2">
                      <a
                        href="#quick_add"
                        onClick={() => setQuickAddItem(product.id)}
                        data-bs-toggle="modal"
                        className="box-icon bg_white quick-add tf-btn-loading"
                      >
                        <span className="icon icon-bag" />
                        <span className="tooltip">Quick Add</span>
                      </a>
                      <a
                        onClick={() => addToWishlist(product.id)}
                        className="box-icon bg_white wishlist btn-icon-action"
                      >
                        <span
                          className={`icon icon-heart ${
                            isAddedtoWishlist(product.id) ? "added" : ""
                          }`}
                        />
                        <span className="tooltip">
                          {isAddedtoWishlist(product.id)
                            ? "Already Wishlisted"
                            : "Add to Wishlist"}
                        </span>
                        <span className="icon icon-delete" />
                      </a>
                      <a
                        href="#compare"
                        data-bs-toggle="offcanvas"
                        aria-controls="offcanvasLeft"
                        onClick={() => addToCompareItem(product.id)}
                        className="box-icon bg_white compare btn-icon-action"
                      >
                        <span className="icon icon-compare" />
                        <span className="tooltip">
                          {" "}
                          {isAddedtoCompareItem(product.id)
                            ? "Already Compared"
                            : "Add to Compare"}
                        </span>
                        <span className="icon icon-check" />
                      </a>
                      <a
                        href="#quick_view"
                        onClick={() => setQuickViewItem(product)}
                        data-bs-toggle="modal"
                        className="box-icon bg_white quickview tf-btn-loading"
                      >
                        <span className="icon icon-view" />
                        <span className="tooltip">Quick View</span>
                      </a>
                    </div>
                  </div>
                  <div className="card-product-info">
                    <Link
                      href={`/product-detail/${product.id}`}
                      className="title link"
                    >
                      {product.title}
                    </Link>
                    <span className="price">${product.price.toFixed(2)}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-product box-icon w_46 round snbp274">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-product box-icon w_46 round snbn274">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-product justify-content-center spd274" />
        </div>
      </div>
    </section>
  );
}
