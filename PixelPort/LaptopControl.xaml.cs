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
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace PixelPort
{
    /// <summary>
    /// Interaction logic for LaptopControl.xaml
    /// </summary>
    public partial class LaptopControl : UserControl
    {
        public LaptopControl()
        {
            InitializeComponent();
        }
        private void BuyNowButton_Click(object sender, RoutedEventArgs e)
        {
            // For now, let's just show a message box
            MessageBox.Show("The product has been added to your cart!");


        }
    }
}
