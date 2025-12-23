# SeriesTracker

Aplicación full-stack para el seguimiento y gestión de series de televisión.

---

## 📋 ¿Qué he hecho hasta ahora?

### ✅ Configuración Inicial del Proyecto

He creado un proyecto **monorepo** con dos aplicaciones separadas:

```
SeriesTracker/
├── client/          # Frontend con Angular 21
└── server/          # Backend con NestJS 11
```

### ✅ Frontend (Angular)

**Comandos ejecutados:**

```bash
# 1. Instalar Angular CLI globalmente
npm install -g @angular/cli

# 2. Crear proyecto Angular con routing y CSS
ng new client --directory ./client --routing --style css

# 3. Instalar TailwindCSS
cd client/
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

**Lo que esto me dio:**
- ✅ Angular 21.0.0 instalado
- ✅ TypeScript 5.9.2 (configuración por defecto de Angular)
- ✅ Standalone components (por defecto en Angular 21)
- ✅ Router configurado con archivo `app.routes.ts` vacío
- ✅ TailwindCSS instalado
- ✅ Prettier configurado (viene por defecto en `package.json`)

**Estado actual:**
- ✅ Proyecto Angular funcionando (`ng serve` en puerto 4200)
- ✅ Componente principal `App` creado
- ✅ TailwindCSS instalado y configurado
- ⚠️ **Sin componentes adicionales creados**
- ⚠️ **Sin servicios creados**
- ⚠️ **Sin rutas definidas**

### ✅ Backend (NestJS)

**Comandos ejecutados:**

```bash
# 1. Instalar NestJS CLI globalmente
npm i -g @nestjs/cli

# 2. Crear proyecto NestJS
cd server/
nest new server
```

**Lo que esto me dio:**
- ✅ NestJS 11.0.1 instalado
- ✅ TypeScript 5.7.3 (configuración por defecto de NestJS)
- ✅ Jest configurado para testing (por defecto)
- ✅ ESLint + Prettier configurados (por defecto)
- ✅ Estructura modular básica:
  - `AppModule` (módulo raíz)
  - `AppController` (controlador con endpoint GET `/`)
  - `AppService` (servicio que devuelve "Hello World!")

**Estado actual:**
- ✅ Servidor funcionando en puerto 3000 (`npm run start:dev`)
- ✅ Endpoint GET `/` que devuelve "Hello World!"
- ⚠️ **Sin base de datos configurada**
- ⚠️ **Sin módulos adicionales creados**
- ⚠️ **Sin DTOs ni validación**
- ⚠️ **Sin autenticación**
- ⚠️ **Sin CORS configurado**

---

## 📝 Notas Importantes

### Lo que YA tengo (configuración por defecto)
- ✅ **TypeScript** configurado en ambos proyectos (por defecto de Angular/NestJS)
- ✅ **Prettier** configurado en `.prettierrc`
- ✅ **Jest** configurado en NestJS (por defecto)
- ✅ **ESLint** configurado en NestJS (por defecto)
- ✅ **Angular standalone components** (por defecto en Angular 21)
- ✅ **NestJS estructura modular** (por defecto)
- ✅ **Configurar TailwindCSS** en `styles.css` (añadir directivas `@tailwind`)
- ✅ **Prisma instalado en el backend**

### Lo que he instalado YO manualmente
- ✅ **TailwindCSS** (instalado pero falta configurar en `styles.css`)
- ✅ **Angular CLI** (instalado globalmente)
- ✅ **NestJS CLI** (instalado globalmente)

### Lo que AÚN NO he hecho
- ❌ **Base de datos** (sin instalar ni configurar)
- ❌ **Variables de entorno** (sin `.env` ni `@nestjs/config`)
- ❌ **CORS** (sin configurar en el backend)
- ❌ **Validación de datos** (sin `class-validator`)
- ❌ **Autenticación** (sin implementar)
- ❌ **HttpClient** en Angular (sin configurar)
- ❌ **Componentes** adicionales (solo el App por defecto)
- ❌ **Servicios** (ninguno creado)
- ❌ **Rutas** (archivo vacío)
- ❌ **Tests** (frameworks instalados pero sin tests escritos)

---

**Última actualización:** 23 de diciembre de 2025
