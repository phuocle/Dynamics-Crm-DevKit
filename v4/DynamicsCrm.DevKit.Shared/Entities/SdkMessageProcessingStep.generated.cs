
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace DynamicsCrm.DevKit.Shared.Entities.SdkMessageProcessingStepOptionSets
{
	public enum ComponentState
	{

		Deleted = 2,

		Deleted_Unpublished = 3,

		Published = 0,

		Unpublished = 1
	}

	public enum InvocationSource
	{

		Child = 1,

		Parent = 0
	}

	public enum Mode
	{

		Asynchronous = 1,

		Synchronous = 0
	}

	public enum Stage
	{

		Final_Post_operation_For_internal_use_only = 55,

		Initial_Pre_operation_For_internal_use_only = 5,

		Internal_Post_operation_After_External_Plugins_For_internal_use_only = 45,

		Internal_Post_operation_Before_External_Plugins_For_internal_use_only = 35,

		Internal_Pre_operation_After_External_Plugins_For_internal_use_only = 25,

		Internal_Pre_operation_Before_External_Plugins_For_internal_use_only = 15,

		Main_Operation_For_internal_use_only = 30,

		Post_Commit_stage_fired_after_transaction_commit_For_internal_use_only = 90,

		Post_operation = 40,

		Post_operation_Deprecated = 50,

		Pre_Commit_stage_fired_before_transaction_commit_For_internal_use_only = 80,

		Pre_operation = 20,

		Pre_validation = 10
	}

	public enum StateCode
	{

		Disabled = 1,

		Enabled = 0
	}

	public enum StatusCode
	{

		Disabled = 2,

		Enabled = 1
	}

	public enum SupportedDeployment
	{

		Both = 2,

		Microsoft_Dynamics_365_Client_for_Outlook_Only = 1,

		Server_Only = 0
	}
}

namespace DynamicsCrm.DevKit.Shared.Entities
{
	public partial class SdkMessageProcessingStep : EntityBase
	{
		public struct Fields
		{
			public const string AsyncAutoDelete = "asyncautodelete";
			public const string CanUseReadOnlyConnection = "canusereadonlyconnection";
			public const string Category = "category";
			public const string ComponentState = "componentstate";
			public const string Configuration = "configuration";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string CustomizationLevel = "customizationlevel";
			public const string Description = "description";
			public const string EventExpander = "eventexpander";
			public const string EventHandler = "eventhandler";
			public const string FilteringAttributes = "filteringattributes";
			public const string ImpersonatingUserId = "impersonatinguserid";
			public const string IntroducedVersion = "introducedversion";
			[System.Obsolete("Deprecated from version: 5.0.0.0")]
			public const string InvocationSource = "invocationsource";
			public const string IsManaged = "ismanaged";
			public const string Mode = "mode";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string Name = "name";
			public const string OrganizationId = "organizationid";
			public const string OverwriteTime = "overwritetime";
			[System.Obsolete("Deprecated from version: 5.0.0.0")]
			public const string PluginTypeId = "plugintypeid";
			public const string Rank = "rank";
			public const string RuntimeIntegrationProperties = "runtimeintegrationproperties";
			public const string SdkMessageFilterId = "sdkmessagefilterid";
			public const string SdkMessageId = "sdkmessageid";
			public const string SdkMessageProcessingStepId = "sdkmessageprocessingstepid";
			public const string SdkMessageProcessingStepIdUnique = "sdkmessageprocessingstepidunique";
			public const string SdkMessageProcessingStepSecureConfigId = "sdkmessageprocessingstepsecureconfigid";
			public const string SolutionId = "solutionid";
			public const string Stage = "stage";
			public const string StateCode = "statecode";
			public const string StatusCode = "statuscode";
			public const string SupportedDeployment = "supporteddeployment";
			public const string SupportingSolutionId = "supportingsolutionid";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "sdkmessageprocessingstep";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 4608;

