# 📬 Contact API (Node.js + Express + MongoDB + SendGrid)

API destinada a recibir mensajes desde un portafolio web.\
Guarda los mensajes en MongoDB Atlas y envía un correo vía SendGrid al
administrador.\
Funciona localmente o en producción usando Docker y Render.

---

## 🚀 Características principales

- Recibe mensajes desde un formulario (`name`, `email`, `message`)
- Guarda cada mensaje en MongoDB Atlas
- Envía notificaciones por correo usando SendGrid
- Protección anti-spam (máx. 5 mensajes por minuto por IP)
- Compatible con Docker (despliegue fácil en Render)
- 100% basada en ES Modules (import/export)

---

## 📁 Estructura del proyecto

    root
    ├── Dockerfile
    ├── docker-compose.yml
    ├── index.js
    ├── package.json
    ├── src
    │   ├── controllers
    │   │   └── contact.usecases.js
    │   ├── lib
    │   │   ├── Db
    │   │   │   └── db.js
    │   │   └── Email
    │   │       ├── sendEmail.js
    │   │       └── renderTemplate.js
    │   ├── middlewares
    │   │   └── rateLimiter.js
    │   ├── models
    │   │   └── Contact.js
    │   ├── routes
    │   │   └── contact.routes.js
    │   └── templates
    │       └── sendEmail.html
    └── README.md

---

## ⚙️ Variables de entorno

Crea un archivo `.env` con:

    DB_USER=admin
    DB_PASSWORD=yourpassword
    DB_CLUSTER=mycluster.mongodb.net
    DB_NAME=portfolio

    SENDGRID_API_KEY=SG.xxxxxx
    FROM_EMAIL=correo-verificado@tudominio.com
    MY_EMAIL=destino@tudominio.com

    PORT=4000

---

## 🧪 Endpoint disponible

### **POST /api/contact**

Envía un mensaje desde el portafolio.

#### **Body JSON**

```json
{
  "name": "Adán Lugo",
  "email": "example@gmail.com",
  "message": "Hola, quiero contactarme contigo."
}
```

#### Respuesta exitosa

```json
{
  "success": true,
  "msg": "Mensaje enviado ✔️"
}
```

#### Respuesta por límite (anti-spam)

```json
{
  "success": false,
  "msg": "Has enviado demasiados mensajes. Inténtalo de nuevo en un minuto."
}
```

---

## ▶️ Ejecutar en desarrollo

    npm install
    npm run dev

La API estará disponible en:

    http://localhost:4000

---

## 🐳 Ejecutar con Docker

### Construir imagen

    docker compose build

### Iniciar contenedor

    docker compose up

---

## ☁️ Despliegue en Render

1.  Sube tu repositorio a GitHub\
2.  Crea un Web Service en Render → "Deploy from GitHub"\
3.  Render detectará tu Dockerfile automáticamente\
4.  Agrega variables de entorno en Dashboard → Environment\
5.  Deploy automático

---

## 🛡️ Seguridad

- Rate limiting contra spam (5 req/min)
- Sanitización de inputs
- CORS habilitado (ajustable)
- MongoDB Atlas (cluster seguro)
- SendGrid con `replyTo`

---

## 👨‍💻 Autor

**Adán Lugo (ElderL99)**\
Desarrollador Full Stack\
GitHub: https://github.com/ElderL99

---

## 📄 Licencia

MIT License
