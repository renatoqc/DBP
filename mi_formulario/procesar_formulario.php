<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datos Procesados</title>
</head>
<body>

    <h2>Datos recibidos:</h2>

    <?php
    // Conectar a la base de datos MySQL
    $conn = new mysqli("localhost", "root", "", "cv_database");

    // Verificar la conexión
    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    // Recibir los datos del formulario
    $nombre = $_POST['nombre'];
    $fecha_nacimiento = $_POST['fecha_nacimiento'];
    $ocupacion = $_POST['ocupacion'];
    $contacto = $_POST['contacto'];
    $nacionalidad = $_POST['nacionalidad'];
    $ingles = $_POST['ingles'];
    $lenguajes = isset($_POST['lenguajes']) ? implode(", ", $_POST['lenguajes']) : "No seleccionó ningún lenguaje";
    $aptitudes = $_POST['aptitudes'];
    $habilidades = isset($_POST['habilidades']) ? implode(", ", $_POST['habilidades']) : "No seleccionó ninguna habilidad";
    $perfil = $_POST['perfil'];

    // Mostrar los datos recibidos
    echo "<strong>Nombre y Apellidos:</strong> $nombre<br>";
    echo "<strong>Fecha de Nacimiento:</strong> $fecha_nacimiento<br>";
    echo "<strong>Ocupación:</strong> $ocupacion<br>";
    echo "<strong>Contacto:</strong> $contacto<br>";
    echo "<strong>Nacionalidad:</strong> $nacionalidad<br>";
    echo "<strong>Nivel de Inglés:</strong> $ingles<br>";
    echo "<strong>Lenguajes de Programación:</strong> $lenguajes<br>";
    echo "<strong>Aptitudes:</strong> $aptitudes<br>";
    echo "<strong>Habilidades:</strong> $habilidades<br>";
    echo "<strong>Perfil:</strong> $perfil<br>";

    // Insertar los datos en la base de datos
    $sql = "INSERT INTO cv_info (nombre, fecha_nacimiento, ocupacion, contacto, nacionalidad, ingles, lenguajes, aptitudes, habilidades, perfil)
        VALUES ('$nombre', '$fecha_nacimiento', '$ocupacion', '$contacto', '$nacionalidad', '$ingles', '$lenguajes', '$aptitudes', '$habilidades', '$perfil')";

    if ($conn->query($sql) === TRUE) {
        echo "<p>CV guardado correctamente en la base de datos.</p>";
    } else {
        echo "Error al guardar los datos: " . $conn->error;
    }

    // Cerrar la conexión
    $conn->close();
    ?>

</body>
</html>
