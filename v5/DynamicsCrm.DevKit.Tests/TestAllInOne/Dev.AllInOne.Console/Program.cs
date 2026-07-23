using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Linq;

namespace Dev.AllInOne.Console
{
    public class Program
    {
        static void Main()
        {
            var service = App.Service;
            if (!service.IsReady) throw new Exception(service.LastError);

            // OOB pie-compatible data: category WITHOUT alias; aggregate primary key; attribute order aggregate then groupby
            var dataFixed =
                "<datadefinition>" +
                "<fetchcollection>" +
                "<fetch mapping=\"logical\" aggregate=\"true\">" +
                "<entity name=\"contact\">" +
                "<attribute alias=\"aggregate_column\" name=\"contactid\" aggregate=\"count\" />" +
                "<attribute groupby=\"true\" alias=\"groupby_column\" name=\"statecode\" />" +
                "</entity>" +
                "</fetch>" +
                "</fetchcollection>" +
                "<categorycollection>" +
                "<category>" +
                "<measurecollection>" +
                "<measure alias=\"aggregate_column\" />" +
                "</measurecollection>" +
                "</category>" +
                "</categorycollection>" +
                "</datadefinition>";

            // OOB pie presentation from kbarticle Articles By Status, adapted
            var presFixed =
                "<Chart Palette=\"None\" PaletteCustomColors=\"91,151,213; 237,125,49; 160,116,166; 255,192,0; 68,114,196; 112,173,71; 37,94,145; 158,72,14; 117,55,125; 153,115,0; 38,68,120; 67,104,43; 124,175,221; 241,151,90; 186,144,192; 255,205,51; 105,142,208; 140,193,104; 50,125,194; 210,96,18; 150,83,159; 204,154,0; 51,90,161; 90,138,57;\">" +
                "<Series>" +
                "<Series ShadowOffset=\"0\" IsValueShownAsLabel=\"true\" Font=\"{0}, 9.5px\" LabelForeColor=\"59, 59, 59\" CustomProperties=\"PieLabelStyle=Inside, PieDrawingStyle=Default\" ChartType=\"pie\">" +
                "<SmartLabelStyle Enabled=\"True\" />" +
                "</Series>" +
                "</Series>" +
                "<ChartAreas>" +
                "<ChartArea>" +
                "<Area3DStyle Enable3D=\"false\" />" +
                "</ChartArea>" +
                "</ChartAreas>" +
                "<Legends>" +
                "<Legend Alignment=\"Center\" LegendStyle=\"Table\" Docking=\"right\" Font=\"{0}, 11px\" ShadowColor=\"0, 0, 0, 0\" ForeColor=\"59, 59, 59\" />" +
                "</Legends>" +
                "<Titles>" +
                "<Title Alignment=\"TopLeft\" Name=\"Title1\" DockingOffset=\"-3\" Font=\"{0}, 13px\" ForeColor=\"0, 0, 0\"></Title>" +
                "</Titles>" +
                "</Chart>";

            // Control: old broken style data (category with alias) + same pres
            var dataBroken =
                "<datadefinition>" +
                "<fetchcollection>" +
                "<fetch mapping=\"logical\" aggregate=\"true\">" +
                "<entity name=\"contact\">" +
                "<attribute name=\"statecode\" groupby=\"true\" alias=\"groupby_column\" />" +
                "<attribute name=\"fullname\" aggregate=\"count\" alias=\"aggregate_column\" />" +
                "</entity>" +
                "</fetch>" +
                "</fetchcollection>" +
                "<categorycollection>" +
                "<category alias=\"groupby_column\">" +
                "<measurecollection>" +
                "<measure alias=\"aggregate_column\" />" +
                "</measurecollection>" +
                "</category>" +
                "</categorycollection>" +
                "</datadefinition>";

            Upsert(service, "Contact by Status", dataFixed, presFixed);
            Upsert(service, "ZZ Pie Fixed OOB", dataFixed, presFixed);
            Upsert(service, "ZZ Pie Broken CategoryAlias", dataBroken, presFixed);

            // Also test only category alias difference with fullname count
            var dataOnlyCategoryFix =
                "<datadefinition>" +
                "<fetchcollection>" +
                "<fetch mapping=\"logical\" aggregate=\"true\">" +
                "<entity name=\"contact\">" +
                "<attribute name=\"statecode\" groupby=\"true\" alias=\"groupby_column\" />" +
                "<attribute name=\"fullname\" aggregate=\"count\" alias=\"aggregate_column\" />" +
                "</entity>" +
                "</fetch>" +
                "</fetchcollection>" +
                "<categorycollection>" +
                "<category>" +
                "<measurecollection>" +
                "<measure alias=\"aggregate_column\" />" +
                "</measurecollection>" +
                "</category>" +
                "</categorycollection>" +
                "</datadefinition>";
            Upsert(service, "ZZ Pie Only Category Fix", dataOnlyCategoryFix, presFixed);

            service.Execute(new PublishXmlRequest
            {
                ParameterXml = "<importexportxml><entities><entity>contact</entity></entities></importexportxml>"
            });

            System.Console.WriteLine("Published diagnostic charts.");
            System.Console.WriteLine("Please check UI load for:");
            System.Console.WriteLine("1) Contact by Status  (fixed OOB pie data+pres)");
            System.Console.WriteLine("2) ZZ Pie Fixed OOB");
            System.Console.WriteLine("3) ZZ Pie Broken CategoryAlias");
            System.Console.WriteLine("4) ZZ Pie Only Category Fix");
            System.Console.WriteLine();
            System.Console.WriteLine("KEY DIFF vs broken MCP:");
            System.Console.WriteLine("- category WITHOUT alias=\"groupby_column\"");
            System.Console.WriteLine("- ChartType=\"pie\" lowercase");
            System.Console.WriteLine("- IsValueShownAsLabel=\"true\" lowercase");
            System.Console.WriteLine("- ShadowOffset=\"0\"");
            System.Console.WriteLine("- Title Name=\"Title1\"");
        }

        static void Upsert(Microsoft.PowerPlatform.Dataverse.Client.ServiceClient service, string name, string data, string pres)
        {
            var q = new QueryExpression("savedqueryvisualization") { ColumnSet = new ColumnSet("name"), TopCount = 1 };
            q.Criteria.AddCondition("name", ConditionOperator.Equal, name);
            q.Criteria.AddCondition("primaryentitytypecode", ConditionOperator.Equal, "contact");
            var existing = service.RetrieveMultiple(q).Entities.FirstOrDefault();
            if (existing == null)
            {
                var id = service.Create(new Entity("savedqueryvisualization")
                {
                    ["name"] = name,
                    ["primaryentitytypecode"] = "contact",
                    ["datadescription"] = data,
                    ["presentationdescription"] = pres,
                    ["isdefault"] = false,
                    ["description"] = "diagnostic fix"
                });
                System.Console.WriteLine("Created " + name + " => " + id);
            }
            else
            {
                service.Update(new Entity("savedqueryvisualization", existing.Id)
                {
                    ["datadescription"] = data,
                    ["presentationdescription"] = pres
                });
                System.Console.WriteLine("Updated " + name + " => " + existing.Id);
            }
        }
    }
}
