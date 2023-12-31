using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Tooling.Connector;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Shared
{
    public sealed class XrmSingleton
    {
        private XrmSingleton() { }
        private static XrmSingleton _instance;
        public static XrmSingleton GetInstance(CrmServiceClient crmServiceClient)
        {
            if (_instance == null)
            {
                CrmServiceClient = crmServiceClient;
                _instance = new XrmSingleton();
            }
            return _instance;
        }

        private static CrmServiceClient CrmServiceClient { get; set; }

        private static List<EntityMetadata> _EntitiesMetadata = null;
        public static List<EntityMetadata> EntitiesMetadata
        {
            get
            {
                if (_EntitiesMetadata != null) return _EntitiesMetadata;
                _EntitiesMetadata = XrmHelper.GetEntitiesMetadata(CrmServiceClient);
                return _EntitiesMetadata;
            }
        }
    }
}
