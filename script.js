let currentUser = null;
let entries = [];

function login(user) {
    if (user === 'Даня') {
        if (prompt("Введите пароль для Дани:") === "Люблю_Соню") {
            currentUser = 'Даня';
            document.getElementById('login-info').innerText = 'Даня';
            document.getElementById('password-info').innerText = 'Люблю_Соню';
            showProfile();
            displayEntries(); 
        } else {
            alert("Неверный пароль");
        }
    } else if (user === 'Сонечка') {
        if (prompt("Введите пароль для Сони:") === "Люблю_Даню") {
            currentUser = 'Соня';
            document.getElementById('login-info').innerText = 'Соня';
            document.getElementById('password-info').innerText = 'Люблю_Даню';
            showProfile();
            displayEntries(); 
        } else {
            alert("Неверный пароль");
        }
    }
}

function showProfile() {
    document.getElementById('profile-name').innerText = currentUser;
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
}

document.getElementById('add-entry').addEventListener('click', function() {
    const entryText = document.getElementById('entry-input').value;
    if (entryText) {
        const entry = { text: entryText, author: currentUser, timestamp: Date.now() };
        entries.push(entry); 
        document.getElementById('entry-input').value = '';
        cleanOldEntries(); 
        displayEntries(); 
    }
});

function cleanOldEntries() {
    const oneWeekInMillis = 7 * 24 * 60 * 60 * 1000; 
    const currentTime = Date.now();
    entries = entries.filter(entry => (currentTime - entry.timestamp) <= oneWeekInMillis);
}

function displayEntries() {
    const entriesContainer = document.getElementById('entries');
    entriesContainer.innerHTML = ''; 
    entries.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('note');
        entryDiv.innerHTML = `
            <p>${entry.text} (Автор: ${entry.author})</p>
            <button class="heart" onclick="toggleHeart(this)">❤️</button>
        `;
        entriesContainer.appendChild(entryDiv);
    });
}

function toggleHeart(button) {
    button.style.color = button.style.color === 'red' ? 'gray' : 'red';
}

document.getElementById('back-button').addEventListener('click', function() {
    currentUser = null; 
    document.getElementById('login-info').innerText = '';
    document.getElementById('password-info').innerText = '';
    document.getElementById('profile').style.display = 'none'; 
    document.getElementById('login-section').style.display = 'block'; 
});
