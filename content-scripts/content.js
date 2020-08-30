const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    addButton()
  });
});

const config = { attributes: true, childList: true, characterData: true };
const targets = [...document.getElementsByClassName("EcJQs"), ...document.getElementsByClassName("eLAPa")]

targets.forEach( it => {
  observer.observe(it, config)
})

function addButton() {
  const elements = document.getElementsByClassName("KL4Bh")
  const iterable = [...elements]

  iterable.forEach((item, index) => {
    const div = document.createElement("div")
    div.className = `my-content ${index}`

    const downloadButton = document.createElement("button")
    downloadButton.innerText = "Download"
    downloadButton.onclick = () => {
      const [img] = item.getElementsByTagName("img")

      chrome.runtime.sendMessage({
        type: "download",
        url: img.src,
      })
    }

    div.appendChild(downloadButton)
    item.appendChild(div)

  })
}

addButton()



