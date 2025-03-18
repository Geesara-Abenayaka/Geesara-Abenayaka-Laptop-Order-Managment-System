using System.Collections.ObjectModel;
using System.Windows;
using System.Windows.Input;
using System.Windows.Media;

namespace PixelPort
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }
        private void Border_MouseDown(object sender, MouseButtonEventArgs e)
        {
            if (e.ChangedButton == MouseButton.Left) {
                this.DragMove();
            }
        }
        private bool isMaximized=false;
        private void Border_MouseLeftDown(object sender, MouseButtonEventArgs e) {
            if (e.ClickCount == 2) {
                if (isMaximized) {
                    this.WindowState = WindowState.Normal;
                    this.Width = 1080;
                    this.Height = 720;
                    isMaximized = false;
                }
                else
                {
                    this.WindowState = WindowState.Maximized;
                    isMaximized=true;
                }
            }
        }

        private void ScrollBar_ValueChanged(object sender, RoutedPropertyChangedEventArgs<double> e)
        {

        }
        private void LaptopButton_Click(object sender, RoutedEventArgs e)
        {
            // Load the LaptopControl inside ContentControl
            ContentArea.Content = new LaptopControl();
        }
        // This method will be executed when the Buy Now button is clicked.

        private void ServicesButton_Click(object sender, RoutedEventArgs e)
        {
            // Load the LaptopControl inside ContentControl
            ContentArea.Content = new ServicesControl();
        }
        private void ContactsButton_Click(object sender, RoutedEventArgs e)
        {
            // Load the LaptopControl inside ContentControl
            ContentArea.Content = new ContactControl();
        }



        private void Deleteaccount(object sender, RoutedEventArgs e)
        {
            var result = MessageBox.Show($"Are you sure you want to delete your account ({App.CurrentUser.Username})? This action cannot be undone.",
                                 "Confirm Deletion", MessageBoxButton.YesNo, MessageBoxImage.Warning);

            if (result == MessageBoxResult.Yes)
            {
               
                App.db.Users.Remove(App.CurrentUser);
                App.db.SaveChanges();

                MessageBox.Show("Account deleted successfully.", "Success", MessageBoxButton.OK, MessageBoxImage.Information);

              
                App.CurrentUser = null;

               
                LoginWindow loginWindow = new LoginWindow(); 
                loginWindow.Show();
                this.Close();
            }
        }

        private void changepassword(object sender, RoutedEventArgs e)
        {
            changepassword changepw = new changepassword();


            changepw.Show();


            this.Close();
        }
        private void Logout(object sender, RoutedEventArgs e)
        {
            MessageBoxResult result = MessageBox.Show(
        "Are you sure you want to log out?",
        "Logout Confirmation",
        MessageBoxButton.YesNo,
        MessageBoxImage.Question);

            if (result == MessageBoxResult.Yes)
            {
                LoginWindow loginWindow = new LoginWindow();
                loginWindow.Show();
                this.Close();

                MessageBox.Show("You have successfully logged out.", "Logout", MessageBoxButton.OK, MessageBoxImage.Information);
            }

        }
    }
}