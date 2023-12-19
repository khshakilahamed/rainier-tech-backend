## Important links-

- [Live Link](https://rainier-technologies.vercel.app/)

## Installation and setup

How to install-

```npm
npm install
```

or,

```npm
yarn
```

setup .env file-

```env
DATABASE_URL= <your mongoDB database url>
PORT=5000
SALT_ROUNDS=12

JWT_SECRET=rainier-technologies
JWT_EXPIRE="365d"
```

## Functional Requirements

### User

- User can register.
- User can login.

### Course

- Course can create by user.
- Course can get by user.
- Course can update by user.
- Course can delete by user.

---

## API Endpoints

### Auth

- `POST /api/auth/register`
- `POST /api/auth/login`

### Course

- `POST /api/course/create`
- `GET /api/course`
- `GET /api/course?searchTerm=introduction&page=1&per_page=10` - search by name & level
- `GET /api/course/6580a7bc32698d834649b133` - get single course
- `PATCH /api/course/6580a7bc32698d834649b133` - update a course
- `DELETE /api/course/6580a7bc32698d834649b133` - Delete a course

## Sample data

Register-

```json
{
  "email": "shakil@gmail.com",
  "password": "123456"
}
```

Login-

```json
{
  "email": "shakil@gmail.com",
  "password": "123456"
}
```

create a course-

```json
{
  "name": "Introduction to Web Development",
  "description": "A Comprehensive Introduction to Web Development.",
  "price": 5000,
  "duration": "8 weeks",
  "level": "Beginner",
  "topics": [
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "Express.js",
    "RESTful APIs"
  ],
  "schedule": {
    "startDate": "2023-02-15",
    "endDate": "2023-04-10",
    "classDays": ["Monday", "Wednesday", "Friday"],
    "classTime": "18:00 - 20:00"
  }
}
```
