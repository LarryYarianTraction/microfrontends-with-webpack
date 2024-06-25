// Here, we are importing the remote module
import("remote/utils")
  .then(({ stringToArray }) => {
    // Add calculate average to window so that it can be called from HTML
    window.calculateAverage = function () {
      const str = document.getElementById("input").value;
      // Use external function to convert string to array
      const arr = stringToArray(str);
      const average = arr.reduce((total, num) => total + num, 0) / arr.length;

      document.getElementById("result").innerText = average;
    };
  })
