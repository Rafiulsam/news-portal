const loadCategories = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url)
    const data = await res.json()
    displayCategory(data.data.news_category);
}

const displayCategory = (data) => {
    const categoriesContainer = document.getElementById('category-section')
    data.forEach(category => {
        categoriesContainer.innerHTML += `<a href="#" onclick="fetchCategoryNews('${category.category_id}','${category.category_name}' )" class="text-lg text-gray-500">${category.category_name}</a>`
    });
}

const fetchCategoryNews = async (category_id, category_name) => {
    const url = ` https://openapi.programming-hero.com/api/news/category/${category_id}`
    const res = await fetch(url)
    const data = await res.json()
    showAllNews(data.data, category_name);
}

const showAllNews = (data, category_name) => {
    console.log(data);
    const allNewsContainer = document.getElementById('all-news-container')
    allNewsContainer.textContent = '';
    document.getElementById('news-count').innerText = data.length
    document.getElementById('category-name').innerText = category_name
    data.forEach(news => {
        console.log(typeof news.details);
        
        allNewsContainer.innerHTML += `
        <div class="card card-side p-5 h-80 mt-6 bg-base-100 shadow-xl">
            <img class="w-2/5" src=${news.image_url} alt="">
            <div class="card-body justify-between py-0 w-2/4">
                <div>
                    <h2 class="card-title mb-5">${news.title}</h2>
                    <p> ${news.details.slice(0, 250)}...</p>
                </div>
                <div>
                <div  class="flex justify-between items-center">
                    <div class="flex gap-2">
                        <img class="rounded-full" src=${news.author.img} alt="" height="40" width="40">
                        <div class="text-xs">
                            <p class="font-medium">${news.author.name}</p>
                            <p>${news.author.published_date}</p>
                        </div>
                    </div>
                    <div >
                        <p><i class="fa-regular fa-eye"></i> ${news.total_view}</p>
                    </div>
                    <div >
                    <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></p>
                    </div>
                    <div>
                        <button><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>                      
    `

    });

}