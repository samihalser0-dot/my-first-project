// User Interface Script with Language Support

// Local Storage Management
const StorageManager = {
    getUsers() {
        return JSON.parse(localStorage.getItem('users')) || [];
    },

    saveUsers(users) {
        localStorage.setItem('users', JSON.stringify(users));
        this.showNotification(i18n.t('notifications.dataSaved'), 'success');
    },

    getSettings() {
        return JSON.parse(localStorage.getItem('settings')) || {
            darkMode: false,
            notifications: true,
            language: 'ar'
        };
    },

    saveSetting(key, value) {
        const settings = this.getSettings();
        settings[key] = value;
        localStorage.setItem('settings', JSON.stringify(settings));
    },

    showNotification(message, type = 'info') {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.className = `notification ${type}`;
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 3000);
    }
};

// User Management
const UserManager = {
    addUser(userData) {
        const users = StorageManager.getUsers();
        const newUser = {
            id: Date.now(),
            ...userData,
            createdAt: new Date().toISOString()
        };
        users.push(newUser);
        StorageManager.saveUsers(users);
        return newUser;
    },

    deleteUser(id) {
        let users = StorageManager.getUsers();
        users = users.filter(u => u.id !== id);
        localStorage.setItem('users', JSON.stringify(users));
        StorageManager.showNotification(i18n.t('notifications.userDeleted'), 'success');
    },

    updateUser(id, updates) {
        let users = StorageManager.getUsers();
        const user = users.find(u => u.id === id);
        if (user) {
            Object.assign(user, updates);
            localStorage.setItem('users', JSON.stringify(users));
        }
    },

    renderUsers() {
        const users = StorageManager.getUsers();
        const usersList = document.getElementById('usersList');

        if (users.length === 0) {
            usersList.innerHTML = `<p class="empty-state">${i18n.t('users.emptyState')}</p>`;
            return;
        }

        usersList.innerHTML = users.map(user => `
            <div class="user-card">
                <h3>${user.name}</h3>
                <div class="user-info">
                    <strong>${i18n.t('users.email')}:</strong> ${user.email}
                </div>
                <div class="user-info">
                    <strong>${i18n.t('users.age')}:</strong> ${user.age || i18n.t('users.notSpecified')}
                </div>
                <div class="user-info">
                    <strong>${i18n.t('users.created')}:</strong> ${new Date(user.createdAt).toLocaleDateString('ar-EG')}
                </div>
                <div class="user-actions">
                    <button class="btn btn-secondary" onclick="UserManager.editUserUI(${user.id})">${i18n.t('users.edit')}</button>
                    <button class="btn btn-danger" onclick="UserManager.deleteUser(${user.id}); UserManager.renderUsers(); StatsManager.updateStats();">${i18n.t('users.delete')}</button>
                </div>
            </div>
        `).join('');
    },

    editUserUI(id) {
        const users = StorageManager.getUsers();
        const user = users.find(u => u.id === id);
        if (user) {
            document.getElementById('userName').value = user.name;
            document.getElementById('userEmail').value = user.email;
            document.getElementById('userAge').value = user.age || '';
            document.getElementById('addUserForm').classList.remove('hidden');
            document.getElementById('userForm').dataset.editId = id;
        }
    }
};

// Statistics Management
const StatsManager = {
    updateStats() {
        const users = StorageManager.getUsers();
        
        document.getElementById('totalUsers').textContent = users.length;
        document.getElementById('activeUsers').textContent = users.length;
        
        const avgAge = users.length > 0 
            ? Math.round(users.reduce((sum, u) => sum + (u.age || 0), 0) / users.length)
            : 0;
        document.getElementById('avgAge').textContent = avgAge;
    },

    updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('ar-EG');
        document.getElementById('currentTime').textContent = timeString;
    }
};

// Tool Functions
const Tools = {
    capitalize() {
        const input = document.getElementById('capitalizeInput').value;
        if (!input.trim()) {
            StorageManager.showNotification(i18n.t('notifications.emptyInput'), 'error');
            return;
        }
        const result = input.charAt(0).toUpperCase() + input.slice(1);
        document.getElementById('capitalizeOutput').textContent = result;
        document.getElementById('capitalizeResult').classList.remove('hidden');
    },

    random() {
        const min = parseInt(document.getElementById('minNum').value) || 0;
        const max = parseInt(document.getElementById('maxNum').value) || 100;

        if (min > max) {
            StorageManager.showNotification(i18n.t('notifications.minMaxError'), 'error');
            return;
        }

        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById('randomOutput').textContent = result;
        document.getElementById('randomResult').classList.remove('hidden');
    },

    textLength() {
        const input = document.getElementById('lengthInput').value;
        const length = input.length;
        document.getElementById('lengthOutput').textContent = length;
        document.getElementById('lengthResult').classList.remove('hidden');
    },

    reverse() {
        const input = document.getElementById('reverseInput').value;
        if (!input.trim()) {
            StorageManager.showNotification(i18n.t('notifications.emptyInput'), 'error');
            return;
        }
        const result = input.split('').reverse().join('');
        document.getElementById('reverseOutput').textContent = result;
        document.getElementById('reverseResult').classList.remove('hidden');
    },

    uppercase() {
        const input = document.getElementById('uppercaseInput').value;
        if (!input.trim()) {
            StorageManager.showNotification(i18n.t('notifications.emptyInput'), 'error');
            return;
        }
        const result = input.toUpperCase();
        document.getElementById('uppercaseOutput').textContent = result;
        document.getElementById('uppercaseResult').classList.remove('hidden');
    },

    lowercase() {
        const input = document.getElementById('lowercaseInput').value;
        if (!input.trim()) {
            StorageManager.showNotification(i18n.t('notifications.emptyInput'), 'error');
            return;
        }
        const result = input.toLowerCase();
        document.getElementById('lowercaseOutput').textContent = result;
        document.getElementById('lowercaseResult').classList.remove('hidden');
    }
};

