document.getElementById("start").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "start" }, response => {
    document.getElementById("status").innerText = "Durum: " + response.status;
  });
});

document.getElementById("stop").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "stop" }, response => {
    document.getElementById("status").innerText = "Durum: " + response.status;
  });
});