p(location.hash)

const Hash = location.hash
if (!Hash) {
    p("No hash found")
    location.hash = "#/accounts"
    location.reload()
}

window.addEventListener(
    "load",
    async function() {
        const Frame = document.getElementById("mainframe")
        var Path = `/pages${Hash.slice(1)}`
        p(Path)
        Frame.src = Path
    }
)