const axios = require("axios");

axios
  .get("https://httpbin.org/get", { params: { name: "why" } })
  .catch((err) => {
    console.log("err", err);
  });

// DefinePlugin
console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);
console.log(commonText);

import { createApp } from "vue";
import Hello from "@/vue/hello.vue";
createApp(Hello).mount("#app");

// js
import { sum } from "../utils/util";
const msg = "msssage";
console.log(sum(msg.length, 10));
console.log(sum(10, 20));
console.log(msg);

// css
import "../css/base.css";
const divE = document.createElement("div");
divE.textContent = "css-loader~";
divE.classList.add("content");
document.body.append(divE);

// less
import "../less/base.less";
const divE2 = document.createElement("div");
divE2.textContent = "less-loader~";
divE2.classList.add("title");
document.body.append(divE2);

// img
import starImg from "../img/star.jpg";
const imgE = document.createElement("img");
imgE.src = starImg;
imgE.style.width = "200px";
document.body.append(imgE);

// background-img
import "../css/bg.css";
const divE3 = document.createElement("div");
divE3.classList.add("bg");
divE3.style.width = "400px";
divE3.style.height = "200px";
document.body.append(divE3);

// font
import "../font/iconfont.css";
const iE = document.createElement("i");
iE.className = "iconfont icon-caps-lock";
document.body.appendChild(iE);

// txt
import txt from "../txt/base.txt";
const txtE = document.createElement("div");
txtE.textContent = txt;
document.body.appendChild(txtE);
