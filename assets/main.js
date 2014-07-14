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
                "National Aerospace University – Kharkiv Aviation Institute": "Национальный аэрокосмический университет имени Н. Е. Жуковского",
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
                'I do not like to "reinventing the wheels" and use ready-made technology':
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
                "Programming languages knowledge, ten scale evaluation:":
                    "Знание языков программирования по десятибальной шкале:",
                "Markup languages and technologies knowledge, ten scale evaluation:":
                    "Знание языков разметки и технологий по десятибальной шкале:",
                '<abbr title="Database management system">DBMS</abbr> knowledge, ten scale evaluation:':
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
                "Jun 2013" : "Июнь 2013",
                "January 2013" : "Январь 2013",
                "October 2011" : "Октябрь 2011",
                "October 2012" : "Октябрь 2012",
                "December 2012" : "Декабрь 2012",
                "Developed in the period:" : "Разрабатывал в период:",
                "October 2013 - December 2013" : "Октябрь 2013 - Декабрь 2013",
                "March 2014 - May 2014" : "Март 2014 - Май 2014",
                "June 2014" : "Июнь 2014",
                "Development of computer games":"Разработка компьютерных игр",
                "Computer Graphics" : "Компьютерная графика",
                "Cryptography solutoins" : "Криптографические решения",
                "Portfolio of web applications" : "Портфолио веб-приложений",
                "Portfolio of desktop applications" : "Портфолио настольных приложений",
                "Portfolio of computer games" : "Портфолио компьютерных игр",
                "Portfolio of graphics applications" : "Портфолио графических приложений",
                "GitHub:" : "Гитхаб:",
                "Name:" : "Имя:",
                "Description:" : "Описание:",
                "Translates EN texts to RU. <br/> For working with this program user must copy to clipboard any english text and push Left + Right Ctrls. <br/> Program uses Microsoft translation service and Windows WinAPI hooks" : "Переводчик английских текстов на русские. <br/> Для работы с этой программой необходимо скопировать английский текст в буфер обмена и зажать правый и левый ctrl. <br/> Программа использует сервис переводов Microsoft translation service и Windows WinAPI hooks",
                "Application for storing user passwords. <br/> User enter the category and add logins with passwords" : "Программа для хранения паролей. <br/> Пользователь создает категорию паролей и записывает логины и пароли",
                "Application for binary encryption any files. <br/> User must specify the path to file that will be encrypthed and enter encrypth key for substitutions and permutations algorithms. The encrypth key will be used for future decrypthion" : "Программа для бинарного шифрования любых файлов. <br/> Пользователь должен указать путь к шифруемому файлу и ввести ключ для подстановочных и перестановочных алгоритмов шифрования. В дальнейшем ключ будет использоватся для расшифровки",
                "Player must place the balls of the same colors in a line for theirs disappearance and get points. <br/> Game has many changeable options, such as game field size, number of balls in line, speeds of animations etc." : "Игрок должен помещать шарики одного цвета в линию для их исчезновения и накопления очков. <br/> Игра имеет множество настроек, таких как размер игрового поля, количество шариков в линии, скорости анимаций и др.",
                "Player places ships on his field and begins to shoot at enemy field and to destroy the enemy ships. Player who first destroys all enemy ships is winner" : "Игрок должен уничтожить все вражеские корабли. <br/> Игрок помещает свои корабли, затем начинает вести огонь по полю соперника и уничтожать его корабли. Для победы игрок длолжен первым уничтожить все корабли противника",
                "Program that demonstrates methods to perform affine transformations on the plane" : "Программа, демонстрирующая методы осуществления аффинных преобразований на плоскости",
                "Programs to determine functions intersection points" : "Программа для определения точек пересечения функций",
                "Program that demonstates 3D manipulator kinematic model" : "Программа, демонстрирующая трехмерную кинематическую модель манипулятора"
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
            headers.eq(5).text(this.translate("Portfolio of web applications"));
            headers.eq(6).text(this.translate("Portfolio of desktop applications"));
            headers.eq(7).text(this.translate("Portfolio of computer games"));
            headers.eq(8).text(this.translate("Portfolio of graphics applications"));

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

            for(var i = 0; i < 21; i += 6){
                tableHeaders.eq(42 + i).text(this.translate("Link:"));
                tableHeaders.eq(43 + i).text(this.translate("GitHub:"));
                tableHeaders.eq(44 + i).text(this.translate("Screenshot:"));
                tableHeaders.eq(45 + i).text(this.translate("Developed in the period:"));
                tableHeaders.eq(46 + i).text(this.translate("My participation in development:"));
                tableHeaders.eq(47 + i).text(this.translate("Used technologies and languages:"));
            }

            tableHeaders.eq(54).text(this.translate("Link:"));
            tableHeaders.eq(55).text(this.translate("GitHub:"));
            tableHeaders.eq(56).text(this.translate("Developed in the period:"));
            tableHeaders.eq(57).text(this.translate("My participation in development:"));
            tableHeaders.eq(58).text(this.translate("Used technologies and languages:"));

            for(var i = 0; i < 35; i += 7){
                tableHeaders.eq(59 + i).text(this.translate("Name:"));
                tableHeaders.eq(60 + i).text(this.translate("GitHub:"));
                tableHeaders.eq(61 + i).text(this.translate("Description:"));
                tableHeaders.eq(62 + i).text(this.translate("Screenshot:"));
                tableHeaders.eq(63 + i).text(this.translate("Developed in the period:"));
                tableHeaders.eq(64 + i).text(this.translate("My participation in development:"));
                tableHeaders.eq(65 + i).text(this.translate("Used technologies and languages:"));
            }

            for(var i = 0; i < 24; i += 6){
                tableHeaders.eq(94 + i).text(this.translate("Name:"));
                tableHeaders.eq(95 + i).text(this.translate("GitHub:"));
                tableHeaders.eq(96 + i).text(this.translate("Screenshot:"));
                tableHeaders.eq(97 + i).text(this.translate("Developed in the period:"));
                tableHeaders.eq(98 + i).text(this.translate("My participation in development:"));
                tableHeaders.eq(99 + i).text(this.translate("Used technologies and languages:"));
            }

            var tableDatas = $('table td');
            tableDatas.eq(0).text(this.translate("Anton"));
            tableDatas.eq(1).text(this.translate("Zaderikhin"));
            tableDatas.eq(3).text(this.translate("Male"));
            tableDatas.eq(5).text(this.translate("Ukrainian"));
            tableDatas.eq(9).text(this.translate("National Aerospace University – Kharkiv Aviation Institute"));
            tableDatas.eq(10).text(this.translate("Software Engineering"));
            tableDatas.eq(11).text(this.translate("Bachelor"));
            tableDatas.eq(12).text(this.translate("July 2013"));

            tableDatas.eq(13).text(this.translate("C1 (Level of professional ownership)"));
            tableDatas.eq(14).text(this.translate("B2 (Threshold advanced level)"));
            tableDatas.eq(15).text(this.translate("B2 (Threshold advanced level)"));
            tableDatas.eq(16).text(this.translate("B1 (Threshold level)"));

            tableDatas.eq(45).text(this.translate('October 2013 - December 2013'));
            tableDatas.eq(46).text(this.translate('Developed all "from scratch"'));
            tableDatas.eq(51).text(this.translate('March 2014 - May 2014'));
            tableDatas.eq(52).text(this.translate('Developed all "from scratch"'));
            tableDatas.eq(54).text(this.translate('This site!'));
            tableDatas.eq(56).text(this.translate('June 2014'));
            tableDatas.eq(57).text(this.translate('Developed all "from scratch"'));
            tableDatas.eq(61).html(this.translate('Application for storing user passwords. <br/> User enter the category and add logins with passwords. <br/> Program saves all data in the text file'));
            tableDatas.eq(63).text(this.translate('October 2011'));
            tableDatas.eq(64).text(this.translate('Developed all "from scratch"'));
            tableDatas.eq(68).html(this.translate('Application for binary encryption any files. <br/> User must specify the path to file that will be encrypthed and enter encrypth key for substitutions and permutations algorithms. The encrypth key will be used for future decrypthion'));
            tableDatas.eq(70).text(this.translate('December 2012'));
            tableDatas.eq(71).text(this.translate('Developed all "from scratch"'));
            tableDatas.eq(75).html(this.translate('Translates EN texts to RU. <br/> For working with this program user must copy to clipboard any english text and push Left + Right Ctrls. <br/> Program uses Microsoft translation service and Windows WinAPI hooks'));
            tableDatas.eq(77).text(this.translate('January 2013'));
            tableDatas.eq(78).text(this.translate('Developed all "from scratch"'));
            tableDatas.eq(82).html(this.translate('Player must place the balls of the same colors in a line for theirs disappearance and get points. <br/> Game has many changeable options, such as game field size, number of balls in line, speeds of animations etc.'));
            tableDatas.eq(84).text(this.translate('July 2013'));
            tableDatas.eq(85).text(this.translate('Developed all "from scratch"'));
            tableDatas.eq(89).html(this.translate('Player places ships on his field and begins to shoot at enemy field and to destroy the enemy ships. Player who first destroys all enemy ships is winner'));
            tableDatas.eq(91).text(this.translate('Jun 2013'));
            tableDatas.eq(92).text(this.translate('Developed all "from scratch"'));
            tableDatas.eq(94).text(this.translate('Program that demonstrates methods to perform affine transformations on the plane'));
            tableDatas.eq(97).text(this.translate('October 2012'));
            tableDatas.eq(98).text(this.translate('Developed all "from scratch"'));
            tableDatas.eq(100).text(this.translate('Programs to determine functions intersection points'));
            tableDatas.eq(103).text(this.translate('October 2012'));
            tableDatas.eq(104).text(this.translate('Developed all "from scratch"'));
            tableDatas.eq(106).text(this.translate('Program that demonstates 3D manipulator kinematic model'));
            tableDatas.eq(109).text(this.translate('October 2012'));
            tableDatas.eq(110).text(this.translate('Developed all "from scratch"'));

            var uLists = $('ul li');
            uLists.eq(0).text(this.translate("Pedantic"));
            uLists.eq(1).text(this.translate("Plodding"));
            uLists.eq(2).text(this.translate("I like to learn and explore new technologies"));
            uLists.eq(3).text(this.translate("I like to finish the work started"));
            uLists.eq(4).text(this.translate("Perform the work efficiently and on time"));
            uLists.eq(5).text(this.translate("I am able to understand code of another developers"));
            uLists.eq(6).text(this.translate('I do not like to "reinventing the wheels" and use ready-made technology'));
            uLists.eq(7).text(this.translate("Adhere to standards when writing code"));
            uLists.eq(8).text(this.translate("Web design"));
            uLists.eq(9).text(this.translate("Front-end development"));
            uLists.eq(10).text(this.translate("Backend Development"));
            uLists.eq(11).text(this.translate("HTML Coding"));
            uLists.eq(12).text(this.translate("Database Development"));
            uLists.eq(13).text(this.translate("Desktop Application Development"));
            uLists.eq(14).text(this.translate("Development of computer games"));
            uLists.eq(15).text(this.translate("Computer Graphics"));
            uLists.eq(16).text(this.translate("Cryptography solutoins"));
            
            var h2 = $('h2');
            h2.eq(0).text(this.translate("Personal qualities:"));
            h2.eq(1).text(this.translate("English proficiency:"));
            h2.eq(2).text(this.translate("Programming languages knowledge, ten scale evaluation:"));
            h2.eq(3).text(this.translate("Markup languages and technologies knowledge, ten scale evaluation:"));
            h2.eq(4).html(this.translate('<abbr title="Database management system">DBMS</abbr> knowledge, ten scale evaluation:'));
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