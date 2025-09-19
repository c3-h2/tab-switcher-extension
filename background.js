let running = false;
let intervalId = null;

function randomDelay() {
  // 30s - 180s
  return Math.floor(Math.random() * (180000 - 30000 + 1)) + 30000;
}

async function switchTab() {
  let tabs = await chrome.tabs.query({ currentWindow: true });
  if (tabs.length <= 1) return;

  // Random sekme seç
  let randomTab = tabs[Math.floor(Math.random() * tabs.length)];
  chrome.tabs.update(randomTab.id, { active: true });

  // Mouse hareketini tetikle
  chrome.scripting.executeScript({
    target: { tabId: randomTab.id },
    files: ["content.js"]
  });

  // Yeni random süre planla
  intervalId = setTimeout(switchTab, randomDelay());
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "start" && !running) {
    running = true;
    switchTab();
    sendResponse({ status: "started" });
  } else if (msg.action === "stop" && running) {
    running = false;
    clearTimeout(intervalId);
    sendResponse({ status: "stopped" });
  }
});