#pragma warning disable CS1591

namespace Dev.DevKitV4.Shared.Entities2
{
	
	
	[System.Runtime.Serialization.DataContractAttribute(Namespace="http://schemas.microsoft.com/xrm/2011/new/")]
	[Microsoft.Xrm.Sdk.Client.RequestProxyAttribute("devkit_DebugCustomApi")]
	public partial class DevKit_DebugCustomApiRequest : Microsoft.Xrm.Sdk.OrganizationRequest
	{
		
		public static class Fields
		{
			public const string DevKit_InputBoolean = "DevKit_InputBoolean";
			public const string DevKit_InputDateTime = "DevKit_InputDateTime";
			public const string DevKit_InputDecimal = "DevKit_InputDecimal";
			public const string DevKit_InputEntity = "DevKit_InputEntity";
			public const string DevKit_InputEntityCollection = "DevKit_InputEntityCollection";
			public const string DevKit_InputEntityReference = "DevKit_InputEntityReference";
			public const string DevKit_InputFloat = "DevKit_InputFloat";
			public const string DevKit_InputInteger = "DevKit_InputInteger";
			public const string DevKit_InputMoney = "DevKit_InputMoney";
			public const string DevKit_InputPicklist = "DevKit_InputPicklist";
			public const string DevKit_InputString = "DevKit_InputString";
			public const string DevKit_InputStringArray = "DevKit_InputStringArray";
			public const string DevKit_InputGuid = "DevKit_InputGuid";
		}
		
		public const string ActionLogicalName = "devkit_DebugCustomApi";
		
		public bool DevKit_InputBoolean
		{
			get
			{
				if (this.Parameters.Contains("devkit_InputBoolean"))
				{
					return ((bool)(this.Parameters["devkit_InputBoolean"]));
				}
				else
				{
					return default(bool);
				}
			}
			set
			{
				this.Parameters["devkit_InputBoolean"] = value;
			}
		}
		
		public System.DateTime DevKit_InputDateTime
		{
			get
			{
				if (this.Parameters.Contains("devkit_InputDateTime"))
				{
					return ((System.DateTime)(this.Parameters["devkit_InputDateTime"]));
				}
				else
				{
					return default(System.DateTime);
				}
			}
			set
			{
				this.Parameters["devkit_InputDateTime"] = value;
			}
		}
		
		public decimal DevKit_InputDecimal
		{
			get
			{
				if (this.Parameters.Contains("devkit_InputDecimal"))
				{
					return ((decimal)(this.Parameters["devkit_InputDecimal"]));
				}
				else
				{
					return default(decimal);
				}
			}
			set
			{
				this.Parameters["devkit_InputDecimal"] = value;
			}
		}
		
		public Microsoft.Xrm.Sdk.Entity DevKit_InputEntity
		{
			get
			{
				if (this.Parameters.Contains("devkit_InputEntity"))
				{
					return ((Microsoft.Xrm.Sdk.Entity)(this.Parameters["devkit_InputEntity"]));
				}
				else
				{
					return default(Microsoft.Xrm.Sdk.Entity);
				}
			}
			set
			{
				this.Parameters["devkit_InputEntity"] = value;
			}
		}
		
		public Microsoft.Xrm.Sdk.EntityCollection DevKit_InputEntityCollection
		{
			get
			{
				if (this.Parameters.Contains("devkit_InputEntityCollection"))
				{
					return ((Microsoft.Xrm.Sdk.EntityCollection)(this.Parameters["devkit_InputEntityCollection"]));
				}
				else
				{
					return default(Microsoft.Xrm.Sdk.EntityCollection);
				}
			}
			set
			{
				this.Parameters["devkit_InputEntityCollection"] = value;
			}
		}
		
		public Microsoft.Xrm.Sdk.EntityReference DevKit_InputEntityReference
		{
			get
			{
				if (this.Parameters.Contains("devkit_InputEntityReference"))
				{
					return ((Microsoft.Xrm.Sdk.EntityReference)(this.Parameters["devkit_InputEntityReference"]));
				}
				else
				{
					return default(Microsoft.Xrm.Sdk.EntityReference);
				}
			}
			set
			{
				this.Parameters["devkit_InputEntityReference"] = value;
			}
		}
		
		public double DevKit_InputFloat
		{
			get
			{
				if (this.Parameters.Contains("devkit_InputFloat"))
				{
					return ((double)(this.Parameters["devkit_InputFloat"]));
				}
				else
				{
					return default(double);
				}
			}
			set
			{
				this.Parameters["devkit_InputFloat"] = value;
			}
		}
		
		public int DevKit_InputInteger
		{
			get
			{
				if (this.Parameters.Contains("devkit_InputInteger"))
				{
					return ((int)(this.Parameters["devkit_InputInteger"]));
				}
				else
				{
					return default(int);
				}
			}
			set
			{
				this.Parameters["devkit_InputInteger"] = value;
			}
		}
		
		public Microsoft.Xrm.Sdk.Money DevKit_InputMoney
		{
			get
			{
				if (this.Parameters.Contains("devkit_InputMoney"))
				{
					return ((Microsoft.Xrm.Sdk.Money)(this.Parameters["devkit_InputMoney"]));
				}
				else
				{
					return default(Microsoft.Xrm.Sdk.Money);
				}
			}
			set
			{
				this.Parameters["devkit_InputMoney"] = value;
			}
		}
		
		public Microsoft.Xrm.Sdk.OptionSetValue DevKit_InputPicklist
		{
			get
			{
				if (this.Parameters.Contains("devkit_InputPicklist"))
				{
					return ((Microsoft.Xrm.Sdk.OptionSetValue)(this.Parameters["devkit_InputPicklist"]));
				}
				else
				{
					return default(Microsoft.Xrm.Sdk.OptionSetValue);
				}
			}
			set
			{
				this.Parameters["devkit_InputPicklist"] = value;
			}
		}
		
		public string DevKit_InputString
		{
			get
			{
				if (this.Parameters.Contains("devkit_InputString"))
				{
					return ((string)(this.Parameters["devkit_InputString"]));
				}
				else
				{
					return default(string);
				}
			}
			set
			{
				this.Parameters["devkit_InputString"] = value;
			}
		}
		
		public string[] DevKit_InputStringArray
		{
			get
			{
				if (this.Parameters.Contains("devkit_InputStringArray"))
				{
					return ((string[])(this.Parameters["devkit_InputStringArray"]));
				}
				else
				{
					return default(string[]);
				}
			}
			set
			{
				this.Parameters["devkit_InputStringArray"] = value;
			}
		}
		
		public System.Guid DevKit_InputGuid
		{
			get
			{
				if (this.Parameters.Contains("devkit_InputGuid"))
				{
					return ((System.Guid)(this.Parameters["devkit_InputGuid"]));
				}
				else
				{
					return default(System.Guid);
				}
			}
			set
			{
				this.Parameters["devkit_InputGuid"] = value;
			}
		}
		
		public DevKit_DebugCustomApiRequest()
		{
			this.RequestName = "devkit_DebugCustomApi";
		}
	}
	
	[System.Runtime.Serialization.DataContractAttribute(Namespace="http://schemas.microsoft.com/xrm/2011/new/")]
	[Microsoft.Xrm.Sdk.Client.ResponseProxyAttribute("devkit_DebugCustomApi")]
	public partial class DevKit_DebugCustomApiResponse : Microsoft.Xrm.Sdk.OrganizationResponse
	{
		
		public const string ActionLogicalName = "devkit_DebugCustomApi";
		
		public DevKit_DebugCustomApiResponse()
		{
		}
	}
}
#pragma warning restore CS1591
