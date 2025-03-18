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
    /// Interaction logic for SignupWindow.xaml
    /// </summary>
    public partial class SignupWindow : Window
    {
        public SignupWindow()
        {
            InitializeComponent();
        }

        private void Signup_click(object sender, RoutedEventArgs e)
        {
            if (string.IsNullOrWhiteSpace(UsernameBox.Text) || string.IsNullOrWhiteSpace(PassBox.Password))
            {
                MessageBox.Show("Invalid login details. Please enter a username and password.", "Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }
            App.db.Users.Add(new Models.User() { Username = UsernameBox.Text, Password = PassBox.Password });
            App.db.SaveChanges();


            this.Visibility = Visibility.Hidden;


            MainWindow mainWindow = new MainWindow();


            mainWindow.Show();


            this.Close();
        }
        private void loginclick(object sender, MouseButtonEventArgs e)
        {
            this.Visibility = Visibility.Hidden;


            LoginWindow loginwindow = new LoginWindow();


            loginwindow.Show();


            this.Close();

        }
    }
}
