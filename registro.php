<?php
// Verifica si se han enviado datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtén los datos del formulario
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    // Otros campos del formulario...

    // Aquí puedes realizar validaciones y sanitizaciones de los datos antes de almacenarlos en la base de datos

    // Conecta a la base de datos (reemplaza 'tudb', 'tuusuario' y 'tucontraseña' con tus propios valores)
    $conn = new mysqli("localhost", "tuusuario", "tucontraseña", "tudb");

    // Verifica la conexión
    if ($conn->connect_error) {
        die("Error en la conexión: " . $conn->connect_error);
    }

    // Prepara la consulta SQL para insertar un nuevo usuario
    $sql = "INSERT INTO usuarios (nombre, apellido) VALUES ('$nombre', '$apellido')";
    
    // Ejecuta la consulta
    if ($conn->query($sql) === TRUE) {
        echo "Registro exitoso";
    } else {
        echo "Error en el registro: " . $conn->error;
    }

    // Cierra la conexión
    $conn->close();
}
?>
