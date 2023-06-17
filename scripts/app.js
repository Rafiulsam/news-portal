const loadCategories = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url)
    const data = await res.json()
    displayCategory(data.data.news_category);
}

const displayCategory = (data) => {
    console.log(data);
    const categoriesContainer = document.getElementById('category-section')
    data.forEach(category => {
        console.log(category);
        categoriesContainer.innerHTML += `<a href="#" onclick="fetchCategoryNews('${category.category_id}','${category.category_name}' )" class="text-lg text-gray-500">${category.category_name}</a>`
    });
}

const fetchCategoryNews = async (category_id, category_name) => {
    console.log(category_id);
    const url = ` https://openapi.programming-hero.com/api/news/category/${category_id}`
    const res = await fetch(url)
    const data = await res.json()
    showAllNews(data.data, category_name);
}

const showAllNews = (data, category_name) => {
    console.log(data);
    document.getElementById('news-count').innerText = data.length
    document.getElementById('category-name').innerText = category_name
}