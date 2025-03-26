# Capstone-Project-Portfolio-Website
This is a capstone project to using, Javascript, HTML, CSS to build a personal Resume/portfolio website, this is meant to be a continuous build upon for future uses

# Usage
Home Page (index.html): Overview of personal statement and goals
Education Page (education.html): Educational Qualifications
Projects Page (projects.html): showcase projects and future projects will be added overtime
Contact Page (contact.html): Form to allow visitors to contact me via the website or GitHub

# Features
Responsive Design: able to be viewed and compatible across various media devices

Styling: CSS for personalized appearances

Retrieve data from a thrid-party API and use it to desplay Github Profile data within the website

Uses arrays, objects, sets and maps to store and retrieve information that is displayed in the website

Analyze data that is stored in arrays, objects, sets, maps and displays information about it in the website

# Contributions
Feel free to bring your suggestions!
git checkout -b feature-name

git commit -m "Add feature"

git push origin feature-name

Open a pull request




## GitHub API Usage
This project interacts with the [GitHub API](https://docs.github.com/en/rest) to retrieve public repository and user data. No authentication is required.

### Fetch Repository Information
The following endpoint is used to get details about this repository:

```js
fetch("https://api.github.com/repos/DJ9009/Capstone-Project-Portfolio-Website")
  .then(response => response.json())
  .then(repo => {
    console.log("Repository Name:", repo.name);
    console.log("Description:", repo.description);
    console.log("Stars:", repo.stargazers_count);
    console.log("Forks:", repo.forks_count);
  })
  .catch(error => console.error("Error fetching repository data:", error));

# Fetch user Profile Information
fetch("https://api.github.com/users/DJ9009")
  .then(response => response.json())
  .then(user => {
    console.log("Username:", user.login);
    console.log("Profile URL:", user.html_url);
    console.log("Public Repos:", user.public_repos);
  })
  .catch(error => console.error("Error fetching user data:", error));


