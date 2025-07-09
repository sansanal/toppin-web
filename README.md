
# Toppin 🍭

**La app de citas más dulce - Descubre la comunidad donde encontrarás a tu medio bombón**

![Toppin App](https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop&auto=format)

## ¿Qué es Toppin?

Toppin es una innovadora aplicación de citas que conecta a personas de manera auténtica y divertida. Nuestra plataforma está diseñada para crear una comunidad vibrante donde puedas encontrar a tu "medio bombón" - esa persona especial que complementa tu vida perfectamente.

### Características principales:

- 🍬 **Interfaz dulce y atractiva** - Diseño moderno con temática de dulces
- 💝 **Comunidad auténtica** - Conecta con personas reales de tu ciudad
- 🎮 **Gamificación** - Experiencia divertida e interactiva
- 📱 **Responsive** - Funciona perfectamente en todos los dispositivos
- 🌟 **Experiencias únicas** - Más que una app de citas tradicional

## Tecnologías utilizadas

Este proyecto está construido con tecnologías modernas:

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Herramienta de construcción rápida
- **Tailwind CSS** - Framework de CSS utilitario
- **shadcn/ui** - Componentes de interfaz de usuario
- **React Router** - Navegación del lado del cliente

## Instalación y configuración

### Requisitos previos

Asegúrate de tener instalado Node.js y npm. Se recomienda usar nvm para gestionar las versiones de Node.js.

### Pasos de instalación

```bash
# Paso 1: Clona el repositorio
git clone <URL_DEL_REPOSITORIO>

# Paso 2: Navega al directorio del proyecto
cd toppin

# Paso 3: Instala las dependencias necesarias
npm install

# Paso 4: Inicia el servidor de desarrollo
npm run dev
```

El servidor de desarrollo se iniciará en `http://localhost:5173` con recarga automática y vista previa instantánea.

### Scripts disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Construcción
npm run build        # Construye la aplicación para producción
npm run preview      # Vista previa de la construcción de producción

# Calidad de código
npm run lint         # Ejecuta el linter
npm run type-check   # Verifica los tipos de TypeScript
```

## Estructura del proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes de interfaz base
│   ├── Header.tsx      # Cabecera de la aplicación
│   ├── HeroSection.tsx # Sección principal
│   └── ...
├── pages/              # Páginas de la aplicación
├── hooks/              # Hooks personalizados
├── lib/                # Utilidades y configuraciones
└── main.tsx           # Punto de entrada de la aplicación
```

## Despliegue

Puedes desplegar este proyecto usando tu proveedor de hosting preferido:

- **Vercel** - Despliegue automático desde Git
- **Netlify** - Hosting estático con CI/CD
- **AWS Amplify** - Plataforma de desarrollo full-stack
- **GitHub Pages** - Hosting gratuito para proyectos públicos

### Variables de entorno

Asegúrate de configurar las variables de entorno necesarias según tu entorno de despliegue.

## Dominio personalizado

Sí, puedes conectar un dominio personalizado. La mayoría de las plataformas de hosting permiten conectar dominios personalizados. Sigue las guías respectivas de cada plataforma para instrucciones detalladas.

## Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Añadir nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## Licencia

Este proyecto es propiedad de Toppin. Todos los derechos reservados.

---

**¿Listo para encontrar a tu medio bombón? ¡Únete a Toppin y ponle sabor a la vida! 🍭💕**
