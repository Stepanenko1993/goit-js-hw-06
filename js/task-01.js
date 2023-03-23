const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

totalCategories.forEach((item) => {
    console.log(`Category: ${item.querySelectorAll('h2')[0].textContent}`)
     console.log(`Elements: ${item.querySelectorAll('li').length}`)
})