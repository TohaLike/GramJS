1. Для запуска необходимо сделать приложение в https://my.telegram.org/auth.
2. После того как мы его сделали, в проекте делаем .env файл и записываем туда App api_id и App api_hash который телеграм нам выдаёт после создания приложения
<img width="344" alt="image" src="https://github.com/user-attachments/assets/3f0ca517-596e-4a7b-8ec3-6f636fefbac6" />

3. Теперь надо авторизоваться, для этого активируем скрипт для аутентификации "node auth/telegram-auth.js", или через npm scripts в VScode.
4. После этого мы можем отправлять сообщения по id пользователя 
<img width="914" alt="image" src="https://github.com/user-attachments/assets/771833ce-324d-4ed2-ba9a-2c88443f4964" />

В примере идёт отправка сообщения самому себе
