/**
 * Simple Example to verify cross-fetch implementations
 */

// const { fetch } = require("cross-fetch");
const fetch = require("isomorphic-fetch");

fetch("https://httpbin.org/get")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
