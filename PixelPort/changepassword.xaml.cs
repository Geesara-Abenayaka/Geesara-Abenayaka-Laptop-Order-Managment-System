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
    /// Interaction logic for changepassword.xaml
    /// </summary>
    public partial class changepassword : Window
    {
        public changepassword()
        {
            InitializeComponent();
        }
        private void Change_password(object sender, RoutedEventArgs e)
        {
           
            string newPassword = newpwd.Password;  
            string confirmPassword = confirmpwd.Password;  
            
            if (string.IsNullOrWhiteSpace(newPassword) || string.IsNullOrWhiteSpace(confirmPassword))
            {
                MessageBox.Show("Please fill in both fields for the new password.", "Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            if (newPassword != confirmPassword)
            {
                MessageBox.Show("New password and confirm password do not match.", "Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

          
            var user = App.db.Users.FirstOrDefault(u => u.Username == App.CurrentUser.Username);

            if (user == null)
            {
                MessageBox.Show("User not found.", "Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

         
            user.Password = newPassword;

            try
            {
               
                App.db.SaveChanges();
                MessageBox.Show("Password changed successfully.", "Success", MessageBoxButton.OK, MessageBoxImage.Information);
                this.Visibility = Visibility.Hidden;


                MainWindow mainWindow = new MainWindow();


                mainWindow.Show();
                this.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
            

        }
    }
}
