const url = "https://striveschool-api.herokuapp.com/api/movies"
const method = "POST"

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