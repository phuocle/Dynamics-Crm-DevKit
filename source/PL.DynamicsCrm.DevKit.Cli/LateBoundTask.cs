using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Tooling.Connector;
using PL.DynamicsCrm.DevKit.Cli.Models;
using PL.DynamicsCrm.DevKit.Shared;

namespace PL.DynamicsCrm.DevKit.Cli
{
    class LateBoundTask
    {
        private CrmServiceClient CrmServiceClient { get; }
        private LateBound LateBoundJson { get; }
        private string CurrentDirectory { get; }
        private string Version { get; }

        public LateBoundTask(CrmServiceClient crmServiceClient, string currentDirectory, LateBound lateBoundJson, string version)
        {
            CrmServiceClient = crmServiceClient;
            CurrentDirectory = currentDirectory;
            LateBoundJson = lateBoundJson;
            Version = version;
        }

        internal void Run()
        {
            CliLog.WriteLine(CliLog.COLOR_GREEN, new string('*', CliLog.STAR_LENGTH));
            CliLog.WriteLine(CliLog.COLOR_GREEN, "START LATE BOUND TASKS");
            CliLog.WriteLine(CliLog.COLOR_GREEN, new string('*', CliLog.STAR_LENGTH));

            var entities = new List<string>();
            if (LateBoundJson.type == "existing")
            {
                var pattern = "*.generated.cs";
                var folder = $"{CurrentDirectory}\\{LateBoundJson.rootfolder}";
                var files = Directory.GetFiles(folder, pattern);
                foreach(var file in files)
                {
                    var fInfo = new FileInfo(file);
                    var columns = fInfo.Name.Split(".".ToCharArray());
                    entities.Add(columns[0]);
                }
            }
            else if (LateBoundJson.type == "selected")
                entities = LateBoundJson.entities;

            if (entities.Count == 0)
            {
                CliLog.WriteLine(CliLog.COLOR_RED, "NOT FOUND ENTIIES!!!!");
                return;
            }

            CliLog.WriteLine(CliLog.COLOR_GREEN, "Found: ", CliLog.COLOR_CYAN, entities.Count, CliLog.COLOR_GREEN, " entities");
            var i = 1;
            foreach (var entity in entities)
            {
                GeneratorLateBound(entity, i, entities.Count);
                i++;
            }

            CliLog.WriteLine(CliLog.COLOR_GREEN, new string('*', CliLog.STAR_LENGTH));
            CliLog.WriteLine(CliLog.COLOR_GREEN, "END LATE BOUND TASKS");
            CliLog.WriteLine(CliLog.COLOR_GREEN, new string('*', CliLog.STAR_LENGTH));
        }

        private void GeneratorLateBound(string entity, int i, int count)
        {
            CliLog.WriteLine(CliLog.COLOR_CYAN, string.Format("{0,0}|{1," + count.ToString().Length + "}", "", i) + ": Processing " + entity);

            var lateBound = new GeneratedCSharpLateBound();
            var rootNameSpace = LateBoundJson.rootnamespace + ".Shared.Entities";
            var sharedNameSpace = LateBoundJson.rootnamespace + ".";
            var _generated = lateBound.Go(CrmServiceClient.OrganizationServiceProxy, entity, rootNameSpace, sharedNameSpace);
            var file = $"{CurrentDirectory}\\{LateBoundJson.rootfolder}\\{entity}.generated.cs";
            File.WriteAllText(file, _generated, Encoding.UTF8);
            if(!File.Exists($"{CurrentDirectory}\\{LateBoundJson.rootfolder}\\{entity}.cs"))
            {
                var text = ReadEmbeddedResource("PL.DynamicsCrm.DevKit.Cli.Data.Class.cs");
                text = text.Replace("$rootnamespace$", rootNameSpace)
                    .Replace("$class$", entity);
                File.WriteAllText($"{CurrentDirectory}\\{LateBoundJson.rootfolder}\\{entity}.cs", text);
            }
        }

        private string ReadEmbeddedResource(string path)
        {
            string data;
            var assembly = Assembly.GetExecutingAssembly();
            using (var stream = assembly.GetManifestResourceStream(path))
            using (var reader = new StreamReader(stream ?? throw new InvalidOperationException()))
            {
                data = reader.ReadToEnd();
            }
            return data;
        }
    }
}
