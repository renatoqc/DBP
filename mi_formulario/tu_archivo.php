<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Información</title>
</head>
<body>

    <h2>Formulario de Información</h2>

    <form action="procesar_formulario.php" method="POST">

        <!-- Nombre y Apellidos -->
        <label for="nombre">Nombre y Apellidos:</label>
        <input type="text" id="nombre" name="nombre" required><br><br>

        <!-- Fecha de Nacimiento -->
        <label for="fecha_nacimiento">Fecha de Nacimiento:</label>
        <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" required><br><br>

        <!-- Ocupación -->
        <label for="ocupacion">Ocupación:</label>
        <input type="text" id="ocupacion" name="ocupacion" required><br><br>

        <!-- Contacto -->
        <label for="contacto">Contacto (Teléfono o Email):</label>
        <input type="text" id="contacto" name="contacto" required><br><br>

        <!-- Nacionalidad -->
        <label for="nacionalidad">Nacionalidad:</label>
        <select id="nacionalidad" name="nacionalidad" required>
            <option value="peruano">Peruano</option>
            <option value="argentino">Argentino</option>
            <option value="colombiano">Colombiano</option>
            <option value="chileno">Chileno</option>
            <option value="otro">Otro</option>
        </select><br><br>

        <!-- Nivel de inglés -->
        <label>Nivel de inglés:</label><br>
        <input type="radio" id="basico" name="ingles" value="básico">
        <label for="basico">Básico</label><br>

        <input type="radio" id="intermedio" name="ingles" value="intermedio">
        <label for="intermedio">Intermedio</label><br>

        <input type="radio" id="avanzado" name="ingles" value="avanzado">
        <label for="avanzado">Avanzado</label><br>

        <input type="radio" id="fluido" name="ingles" value="fluido">
        <label for="fluido">Fluido</label><br><br>

        <!-- Lenguajes de programación -->
        <label for="lenguajes">Lenguajes de programación:</label>
        <select id="lenguajes" name="lenguajes[]" multiple>
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
            <option value="c++">C++</option>
            <option value="php">PHP</option>
        </select><br><br>

        <!-- Aptitudes -->
        <label for="aptitudes">Aptitudes:</label>
        <input list="aptitudes_options" id="aptitudes" name="aptitudes">
        <datalist id="aptitudes_options">
            <option value="Comunicación">
            <option value="Trabajo en equipo">
            <option value="Creatividad">
            <option value="Resolución de problemas">
        </datalist><br><br>

        <!-- Habilidades -->
        <label>Habilidades:</label><br>
        <input type="checkbox" id="habilidad1" name="habilidades[]" value="liderazgo">
        <label for="habilidad1">Liderazgo</label><br>

        <input type="checkbox" id="habilidad2" name="habilidades[]" value="trabajo en equipo">
        <label for="habilidad2">Trabajo en equipo</label><br>

        <input type="checkbox" id="habilidad3" name="habilidades[]" value="adaptabilidad">
        <label for="habilidad3">Adaptabilidad</label><br>

        <input type="checkbox" id="habilidad4" name="habilidades[]" value="organizacion">
        <label for="habilidad4">Organización</label><br><br>

        <!-- Perfil -->
        <label for="perfil">Perfil:</label><br>
        <textarea id="perfil" name="perfil" rows="4" cols="50" placeholder="Describe tu perfil aquí"></textarea><br><br>

        <input type="submit" value="Enviar">
    </form>

</body>
</html>



<!-- http://localhost/mi_formulario/tu_archivo.php>

