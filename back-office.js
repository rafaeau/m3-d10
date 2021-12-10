const id = new URLSearchParams(location.search).get("id")
const url = id ? "https://striveschool-api.herokuapp.com/api/movies/" + id : "https://striveschool-api.herokuapp.com/api/movies/"
const method = id ? "PUT" : "POST"

window.onload = () => {

    if (id) {
      fetch(url, {
        method: method,
        body: JSON.stringify(),
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjFmMTRiYjUzZDAwMTViMTllZDciLCJpYXQiOjE2Mzg5NzI0MTQsImV4cCI6MTY0MDE4MjAxNH0.oauW9EyjgVFdXEkIv_2CZMaftq-xHesD6DsOGURaFg0"
        }
      })
        .then(response => response.json())
        .then(productData => {
          const { name, description, category, imageUrl } = productData
          document.getElementById("name").value = name
          document.getElementById("description").value = description
          document.getElementById("category").value = category
          document.getElementById("imageUrl").value = imageUrl
          document.querySelector(".submit-btn").innerText = "Submit changes"
          document.querySelector(".delete-btn").classList.remove("d-none")
        })
    }
  }

const addFilm = async (event) => {
    event.preventDefault()

    const theEvent = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        category: document.getElementById("category").value,
        imageUrl: document.getElementById("imageUrl").value
    }

    try {
      const response = await fetch(url, {
        method: method,
        body: JSON.stringify(theEvent),
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjFmMTRiYjUzZDAwMTViMTllZDciLCJpYXQiOjE2Mzg5NzI0MTQsImV4cCI6MTY0MDE4MjAxNH0.oauW9EyjgVFdXEkIv_2CZMaftq-xHesD6DsOGURaFg0"
        }
      })
      if (response.ok) {
        const serverResponse = await response.json()
        const alert = document.querySelector("#alert")
        alert.className = "alert alert-success"
        alert.innerHTML = `Product with an id: "${serverResponse._id}" added successfully!`
        document.querySelector("form").reset()
        /* setTimeout(() => { window.location.assign("./front-page.html") }, 2000) */
      }
    } catch (err) {
      alert(err),
        console.error(err)
    }
  }

  