		[DebuggerNonUserCode()]
		public SdkMessageProcessingStep()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SdkMessageProcessingStep(Guid SdkMessageProcessingStepId)
		{
			Entity = new Entity(EntityLogicalName, SdkMessageProcessingStepId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SdkMessageProcessingStep(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SdkMessageProcessingStep(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SdkMessageProcessingStep(Entity entity, Entity merge)
		{
			Entity = entity;
			foreach (var property in merge?.Attributes)
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SdkMessageProcessingStep(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public bool? AsyncAutoDelete
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.AsyncAutoDelete); }
			set { Entity.Attributes[Fields.AsyncAutoDelete] = value; }
		}

		[DebuggerNonUserCode()]
		public bool? CanUseReadOnlyConnection
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.CanUseReadOnlyConnection); }
			set { Entity.Attributes[Fields.CanUseReadOnlyConnection] = value; }
		}

		[DebuggerNonUserCode()]
		public string Category
		{
			get { return Entity.GetAttributeValue<string>(Fields.Category); }
			set { Entity.Attributes[Fields.Category] = value; }
		}

		[DebuggerNonUserCode()]
		public DynamicsCrm.DevKit.Shared.Entities.SdkMessageProcessingStepOptionSets.ComponentState? ComponentState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ComponentState);
				if (value == null) return null;
				return (DynamicsCrm.DevKit.Shared.Entities.SdkMessageProcessingStepOptionSets.ComponentState)value.Value;
			}
		}

		[DebuggerNonUserCode()]
		public string Configuration
		{
			get { return Entity.GetAttributeValue<string>(Fields.Configuration); }
			set { Entity.Attributes[Fields.Configuration] = value; }
		}

		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}

		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		[DebuggerNonUserCode()]
		public int? CustomizationLevel
		{
			get { return Entity.GetAttributeValue<int?>(Fields.CustomizationLevel); }
		}

		[DebuggerNonUserCode()]
		public string Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.Description); }
			set { Entity.Attributes[Fields.Description] = value; }
		}

		[DebuggerNonUserCode()]
		public string EventExpander
		{
			get { return Entity.GetAttributeValue<string>(Fields.EventExpander); }
			set { Entity.Attributes[Fields.EventExpander] = value; }
		}

		[DebuggerNonUserCode()]
		public EntityReference EventHandler
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.EventHandler); }
			set { Entity.Attributes[Fields.EventHandler] = value; }
		}

		[DebuggerNonUserCode()]
		public string FilteringAttributes
		{
			get { return Entity.GetAttributeValue<string>(Fields.FilteringAttributes); }
			set { Entity.Attributes[Fields.FilteringAttributes] = value; }
		}

		[DebuggerNonUserCode()]
		public EntityReference ImpersonatingUserId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ImpersonatingUserId); }
			set { Entity.Attributes[Fields.ImpersonatingUserId] = value; }
		}

		[DebuggerNonUserCode()]
		public string IntroducedVersion
		{
			get { return Entity.GetAttributeValue<string>(Fields.IntroducedVersion); }
			set { Entity.Attributes[Fields.IntroducedVersion] = value; }
		}

		[DebuggerNonUserCode()]
		[System.Obsolete("Deprecated from version: 5.0.0.0")]
		public DynamicsCrm.DevKit.Shared.Entities.SdkMessageProcessingStepOptionSets.InvocationSource? InvocationSource
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.InvocationSource);
				if (value == null) return null;
				return (DynamicsCrm.DevKit.Shared.Entities.SdkMessageProcessingStepOptionSets.InvocationSource)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.InvocationSource] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.InvocationSource] = null;
			}
		}

		[DebuggerNonUserCode()]
		public bool? IsManaged
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsManaged); }
		}

		[DebuggerNonUserCode()]
		public DynamicsCrm.DevKit.Shared.Entities.SdkMessageProcessingStepOptionSets.Mode? Mode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.Mode);
				if (value == null) return null;
				return (DynamicsCrm.DevKit.Shared.Entities.SdkMessageProcessingStepOptionSets.Mode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Mode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.Mode] = null;
			}
		}

		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}

		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}

		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}

		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}

		[DebuggerNonUserCode()]
		public DateTime? OverwriteTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverwriteTime); }
		}

		[DebuggerNonUserCode()]
		[System.Obsolete("Deprecated from version: 5.0.0.0")]
		public EntityReference PluginTypeId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.PluginTypeId); }
			set { Entity.Attributes[Fields.PluginTypeId] = value; }
		}

		[DebuggerNonUserCode()]
		public int? Rank
		{
			get { return Entity.GetAttributeValue<int?>(Fields.Rank); }
			set { Entity.Attributes[Fields.Rank] = value; }
		}

		[DebuggerNonUserCode()]
		public string RuntimeIntegrationProperties
		{
			get { return Entity.GetAttributeValue<string>(Fields.RuntimeIntegrationProperties); }
			set { Entity.Attributes[Fields.RuntimeIntegrationProperties] = value; }
		}

		[DebuggerNonUserCode()]
		public EntityReference SdkMessageFilterId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.SdkMessageFilterId); }
			set { Entity.Attributes[Fields.SdkMessageFilterId] = value; }
		}

		[DebuggerNonUserCode()]
		public EntityReference SdkMessageId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.SdkMessageId); }
			set { Entity.Attributes[Fields.SdkMessageId] = value; }
		}

		[DebuggerNonUserCode()]
		public Guid SdkMessageProcessingStepId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.SdkMessageProcessingStepId] = value;
				Entity.Id = value;
			}
		}

		[DebuggerNonUserCode()]
		public Guid? SdkMessageProcessingStepIdUnique
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SdkMessageProcessingStepIdUnique); }
		}

		[DebuggerNonUserCode()]
		public EntityReference SdkMessageProcessingStepSecureConfigId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.SdkMessageProcessingStepSecureConfigId); }
			set { Entity.Attributes[Fields.SdkMessageProcessingStepSecureConfigId] = value; }
		}

		[DebuggerNonUserCode()]
		public Guid? SolutionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SolutionId); }
		}

		[DebuggerNonUserCode()]
		public DynamicsCrm.DevKit.Shared.Entities.SdkMessageProcessingStepOptionSets.Stage? Stage
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.Stage);
				if (value == null) return null;
				return (DynamicsCrm.DevKit.Shared.Entities.SdkMessageProcessingStepOptionSets.Stage)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Stage] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.Stage] = null;
			}
		}

		[DebuggerNonUserCode()]
		public DynamicsCrm.DevKit.Shared.Entities.SdkMessageProcessingStepOptionSets.StateCode? StateCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StateCode);
				if (value == null) return null;
				return (DynamicsCrm.DevKit.Shared.Entities.SdkMessageProcessingStepOptionSets.StateCode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.StateCode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.StateCode] = null;
			}
		}

		[DebuggerNonUserCode()]
		public DynamicsCrm.DevKit.Shared.Entities.SdkMessageProcessingStepOptionSets.StatusCode? StatusCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StatusCode);
				if (value == null) return null;
				return (DynamicsCrm.DevKit.Shared.Entities.SdkMessageProcessingStepOptionSets.StatusCode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.StatusCode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.StatusCode] = null;
			}
		}

		[DebuggerNonUserCode()]
		public DynamicsCrm.DevKit.Shared.Entities.SdkMessageProcessingStepOptionSets.SupportedDeployment? SupportedDeployment
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.SupportedDeployment);
				if (value == null) return null;
				return (DynamicsCrm.DevKit.Shared.Entities.SdkMessageProcessingStepOptionSets.SupportedDeployment)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.SupportedDeployment] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.SupportedDeployment] = null;
			}
		}

		[DebuggerNonUserCode()]
		public Guid? SupportingSolutionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SupportingSolutionId); }
		}

		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}