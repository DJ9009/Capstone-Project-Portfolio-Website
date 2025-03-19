// Function to fetch GitHub profile data
function fetchGitHubProfile(username, callback) {
    const url = `https://api.github.com/users/${username}`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}

// Event listener for the button
document.getElementById('fetch-profile-btn').addEventListener('click', () => {
    fetchGitHubProfile('DJ9009', (error, data) => {
        if (error) {
            console.error('Error fetching GitHub profile:', error);
        } else {
            const profileDataDiv = document.getElementById('profile-data');
            profileDataDiv.innerHTML = `
                <p>Name: ${data.name}</p>
                <p>Bio: ${data.bio}</p>
                <p>Location: ${data.location}</p>
                <p>Public Repos: ${data.public_repos}</p>
                <p>Followers: ${data.followers}</p>
                <p>Following: ${data.following}</p>
            `;
        }
    });
});

// Slider functionality
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

function showSlide(n) {
    slides.forEach((slide, i) => {
        slide.style.display = 'none';
        if (i === n) {
            slide.style.display = 'block';
        }
    });
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// Initialize the slider
showSlide(index);