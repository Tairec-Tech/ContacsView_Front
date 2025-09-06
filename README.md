# ContactView - Frontend

Aplicación web para gestión de contactos desarrollada con React, TypeScript y Bootstrap.

## 🚀 Características

- **Autenticación segura**: Login y registro de usuarios
- **Gestión de contactos**: Crear, ver, editar contactos
- **Perfil de usuario**: Editar información personal
- **Favoritos**: Marcar contactos como favoritos
- **Búsqueda**: Buscar contactos por nombre, email o teléfono
- **Responsive**: Diseño adaptable a dispositivos móviles
- **Interfaz moderna**: UI limpia y fácil de usar

## 📋 Funcionalidades

### Páginas principales:
1. **Home Page** (`/`) - Página de inicio con información de la aplicación
2. **Login** (`/login`) - Iniciar sesión
3. **Registro** (`/register`) - Crear nueva cuenta
4. **Dashboard** (`/dashboard`) - Lista y gestión de contactos
5. **Perfil** (`/profile`) - Editar información del usuario

### Gestión de contactos:
- Crear nuevos contactos con: nombre, apellido, teléfono, email, dirección, notas
- Ver detalles completos de contactos
- Editar información de contactos existentes
- Marcar contactos como favoritos
- Buscar contactos por múltiples campos
- Filtrar solo favoritos

## 🛠️ Tecnologías

- **React 19** - Framework de UI
- **TypeScript** - Tipado estático
- **React Router DOM** - Navegación
- **Bootstrap 5** - Framework CSS
- **React Bootstrap** - Componentes de Bootstrap para React
- **Bootstrap Icons** - Iconografía
- **Vite** - Herramienta de build

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── common/
│   │   └── ProtectedRoute.tsx      # Componente para rutas protegidas
│   ├── contacts/
│   │   ├── ContactCard.tsx         # Tarjeta de contacto
│   │   ├── ContactModal.tsx        # Modal para crear/editar
│   │   └── ContactViewModal.tsx    # Modal para ver detalles
│   └── layout/
│       ├── Header.tsx              # Navegación principal
│       └── Layout.tsx              # Layout principal
├── contexts/
│   └── AuthContext.tsx             # Contexto de autenticación
├── pages/
│   ├── HomePage.tsx                # Página de inicio
│   ├── LoginPage.tsx               # Página de login
│   ├── RegisterPage.tsx            # Página de registro
│   ├── DashboardPage.tsx           # Dashboard principal
│   └── ProfilePage.tsx             # Página de perfil
├── services/
│   └── api.ts                      # Servicio de API
├── types/
│   └── index.ts                    # Definiciones de tipos
├── App.tsx                         # Componente principal
├── App.css                         # Estilos personalizados
└── main.tsx                        # Punto de entrada
```

## 🔧 Instalación y configuración

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Configurar la URL del backend:**
   - Edita `src/services/api.ts`
   - Cambia `API_BASE_URL` por la URL de tu backend Laravel

3. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```

4. **Construir para producción:**
   ```bash
   npm run build
   ```

## 🔗 Integración con Backend

La aplicación está configurada para trabajar con el backend Laravel que incluye:

- **Autenticación**: Laravel Sanctum para tokens de API
- **Endpoints**:
  - `POST /api/login` - Iniciar sesión
  - `POST /api/users` - Registro
  - `POST /api/logout` - Cerrar sesión
  - `GET /api/contacts` - Listar contactos
  - `POST /api/contacts` - Crear contacto
  - `GET /api/contacts/{id}` - Ver contacto
  - `PUT /api/contacts/{id}` - Actualizar contacto
  - `PUT /api/users/{id}` - Actualizar usuario

## 🎨 Características de UI/UX

- **Diseño responsive** con Bootstrap 5
- **Modales** para crear, ver y editar contactos
- **Búsqueda en tiempo real** en el dashboard
- **Filtros** para mostrar solo favoritos
- **Estados de carga** y mensajes de error
- **Navegación intuitiva** con breadcrumbs
- **Iconografía** consistente con Bootstrap Icons

## 🔐 Seguridad

- **Rutas protegidas** que requieren autenticación
- **Tokens JWT** almacenados en localStorage
- **Validación de formularios** en frontend y backend
- **Manejo de errores** robusto

## 📱 Responsive Design

La aplicación está optimizada para:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (menos de 768px)

## 🚀 Próximas mejoras

- [ ] Eliminación de contactos
- [ ] Importar/exportar contactos
- [ ] Categorías de contactos
- [ ] Búsqueda avanzada
- [ ] Modo oscuro
- [ ] Notificaciones push
- [ ] Sincronización offline

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.