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


document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section"); // 모든 섹션 선택
    const options = {
        threshold: 0.5 // 섹션의 절반이 화면에 들어올 때 콜백이 트리거
    };

    // 각 섹션으로 스크롤할 때 감지
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 현재 보이는 섹션으로 스크롤 이동
                entry.target.scrollIntoView({ behavior: "smooth" });
                // 활성화된 메뉴 항목 업데이트
                updateActiveMenu(entry.target.id);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section); // 각 섹션을 옵저버에 추가
    });

    // 현재 활성화된 메뉴 항목을 업데이트하는 함수
    function updateActiveMenu(activeId) {
        document.querySelectorAll(".header__menu__item").forEach(item => {
            item.classList.toggle("active", item.getAttribute("href") === `#${activeId}`);
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.header__menu__item');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let currentSection = ''; 

        // 각 섹션을 반복하면서 스크롤 위치에 따라 현재 섹션을 결정
        sections.forEach((section) => {
            const sectionTop = section.offsetTop; // 섹션의 상단 위치

            // 현재 스크롤 위치가 섹션의 상단보다 크거나 같을 경우, 해당 섹션을 활성화
            if (window.scrollY >= sectionTop - 50) {
                currentSection = section.getAttribute('id'); 
            }
        });

        // 메뉴 항목들을 반복하면서 활성화 클래스를 추가하거나 제거
        menuItems.forEach((item) => {
            item.classList.remove('active'); // 모든 메뉴 항목에서 active 클래스 제거
            // 메뉴 항목의 href 속성 값이 현재 섹션의 ID와 일치하는 경우, 해당 항목에 active 클래스 추가
            if (item.getAttribute('href') === `#${currentSection}`) {
                item.classList.add('active');
            }
        });
    });
});

