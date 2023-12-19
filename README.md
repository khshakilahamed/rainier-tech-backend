## Installation and setup

How to install-

```npm
npm install
```

or,

```npm
yarn
```

## Functional Requirements

### User

- User can register, login.

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
- `GET /api/course/6580a7bc32698d834649b133` - get single course
- `PATCH /api/course/6580a7bc32698d834649b133` - update a course
- `DELETE /api/course/6580a7bc32698d834649b133` - Delete a course
