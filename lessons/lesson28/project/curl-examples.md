# Примеры запросов (curl)

Сервер: `http://localhost:3000`.
Авторизация: заголовок `token: password` (для `/cats/*` и `/animals/secret-route`).

## Animals

```bash
# Список
curl -s http://localhost:3000/animals/list

# Один по id
curl -s http://localhost:3000/animals/instance/1

# Создать
curl -s -X POST http://localhost:3000/animals/create \
  -H "Content-Type: application/json" \
  -d '{"id": 10, "name": "Шарик", "type": "dog"}'

# Секретный маршрут (нужен token)
curl -s http://localhost:3000/animals/secret-route -H "token: password"
```

## Cats (все маршруты требуют token)

```bash
# Список
curl -s http://localhost:3000/cats/list -H "token: password"

# Один по id
curl -s http://localhost:3000/cats/1 -H "token: password"

# Добавить
curl -s -X POST http://localhost:3000/cats/99 \
  -H "Content-Type: application/json" \
  -H "token: password" \
  -d '{"id": 99, "name": "Васька"}'
```

## Dogs

```bash
# Список
curl -s http://localhost:3000/dogs/list

# Один по id
curl -s http://localhost:3000/dogs/1

# Добавить
curl -s -X POST http://localhost:3000/dogs/ \
  -H "Content-Type: application/json" \
  -d '{"id": 5, "name": "Бобик"}'
```
