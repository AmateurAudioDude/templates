// Native popup window
function popupMethod(selector, title, contentHtml) {
    const $popup = $(selector);
    const $header = $popup.find(".popup-header");
    const $title = $header.find("p.color-4");
    if ($title.length && !$title.hasClass("popup-title")) $title.addClass("popup-title");
    $popup.find(".popup-title").text(title);
    $popup.find(".popup-content").html(contentHtml);
    togglePopup(selector);
}



const popupId = "#popup-panel-mobile-settings";
const newTitle = `Title`;
const newContent = `<p style="text-align: center;">Text</p>`;
const formattedContent = newContent.replace(/\n/g, '<br>');
popupMethod(popupId, newTitle, formattedContent);
