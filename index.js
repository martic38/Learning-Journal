import './aboutme.html'
import './heropost.html'
import './css/styles.css'

const hero = document.getElementById('hero')
const viewMore = document.getElementById('view-more')


hero.addEventListener("click", function(){
    document.location.href = './heropost.html'
} )

viewMore.addEventListener("click", function(){
    console.log('clicked')
    document.getElementById('hidden1').classList.toggle("hidden")
    document.getElementById('hidden2').classList.toggle("hidden")
    document.getElementById('hidden3').classList.toggle("hidden")
    viewMore.classList.toggle("hidden")
})