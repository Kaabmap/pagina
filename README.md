# KAAB MAP - Sitio Web

Sitio web oficial de KAAB MAP, una cooperativa especializada en levantamientos geoespaciales con drones, fotogrametría, cartografía y servicios relacionados.

[https://kaabmap.github.io/pagina/](https://kaabmap.github.io/pagina) 

## 🚀 Características

- ✨ Diseño moderno y responsive
- 🎨 Colores y tipografías del manual de marca
- 📱 Optimizado para móvil, tablet y desktop
- 🎭 Animaciones suaves con Framer Motion
- 🗺️ Navegación con React Router
- 📧 Formulario de contacto
- 🌐 Preparado para GitHub Pages

## 🛠️ Tecnologías

- React 19
- Vite
- React Router DOM
- Framer Motion
- Tailwind CSS
- Lucide React (iconos)
- EmailJS (formulario de contacto)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🌐 Despliegue en GitHub Pages

El proyecto usa `HashRouter` para compatibilidad total con GitHub Pages, lo que significa que las rutas funcionarán correctamente sin configuración adicional.

### Opción 1: Automático con GitHub Actions

El proyecto incluye un workflow de GitHub Actions que se ejecuta automáticamente cuando haces push a la rama `main`. Solo necesitas:

1. Ir a Settings > Pages en tu repositorio
2. Seleccionar "GitHub Actions" como fuente
3. El workflow desplegará automáticamente en cada push

### Opción 2: Manual

1. Ejecuta `npm run build`
2. Sube la carpeta `dist/` a la rama `gh-pages` o usa GitHub Pages directamente
3. Configura GitHub Pages para servir desde la carpeta `dist/` o la rama `gh-pages`

## 📁 Estructura del Proyecto

```
src/
├── components/     # Componentes reutilizables (Header, Footer)
├── pages/         # Páginas principales
│   ├── Home.jsx
│   ├── Conocenos.jsx
│   ├── Proyectos.jsx
│   ├── ProyectoMixteca.jsx
│   ├── ProyectoAcapulco.jsx
│   ├── Servicios.jsx
│   ├── Ecos.jsx
│   └── Contacto.jsx
├── App.jsx         # Componente principal con rutas
└── main.jsx       # Punto de entrada
```

## 🎨 Paleta de Colores

- **Chestnut**: `#914e2e` (Principal)
- **Alabaster**: `#f0eee1` (Fondos)
- **Grullo**: `#9ea67a`
- **Dark Lava**: `#4e472b`
- **Golden**: `#c7aa64`
- **Jelly Bean**: `#dd6657`

## 📝 Tipografías

- **Trirong** (Serif): Títulos y encabezados
- **Inter** (Sans-serif): Texto del cuerpo

## 📧 Configuración del Formulario de Contacto

Para usar el formulario de contacto con EmailJS:

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Configura un servicio de email
3. Crea una plantilla
4. Actualiza las credenciales en `src/pages/Contacto.jsx`

## 📄 Licencia

© 2024 KAAB MAP. Todos los derechos reservados.
