$(function () {
    function Application() {
        window.ru = false;
        var self = this;
        
        this.translate = function (text) {
            var dict = {
                "Welcome to the website of Anton Zaderikhin resume!": "Добро пожаловать на сайт-резюме Антона Задерихина!",
                "Personal information": "Личная информация",
                "Name:": "Имя:",
                "Anton": "Антон",
                "Male" : "Мужской",
                "Surname:": "Фамилия",
                "Zaderikhin": "Задерихин",
                "Nick:": "Ник:",
                "Gender:": "Пол:",
                "Date of Birth:": "Дата рождения:",
                "Nationality:": "Национальность:",
                "Ukrainian": "Украинец",
                "Contacts": "Контакты",
                "Telephone:": "Телефон:",
                "E-mail:": "Эл. Почта:",
                "Skype:": "Скайп:",
                "Education": "Образование",
                "Place of study:": "Место обучения:",
                "Kharkov Aerospace University. M.E.Zhukovskogo": "Харьковский Авиационный Институт им.М.Е.Жуковского",
                "Occupation:": "Специальность:",
                "Software Engineering": "Программная инженерия",
                "Qualification:": "Квалификация:",
                "Bachelor": "Бакалавр",
                "Field of activity": "Сфера деятельности",
                "Web design": "Веб разработка",
                "Front-end development": "Фронтенд разработка",
                "Backend Development": "Бэкенд разработка",
                "HTML Coding": "HTML Верстка",
                "Database Development": "Разработка баз данных",
                "Desktop Application Development": "Разработка настольных приложений",
                "Development of computer games": "Разработка компьютерных игр",
                "Skills and abilities": "Умения и навыки",
                "Personal qualities:": "Личные качества характера:",
                "Pedantic": "Педантичный",
                "Plodding": "Трудолюбивый",
                "I like to learn and explore new technologies":
                    "Люблю учиться и изучать новые технологии",
                "I like to finish the work started": "Люблю заканчивать начатое",
                "Perform the work efficiently and on time": "Выполняю работу качественно и в срок",
                "I am able to understand code of another developers":
                    "Умею читать код других разработчиков",
                "I do not like to write 'bikes' and use ready-made technology":
                    "Не люблю 'изобретать велосипеды' и использую только готовые решения",
                "Adhere to standards when writing code":
                    "Придерживаюсь стандартов в написании кода",
                "English proficiency:": "Знания английского языка:",
                "Reading technical books:": "Чтение технической литературы:",
                "C1 (Level of professional ownership)": "C1 (Уровень професионального владения)",
                "Reading common literature:": "Чтение обычной литературы",
                "B2 (Threshold advanced level)": "B2 (Пороговый продвинутый уровень)",
                "Writing technical literature:": "Навыки письма технической литературы",
                "Writing common literature:": "Навыки письма обычной литературы",
                "B1 (Threshold level)": "B1 (Пороговый уровень)",
                "Knowledge of programming languages​on a ten scale:":
                    "Знание языков программирования по десятибальной шкале:",
                "Knowledge of markup languages and technologies on a ten scale:":
                    "Знание языков разметки и технологий по десятибальной шкале:",
                'Knowledge of <abbr title="Database management system">DBMS</abbr> on a ten scale:':
                    'Знание <abbr title="Система управления базами данных">СУБД</abbr> по десятибальной шкале:',
                "Portfolio": "Портфолио",
                "Link:": "Ссылка:",
                "Screenshot:": "Скриншот:",
                "My participation in development:": "Мое участие в разработке:",
                'Developed all "from scratch"': 'Разработал все с "нуля"',
                "Used technologies and languages:": "Используемые языки и технологии:",
                "This site!": "Этот сайт!",
                "Graduated:" : "Закончил обучение:",
                "July 2013" : "Июль 2013",
                "Developed in the period:" : "Разрабатывал в период:",
                "October 2013 - December 2013" : "Октябрь 2013 - Декабрь 2013",
                "March 2014 - May 2014" : "Март 2014 - Май 2014",
                "June 2014" : "Июнь 2014"
            };
            if (window.ru) {
                return dict[text];
            }
            return text;
        }

        this.translateAll = function () {
            $('.welcome-text')
                .text(this.translate("Welcome to the website of Anton Zaderikhin resume!"));
            var headers = $('.header');
            headers.eq(0).text(this.translate("Personal information"));
            headers.eq(1).text(this.translate("Contacts"));
            headers.eq(2).text(this.translate("Education"));
            headers.eq(3).text(this.translate("Field of activity"));
            headers.eq(4).text(this.translate("Skills and abilities"));
            headers.eq(5).text(this.translate("Portfolio"));
            var tableHeaders = $('table th');
            tableHeaders.eq(0).text(this.translate("Name:"));
            tableHeaders.eq(1).text(this.translate("Surname:"));
            tableHeaders.eq(2).text(this.translate("Nick:"));
            tableHeaders.eq(3).text(this.translate("Gender:"));
            tableHeaders.eq(4).text(this.translate("Date of Birth:"));
            tableHeaders.eq(5).text(this.translate("Nationality:"));
            tableHeaders.eq(6).text(this.translate("Telephone:"));
            tableHeaders.eq(7).text(this.translate("E-mail:"));
            tableHeaders.eq(8).text(this.translate("Skype:"));
            tableHeaders.eq(9).text(this.translate("Place of study:"));
            tableHeaders.eq(10).text(this.translate("Occupation:"));
            tableHeaders.eq(11).text(this.translate("Qualification:"));
            tableHeaders.eq(12).text(this.translate("Graduated:"));
            tableHeaders.eq(13).text(this.translate("Reading technical books:"));
            tableHeaders.eq(14).text(this.translate("Reading common literature:"));
            tableHeaders.eq(15).text(this.translate("Writing technical literature:"));
            tableHeaders.eq(16).text(this.translate("Writing common literature:"));
            tableHeaders.eq(42).text(this.translate("Link:"));
            tableHeaders.eq(43).text(this.translate("Developed in the period:"));
            tableHeaders.eq(44).text(this.translate("Screenshot:"));
            tableHeaders.eq(45).text(this.translate("My participation in development:"));
            tableHeaders.eq(46).text(this.translate("Used technologies and languages:"));
            tableHeaders.eq(47).text(this.translate("Link:"));
            tableHeaders.eq(48).text(this.translate("Developed in the period:"));
            tableHeaders.eq(49).text(this.translate("Screenshot:"));
            tableHeaders.eq(50).text(this.translate("My participation in development:"));
            tableHeaders.eq(51).text(this.translate("Used technologies and languages:"));
            tableHeaders.eq(52).text(this.translate("Link:"));
            tableHeaders.eq(53).text(this.translate("Developed in the period:"));
            tableHeaders.eq(54).text(this.translate("My participation in development:"));
            tableHeaders.eq(55).text(this.translate("Used technologies and languages:"));
            var tableDatas = $('table td');
            tableDatas.eq(0).text(this.translate("Anton"));
            tableDatas.eq(1).text(this.translate("Zaderikhin"));
            tableDatas.eq(3).text(this.translate("Male"));
            tableDatas.eq(5).text(this.translate("Ukrainian"));
            tableDatas.eq(9).text(this.translate("Kharkov Aerospace University. M.E.Zhukovskogo"));
            tableDatas.eq(10).text(this.translate("Software Engineering"));
            tableDatas.eq(11).text(this.translate("Bachelor"));
            tableDatas.eq(12).text(this.translate("July 2013"));
            tableDatas.eq(13).text(this.translate("C1 (Level of professional ownership)"));
            tableDatas.eq(14).text(this.translate("B2 (Threshold advanced level)"));
            tableDatas.eq(15).text(this.translate("B2 (Threshold advanced level)"));
            tableDatas.eq(16).text(this.translate("B1 (Threshold level)"));
            tableDatas.eq(43).text(this.translate('October 2013 - December 2013'));
            tableDatas.eq(45).text(this.translate('Developed all "from scratch"'));
            tableDatas.eq(48).text(this.translate('March 2014 - May 2014'));
            tableDatas.eq(50).text(this.translate('Developed all "from scratch"'));
            tableDatas.eq(52).text(this.translate('This site!'));
            tableDatas.eq(53).text(this.translate('June 2014'));
            tableDatas.eq(54).text(this.translate('Developed all "from scratch"'));
            var uLists = $('ul li');
            uLists.eq(0).text(this.translate("Pedantic"));
            uLists.eq(1).text(this.translate("Plodding"));
            uLists.eq(2).text(this.translate("I like to learn and explore new technologies"));
            uLists.eq(3).text(this.translate("I like to finish the work started"));
            uLists.eq(4).text(this.translate("Perform the work efficiently and on time"));
            uLists.eq(5).text(this.translate("I am able to understand code of another developers"));
            uLists.eq(6).text(this.translate("I do not like to write 'bikes' and use ready-made technology"));
            uLists.eq(7).text(this.translate("Adhere to standards when writing code"));
            uLists.eq(8).text(this.translate("Web design"));
            uLists.eq(9).text(this.translate("Front-end development"));
            uLists.eq(10).text(this.translate("Backend Development"));
            uLists.eq(11).text(this.translate("HTML Coding"));
            uLists.eq(12).text(this.translate("Database Development"));
            uLists.eq(13).text(this.translate("Desktop Application Development"));
            uLists.eq(14).text(this.translate("Development of computer games"));
            
            var h2 = $('h2');
            h2.eq(0).text(this.translate("Personal qualities:"));
            h2.eq(1).text(this.translate("English proficiency:"));
            h2.eq(2).text(this.translate("Knowledge of programming languages​on a ten scale:"));
            h2.eq(3).text(this.translate("Knowledge of markup languages and technologies on a ten scale:"));
            h2.eq(4).html(this.translate('Knowledge of <abbr title="Database management system">DBMS</abbr> on a ten scale:'));
        }

        this.initCallbacks = function () {
            
            $('.text:gt(0)').hide();
            
            $('.trig-lang, .trig-switch-el').click(function () {
                if (window.ru) {
                    window.ru = false;
                    $('.trig-switch-el').animate({marginTop: "0px"}, "700", "easeOutQuad");
                    $('.trig-lang').text("EN");
                } else {
                    window.ru = true;
                    $('.trig-switch-el').animate({marginTop: "43px"}, "700", "easeOutQuad");
                    $('.trig-lang').text("RU");
                }
                self.translateAll();
            });

            $('.header').click(function (e) {
                var textEl = e.currentTarget.nextElementSibling;
                $('.text').hide({effect: "blind", duration: 500});
                $(textEl).show({effect: "blind", duration: 500, complete: function () {
                    $('html,body').animate({scrollTop: $(e.currentTarget).offset().top}, {duration: 300});
                }});
            });

        }
    }

    var application = new Application();
    application.initCallbacks();
});