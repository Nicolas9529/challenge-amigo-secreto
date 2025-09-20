Juego Amigo Secreto

Este proyecto implementa un juego simple de **Amigo Secreto** usando **JavaScript** y **HTML**.  
Permite agregar nombres de participantes, validarlos y luego realizar un sorteo aleatorio para asignar a cada persona un amigo secreto.

---

##  Funciones principales

## agregarAmigo(nombre)
Esta función permite añadir nombres a una lista vacía mediante el botón **“Añadir”**.  
- Realiza una validación que evita el ingreso de valores vacíos o símbolos distintos a letras y tildes.  
- Muestra en pantalla los nombres ingresados en una lista bajo la casilla de entrada.  
- Finalmente, limpia la casilla llamando a la función `limpiarCaja()`.

 Vista de la función:  
<img width="1088" height="940" alt="Agregar amigo" src="https://github.com/user-attachments/assets/0bafc1e5-f89c-4e02-803c-e240e9794450" />

---

### sortearAmigo()
Esta función elige aleatoriamente un nombre de la lista de participantes añadidos mediante el botón **“Sortear amigo”**.  
- Valida que existan al menos **2 nombres** en la lista antes de realizar el sorteo.  
- Finalmente, muestra en pantalla el nombre de la persona elegida.

---

### limpiarCaja()
Esta función elimina el valor escrito en la casilla de entrada una vez que el nombre ya ha sido añadido a la lista.  

Vista de la función:  
<img width="944" height="650" alt="Limpiar caja" src="https://github.com/user-attachments/assets/38901445-0b59-442d-acd6-50e95e61fbcf" />

---

## Cómo usarlo
1. Abre el archivo `index.html` en tu navegador.  
2. Ingresa nombres en la casilla de texto y presiona **Añadir**.  
3. Una vez que haya al menos 2 participantes, presiona **Sortear amigo**.  
4. El sistema mostrará en pantalla el nombre elegido. 

