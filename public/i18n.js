// Internationalization (i18n) Module
// Multilingual support for the application

const i18n = {
    languages: {
        ar: {
            // Header
            appName: 'my-first-project',
            appSubtitle: 'لوحة التحكم والإدارة',

            // Navigation
            nav: {
                home: 'الرئيسية',
                users: 'المستخدمون',
                tools: 'الأدوات',
                stats: 'الإحصائيات',
                settings: 'الإعدادات'
            },

            // Home Section
            home: {
                welcome: 'أهلاً بك في my-first-project',
                description: 'مشروع Node.js متقدم مع واجهة مستخدم حديثة وسهلة الاستخدام',
                features: {
                    userMgmt: 'إدارة المستخدمين',
                    userMgmtDesc: 'إضافة وتعديل وحذف المستخدمين',
                    tools: 'أدوات مفيدة',
                    toolsDesc: 'مجموعة من الأدوات والدوال المساعدة',
                    stats: 'إحصائيات',
                    statsDesc: 'عرض إحصائيات شاملة عن البيانات',
                    settings: 'الإعدادات',
                    settingsDesc: 'تخصيص الإعدادات حسب احتياجاتك'
                }
            },

            // Users Section
            users: {
                title: 'إدارة المستخدمين',
                addBtn: '+ إضافة مستخدم جديد',
                formTitle: 'إضافة مستخدم جديد',
                name: 'الاسم',
                namePlaceholder: 'أدخل الاسم',
                email: 'البريد الإلكتروني',
                emailPlaceholder: 'البريد الإلكتروني',
                age: 'العمر',
                agePlaceholder: 'العمر',
                save: 'حفظ',
                cancel: 'إلغاء',
                edit: 'تعديل',
                delete: 'حذف',
                emptyState: 'لا يوجد مستخدمون. أضف مستخدماً جديداً!',
                email: 'البريد الإلكتروني',
                created: 'تاريخ الإنشاء',
                notSpecified: 'غير محدد'
            },

            // Tools Section
            tools: {
                title: 'الأدوات والدوال المساعدة',
                capitalize: 'رفع الحرف الأول',
                random: 'رقم عشوائي',
                randomFrom: 'من',
                randomTo: 'إلى',
                randomGenerate: 'توليد',
                length: 'طول النص',
                lengthCalc: 'حساب',
                reverse: 'عكس النص',
                reverseBtn: 'عكس',
                uppercase: 'تحويل لأحرف كبيرة',
                uppercaseBtn: 'تحويل',
                lowercase: 'تحويل لأحرف صغيرة',
                lowercaseBtn: 'تحويل',
                result: 'النتيجة:',
                resultLength: 'الطول:',
                resultChars: 'أحرف',
                apply: 'تطبيق',
                randomNumber: 'الرقم العشوائي:'
            },

            // Statistics Section
            stats: {
                title: 'الإحصائيات',
                totalUsers: 'إجمالي المستخدمين',
                activeUsers: 'المستخدمون النشطون',
                avgAge: 'متوسط العمر',
                currentTime: 'الوقت الحالي',
                distribution: 'توزيع المستخدمين'
            },

            // Settings Section
            settings: {
                title: 'الإعدادات',
                appearance: 'المظهر',
                darkMode: 'الوضع الليلي',
                notifications: 'تفعيل الإخطارات',
                language: 'اللغة',
                data: 'البيانات',
                export: 'تصدير البيانات',
                clear: 'حذف كل البيانات',
                info: 'معلومات التطبيق',
                version: 'الإصدار',
                developer: 'المطور',
                license: 'الترخيص'
            },

            // Notifications
            notifications: {
                welcome: 'مرحباً بك في my-first-project! 👋',
                dataSaved: 'تم حفظ البيانات بنجاح',
                userAdded: 'تم إضافة مستخدم جديد بنجاح',
                userUpdated: 'تم تحديث المستخدم بنجاح',
                userDeleted: 'تم حذف المستخدم بنجاح',
                dataExported: 'تم تصدير البيانات بنجاح',
                dataCleared: 'تم حذف جميع البيانات',
                darkModeEnabled: 'تم تفعيل الوضع الليلي',
                darkModeDisabled: 'تم تعطيل الوضع الليلي',
                notificationsEnabled: 'تم تفعيل الإخطارات',
                notificationsDisabled: 'تم تعطيل الإخطارات',
                languageChanged: 'تم تغيير اللغة',
                emptyInput: 'الرجاء إدخال نص',
                fillRequired: 'الرجاء ملء جميع الحقول المطلوبة',
                invalidEmail: 'الرجاء إدخال بريد إلكتروني صحيح',
                invalidAge: 'العمر يجب أن يكون بين 0 و 150',
                minMaxError: 'القيمة الصغرى يجب أن تكون أصغر من الكبرى',
                confirmDelete: 'هل أنت متأكد من حذف جميع البيانات؟'
            },

            // Footer
            footer: {
                copyright: '© 2026 my-first-project. جميع الحقوق محفوظة.',
                madeWith: 'صُنع بـ ❤️ باستخدام Node.js و JavaScript'
            }
        },

        en: {
            // Header
            appName: 'my-first-project',
            appSubtitle: 'Control Panel & Administration',

            // Navigation
            nav: {
                home: 'Home',
                users: 'Users',
                tools: 'Tools',
                stats: 'Statistics',
                settings: 'Settings'
            },

            // Home Section
            home: {
                welcome: 'Welcome to my-first-project',
                description: 'An advanced Node.js project with a modern and easy-to-use user interface',
                features: {
                    userMgmt: 'User Management',
                    userMgmtDesc: 'Add, edit, and delete users',
                    tools: 'Useful Tools',
                    toolsDesc: 'A collection of helpful tools and helper functions',
                    stats: 'Statistics',
                    statsDesc: 'Display comprehensive statistics about the data',
                    settings: 'Settings',
                    settingsDesc: 'Customize settings according to your needs'
                }
            },

            // Users Section
            users: {
                title: 'User Management',
                addBtn: '+ Add New User',
                formTitle: 'Add New User',
                name: 'Name',
                namePlaceholder: 'Enter name',
                email: 'Email',
                emailPlaceholder: 'Email address',
                age: 'Age',
                agePlaceholder: 'Age',
                save: 'Save',
                cancel: 'Cancel',
                edit: 'Edit',
                delete: 'Delete',
                emptyState: 'No users found. Add a new user!',
                created: 'Created',
                notSpecified: 'Not specified'
            },

            // Tools Section
            tools: {
                title: 'Tools & Helper Functions',
                capitalize: 'Capitalize First Letter',
                random: 'Random Number',
                randomFrom: 'From',
                randomTo: 'To',
                randomGenerate: 'Generate',
                length: 'Text Length',
                lengthCalc: 'Calculate',
                reverse: 'Reverse Text',
                reverseBtn: 'Reverse',
                uppercase: 'Convert to Uppercase',
                uppercaseBtn: 'Convert',
                lowercase: 'Convert to Lowercase',
                lowercaseBtn: 'Convert',
                result: 'Result:',
                resultLength: 'Length:',
                resultChars: 'characters',
                apply: 'Apply',
                randomNumber: 'Random Number:'
            },

            // Statistics Section
            stats: {
                title: 'Statistics',
                totalUsers: 'Total Users',
                activeUsers: 'Active Users',
                avgAge: 'Average Age',
                currentTime: 'Current Time',
                distribution: 'User Distribution'
            },

            // Settings Section
            settings: {
                title: 'Settings',
                appearance: 'Appearance',
                darkMode: 'Dark Mode',
                notifications: 'Enable Notifications',
                language: 'Language',
                data: 'Data',
                export: 'Export Data',
                clear: 'Delete All Data',
                info: 'Application Info',
                version: 'Version',
                developer: 'Developer',
                license: 'License'
            },

            // Notifications
            notifications: {
                welcome: 'Welcome to my-first-project! 👋',
                dataSaved: 'Data saved successfully',
                userAdded: 'User added successfully',
                userUpdated: 'User updated successfully',
                userDeleted: 'User deleted successfully',
                dataExported: 'Data exported successfully',
                dataCleared: 'All data deleted',
                darkModeEnabled: 'Dark mode enabled',
                darkModeDisabled: 'Dark mode disabled',
                notificationsEnabled: 'Notifications enabled',
                notificationsDisabled: 'Notifications disabled',
                languageChanged: 'Language changed',
                emptyInput: 'Please enter text',
                fillRequired: 'Please fill all required fields',
                invalidEmail: 'Please enter a valid email',
                invalidAge: 'Age must be between 0 and 150',
                minMaxError: 'Minimum value must be less than maximum',
                confirmDelete: 'Are you sure you want to delete all data?'
            },

            // Footer
            footer: {
                copyright: '© 2026 my-first-project. All rights reserved.',
                madeWith: 'Made with ❤️ using Node.js & JavaScript'
            }
        }
    },

    currentLanguage: 'ar',

    /**
     * Get translation by key
     * @param {string} key - Translation key (dot notation)
     * @returns {string} Translated text
     */
    t(key) {
        const keys = key.split('.');
        let value = this.languages[this.currentLanguage];
        
        for (const k of keys) {
            value = value?.[k];
        }
        
        return value || key;
    },

    /**
     * Set current language
     * @param {string} lang - Language code (ar, en)
     */
    setLanguage(lang) {
        if (this.languages[lang]) {
            this.currentLanguage = lang;
            document.documentElement.lang = lang;
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
            this.updateUI();
        }
    },

    /**
     * Update all UI text based on current language
     */
    updateUI() {
        // Update navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            const section = link.dataset.section;
            const navKey = `nav.${section}`;
            link.textContent = this.t(navKey);
        });

        // Update section headers
        document.getElementById('home').querySelector('h2').textContent = this.t('home.welcome');
        document.getElementById('home').querySelector('p').textContent = this.t('home.description');

        document.getElementById('users').querySelector('h2').textContent = this.t('users.title');
        document.getElementById('addUserBtn').textContent = this.t('users.addBtn');

        document.getElementById('tools').querySelector('h2').textContent = this.t('tools.title');

        document.getElementById('stats').querySelector('h2').textContent = this.t('stats.title');

        document.getElementById('settings').querySelector('h2').textContent = this.t('settings.title');

        // Update footer
        const footerPs = document.querySelectorAll('.footer p');
        if (footerPs.length >= 2) {
            footerPs[0].textContent = this.t('footer.copyright');
            footerPs[1].textContent = this.t('footer.madeWith');
        }

        // Update form labels
        document.querySelector('label[for="userName"]').textContent = this.t('users.name') + ':';
        document.querySelector('label[for="userEmail"]').textContent = this.t('users.email') + ':';
        document.querySelector('label[for="userAge"]').textContent = this.t('users.age') + ':';

        // Update form buttons
        document.getElementById('userForm').querySelector('button[type="submit"]').textContent = this.t('users.save');
        document.getElementById('cancelBtn').textContent = this.t('users.cancel');

        // Update stats labels
        document.querySelector('.stats-grid .stat-card:nth-child(1) .stat-info h3').textContent = this.t('stats.totalUsers');
        document.querySelector('.stats-grid .stat-card:nth-child(2) .stat-info h3').textContent = this.t('stats.activeUsers');
        document.querySelector('.stats-grid .stat-card:nth-child(3) .stat-info h3').textContent = this.t('stats.avgAge');
        document.querySelector('.stats-grid .stat-card:nth-child(4) .stat-info h3').textContent = this.t('stats.currentTime');

        // Update settings
        document.querySelector('label[for="darkMode"]').nextSibling.textContent = ' ' + this.t('settings.darkMode');
        document.querySelector('label[for="notifications"]').nextSibling.textContent = ' ' + this.t('settings.notifications');
        document.getElementById('exportBtn').textContent = this.t('settings.export');
        document.getElementById('clearBtn').textContent = this.t('settings.clear');
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = i18n;
}
