using PixelPort.Migrations;
using System.Configuration;
using System.Data;
using System.Windows;

namespace PixelPort
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    /// 


    public partial class App : Application
    {
        public static Models.User CurrentUser { get; set; }
        public static AppDbContext db = new();
    }

}
