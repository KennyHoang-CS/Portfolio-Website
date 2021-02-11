const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');

portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', ()=>{
        portfolioItem.childNodes[1].classList.add('img-darken');
    })
    portfolioItem.addEventListener('mouseout', ()=>{
        portfolioItem.childNodes[1].classList.remove('img-darken');
    })
    portfolioItem.addEventListener('click', e=>{
        console.log(e.target.parentNode.id)
        
        if (e.target.parentNode.id === "more-projects"){
            window.location.href = "https://github.com/KennyHoang-CS";
        }
        else {
            window.location.href = `https://kennyhoang-cs.github.io/${e.target.parentNode.id}/`;
        }
    })
})



