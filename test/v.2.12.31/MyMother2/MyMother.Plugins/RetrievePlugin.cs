using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using System;
using System.Data.SqlClient;

namespace MyMother.Plugins
{
    public class RetrievePlugin : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.Get<IPluginExecutionContext>();
            Guid id = Guid.Empty;
            if (context.InputParameters.Contains("Target") && context.InputParameters["Target"] is EntityReference)
            {
                EntityReference entityRef = (EntityReference)context.InputParameters["Target"];
                Entity e = new Entity("new_veticket");
                string cmdString = "SELECT TicketID, Severity, Name FROM VETicket WHERE TicketID=@TicketID";
                SqlConnection connection = Connection.GetConnection();
                using (SqlCommand command = connection.CreateCommand())
                {
                    command.CommandText = cmdString;
                    command.Parameters.AddWithValue("@TicketID", entityRef.Id);
                    connection.Open();
                    try
                    {
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            if (reader.Read())
                            {
                                e.Attributes.Add("new_veticketid", reader.GetGuid(0));
                                e.Attributes.Add("new_severity", reader.GetInt32(1));
                                e.Attributes.Add("new_name", reader.GetString(2));
                            }
                        }
                    }
                    finally
                    {
                        connection.Close();
                    }
                }
                context.OutputParameters["BusinessEntity"] = e;
            }
        }
    }
}
