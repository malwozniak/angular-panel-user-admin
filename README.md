# angular-admin-user-panel-5kjqoe

[Edit on StackBlitz ⚡️](https://angular-admin-panel-user-dashboard.stackblitz.io)

**Celem zadania jest utworzenie aplikacji internetowej, która zarządza danymi o użytkownikach.  
Założenia funkcjonalne:**

- dodawanie / edycja / usuwanie / lista użytkowników / podgląd użytkownika (dane użytkowników mogą być przechowywane w statycznym pliku JSON lub z użyciem dowolnego „fake api”), - generator haseł (A-Z, 0-9),
- pola formularza:  
  ADMIN - login, e-mail, hasło oraz typ konta (admin/user) USER - imię, nazwisko, e-mail, hasło oraz typ konta (admin/user),

**1. Lista.**  
Na liście użytkowników powinna wyświetlić się tabela z kolumnami: e-mail oraz typ konta.

**2. Dodawanie.**  
Na liście użytkowników powinien wyświetlić się przycisk, który po kliknięciu rozwija menu z wyborem czy chcemy stworzyć użytkownika czy administratora. Po wyborze typu konta powinniśmy zostać przekierowani do odpowiedniego formularza (typ konta umieszczamy w routingu np. users/create lub administrators/create z uwagą na to, że w przyszłości może zostać dodany kolejny typ konta – „guest”). Pole type powinno być uzupełnione na podstawie routingu, a input zablokowany bez możliwości edycji.

**3. Edycja.**  
W formularzu edycji powinniśmy mieć możliwość zmiany adresu e-mail oraz hasła.

**4. Podgląd.**  
W podglądzie wyświetl dane użytkownika oraz wykres (chartjs) z dowolnymi danymi.

**3. Usuwanie.**  
Na liście powinien wyświetlić się przycisk do usuwania zaznaczonych użytkowników.  
Oczekiwany stack technologiczny:

- Angular/React,
- dowolny framework CSS (np. Bootstrap)
