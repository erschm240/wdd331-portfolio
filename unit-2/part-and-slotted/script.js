customElements.define(
    "focus-card",
    class extends HTMLElement{
        constructor() {
            super();

            let template = document.getElementById("focus-card");
            let templateContent = template.content;

            const focusCard = this.attachShadow({ mode: "open" });
            focusCard.appendChild(document.importNode(templateContent, true));
    }
}
);