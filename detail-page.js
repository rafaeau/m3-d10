const id = new URLSearchParams(location.search).get("id")

const url = "https://striveschool-api.herokuapp.com/api/movies/"

window.onload = () => {

    fetch(url + id, {
        method: "PUT",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjFmMTRiYjUzZDAwMTViMTllZDciLCJpYXQiOjE2Mzg5NzI0MTQsImV4cCI6MTY0MDE4MjAxNH0.oauW9EyjgVFdXEkIv_2CZMaftq-xHesD6DsOGURaFg0"
        }
    })
        .then(response => response.json())
        .then(film => {
            console.log(film)
            const title = document.querySelector(".title")
            title.innerHTML = `${film.name} details:`
            const list = document.querySelector(".list-group")
            list.innerHTML = `<li class="list-group-item text-center"><img src="${film.imageUrl}" height="250px" alt="film-photo"></li>
                    <li class="list-group-item">Name: ${film.name}</li>
                    <li class="list-group-item">Category: ${film.category}</li>
                    <li class="list-group-item">Description: ${film.description}</li>
                    <li class="list-group-item">ID: ${film._id}</li>
                    <li class="list-group-item">User ID: ${film.userId}</li>
                    <li class="list-group-item">Created at: ${film.createdAt}</li>
                    <li class="list-group-item">Updated at: ${film.updatedAt}</li>
                    <span><button type="button" class="btn btn-warning mt-3 mb-5" onclick="editBtn()">Edit</button></span>`
        })
        .catch(err => console.error(err))
}

const editBtn = () => {
    window.location.assign("./back-office.html?id=" + id)
}