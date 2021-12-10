window.onload = () => {
    displayDrama()
}

const displayDrama = async () => {
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
                const list = document.getElementById("drama")
                const item = document.createElement("div")
                item.classList.add("img-wrap", "col-sm-6", "col-md-4", "col-lg-2", "mb-1", "pr-0")
                item.innerHTML = `<a href="./detail-page.html?id=${film._id}"><img class="image-card img-fluid" height="200" src=${film.imageUrl} href="./detail-page.html?id=${film._id}"/></a>`
                list.appendChild(item)
                console.log(film)
            })
        }
    } catch (err) {
        console.error(err)
    }
}

const displayRomance = async () => {
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
            films[1].forEach(film => {
                const list = document.getElementById("romance")
                const item = document.createElement("div")
                item.classList.add("img-wrap", "col-sm-6", "col-md-4", "col-lg-2", "mb-1", "pr-0")
                item.innerHTML = `<a href="./detail-page.html?id=${film._id}"><img class="image-card img-fluid" height="200" src=${film.imageUrl} href="./detail-page.html?id=${film._id}"/></a>`
                list.appendChild(item)
                console.log(film)
            })
        }
    } catch (err) {
        console.error(err)
    }
}
