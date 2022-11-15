chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  const title = document.querySelector("#title");
  title.innerHTML = tabs[0].title;
});
