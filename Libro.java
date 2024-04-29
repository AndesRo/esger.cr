
import javax.swing.JOptionPane;

class Libro {
    // Atributos
    private String titulo;
    private String autor;
    private int anoPublicacion;
    private boolean prestado;

    // Constructor
    public Libro(String titulo, String autor, int anoPublicacion) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacion = anoPublicacion;
        this.prestado = false;
    }

    // Métodos getters y setters
    public String getTitulo() {
        return titulo;
    }

    // Método para registrar préstamo de un libro
    public void registrarPrestamo() {
        if (!prestado) {
            prestado = true;
            JOptionPane.showMessageDialog(null, "El libro \"" + titulo + "\" ha sido prestado.");
        } else {
            JOptionPane.showMessageDialog(null, "El libro \"" + titulo + "\" ya está prestado.");
        }
    }

    // Método para registrar devolución de un libro
    public void registrarDevolucion() {
        if (prestado) {
            prestado = false;
            JOptionPane.showMessageDialog(null, "El libro \"" + titulo + "\" ha sido devuelto.");
        } else {
            JOptionPane.showMessageDialog(null, "El libro \"" + titulo + "\" no estaba prestado.");
        }
    }

    // Método para mostrar información del libro
    public String toString() {
        String estado = prestado ? "Prestado" : "Disponible";
        return "Título: " + titulo + ", Autor: " + autor + ", Año de Publicación: " + anoPublicacion + ", Estado: " + estado;
    }
}
