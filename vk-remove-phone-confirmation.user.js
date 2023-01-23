// ==UserScript==
// @name         VK Remove phone confirmation dialog
// @version      0.2
// @description  Remove annoying phone confirmation dialog randomly blocking some VK pages (it has no close button anymore)
// @author       makise-homura
// @match        https://vk.com/*
// @grant        none
// ==/UserScript==

var e = document.getElementById('react_rootCheckValidationPhone');
if (e !== null)
{
    e.parentElement.removeChild(e);
}

var o = new MutationObserver((m) =>
{
    m.forEach(() =>
    {
        if (document.body.style.position == 'fixed')
        {
            document.body.style.position = '';
        }
    });
});

o.observe(document.body, {attributes: true, attributeFilter: ['style']});
