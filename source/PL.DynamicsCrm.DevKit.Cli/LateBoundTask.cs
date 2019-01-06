using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Tooling.Connector;
using PL.DynamicsCrm.DevKit.Cli.Models;

namespace PL.DynamicsCrm.DevKit.Cli
{
    class LateBoundTask
    {
        private CrmServiceClient crmServiceClient;
        private string currentDirectory;
        private LateBound lateBoundJson;
        private string version;

        public LateBoundTask(CrmServiceClient crmServiceClient, string currentDirectory, LateBound lateBoundJson, string version)
        {
            this.crmServiceClient = crmServiceClient;
            this.currentDirectory = currentDirectory;
            this.lateBoundJson = lateBoundJson;
            this.version = version;
        }

        internal void Run()
        {
            throw new NotImplementedException();
        }
    }
}