// Navigation
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Show selected section
    document.getElementById(sectionId).classList.add('active');

    // Add active class to clicked nav link
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Load settings and set language
    const settings = StorageManager.getSettings();
    i18n.setLanguage(settings.language);
    
    document.getElementById('darkMode').checked = settings.darkMode;
    document.getElementById('notifications').checked = settings.notifications;
    document.getElementById('languageSelect').value = settings.language;

    // Render users
    UserManager.renderUsers();

    // Update stats
    StatsManager.updateStats();

    // Update time every second
    StatsManager.updateTime();
    setInterval(StatsManager.updateTime, 1000);

    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showSection(link.dataset.section);
        });
    });

    // Add User Form
    document.getElementById('addUserBtn').addEventListener('click', () => {
        document.getElementById('addUserForm').classList.remove('hidden');
        document.getElementById('userForm').reset();
        delete document.getElementById('userForm').dataset.editId;
    });

    document.getElementById('cancelBtn').addEventListener('click', () => {
        document.getElementById('addUserForm').classList.add('hidden');
        document.getElementById('userForm').reset();
        delete document.getElementById('userForm').dataset.editId;
    });

    document.getElementById('userForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('userName').value.trim();
        const email = document.getElementById('userEmail').value.trim();
        const age = parseInt(document.getElementById('userAge').value) || null;

        // Validation
        if (!name || !email) {
            StorageManager.showNotification(i18n.t('notifications.fillRequired'), 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            StorageManager.showNotification(i18n.t('notifications.invalidEmail'), 'error');
            return;
        }

        if (age && (age < 0 || age > 150)) {
            StorageManager.showNotification(i18n.t('notifications.invalidAge'), 'error');
            return;
        }

        const editId = document.getElementById('userForm').dataset.editId;
        if (editId) {
            UserManager.updateUser(parseInt(editId), { name, email, age });
            StorageManager.showNotification(i18n.t('notifications.userUpdated'), 'success');
        } else {
            UserManager.addUser({ name, email, age });
            StorageManager.showNotification(i18n.t('notifications.userAdded'), 'success');
        }

        UserManager.renderUsers();
        StatsManager.updateStats();
        document.getElementById('addUserForm').classList.add('hidden');
        document.getElementById('userForm').reset();
        delete document.getElementById('userForm').dataset.editId;
    });

    // Tools Event Listeners
    document.getElementById('capitalizeBtn').addEventListener('click', Tools.capitalize);
    document.getElementById('randomBtn').addEventListener('click', Tools.random);
    document.getElementById('lengthBtn').addEventListener('click', Tools.textLength);
    document.getElementById('reverseBtn').addEventListener('click', Tools.reverse);
    document.getElementById('uppercaseBtn').addEventListener('click', Tools.uppercase);
    document.getElementById('lowercaseBtn').addEventListener('click', Tools.lowercase);

    // Settings
    document.getElementById('darkMode').addEventListener('change', (e) => {
        StorageManager.saveSetting('darkMode', e.target.checked);
        if (e.target.checked) {
            document.body.style.backgroundColor = '#1a1a1a';
            document.body.style.color = '#fff';
        } else {
            document.body.style.backgroundColor = '#f5f7fa';
            document.body.style.color = '#333';
        }
    });

    document.getElementById('notifications').addEventListener('change', (e) => {
        StorageManager.saveSetting('notifications', e.target.checked);
        StorageManager.showNotification(
            e.target.checked ? i18n.t('notifications.notificationsEnabled') : i18n.t('notifications.notificationsDisabled'),
            'info'
        );
    });

    document.getElementById('languageSelect').addEventListener('change', (e) => {
        i18n.setLanguage(e.target.value);
        StorageManager.saveSetting('language', e.target.value);
        StorageManager.showNotification(i18n.t('notifications.languageChanged'), 'info');
        UserManager.renderUsers();
    });

    document.getElementById('exportBtn').addEventListener('click', () => {
        const users = StorageManager.getUsers();
        const dataStr = JSON.stringify(users, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `users_${new Date().getTime()}.json`;
        link.click();
        StorageManager.showNotification(i18n.t('notifications.dataExported'), 'success');
    });

    document.getElementById('clearBtn').addEventListener('click', () => {
        if (confirm(i18n.t('notifications.confirmDelete'))) {
            localStorage.setItem('users', JSON.stringify([]));
            UserManager.renderUsers();
            StatsManager.updateStats();
            StorageManager.showNotification(i18n.t('notifications.dataCleared'), 'success');
        }
    });

    StorageManager.showNotification(i18n.t('notifications.welcome'), 'success');
});
