import React from "react";

import waveTop from "../../../assets/images/wave-haikei1.svg";
import waveBot from "../../../assets/images/wave-haikei2.svg";

import "./divider.css";

const Divider = () => {
  return (
    <div className="w-screen">
      <div className="custom-shape-divider-bottom-1673885300">
        <svg
          data-name="Layer 1"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
            fill="white"
          ></path>
        </svg>
      </div>
      {/* <svg id="visual" viewBox="0 0 2400 400" width="2400" height="400">
        <path
          d="M0 326L16 322.5C32 319 64 312 96 302.2C128 292.3 160 279.7 192 281.7C224 283.7 256 300.3 288 320.3C320 340.3 352 363.7 384 362.3C416 361 448 335 480 333.7C512 332.3 544 355.7 576 346.3C608 337 640 295 672 281C704 267 736 281 768 302.2C800 323.3 832 351.7 864 352.2C896 352.7 928 325.3 960 318.7C992 312 1024 326 1056 332.8C1088 339.7 1120 339.3 1152 335.7C1184 332 1216 325 1248 331.8C1280 338.7 1312 359.3 1344 349C1376 338.7 1408 297.3 1440 298.8C1472 300.3 1504 344.7 1536 348.7C1568 352.7 1600 316.3 1632 297.7C1664 279 1696 278 1728 280.5C1760 283 1792 289 1824 302.5C1856 316 1888 337 1920 337C1952 337 1984 316 2016 303.8C2048 291.7 2080 288.3 2112 303.8C2144 319.3 2176 353.7 2208 365.2C2240 376.7 2272 365.3 2304 349.7C2336 334 2368 314 2384 304L2400 294L2400 401L2384 401C2368 401 2336 401 2304 401C2272 401 2240 401 2208 401C2176 401 2144 401 2112 401C2080 401 2048 401 2016 401C1984 401 1952 401 1920 401C1888 401 1856 401 1824 401C1792 401 1760 401 1728 401C1696 401 1664 401 1632 401C1600 401 1568 401 1536 401C1504 401 1472 401 1440 401C1408 401 1376 401 1344 401C1312 401 1280 401 1248 401C1216 401 1184 401 1152 401C1120 401 1088 401 1056 401C1024 401 992 401 960 401C928 401 896 401 864 401C832 401 800 401 768 401C736 401 704 401 672 401C640 401 608 401 576 401C544 401 512 401 480 401C448 401 416 401 384 401C352 401 320 401 288 401C256 401 224 401 192 401C160 401 128 401 96 401C64 401 32 401 16 401L0 401Z"
          fill="#FF6F61"
          stroke-linecap="round"
          stroke-linejoin="miter"
        ></path>
      </svg> */}
      {/* <svg id="visual" viewBox="0 0 2400 122.63">
        <path
          d="M0 72L16 75.5C32 79 64 86 96 95.8C128 105.7 160 118.3 192 116.3C224 114.3 256 97.7 288 77.7C320 57.7 352 34.3 384 35.7C416 37 448 63 480 64.3C512 65.7 544 42.3 576 51.7C608 61 640 103 672 117C704 131 736 117 768 95.8C800 74.7 832 46.3 864 45.8C896 45.3 928 72.7 960 79.3C992 86 1024 72 1056 65.2C1088 58.3 1120 58.7 1152 62.3C1184 66 1216 73 1248 66.2C1280 59.3 1312 38.7 1344 49C1376 59.3 1408 100.7 1440 99.2C1472 97.7 1504 53.3 1536 49.3C1568 45.3 1600 81.7 1632 100.3C1664 119 1696 120 1728 117.5C1760 115 1792 109 1824 95.5C1856 82 1888 61 1920 61C1952 61 1984 82 2016 94.2C2048 106.3 2080 109.7 2112 94.2C2144 78.7 2176 44.3 2208 32.8C2240 21.3 2272 32.7 2304 48.3C2336 64 2368 84 2384 94L2400 104L2400 0L2384 0C2368 0 2336 0 2304 0C2272 0 2240 0 2208 0C2176 0 2144 0 2112 0C2080 0 2048 0 2016 0C1984 0 1952 0 1920 0C1888 0 1856 0 1824 0C1792 0 1760 0 1728 0C1696 0 1664 0 1632 0C1600 0 1568 0 1536 0C1504 0 1472 0 1440 0C1408 0 1376 0 1344 0C1312 0 1280 0 1248 0C1216 0 1184 0 1152 0C1120 0 1088 0 1056 0C1024 0 992 0 960 0C928 0 896 0 864 0C832 0 800 0 768 0C736 0 704 0 672 0C640 0 608 0 576 0C544 0 512 0 480 0C448 0 416 0 384 0C352 0 320 0 288 0C256 0 224 0 192 0C160 0 128 0 96 0C64 0 32 0 16 0L0 0Z"
          fill="#FFE413"
          stroke-linecap="round"
          stroke-linejoin="miter"
        ></path>
      </svg> */}

      {/* <svg id="visual" viewBox="0 0 2400 400" width="2400" height="400">
        <path
          d="M0 72L16 75.5C32 79 64 86 96 95.8C128 105.7 160 118.3 192 116.3C224 114.3 256 97.7 288 77.7C320 57.7 352 34.3 384 35.7C416 37 448 63 480 64.3C512 65.7 544 42.3 576 51.7C608 61 640 103 672 117C704 131 736 117 768 95.8C800 74.7 832 46.3 864 45.8C896 45.3 928 72.7 960 79.3C992 86 1024 72 1056 65.2C1088 58.3 1120 58.7 1152 62.3C1184 66 1216 73 1248 66.2C1280 59.3 1312 38.7 1344 49C1376 59.3 1408 100.7 1440 99.2C1472 97.7 1504 53.3 1536 49.3C1568 45.3 1600 81.7 1632 100.3C1664 119 1696 120 1728 117.5C1760 115 1792 109 1824 95.5C1856 82 1888 61 1920 61C1952 61 1984 82 2016 94.2C2048 106.3 2080 109.7 2112 94.2C2144 78.7 2176 44.3 2208 32.8C2240 21.3 2272 32.7 2304 48.3C2336 64 2368 84 2384 94L2400 104L2400 0L2384 0C2368 0 2336 0 2304 0C2272 0 2240 0 2208 0C2176 0 2144 0 2112 0C2080 0 2048 0 2016 0C1984 0 1952 0 1920 0C1888 0 1856 0 1824 0C1792 0 1760 0 1728 0C1696 0 1664 0 1632 0C1600 0 1568 0 1536 0C1504 0 1472 0 1440 0C1408 0 1376 0 1344 0C1312 0 1280 0 1248 0C1216 0 1184 0 1152 0C1120 0 1088 0 1056 0C1024 0 992 0 960 0C928 0 896 0 864 0C832 0 800 0 768 0C736 0 704 0 672 0C640 0 608 0 576 0C544 0 512 0 480 0C448 0 416 0 384 0C352 0 320 0 288 0C256 0 224 0 192 0C160 0 128 0 96 0C64 0 32 0 16 0L0 0Z"
          fill="#FF6F61"
          stroke-linecap="round"
          stroke-linejoin="miter"
        ></path>
      </svg> */}
    </div>
  );
};

