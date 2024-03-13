
describe('автотесты для формы логина и пароля ', function () {
    
    it('позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru'); // ввел логин
        cy.get('#loginButton').should('be.disabled'); // кнопка войти не кликабельная
        cy.get('#pass').type('iLoveqastudio1'); // вел правильный пароль 
        cy.get('#loginButton').should('be.enabled'); // кнопка войти  кликабельная
        cy.get('#loginButton').click(); // нажимаю войти 
        cy.get('#messageHeader').should('be.visible'); //   текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //  есть крестик.
         })

    it(' негативный кейс авторизации(пароль)', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru'); // ввел логин
        cy.get('#loginButton').should('be.disabled'); // кнопка войти не кликабельная
        cy.get('#pass').type('iLovetudio1'); // вел  не правильный пароль 
        cy.get('#loginButton').should('be.enabled'); // кнопка войти  кликабельная
        cy.get('#loginButton').click(); // нажимаю войти
        cy.get('#messageHeader').should('be.visible'); //   текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //  есть крестик. 

       })

    it(' негативный кейс авторизации(валидациия)', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru'); // ввел логин без @
        cy.get('#loginButton').should('be.disabled'); // кнопка войти не кликабельная
        cy.get('#pass').type('iLoveqastudio1'); // вел   правильный пароль 
        cy.get('#loginButton').should('be.enabled'); // кнопка войти  кликабельная
        cy.get('#loginButton').click(); // нажимаю войти
        cy.get('#messageHeader').should('be.visible'); //   текст виден пользователю
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //  есть крестик. 

       })
    it(' негативный кейс авторизации(логин)', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germando@kv.ru'); // ввел  не правильно логин
        cy.get('#loginButton').should('be.disabled'); // кнопка войти не кликабельная
        cy.get('#pass').type('iLoveqastudio1'); // вел   правильный пароль 
        cy.get('#loginButton').should('be.enabled'); // кнопка войти  кликабельная
        cy.get('#loginButton').click(); // нажимаю войти
        cy.get('#messageHeader').should('be.visible'); //   текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //  есть крестик. 

       })

   
   it(' Забыли пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click(); //  нажал забыл пароль. 
        cy.get('#mailForgot').type('german@dolnikov.ru');  // вставил почту
        cy.get('#restoreEmailButton').click(); //  отправить код нажал
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //  есть крестик. 


       })


   it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  

  
        })


})


