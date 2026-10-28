const accordeonFunction = (id, arr) => {
    let accordeon = document.querySelector(id);
    let htmlContent = "";
    for (let i = 0; i < arr.length; i++) {
        let currentProject = arr[i];
        htmlContent += `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}"
                aria-expanded="true" aria-controls="collapse${i}">
                ${currentProject.Organisation}
                </button>
            </h2>
            <div id="collapse${i}" class="accordion-collapse collapse" data-bs-parent="#accordionProject">
                <div class="accordion-body">
                    ${currentProject.Rôles}
                </div>
            </div>
            </div>`
    }
    accordeon.innerHTML = `<div class="accordion" id="accordionProject">${htmlContent}</div>`
}
fetch(`${window.APP_CONFIG.API_URL}projects`, {
    headers: {
        apikey: window.APP_CONFIG.API_KEY
    }
})
    .then((res) => res.json())
    .then((data) => {
        accordeonFunction("#accordionTest", data)
    });
