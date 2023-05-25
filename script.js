const gotos = Array.from(document.querySelectorAll("[data-action='goto']"))

gotos.forEach(x => {
    const targetId = x.getAttribute("data-target-id")

    x.addEventListener("click", () => {
        document.getElementById(targetId).scrollIntoView();
    })
})
