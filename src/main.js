import "./js/base";
import "./utils/testHMR";
if (module.hot) {
  module.hot.accept("./utils/testHMR.js", () => {
    console.log("testHMR更新了");
  });
}
