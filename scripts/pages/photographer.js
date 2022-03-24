const getPhotographers = async () => {
    const photographerId = (new URL(document.location)).searchParams.get("id");

    const  medias = await fetch('../../data/photographers.json')
            .then(res => res.json())
            .then(data => data.media.filter(ele => ele.photographerId === parseInt(photographerId)));

    const photographer = await fetch('../../data/photographers.json')
            .then(res => res.json())
            .then(data => data.photographers.filter(ele => ele.id === parseInt(photographerId)).shift());

    return { photographer, medias }
}

function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");


    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    const {photographer, medias} = await getPhotographers();
    console.log(photographer, medias);
    // displayData(photographers);
};

init();
