# Zalia Shop - Importadores Directos de Contenedor

Sitio web oficial de **Zalia Shop**, importadores directos de contenedor en el Centro de la CDMX. Esta plataforma está diseñada para la venta al mayoreo y menudeo de bolsas, mochilas, carteras, peluches y novedades, integrando un cotizador automatizado y un sistema local de administración.

---

## 🚀 Características Principales

1. **Diseño Moderno y Premium (UX/UI)**:
   - Estética vibrante en colores rosa y cian inspirados en la identidad de Zalia.
   - Soporte nativo para modo oscuro y claro.
   - Navegación e interfaz adaptada a celulares y pantallas táctiles con botones táctiles optimizados.
   - Cabecera fija y panel lateral de cotizaciones con scroll unificado para evitar colapsos visuales.

2. **Motor de Precios Automático de 3 Niveles**:
   - **Precio Regular (Menudeo)**: Aplicado al comprar de 1 a 2 piezas de un artículo.
   - **Precio de Mayoreo Mixto**: Aplicado automáticamente en piezas sueltas si el total del carrito suma **3 o más artículos** de cualquier categoría.
   - **Precio por Caja Cerrada**: Se aplica automáticamente al superar la cantidad mínima de piezas por caja configurada para cada producto individual (`pcsPerBox`).

3. **Panel de Control y CMS Local (`dashboard.html`)**:
   - Interfaz independiente oculta para clientes.
   - Lector de hojas de cálculo Excel (`.xlsx`, `.xls`) y archivos `.csv` en el navegador utilizando **SheetJS**.
   - Permite al administrador descargar una plantilla base, modificar precios o imágenes en Excel y volver a subirla para actualizar los productos de la tienda al instante utilizando `localStorage`.
   - Copia de seguridad automática para respaldar y descargar el catálogo activo en formato CSV.

4. **Flujo de Pedidos por WhatsApp**:
   - Formulario de cotización que recopila el nombre del cliente, destino de entrega y tipo de cliente (mayorista/minorista).
   - Selector de método de entrega: *Envío a domicilio (nacional)* o *Recoger en tienda física (Honduras 63, Centro CDMX)*.
   - Generación de mensaje estructurado y redirección directa al asesor de ventas vía WhatsApp al número **5613137613**.

---

## 📂 Estructura del Proyecto

```
Zalia-Shop/
├── index.html               # Página de aterrizaje y tienda principal para clientes
├── dashboard.html           # Panel de administración de catálogo para el propietario
├── plantilla_productos.csv  # Plantilla de Excel/CSV para la edición rápida del catálogo
├── README.md                # Documentación del proyecto
├── css/
│   └── styles.css           # Estilos generales, temas claro/oscuro y adaptaciones móviles
├── js/
│   └── app.js               # Lógica del cotizador, base de datos de 48 artículos y motor de precios
└── assets/                  # Logos oficiales e imágenes de demostración
```

---

## 🛠️ Instalación y Uso Local

1. Clona este repositorio o descarga los archivos.
2. Abre el archivo `index.html` en tu navegador preferido para ver la tienda.
3. Para administrar el catálogo, accede directamente a `dashboard.html` en tu navegador o a través del archivo local.
