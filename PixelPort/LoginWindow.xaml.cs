using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace PixelPort
{
    /// <summary>
    /// Interaction logic for LoginWindow.xaml
    /// </summary>
    public partial class LoginWindow : Window
    {
        public LoginWindow()
        {
            InitializeComponent();
        }

        private void LoginButton_Click(object sender, RoutedEventArgs e)
        {

            if (string.IsNullOrWhiteSpace(UsernameBox.Text) || string.IsNullOrWhiteSpace(PasswordBox.Password))
            {
                MessageBox.Show("Invalid login details. Please enter a username and password.", "Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            // Check if the user exists in the database
            var user = App.db.Users.FirstOrDefault(u => u.Username == UsernameBox.Text && u.Password == PasswordBox.Password);

            if (user == null)
            {
                MessageBox.Show("Invalid username or password.", "Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }
            App.CurrentUser = user;
            // Login successful
            MessageBox.Show("Login successful!", "Success", MessageBoxButton.OK, MessageBoxImage.Information);
            this.Visibility = Visibility.Hidden;

            
            MainWindow mainWindow = new MainWindow();

          
            mainWindow.Show();

           
            this.Close();
        }
        private void SignupButton_Click(object sender, MouseButtonEventArgs e)
        {
            this.Visibility = Visibility.Hidden;

            
            SignupWindow signupwindow = new SignupWindow();

           
            signupwindow.Show();

            
            this.Close();
            
        }


    }
}
