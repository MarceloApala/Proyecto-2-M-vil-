# **Aplicación Móvil de Control de Inventario**

Esta aplicación móvil está desarrollada con **React Native** utilizando **Expo**. Está diseñada para facilitar la gestión de inventarios, permitiendo a los usuarios generar, ver y escanear códigos QR directamente desde su dispositivo móvil. Además, la aplicación incluye funciones de ubicación para registrar la ubicación de los productos en el inventario.

## Descripción

La aplicación permite la gestión de inventarios mediante códigos QR. Las funcionalidades principales incluyen:

- **Generar códigos QR**: Asociar códigos QR únicos a productos en el inventario.
- **Ver lista de códigos QR**: Visualizar todos los códigos QR generados, con los detalles de los productos asociados.
- **Escanear códigos QR**: Usar la cámara del dispositivo móvil para escanear códigos QR y obtener los detalles del producto.

### Características adicionales:
- **Ubicación**: La aplicación puede registrar la ubicación de los productos usando las funcionalidades de **expo-location**.
- **Cámara**: La aplicación permite escanear códigos QR utilizando la cámara del dispositivo con permisos adecuados.

## Tecnologías y Librerías Utilizadas

- **React Native**: Framework de desarrollo móvil que permite crear aplicaciones nativas utilizando JavaScript y React.
- **Expo**: Herramienta que facilita el desarrollo y la construcción de aplicaciones React Native.
- **expo-camera**: Permite acceder a la cámara del dispositivo para escanear códigos QR.
- **expo-location**: Permite obtener la ubicación del dispositivo para asociar productos con coordenadas geográficas.
- **react-navigation**: Para la navegación dentro de la aplicación móvil.
- **qrcode.react**: Librería para generar códigos QR en la aplicación móvil.
- **jsqr**: Librería para escanear códigos QR.
- **react-hook-form**: Librería para manejar formularios de manera eficiente.

## Comenzando

### Requisitos previos

1. **Node.js**: Asegúrate de tener instalada una versión reciente de [Node.js](https://nodejs.org/).
2. **Expo CLI**: Si aún no tienes Expo CLI instalado, puedes instalarlo globalmente con el siguiente comando:

   ```bash
   npm install -g expo-cli
