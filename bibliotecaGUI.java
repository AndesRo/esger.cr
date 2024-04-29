import javax.swing.*;
import java.awt.event.*;
import java.awt.Dimension;

public class bibliotecaGUI extends JFrame implements ActionListener {
    private JTextField tituloField, autorField, anoField;
    private JTextArea infoArea;
    private JButton agregarButton, prestamoButton, devolucionButton;
    private Libro[] catalogo;
    private int contadorLibros;

    public bibliotecaGUI() {
        super("Biblioteca Universitaria");
        setSize(500, 500);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
 // Crear un JTextField
 JTextField textField = new JTextField();
        
 // Ajustar el tamaño del campo de texto
 textField.setColumns(20); // Define el número de columnas (caracteres) visibles
 textField.setPreferredSize(new Dimension(200, 30)); // Establece el tamaño preferido
 textField.setMaximumSize(new Dimension(400, 30)); // Establece el tamaño máximo

 // Agregar el JTextField a la interfaz de usuario
 JPanel panel = new JPanel();
 panel.add(textField);
 add(panel);
        

        // Crear campos de texto y botones
        tituloField = new JTextField(20);
        autorField = new JTextField(20);
        anoField = new JTextField(10);
        infoArea = new JTextArea(10, 45);
        agregarButton = new JButton("Agregar Libro");
        prestamoButton = new JButton("Realizar Préstamo");
        devolucionButton = new JButton("Realizar Devolución");

        // Agregar oyentes de eventos a los botones
        agregarButton.addActionListener(this);
        prestamoButton.addActionListener(this);
        devolucionButton.addActionListener(this);

        // Crear panel para los campos de texto
        JPanel inputPanel = new JPanel();
        inputPanel.add(new JLabel("Título:"));
        inputPanel.add(tituloField);
        inputPanel.add(new JLabel("Autor:"));
        inputPanel.add(autorField);
        inputPanel.add(new JLabel("Año de Publicación:"));
        inputPanel.add(anoField);

        // Crear panel para los botones
        JPanel buttonPanel = new JPanel();
        buttonPanel.add(agregarButton);
        buttonPanel.add(prestamoButton);
        buttonPanel.add(devolucionButton);

        // Crear panel para mostrar información
        JPanel infoPanel = new JPanel();
        infoPanel.add(new JScrollPane(infoArea));

        // Crear panel principal y agregar componentes
        JPanel mainPanel = new JPanel();
        mainPanel.add(inputPanel);
        mainPanel.add(buttonPanel);
        mainPanel.add(infoPanel);

        // Configurar el panel principal en la ventana
        getContentPane().add(mainPanel);
        
        // Inicializar el catálogo de libros
        catalogo = new Libro[100];
        contadorLibros = 0;
    }

    // Método para manejar eventos de botones
    public void actionPerformed(ActionEvent event) {
        if (event.getSource() == agregarButton) {
            agregarLibro();
        } else if (event.getSource() == prestamoButton) {
            realizarPrestamo();
        } else if (event.getSource() == devolucionButton) {
            realizarDevolucion();
        }
    }

    // Método para agregar un libro al catálogo
    private void agregarLibro() {
        String titulo = tituloField.getText();
        String autor = autorField.getText();
        int ano = Integer.parseInt(anoField.getText());

        catalogo[contadorLibros] = new Libro(titulo, autor, ano);
        contadorLibros++;

        actualizarInfo();
    }

    // Método para realizar un préstamo
    private void realizarPrestamo() {
        String titulo = JOptionPane.showInputDialog(this, "Ingrese el título del libro a prestar:");
        Libro libro = buscarLibro(titulo);

        if (libro != null) {
            libro.registrarPrestamo();
        } else {
            JOptionPane.showMessageDialog(this, "El libro no está en el catálogo.");
        }

        actualizarInfo();
    }

    // Método para realizar una devolución
    private void realizarDevolucion() {
        String titulo = JOptionPane.showInputDialog(this, "Ingrese el título del libro a devolver:");
        Libro libro = buscarLibro(titulo);

        if (libro != null) {
            libro.registrarDevolucion();
        } else {
            JOptionPane.showMessageDialog(this, "El libro no está en el catálogo.");
        }

        actualizarInfo();
    }

    // Método para buscar un libro en el catálogo
    private Libro buscarLibro(String titulo) {
        for (int i = 0; i < contadorLibros; i++) {
            if (catalogo[i].getTitulo().equalsIgnoreCase(titulo)) {
                return catalogo[i];
            }
        }
        return null;
    }

    // Método para actualizar la información mostrada en el área de texto
    private void actualizarInfo() {
        infoArea.setText("");
        for (int i = 0; i < contadorLibros; i++) {
            infoArea.append(catalogo[i].toString() + "\n");
        }
    }

    public static void main(String[] args) {
        // Crear y mostrar la ventana principal
        bibliotecaGUI ventana = new bibliotecaGUI();
        ventana.setVisible(true);
    }
}
