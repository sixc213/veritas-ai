(function () {

  function getKeyFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("key");
  }

  function isValidKey(key) {
    return VERITAS_KEYS.includes(key);
  }

  function openVeritas() {

    const key = getKeyFromURL();

    if (!isValidKey(key)) {
      alert("Invalid VERITAS API Key");
      return;
    }

    let popup = window.open(
      "https://sixc213.github.io/veritas-ai/index.html",
      "VERITAS Verification",
      "width=500,height=700"
    );

    window.addEventListener("message", function (event) {
      if (event.data.type === "VERITAS_RESULT") {

        if (window.VeritasCallback) {
          window.VeritasCallback(event.data.payload);
        }

      }
    });

  }

  window.VeritasStart = openVeritas;

})();
