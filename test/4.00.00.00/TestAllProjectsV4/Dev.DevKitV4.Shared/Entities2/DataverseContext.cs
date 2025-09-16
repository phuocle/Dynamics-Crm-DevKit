#pragma warning disable CS1591
// Created via this command line: PAC modelbuilder build --outdirectory D:\github\Dynamics-Crm-DevKit\test\4.00.00.00\TestAllProjectsV4\Dev.DevKitV4.Shared\Entities2 --settingsTemplateFile D:\github\Dynamics-Crm-DevKit\test\4.00.00.00\TestAllProjectsV4\Dev.DevKitV4.Shared\Entities2\builderSettings.json

[assembly: Microsoft.Xrm.Sdk.Client.ProxyTypesAssemblyAttribute()]

namespace Dev.DevKitV4.Shared.Entities2
{
	
	
	/// <summary>
	/// Represents a source of entities bound to a Dataverse service. It tracks and manages changes made to the retrieved entities.
	/// </summary>
	public partial class DataverseContext : Microsoft.Xrm.Sdk.Client.OrganizationServiceContext
	{
		
		/// <summary>
		/// Constructor.
		/// </summary>
		public DataverseContext(Microsoft.Xrm.Sdk.IOrganizationService service) : 
				base(service)
		{
		}
		
		/// <summary>
		/// Gets a binding to the set of all <see cref="Dev.DevKitV4.Shared.Entities2.Account"/> entities.
		/// </summary>
		public System.Linq.IQueryable<Dev.DevKitV4.Shared.Entities2.Account> AccountSet
		{
			get
			{
				return this.CreateQuery<Dev.DevKitV4.Shared.Entities2.Account>();
			}
		}
	}
}
#pragma warning restore CS1591
