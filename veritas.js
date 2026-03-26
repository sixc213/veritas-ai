function startVeritas() {
  let popup = window.open(
    "verify.html",
    "VERITAS",
    "width=500,height=700"
  );

  window.addEventListener("message", function (event) {
    if (event.data.type === "VERITAS_RESULT") {
      console.log("Verification Result:", event.data);

      // send result to company website
      if (typeof window.onVeritasVerified === "function") {
        window.onVeritasVerified(event.data);
      }
    }
  });
}
