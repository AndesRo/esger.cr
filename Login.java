import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class Login extends JDialog implements ActionListener {
    private JTextField usuarioField;
    private JPasswordField contrasenaField;
    private JButton ingresarButton, cancelarButton;
    private boolean loginExitoso;

    public Login(JFrame parent) {
        super(parent, "Inicio de Sesión", true);
        setSize(300, 150);
        setLocationRelativeTo(parent);
        setDefaultCloseOperation(DISPOSE_ON_CLOSE);

        // Crear campos de texto y botones
        usuarioField = new JTextField(15);
        contrasenaField = new JPasswordField(15);
        ingresarButton = new JButton("Ingresar");
        cancelarButton = new JButton("Cancelar");

        // Agregar oyentes de eventos a los botones
        ingresarButton.addActionListener(this);
        cancelarButton.addActionListener(this);

        // Crear panel para los campos de texto
        JPanel inputPanel = new JPanel(new GridLayout(2, 2));
        inputPanel.add(new JLabel("Usuario:"));
        inputPanel.add(usuarioField);
        inputPanel.add(new JLabel("Contraseña:"));
        inputPanel.add(contrasenaField);

        // Crear panel para los botones
        JPanel buttonPanel = new JPanel();
        buttonPanel.add(ingresarButton);
        buttonPanel.add(cancelarButton);

        // Crear panel principal y agregar componentes
        JPanel mainPanel = new JPanel(new BorderLayout());
        mainPanel.add(inputPanel, BorderLayout.CENTER);
        mainPanel.add(buttonPanel, BorderLayout.SOUTH);

        // Configurar el panel principal en el diálogo
        getContentPane().add(mainPanel);
    }

    // Método para manejar eventos de botones
    public void actionPerformed(ActionEvent event) {
        if (event.getSource() == ingresarButton) {
            String usuario = usuarioField.getText();
            String contrasena = new String(contrasenaField.getPassword());
            // Validar usuario y contraseña (puedes implementar tu lógica de autenticación aquí)
            if (usuario.equals("admin") && contrasena.equals("1234")) {
                loginExitoso = true;
                dispose(); // Cerrar el diálogo después del inicio de sesión exitoso
            } else {
                JOptionPane.showMessageDialog(this, "Usuario o contraseña incorrectos", "Error de inicio de sesión", JOptionPane.ERROR_MESSAGE);
            }
        } else if (event.getSource() == cancelarButton) {
            dispose(); // Cerrar el diálogo si se presiona el botón Cancelar
        }
    }

    // Método para mostrar el diálogo y devolver si el inicio de sesión fue exitoso
    public boolean mostrarDialogo() {
        loginExitoso = false;
        setVisible(true);
        return loginExitoso;
    }
}