export default Divider;

{
  /* <svg id="visual" viewBox="0 275.37 2400 125.63">
<path
  d="M0 326L16 322.5C32 319 64 312 96 302.2C128 292.3 160 279.7 192 281.7C224 283.7 256 300.3 288 320.3C320 340.3 352 363.7 384 362.3C416 361 448 335 480 333.7C512 332.3 544 355.7 576 346.3C608 337 640 295 672 281C704 267 736 281 768 302.2C800 323.3 832 351.7 864 352.2C896 352.7 928 325.3 960 318.7C992 312 1024 326 1056 332.8C1088 339.7 1120 339.3 1152 335.7C1184 332 1216 325 1248 331.8C1280 338.7 1312 359.3 1344 349C1376 338.7 1408 297.3 1440 298.8C1472 300.3 1504 344.7 1536 348.7C1568 352.7 1600 316.3 1632 297.7C1664 279 1696 278 1728 280.5C1760 283 1792 289 1824 302.5C1856 316 1888 337 1920 337C1952 337 1984 316 2016 303.8C2048 291.7 2080 288.3 2112 303.8C2144 319.3 2176 353.7 2208 365.2C2240 376.7 2272 365.3 2304 349.7C2336 334 2368 314 2384 304L2400 294L2400 401L2384 401C2368 401 2336 401 2304 401C2272 401 2240 401 2208 401C2176 401 2144 401 2112 401C2080 401 2048 401 2016 401C1984 401 1952 401 1920 401C1888 401 1856 401 1824 401C1792 401 1760 401 1728 401C1696 401 1664 401 1632 401C1600 401 1568 401 1536 401C1504 401 1472 401 1440 401C1408 401 1376 401 1344 401C1312 401 1280 401 1248 401C1216 401 1184 401 1152 401C1120 401 1088 401 1056 401C1024 401 992 401 960 401C928 401 896 401 864 401C832 401 800 401 768 401C736 401 704 401 672 401C640 401 608 401 576 401C544 401 512 401 480 401C448 401 416 401 384 401C352 401 320 401 288 401C256 401 224 401 192 401C160 401 128 401 96 401C64 401 32 401 16 401L0 401Z"
  fill="#EA6D7C"
  stroke-linecap="round"
  stroke-linejoin="miter"
></path>
</svg>
<svg id="visual" viewBox="0 0 2400 120">
<path
  d="M0 108L12.8 101.2C25.7 94.3 51.3 80.7 77.2 78.3C103 76 129 85 154.8 83.5C180.7 82 206.3 70 232.2 64.8C258 59.7 284 61.3 309.8 51.8C335.7 42.3 361.3 21.7 387.2 30.7C413 39.7 439 78.3 464.8 82C490.7 85.7 516.3 54.3 542 50C567.7 45.7 593.3 68.3 619.2 75C645 81.7 671 72.3 696.8 58.5C722.7 44.7 748.3 26.3 774.2 19.5C800 12.7 826 17.3 851.8 28.3C877.7 39.3 903.3 56.7 929 55.3C954.7 54 980.3 34 1006.2 38C1032 42 1058 70 1083.8 87.2C1109.7 104.3 1135.3 110.7 1161.2 110.5C1187 110.3 1213 103.7 1238.8 92.7C1264.7 81.7 1290.3 66.3 1316.2 63.7C1342 61 1368 71 1393.8 80.5C1419.7 90 1445.3 99 1471 100.7C1496.7 102.3 1522.3 96.7 1548.2 83.3C1574 70 1600 49 1625.8 49.2C1651.7 49.3 1677.3 70.7 1703.2 70.2C1729 69.7 1755 47.3 1780.8 45C1806.7 42.7 1832.3 60.3 1858 69.2C1883.7 78 1909.3 78 1935.2 72C1961 66 1987 54 2012.8 57.7C2038.7 61.3 2064.3 80.7 2090.2 91C2116 101.3 2142 102.7 2167.8 93.7C2193.7 84.7 2219.3 65.3 2245.2 66.3C2271 67.3 2297 88.7 2322.8 99.8C2348.7 111 2374.3 112 2387.2 112.5L2400 113L2400 0L2387.2 0C2374.3 0 2348.7 0 2322.8 0C2297 0 2271 0 2245.2 0C2219.3 0 2193.7 0 2167.8 0C2142 0 2116 0 2090.2 0C2064.3 0 2038.7 0 2012.8 0C1987 0 1961 0 1935.2 0C1909.3 0 1883.7 0 1858 0C1832.3 0 1806.7 0 1780.8 0C1755 0 1729 0 1703.2 0C1677.3 0 1651.7 0 1625.8 0C1600 0 1574 0 1548.2 0C1522.3 0 1496.7 0 1471 0C1445.3 0 1419.7 0 1393.8 0C1368 0 1342 0 1316.2 0C1290.3 0 1264.7 0 1238.8 0C1213 0 1187 0 1161.2 0C1135.3 0 1109.7 0 1083.8 0C1058 0 1032 0 1006.2 0C980.3 0 954.7 0 929 0C903.3 0 877.7 0 851.8 0C826 0 800 0 774.2 0C748.3 0 722.7 0 696.8 0C671 0 645 0 619.2 0C593.3 0 567.7 0 542 0C516.3 0 490.7 0 464.8 0C439 0 413 0 387.2 0C361.3 0 335.7 0 309.8 0C284 0 258 0 232.2 0C206.3 0 180.7 0 154.8 0C129 0 103 0 77.2 0C51.3 0 25.7 0 12.8 0L0 0Z"
  fill="#EA6D7C"
  stroke-linecap="round"
  stroke-linejoin="miter"
></path>
</svg> */
}