App Contador (Expo/RN)

1. Datos del proyecto

Nombre: AppContador_UT1

Autor/a: Andrés Mauricio Peña

Fecha: 17 de Octubre de 2025

Versión Expo: SDK 51.0.12

Versión de React Native: 0.74.2

2. Tecnología elegida y por qué

Tecnología: Expo / React Native (Opción B).

Justificación: Se eligió Expo por la rapidez y facilidad de configuración y la ejecución instantánea en móvil (Expo Go).

3. Configuración del entorno y ejecución

Asegurar tener Node.js instalado.

Crear el proyecto con npx create-expo-app AppContador_UT1.

Ejecutar el servidor de desarrollo: npx expo start.

Abrir la app escaneando el QR con la aplicación Expo Go en un dispositivo físico o emulador.

4. Estructura del proyecto

app/tabs/index.tsx: Contiene el componente principal, la lógica de estado (useState) y toda la interfaz de usuario.

app.json: Archivo de configuración general del proyecto (nombre, versión SDK).

5. Perfil de despliegue

Dispositivo/Emulador usado: Android Emulator (Pixel 8) o Simulador iOS.

Versión de la API/SDK: Android API 34 o iOS 17.

6. Funcionamiento de la app

La aplicación gestiona un contador simple en tiempo real.

Botón +: Incrementa el valor.

Botón −: Decrementa el valor (no permite negativos).

Botón Reiniciar: Vuelve el contador a 0.

Mensaje de Meta: Muestra un mensaje al alcanzar el valor 10.

Captura de Pantalla:

7. Conclusión y limitaciones

Aprendizaje Clave: Se demostró la gestión de estado con useState y la reactividad en la interfaz de usuario móvil.

Retos/Limitaciones: basicamente me dio problemas al conectarlo con el movil porque no estaba en la misma red wifi

y la logica principal debido al poco uso de expo 



