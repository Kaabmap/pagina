# 🚀 Guía de Despliegue en GitHub Pages

Esta guía te explicará paso a paso cómo desplegar tu sitio web de KAAB MAP en GitHub Pages.

## 📋 Requisitos Previos

- Una cuenta de GitHub
- Git instalado en tu computadora
- Node.js instalado (versión 18 o superior)

## 🔧 Paso 1: Preparar el Repositorio en GitHub

### 1.1 Crear un nuevo repositorio

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Haz clic en el botón **"+"** en la esquina superior derecha
3. Selecciona **"New repository"**
4. Completa los datos:
   - **Repository name**: `kaab-map-pagina` (o el nombre que prefieras)
   - **Description**: "Sitio web oficial de KAAB MAP"
   - **Visibilidad**: Público (necesario para GitHub Pages gratuito)
   - **NO marques** "Initialize this repository with a README"
5. Haz clic en **"Create repository"**

### 1.2 Conectar tu proyecto local con GitHub

Abre tu terminal en la carpeta del proyecto y ejecuta:

```bash
# Inicializar git si no está inicializado
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit: Sitio web KAAB MAP"

# Agregar el repositorio remoto (reemplaza TU_USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/kaab-map-pagina.git

# Cambiar el nombre de la rama a main (si es necesario)
git branch -M main

# Subir el código
git push -u origin main
```

## 🔄 Paso 2: Configurar GitHub Actions para Deploy Automático

### 2.1 Verificar que el workflow existe

El proyecto ya incluye un archivo de workflow en `.github/workflows/deploy.yml`. Si no existe, créalo:

```bash
# Crear la carpeta si no existe
mkdir -p .github/workflows
```

### 2.2 El workflow ya está configurado

El archivo `.github/workflows/deploy.yml` ya está creado y configurado para:
- Ejecutarse automáticamente cuando hagas push a `main`
- Construir el proyecto
- Desplegarlo en GitHub Pages

## ⚙️ Paso 3: Activar GitHub Pages

### 3.1 Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **"Settings"** (Configuración) en el menú superior
3. En el menú lateral izquierdo, busca y haz clic en **"Pages"**
4. En la sección **"Source"** (Fuente):
   - Selecciona **"GitHub Actions"** como fuente
   - Si no aparece esta opción, selecciona **"Deploy from a branch"** y luego:
     - Branch: `gh-pages`
     - Folder: `/ (root)`
5. Haz clic en **"Save"**

### 3.2 Verificar el despliegue

1. Después de hacer push a `main`, ve a la pestaña **"Actions"** en tu repositorio
2. Verás un workflow ejecutándose llamado "Deploy to GitHub Pages"
3. Espera a que termine (puede tomar 1-2 minutos)
4. Cuando veas una marca verde ✓, el despliegue fue exitoso

## 🌐 Paso 4: Acceder a tu Sitio

Una vez completado el despliegue:

1. Ve a **Settings > Pages** en tu repositorio
2. Verás la URL de tu sitio, algo como:
   ```
   https://TU_USUARIO.github.io/kaab-map-pagina/
   ```
3. Haz clic en la URL o cópiala y ábrela en tu navegador

**Nota**: Puede tomar unos minutos para que el sitio esté disponible después del primer despliegue.

## 🔄 Paso 5: Actualizar el Sitio (Futuros Cambios)

Cada vez que quieras actualizar el sitio:

```bash
# Hacer tus cambios en el código
# Luego:

git add .
git commit -m "Descripción de los cambios"
git push origin main
```

GitHub Actions se ejecutará automáticamente y desplegará los cambios en 1-2 minutos.

## 🛠️ Opción Alternativa: Despliegue Manual

Si prefieres desplegar manualmente sin GitHub Actions:

### Método 1: Usando gh-pages

```bash
# Instalar gh-pages
npm install -D gh-pages

# Agregar script al package.json (ya está agregado)
# Luego ejecutar:
npm run deploy
```

### Método 2: Build manual

```bash
# Construir el proyecto
npm run build

# Subir la carpeta dist/ a la rama gh-pages
# (Esto requiere configurar git subtree o usar otras herramientas)
```

## ✅ Verificación Final

Para verificar que todo funciona:

1. ✅ El sitio carga correctamente
2. ✅ Todas las rutas funcionan (usa HashRouter, así que verás `#` en las URLs)
3. ✅ Las imágenes se cargan
4. ✅ El formulario de contacto funciona (si configuraste EmailJS)
5. ✅ Los enlaces a redes sociales funcionan

## 🐛 Solución de Problemas

### El sitio no se despliega

- Verifica que el repositorio sea público
- Revisa la pestaña "Actions" para ver si hay errores
- Asegúrate de que el workflow esté habilitado

### Las rutas no funcionan

- El proyecto usa `HashRouter`, así que las rutas tienen `#` (ej: `/#/proyectos`)
- Esto es normal y funciona perfectamente en GitHub Pages

### Los cambios no se reflejan

- Espera 1-2 minutos después del push
- Verifica que el workflow se haya completado en "Actions"
- Limpia la caché del navegador (Ctrl+F5)

### Error en el build

- Revisa los logs en la pestaña "Actions"
- Asegúrate de que todas las dependencias estén en `package.json`
- Verifica que no haya errores de sintaxis

## 📝 Notas Importantes

1. **HashRouter**: El proyecto usa `HashRouter` en lugar de `BrowserRouter` para compatibilidad total con GitHub Pages. Las URLs tendrán `#` (ej: `/#/conocenos`)

2. **Dominio personalizado**: Si quieres usar un dominio personalizado:
   - Ve a Settings > Pages
   - Agrega tu dominio en "Custom domain"
   - Configura los registros DNS según las instrucciones de GitHub

3. **Variables de entorno**: Si necesitas variables de entorno, usa GitHub Secrets en Settings > Secrets and variables > Actions

## 🎉 ¡Listo!

Tu sitio web de KAAB MAP debería estar funcionando en GitHub Pages. Si tienes alguna duda o problema, revisa los logs en la pestaña "Actions" de tu repositorio.
