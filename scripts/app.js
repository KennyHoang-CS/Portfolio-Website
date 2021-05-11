const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');
let direction = null;

portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', ()=>{
        portfolioItem.childNodes[1].classList.add('img-darken');
    })
    portfolioItem.addEventListener('mouseout', ()=>{
        portfolioItem.childNodes[1].classList.remove('img-darken');
    })
    portfolioItem.addEventListener('click', e=>{
        
        direction = e.target.parentNode;

        if(e.target.parentNode.className === 'img-text-wrapper'){
            direction = direction.parentNode;
        }
        
        if (direction.id === "more-projects"){
            window.location.href = "https://github.com/KennyHoang-CS";
        }
        else if (direction.id === 'anime-platform') {
            window.location.href = "https://anime-platform.herokuapp.com/";
        }
        else if (direction.id === 'react-jobly') {
            window.location.href = "http://kennyhoang-jobly.surge.sh/";
        }
        else {
            window.location.href = `https://kennyhoang-cs.github.io/${direction.id}/`;
        }
        
    })
})



