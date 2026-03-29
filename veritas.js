(function () {

  function getKeyFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("key");
  }

  async function isValidKey(key) {
    const res = await fetch(
      "https://veritas-egz60rz4j-sixc213s-projects.vercel.app/api/verify/check-key",
      {
        headers: { "x-api-key": key }
      }
    );
    const data = await res.json();
    return data.valid;
  }

  async function openVeritas() {

    const key = getKeyFromURL();

    const valid = await isValidKey(key);

    if (!valid) {
      alert("Invalid or unpaid VERITAS API Key");
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
