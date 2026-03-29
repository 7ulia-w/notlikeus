// script.js

// Dark mode toggle
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    // Save user preference in local storage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
}

// Search functionality
function searchItems(query) {
    const items = document.querySelectorAll('.item'); // Assume items have the class 'item'
    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(query.toLowerCase())) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// API calls
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Comment handling
let comments = [];
function addComment(comment) {
    comments.push(comment);
    displayComments();
}

function displayComments() {
    const commentsContainer = document.getElementById('comments'); // Assume a div for comments
    commentsContainer.innerHTML = '';
    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.textContent = comment;
        commentsContainer.appendChild(commentElement);
    });
}

// Event listeners
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

// Assume you have an input for search
document.getElementById('searchInput').addEventListener('input', (event) => {
    searchItems(event.target.value);
});

// Assume some button to add comments
document.getElementById('addCommentButton').addEventListener('click', () => {
    const commentInput = document.getElementById('commentInput');
    addComment(commentInput.value);
    commentInput.value = '';
});
