const projectCardsContainer = document.querySelector('.project-cards');

DATA.forEach((project) => {
    projectCardsContainer.insertAdjacentHTML('beforeend', createCard(project));
});

function createCard(project) {
    return `<div class='project-card'><div
            class='project-card-overlay'
            aria-hidden='true'
        ></div>
        <div class='project-card-img'>
            <img src=${project.image} alt='' />
        </div>
        <div class='project-card-content'>
            <h1 class='project-card-title'>${project.title}</h1>
            <div class='project-card-actions'>
                <div class='project-action'>
                    <a href=${project.liveUrl} target="_blank">
                        <i
                            class='fa fa-eye fa-2x'
                            aria-hidden='true'
                        ></i>
                    </a>
                </div>
                <div class='project-action'>
                    <a href=${project.github} target="_blank">
                        <i
                            class='fa fa-github fa-2x'
                            aria-hidden='true'
                        ></i>
                    </a>
                </div>
            </div>
        </div>
    </div>`;
}
