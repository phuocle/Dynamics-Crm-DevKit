using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using System;
using System.Data.SqlClient;

namespace MyMother.Plugins
{
    public class CreatePlugin : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.Get<IPluginExecutionContext>();
            if (context.InputParameters.Contains("Target") && context.InputParameters["Target"] is Entity)
            {
                Entity entity = (Entity)context.InputParameters["Target"];
                Guid id = Guid.NewGuid();
                string cmdString = "INSERT INTO VETicket (TicketID,Name,Severity) VALUES (@TicketID, @Name, @Severity)";
                SqlConnection connection = Connection.GetConnection();
                using (SqlCommand command = connection.CreateCommand())
                {
                    command.CommandText = cmdString;
                    command.Parameters.AddWithValue("@TicketID", id);
                    command.Parameters.AddWithValue("@Name", entity["new_name"]);
                    command.Parameters.AddWithValue("@Severity", entity["new_severity"]);
                    connection.Open();
                    try
                    {
                        var numRecords = command.ExecuteNonQuery();
                    }
                    finally
                    {
                        connection.Close();
                    }
                }
                context.OutputParameters["id"] = id;
            }
        }
    }
}
