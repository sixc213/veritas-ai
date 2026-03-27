(function () {

  function openVeritas() {

    let popup = window.open(
      "https://sixc213.github.io/veritas-ai/index.html",
      "VERITAS Verification",
      "width=500,height=700"
    );

    window.addEventListener("message", function (event) {
      if (event.data.type === "VERITAS_RESULT") {

        // Send result back to the company site
        if (window.VeritasCallback) {
          window.VeritasCallback(event.data.payload);
        }

      }
    });

  }

  // Expose to global
  window.VeritasStart = openVeritas;

})();
