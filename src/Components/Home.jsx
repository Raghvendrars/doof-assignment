import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Home.css";

const Home = () => {
  const emailStyle = {
    color: "#A5A5A5",
    border: "none",
  };
  const passwordStyle = {
    color: "#A5A5A5",
    border: "none",
  };
  const linktext = {
    color: "#333333",
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col-12 col-xl-6 col-lg-6 col-sm-12">
            <div className="left-side">
              <div className="top-bubble-div">
                <div className="bubble-one"></div>
                <h3 className="doof-text">DOOF</h3>
                <h3 className="login-text">Login</h3>
              </div>
              <div className="login-div">
                <div className="login-form">
                  <form className="w-100 ">
                    <div class="mb-3">
                      <label
                        for="exampleInputEmail1"
                        class="form-label"
                        style={emailStyle}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        style={emailStyle}
                        placeholder="Email"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="mb-3">
                      <label
                        for="exampleInputPassword1"
                        class="form-label"
                        style={passwordStyle}
                      >
                        Password
                      </label>
                      <div className="frgt-pass">
                        <input
                          type="password"
                          style={passwordStyle}
                          placeholder="Password"
                          class="form-control"
                          id="exampleInputPassword1"
                        />
                        <h6 className="frgt-pass-text ml-3 mt-2">
                          <a href="#" className="" style={linktext}>
                            Forgot Password
                          </a>
                        </h6>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary mt-4 mb-4">
                      Login
                    </button>
                    <div className="mb-3">
                      <label class="form-check-label mt-2">
                        <a href="#" style={linktext}>
                          Don't have a account yet ?
                          <span className="fw-bold"> Signup</span>
                        </a>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-lg-6 col-sm-12">
            <div className="right-all">
              <div className="right-wrapper">
                <div className="big-bubble"></div>
                <div className="btn-class w-50">
                  <button class="btn btn-primary">Test</button>
                </div>
                <div className="title-text w-100">
                  <h1>Unlock your stuck revenue.</h1>
                  <h2>
                    We help you unlock the true potential connect with your
                    customers to understand the rights and wrongs with your
                    product.
                  </h2>
                </div>

                <div className="girl-svg">
                  <svg
                    width="470"
                    height="auto"
                    viewBox="0 0 538 374"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M107.193 374C166.394 374 214.386 370.358 214.386 365.866C214.386 361.373 166.394 357.731 107.193 357.731C47.9919 357.731 0 361.373 0 365.866C0 370.358 47.9919 374 107.193 374Z"
                      fill="#F7D832"
                    />
                    <path
                      d="M81.9363 82.984C100.591 75.0562 123.826 80.0792 146.517 83.5653C146.728 79.3436 149.288 74.2055 146.607 71.2602C143.35 67.6818 143.649 63.9221 145.609 60.1406C150.622 50.4708 143.441 40.1817 136.19 31.6264C134.556 29.7024 132.49 28.1907 130.161 27.2141C127.833 26.2375 125.306 25.8234 122.787 26.0057L109.356 26.9642C106.087 27.1975 102.968 28.4225 100.416 30.4754C97.8632 32.5283 95.9991 35.3111 95.0727 38.4514C91.8656 42.8096 90.149 47.1556 91.2298 51.479C86.426 54.7591 85.6189 58.7185 87.7775 63.182C89.608 65.9924 89.5885 68.728 87.6943 71.388C85.2066 74.7792 83.3013 78.5605 82.0564 82.5769L81.9363 82.984Z"
                      fill="#2F2E41"
                    />
                    <path
                      d="M525.251 323.317H145.044C141.663 323.317 138.42 321.975 136.029 319.586C133.638 317.197 132.295 313.957 132.295 310.579C270.12 294.575 405.355 294.575 538 310.579C538 313.957 536.657 317.197 534.266 319.586C531.875 321.975 528.633 323.317 525.251 323.317Z"
                      fill="#2F2E41"
                    />
                    <path
                      d="M538 311.328L132.295 310.579L179.315 231.529L179.54 231.155V56.9383C179.54 54.8237 179.956 52.7297 180.766 50.776C181.576 48.8223 182.763 47.0472 184.26 45.5519C185.756 44.0567 187.533 42.8706 189.488 42.0614C191.443 41.2523 193.539 40.8359 195.656 40.8361H472.39C474.506 40.8359 476.602 41.2523 478.557 42.0614C480.513 42.8706 482.289 44.0567 483.786 45.5519C485.282 47.0472 486.469 48.8223 487.279 50.776C488.089 52.7297 488.506 54.8237 488.505 56.9383V232.354L538 311.328Z"
                      fill="#3F3D56"
                    />
                    <path
                      d="M195.288 52.0754C193.896 52.077 192.562 52.63 191.578 53.6133C190.594 54.5966 190.04 55.9298 190.039 57.3204V216.169C190.04 217.56 190.594 218.893 191.578 219.876C192.562 220.859 193.896 221.412 195.288 221.414H475.007C476.399 221.412 477.733 220.859 478.717 219.876C479.701 218.893 480.255 217.56 480.256 216.169V57.3204C480.255 55.9298 479.701 54.5967 478.717 53.6134C477.733 52.6301 476.399 52.077 475.007 52.0754H195.288Z"
                      fill="white"
                    />
                    <path
                      d="M196.46 242.394C196.03 242.395 195.609 242.518 195.247 242.75C194.885 242.982 194.597 243.312 194.416 243.702L179.928 275.172C179.77 275.515 179.701 275.892 179.727 276.268C179.753 276.644 179.874 277.007 180.077 277.325C180.281 277.642 180.561 277.903 180.892 278.084C181.223 278.265 181.594 278.36 181.972 278.36H486.652C487.035 278.36 487.413 278.262 487.747 278.075C488.082 277.889 488.364 277.62 488.566 277.294C488.767 276.968 488.882 276.596 488.899 276.213C488.916 275.83 488.835 275.449 488.664 275.107L472.915 243.637C472.73 243.262 472.443 242.948 472.087 242.728C471.732 242.509 471.322 242.393 470.904 242.394H196.46Z"
                      fill="#2F2E41"
                    />
                    <path
                      d="M334.023 49.4529C335.886 49.4529 337.397 47.9433 337.397 46.0811C337.397 44.2189 335.886 42.7093 334.023 42.7093C332.159 42.7093 330.648 44.2189 330.648 46.0811C330.648 47.9433 332.159 49.4529 334.023 49.4529Z"
                      fill="white"
                    />
                    <path
                      d="M304.075 284.354C303.581 284.355 303.1 284.518 302.707 284.818C302.315 285.119 302.032 285.54 301.903 286.017L298.269 299.504C298.179 299.838 298.167 300.187 298.234 300.525C298.301 300.864 298.445 301.182 298.655 301.456C298.865 301.73 299.136 301.952 299.445 302.105C299.755 302.258 300.096 302.337 300.441 302.337H369.556C369.915 302.337 370.268 302.251 370.587 302.087C370.906 301.923 371.18 301.685 371.388 301.393C371.596 301.101 371.731 300.763 371.782 300.409C371.833 300.054 371.799 299.692 371.681 299.354L367.009 285.867C366.856 285.425 366.569 285.042 366.188 284.771C365.807 284.5 365.351 284.354 364.883 284.354H304.075Z"
                      fill="#2F2E41"
                    />
                    <path
                      d="M488.505 228.532V231.529H179.315L179.547 231.155V228.532H488.505Z"
                      fill="#2F2E41"
                    />
                    <path
                      d="M479.881 104.9C508.873 104.9 532.376 81.4174 532.376 52.45C532.376 23.4827 508.873 0 479.881 0C450.89 0 427.387 23.4827 427.387 52.45C427.387 81.4174 450.89 104.9 479.881 104.9Z"
                      fill="#F7D832"
                    />
                    <path
                      d="M501.629 75.3033H458.134C457.339 75.3025 456.576 74.9865 456.014 74.4246C455.451 73.8627 455.135 73.1008 455.134 72.3061V46.0811C455.135 45.2865 455.451 44.5246 456.014 43.9627C456.576 43.4008 457.339 43.0848 458.134 43.084H501.629C502.424 43.0848 503.187 43.4008 503.749 43.9627C504.312 44.5246 504.628 45.2865 504.629 46.0811V72.3061C504.628 73.1008 504.312 73.8627 503.749 74.4246C503.187 74.9865 502.424 75.3025 501.629 75.3033ZM458.134 46.0811V72.3061H501.631L501.629 46.0811L458.134 46.0811Z"
                      fill="white"
                    />
                    <path
                      d="M493.38 46.0811H466.383V34.0925C466.383 25.4092 472.06 19.1068 479.881 19.1068C487.703 19.1068 493.38 25.4092 493.38 34.0925L493.38 46.0811ZM469.383 43.084H490.38V34.0925C490.38 27.0339 486.063 22.104 479.881 22.104C473.7 22.104 469.383 27.0339 469.383 34.0925L469.383 43.084Z"
                      fill="white"
                    />
                    <path
                      d="M479.882 61.4415C481.538 61.4415 482.881 60.0996 482.881 58.4443C482.881 56.789 481.538 55.4472 479.882 55.4472C478.225 55.4472 476.882 56.789 476.882 58.4443C476.882 60.0996 478.225 61.4415 479.882 61.4415Z"
                      fill="white"
                    />
                    <path
                      d="M443.236 167.534H227.059C225.998 167.533 224.98 167.111 224.23 166.361C223.479 165.611 223.057 164.595 223.056 163.534V109.955C223.057 108.895 223.479 107.878 224.23 107.128C224.98 106.378 225.998 105.956 227.059 105.955H443.236C444.297 105.956 445.315 106.378 446.065 107.128C446.816 107.878 447.238 108.895 447.239 109.955V163.534C447.238 164.595 446.816 165.611 446.065 166.361C445.315 167.111 444.297 167.533 443.236 167.534ZM227.059 107.555C226.422 107.556 225.812 107.809 225.361 108.259C224.911 108.709 224.658 109.319 224.657 109.955V163.534C224.658 164.171 224.911 164.781 225.361 165.231C225.812 165.68 226.422 165.934 227.059 165.934H443.236C443.873 165.934 444.483 165.68 444.934 165.231C445.384 164.781 445.637 164.171 445.638 163.534V109.955C445.637 109.319 445.384 108.709 444.934 108.259C444.483 107.809 443.873 107.556 443.236 107.555L227.059 107.555Z"
                      fill="#E6E6E6"
                    />
                    <path
                      d="M260.649 150.982C269.655 150.982 276.956 143.688 276.956 134.689C276.956 125.69 269.655 118.395 260.649 118.395C251.642 118.395 244.341 125.69 244.341 134.689C244.341 143.688 251.642 150.982 260.649 150.982Z"
                      fill="#E6E6E6"
                    />
                    <path
                      d="M298.311 123.827C297.953 123.826 297.599 123.896 297.269 124.032C296.939 124.168 296.639 124.368 296.386 124.62C296.133 124.873 295.933 125.172 295.796 125.502C295.659 125.832 295.588 126.185 295.588 126.542C295.588 126.899 295.659 127.253 295.796 127.582C295.933 127.912 296.133 128.212 296.386 128.464C296.639 128.716 296.939 128.916 297.269 129.052C297.599 129.188 297.953 129.258 298.311 129.258H426.438C427.159 129.258 427.851 128.972 428.36 128.462C428.87 127.953 429.156 127.262 429.156 126.542C429.156 125.822 428.87 125.131 428.36 124.622C427.851 124.113 427.159 123.827 426.438 123.827H298.311Z"
                      fill="#E6E6E6"
                    />
                    <path
                      d="M298.31 140.12C297.59 140.12 296.898 140.406 296.389 140.915C295.879 141.425 295.593 142.115 295.593 142.836C295.593 143.556 295.879 144.247 296.389 144.756C296.898 145.265 297.59 145.551 298.31 145.551H353.444C354.165 145.551 354.856 145.265 355.366 144.756C355.876 144.247 356.162 143.556 356.162 142.836C356.162 142.115 355.876 141.425 355.366 140.915C354.856 140.406 354.165 140.12 353.444 140.12H298.31Z"
                      fill="#E6E6E6"
                    />
                    <path
                      d="M178.783 141.219L138.821 162.446L138.315 144.757C151.358 142.581 163.768 138.793 175.242 132.626L179.421 122.309C179.877 121.185 180.617 120.198 181.569 119.446C182.522 118.694 183.653 118.203 184.853 118.02C186.053 117.836 187.28 117.968 188.414 118.402C189.547 118.836 190.548 119.557 191.319 120.494C192.446 121.865 193.01 123.613 192.895 125.384C192.781 127.155 191.997 128.816 190.702 130.031L178.783 141.219Z"
                      fill="#FFB8B8"
                    />
                    <path
                      d="M81.1397 263.78C80.8482 262.712 80.7863 261.594 80.9581 260.5C81.1299 259.406 81.5315 258.361 82.1366 257.433L90.9151 243.972C92.9914 240.788 96.1773 238.489 99.8548 237.519C103.532 236.55 107.439 236.98 110.817 238.726C107.128 245.001 107.642 250.505 112.091 255.289C105.184 258.658 98.8008 263.006 93.1383 268.199C92.1046 268.903 90.9174 269.35 89.6757 269.503C88.434 269.656 87.1737 269.51 85.9998 269.077C84.8259 268.645 83.7724 267.939 82.927 267.017C82.0816 266.096 81.4689 264.986 81.1397 263.78Z"
                      fill="#2F2E41"
                    />
                    <path
                      d="M180.603 246.18C179.275 248.392 177.399 250.225 175.158 251.505C172.916 252.785 170.382 253.467 167.8 253.486L109.482 253.928L106.953 239.271L132.751 231.689L110.999 215.01L134.774 187.212L177.957 227.426C180.48 229.776 182.12 232.921 182.602 236.335C183.084 239.748 182.378 243.224 180.603 246.18Z"
                      fill="#2F2E41"
                    />
                    <path
                      d="M100.376 346.42H86.7186C74.4558 262.434 61.9734 178.213 98.8589 146.778L142.362 153.854L136.798 190.75L112.517 218.548L100.376 346.42Z"
                      fill="#2F2E41"
                    />
                    <path
                      d="M112.382 365.445C111.313 365.737 110.194 365.799 109.1 365.627C108.005 365.456 106.959 365.054 106.03 364.45L91.2005 362.458C88.0139 360.384 85.712 357.201 84.7416 353.526C83.7712 349.852 84.2014 345.949 85.9487 342.573C92.2288 346.259 97.7379 345.745 102.525 341.299C105.908 348.124 111.481 347.707 116.804 353.457C117.509 354.49 117.956 355.676 118.109 356.916C118.263 358.157 118.117 359.416 117.684 360.589C117.252 361.762 116.545 362.815 115.623 363.66C114.7 364.504 113.589 365.117 112.382 365.445Z"
                      fill="#2F2E41"
                    />
                    <path
                      d="M132.751 90.6763L107.458 84.6113C111.659 76.0201 112.005 66.4606 109.988 56.3076L127.186 55.8022C127.725 68.4277 129.356 80.2231 132.751 90.6763Z"
                      fill="#FFB8B8"
                    />
                    <path
                      d="M139.702 169.072C121.29 181.608 108.281 169.501 98.3531 150.822C99.7326 139.392 97.4989 125.713 93.362 110.85C91.5222 104.295 92.2091 97.2883 95.287 91.2141C98.365 85.1399 103.61 80.4395 109.988 78.0408L131.739 87.1384C150.208 102.181 153.844 118.474 146.914 135.659L139.702 169.072Z"
                      fill="#F7D832"
                    />
                    <path
                      d="M86.7186 103.312L66.4847 113.926L102.4 135.154L107.397 147.47C107.731 148.292 107.893 149.173 107.875 150.06C107.856 150.947 107.657 151.821 107.29 152.628C106.922 153.436 106.394 154.16 105.737 154.757C105.08 155.354 104.309 155.811 103.47 156.1C102.516 156.429 101.498 156.532 100.497 156.402C99.4967 156.273 98.5395 155.913 97.7009 155.352C96.8623 154.791 96.1651 154.044 95.6639 153.169C95.1626 152.294 94.8709 151.314 94.8117 150.308L94.3063 141.724L48.6585 126.673C47.1205 126.166 45.7182 125.316 44.5578 124.187C43.3973 123.058 42.5091 121.68 41.9606 120.158C41.1609 117.938 41.1202 115.517 41.8448 113.272C42.5694 111.027 44.0184 109.085 45.9651 107.751L82.6718 82.5896L86.7186 103.312Z"
                      fill="#FFB8B8"
                    />
                    <path
                      d="M106.952 105.334C98.5137 101.638 90.8401 105.652 81.1543 108.872L79.6367 82.0841C89.2543 76.9624 98.424 75.5815 106.952 79.5571L106.952 105.334Z"
                      fill="#F7D832"
                    />
                    <path
                      d="M117.047 69.0709C125.966 69.0709 133.195 61.8472 133.195 52.9363C133.195 44.0253 125.966 36.8016 117.047 36.8016C108.129 36.8016 100.899 44.0253 100.899 52.9363C100.899 61.8472 108.129 69.0709 117.047 69.0709Z"
                      fill="#FFB8B8"
                    />
                    <path
                      d="M136.366 50.9005C120.378 52.4651 108.195 49.8524 100.409 42.4135V36.4228H135.009L136.366 50.9005Z"
                      fill="#2F2E41"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="row">
            <div className="col-12 col-sm-12 ">
              <div className="footer-bubble"></div>
              <div className="footer-texts">
                <h6>
                  <a href="#" style={linktext}>
                    Terms of Service
                  </a>
                </h6>
                <h6 className="ml-4">
                  <a href="#" style={linktext}>
                    Privacy Policy
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
