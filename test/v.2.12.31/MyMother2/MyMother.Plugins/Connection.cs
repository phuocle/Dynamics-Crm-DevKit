using Microsoft.Xrm.Sdk;
using System.Data.SqlClient;

namespace MyMother.Plugins
{
    public static class Connection
    {
        public static SqlConnection GetConnection()
        {
            try
            {
                var connectionString = @"Server=tcp:phuocvirtualtable.database.windows.net,1433;Initial Catalog=VirtualTable;Persist Security Info=False;User ID=phuoc;Password=Aa@134567801;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
                SqlConnection connection = new SqlConnection(connectionString);
                return connection;
            }
            catch
            {
                throw new InvalidPluginExecutionException("GetConnection");
            }
        }
    }
}
