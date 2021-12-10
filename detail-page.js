window.onload = () => {
    displayContent()
}

const displayContent = async () => {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/movies/", {
            method: "GET",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjFmMTRiYjUzZDAwMTViMTllZDciLCJpYXQiOjE2Mzg5NzI0MTQsImV4cCI6MTY0MDE4MjAxNH0.oauW9EyjgVFdXEkIv_2CZMaftq-xHesD6DsOGURaFg0"
            }
        })

        if (response.ok) {
            const categories = await response.json()
            console.log(categories)
            const films = await Promise.all(
                categories.map(async (category) => {
                    const res = await fetch("https://striveschool-api.herokuapp.com/api/movies/" + category, {
                        method: "GET",
                        headers: {
                            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjFmMTRiYjUzZDAwMTViMTllZDciLCJpYXQiOjE2Mzg5NzI0MTQsImV4cCI6MTY0MDE4MjAxNH0.oauW9EyjgVFdXEkIv_2CZMaftq-xHesD6DsOGURaFg0"
                        }
                    })
                    return await res.json()
                })
            )
            films[0].forEach(film => {
                const list = document.querySelector(".list-group")
                document.querySelector(".spinner-border").classList.add("d-none")
                const item = document.createElement("li")
                item.classList.add("list-group-item", "d-flex", "align-items-center")
                item.innerHTML = `<img src="${film.imageUrl}" height="60px" alt="product-photo">
                <span class="ml-2">Name: ${film.name}<br>Category: ${film.category}<br>Description: ${film.description}</span>
                <h5><a href="./detail-page.html?id=${film.id}"><span class="badge badge-lg badge-info ml-3">Details</span></a></h5>`
                list.appendChild(item)
                console.log(film)
            })
        }
    } catch (err) {
        console.error(err)
    }
}






/* filmArray.forEach(film => {
    const list = document.querySelector(".list-group")
    document.querySelector(".spinner-border").classList.add("d-none")
    console.log(film)
    const item = document.createElement("li")
    item.classList.add("list-group-item", "d-flex", "align-items-center")
    item.innerHTML = `<img src="${film.imageUrl}" height="60px" alt="product-photo">
    <span class="ml-2">Name: ${film.name}<br>Category: ${film.category}<br>Description: ${film.description}</span>`
    list.appendChild(item)
    <h5><a href="./detail-page.html?id=${film.id}"><span class="badge badge-lg badge-info ml-3">Details</span></a></h5>
}) */
