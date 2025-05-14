"use strict";
if (document.readyState === "loading") {
    addEventListener("DOMContentLoaded", initScript);
}
else {
    initScript();
}
function initScript() {
    console.log("Update payment button remover is active");
    // Initial check when the script loads
    removeUpdatePaymentButtons();
    // Set up a MutationObserver to watch for DOM changes
    const observer = new MutationObserver((mutations) => {
        // When DOM changes are detected, check for the buttons
        removeUpdatePaymentButtons();
    });
    // Start observing the document with the configured parameters
    observer.observe(document.body, {
        childList: true, // Watch for changes in the direct children
        subtree: true, // Watch for changes in all descendants
        attributes: false, // Don't need to watch for attribute changes
        characterData: false // Don't need to watch for text changes
    });
    function removeUpdatePaymentButtons() {
        const buttons = document.getElementsByTagName("button");
        for (let button of buttons) {
            if (button.classList.contains("!text-[#CE2416]")) {
                console.log("Found update payment button, removing...");
                const parentElement = button.parentElement;
                if (parentElement) {
                    parentElement.innerHTML = "";
                    parentElement.remove();
                    observer.disconnect();
                }
            }
        }
    }
}
