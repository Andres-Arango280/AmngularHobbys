# Landing page musical con Angular

Página de presentación hecha con Angular 16, con secciones de eventos y fotos, y un formulario «Únete» que guarda las solicitudes en MongoDB Atlas a través de una API en Node.js.

## Tecnologías

| Parte | Tecnología |
| --- | --- |
| Frontend | Angular 16, TypeScript, SCSS |
| Backend | Node.js, Express 5 |
| Base de datos | MongoDB Atlas con Mongoose |

## Funcionalidades

- Secciones de inicio, eventos y fotos, con datos servidos por servicios de Angular
- Formulario «Únete» con nombre, correo, género musical, descripción y redes sociales
- Endpoint `POST /api/unete` que valida y guarda cada solicitud con fecha de creación

## Estructura

```
backend/
└── server.js              # API Express + modelo Mongoose
landingpage-angular16/src/app/
├── core/
│   ├── components/        # header, home, eventos, fotos, unete, footer
│   ├── constants/         # datos de eventos y fotos
│   ├── interfaces/        # tipos Evento y Fotos
│   └── services/          # eventos, fotos y unete
└── public/pages/home/     # módulo y rutas de la página principal
```

## Cómo ejecutarlo

Necesitas Node.js 18 o superior, Angular CLI 16 y una base de datos en MongoDB Atlas.

**1. Backend**

```bash
cd backend
npm install
cp .env.example .env   # escribe tu MONGO_URI
node server.js
```

La API queda en `http://localhost:3000`.

**2. Frontend** (en otra terminal)

```bash
cd landingpage-angular16
npm install
ng serve
```

Abre `http://localhost:4200`.

## Autor

Brahian Andrés Osorio Arango — [GitHub](https://github.com/Andres-Arango280)
