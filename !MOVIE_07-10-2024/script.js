document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('movie1').addEventListener('click', function(){
        document.getElementById('movie1').classList.add('selected');
        document.getElementById('movie2').classList.remove('selected');
        document.getElementById('movie3').classList.remove('selected');

        document.getElementById('spotlightTitle').innerText = "Deadpool"
        document.getElementById('spotlightDescription').innerText = "Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction."
        document.getElementById('spotlight').style.background = "url('img/deadpoolPanel.png') no-repeat"
        document.getElementById('spotlight').style.backgroundSize = "cover"
        document.getElementById('spotlight').style.backgroundPosition = "100% 10%"
    })
    document.getElementById('movie2').addEventListener('click', function(){
        document.getElementById('movie1').classList.remove('selected');
        document.getElementById('movie2').classList.add('selected');
        document.getElementById('movie3').classList.remove('selected');

        document.getElementById('spotlightTitle').innerText = "The Amazing Spider-Man"
        document.getElementById('spotlightDescription').innerText = "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe."
        document.getElementById('spotlight').style.background = "url('img/tas.png') no-repeat"
        document.getElementById('spotlight').style.backgroundSize = "cover"
        document.getElementById('spotlight').style.backgroundPosition = "center"
    })
    document.getElementById('movie3').addEventListener('click', function(){
        document.getElementById('movie1').classList.remove('selected');
        document.getElementById('movie2').classList.remove('selected');
        document.getElementById('movie3').classList.add('selected');

        document.getElementById('spotlightTitle').innerText = "Harry Potter and the Philosopher's Stone"
        document.getElementById('spotlightDescription').innerText = "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world."
        document.getElementById('spotlight').style.background = "url('img/hpPanel.jpg') no-repeat"
        document.getElementById('spotlight').style.backgroundSize = "cover"
        document.getElementById('spotlight').style.backgroundPosition = "center"
    })
})

