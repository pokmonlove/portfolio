const categories = document.querySelector('.categories')
const projectsContainer = document.querySelector('.projects')
const projects = document.querySelectorAll('.project')


categories.addEventListener('click', (e) => { //e: 해당 이벤트가 발생한 요소
    const filter = e.target.dataset.category  //data-category 데이터 셋 안의 카테고리
    console.log(filter)

    if (filter==null){
        return;
    }
    activeSelection(e.target)
    filterProjects(filter)
})


// 원래 선택되어 있는 All에서 다른 항목을 클릭하면 선택이 되는 기능
function activeSelection(target){
    const active = document.querySelector('.category--selected') //All
    active.classList.remove('category--selected')
    target.classList.add('category--selected')
}

//카테고리 선택하면 그 카테고리의 항목만 보이게 함
//요소.dataset.type

function activeCategory(target){
    const cat=document.querySelector('.category--selected')
    cat.classList.replace()
}
function filterProjects(filter){
    projects.forEach((project)=>{

        if(filter==='all'|| filter === project.dataset.type){
            project.style.display='block'
        }else{
            project.style.display='none'
        }
    })
    projectsContainer.classList.add('anim-out')
    setTimeout(() =>{
        // 일정 시간 후 함수 실행
        projectsContainer.classList.remove('anim-out')

    }, 300)
}