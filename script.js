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

document.addEventListener('DOMContentLoaded', () => {
    const fetchProfileButton = document.getElementById('fetch-profile-btn');
    if (fetchProfileButton) {
        fetchProfileButton.addEventListener('click', () => {
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
    }
});