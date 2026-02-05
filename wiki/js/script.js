document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const tabId = button.getAttribute("data-tab");

            // Remove active state from all tabs and contents
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            // Activate selected tab
            button.classList.add("active");
            document.getElementById(tabId).classList.add("active");
        });
    });
});
