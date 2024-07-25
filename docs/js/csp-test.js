const e = {
    "http://localhost:3000/checkout.html": "v0"
}[document.location.protocol + "//" + document.location.host + document.location.pathname];
if (e) {
    const o = {
        v0: "'self' 'unsafe-inline' 'unsafe-eval' http://*.bootstrapcdn.com http://*.cloudflare.com http://*.googleapis.com http://*.gstatic.com http://*.instagram.com http://*.pokemon.com http://*.reflectiz.com http://*.reflectiz.net http://*.shopify.com http://*.wicar.org ws://*.bootstrapcdn.com ws://*.cloudflare.com ws://*.googleapis.com ws://*.gstatic.com ws://*.instagram.com ws://*.pokemon.com ws://*.reflectiz.com ws://*.reflectiz.net ws://*.shopify.com ws://*.wicar.org"
    }[e]
      , c = `default-src * 'unsafe-inline' 'unsafe-eval' data:; script-src ${o} ;connect-src ${o}; img-src * data: blob: 'unsafe-inline' ; frame-src *; style-src * 'unsafe-inline';`;
    t = document.createElement("meta"),
    t.setAttribute("http-equiv", "Content-Security-Policy"),
    t.setAttribute("content", c),
    document.head.appendChild(t)
}
