p(location.hash)

if (!location.hash) {
    p("No hash found")
    location.hash = "#/accounts"
    location.reload()
}

async function ReloadPage(Hash) {
    const Frame = document.getElementById("mainframe")
    var Path = `${location.protocol}///${location.host}/pages${Hash.slice(1)}`
    Frame.src = Path
    p(Path)
}

window.addEventListener(
    "load",
    async function() {
        await ReloadPage(location.hash)
    }
)

addEventListener(
    "hashchange",
    async function(E) {
        ReloadPage(new URL(E.newURL).hash)
    },
    true
)