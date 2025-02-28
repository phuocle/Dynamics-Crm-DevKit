﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:47:33
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.msdyn_analysiscomponentOptionSets
{
	public enum msdyn_AnalysisComponentType
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Component Health</para>
		/// <para><strong>Value</strong>: 192,350,001</para>
		/// </summary>
		Component_Health = 192_350_001,
		/// <summary>
		/// <para><strong>Display Name</strong>: Object Health</para>
		/// <para><strong>Value</strong>: 192,350,002</para>
		/// </summary>
		Object_Health = 192_350_002,
		/// <summary>
		/// <para><strong>Display Name</strong>: Organization Health</para>
		/// <para><strong>Value</strong>: 192,350,000</para>
		/// </summary>
		Organization_Health = 192_350_000
	}
	public enum msdyn_ComponentType
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Configuration</para>
		/// <para><strong>Value</strong>: 192,350,005</para>
		/// </summary>
		Configuration = 192_350_005,
		/// <summary>
		/// <para><strong>Display Name</strong>: Entity</para>
		/// <para><strong>Value</strong>: 192,350,001</para>
		/// </summary>
		Entity = 192_350_001,
		/// <summary>
		/// <para><strong>Display Name</strong>: Form</para>
		/// <para><strong>Value</strong>: 192,350,003</para>
		/// </summary>
		Form = 192_350_003,
		/// <summary>
		/// <para><strong>Display Name</strong>: Plugin</para>
		/// <para><strong>Value</strong>: 192,350,004</para>
		/// </summary>
		Plugin = 192_350_004,
		/// <summary>
		/// <para><strong>Display Name</strong>: Solution</para>
		/// <para><strong>Value</strong>: 192,350,000</para>
		/// </summary>
		Solution = 192_350_000,
		/// <summary>
		/// <para><strong>Display Name</strong>: View</para>
		/// <para><strong>Value</strong>: 192,350,002</para>
		/// </summary>
		View = 192_350_002
	}
	public enum statecode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Active</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Active = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Inactive</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Inactive = 1
	}
	public enum statuscode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Canceled</para>
		/// <para><strong>Value</strong>: 2</para>
		/// <para><strong>StateCode.Inactive</strong></para>
		/// </summary>
		Canceled = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Complete</para>
		/// <para><strong>Value</strong>: 192,350,001</para>
		/// <para><strong>StateCode.Active</strong></para>
		/// </summary>
		Complete = 192_350_001,
		/// <summary>
		/// <para><strong>Display Name</strong>: Completed With Exceptions</para>
		/// <para><strong>Value</strong>: 192,350,003</para>
		/// <para><strong>StateCode.Active</strong></para>
		/// </summary>
		Completed_With_Exceptions = 192_350_003,
		/// <summary>
		/// <para><strong>Display Name</strong>: Exception</para>
		/// <para><strong>Value</strong>: 192,350,002</para>
		/// <para><strong>StateCode.Active</strong></para>
		/// </summary>
		Exception = 192_350_002,
		/// <summary>
		/// <para><strong>Display Name</strong>: Pending</para>
		/// <para><strong>Value</strong>: 1</para>
		/// <para><strong>StateCode.Active</strong></para>
		/// </summary>
		Pending = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Running</para>
		/// <para><strong>Value</strong>: 192,350,000</para>
		/// <para><strong>StateCode.Active</strong></para>
		/// </summary>
		Running = 192_350_000
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class msdyn_analysiscomponent : EntityBase
	{
		public struct Fields
		{
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string msdyn_analysiscomponentId = "msdyn_analysiscomponentid";
			public const string msdyn_AnalysisComponentType = "msdyn_analysiscomponenttype";
			public const string msdyn_AnalysisJobId = "msdyn_analysisjobid";
			public const string msdyn_ComponentId = "msdyn_componentid";
			public const string msdyn_ComponentName = "msdyn_componentname";
			public const string msdyn_ComponentType = "msdyn_componenttype";
			public const string msdyn_ComponentVersion = "msdyn_componentversion";
			public const string msdyn_ErrorCount = "msdyn_errorcount";
			public const string msdyn_name = "msdyn_name";
			public const string msdyn_RetryCount = "msdyn_retrycount";
			public const string msdyn_RuleFailCount = "msdyn_rulefailcount";
			public const string msdyn_RulePassCount = "msdyn_rulepasscount";
			public const string msdyn_RulePassRate = "msdyn_rulepassrate";
			public const string msdyn_sevcriticalcount = "msdyn_sevcriticalcount";
			public const string msdyn_sevhighcount = "msdyn_sevhighcount";
			public const string msdyn_sevlowcount = "msdyn_sevlowcount";
			public const string msdyn_sevmediumcount = "msdyn_sevmediumcount";
			public const string msdyn_SolutionHealthRuleSetId = "msdyn_solutionhealthrulesetid";
			public const string msdyn_SuggestionCount = "msdyn_suggestioncount";
			public const string msdyn_WarningCount = "msdyn_warningcount";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "msdyn_analysiscomponent";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10277;
		public const string EntityCollectionSchemaName = "msdyn_analysiscomponents";
		public const string EntityDisplayCollectionName = "Analysis Components";
		public const string DisplayName = "Analysis Component";
		public const string EntitySetName = "msdyn_analysiscomponents";
		public const string EntityLogicalCollectionName = "msdyn_analysiscomponents";
		public const string EntityPrimaryIdAttribute = "msdyn_analysiscomponentid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "msdyn_name";
		public const string EntitySchemaName = "msdyn_analysiscomponent";
		[DebuggerNonUserCode()]
		public msdyn_analysiscomponent()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_analysiscomponent(Guid msdyn_analysiscomponentId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_analysiscomponentId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_analysiscomponent(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_analysiscomponent"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public msdyn_analysiscomponent(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_analysiscomponent"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyn_analysiscomponent(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyn_analysiscomponent(preEntity, targetEntity) with targetEntity = null");
			if (preEntity == null) preEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);
			Entity = CloneThisEntity(preEntity);
			foreach (var property in targetEntity?.Attributes?.ToList())
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_analysiscomponent"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyn_analysiscomponent(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyn_analysiscomponent(preEntity, targetEntity, postEntity) with targetEntity = null");
			if (preEntity == null) preEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);
			if (postEntity == null) postEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);
			Entity = CloneThisEntity(preEntity);
			foreach (var property in targetEntity?.Attributes?.ToList())
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			foreach (var property in postEntity?.Attributes?.ToList())
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_analysiscomponent(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who created the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created On</para>
		/// <para><strong>Description</strong>: Date and time when the record was created.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By (Delegate)</para>
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who created the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Import Sequence Number</para>
		/// <para><strong>Description</strong>: Sequence number of the import that created this record.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ImportSequenceNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ImportSequenceNumber); }
			set { Entity.Attributes[Fields.ImportSequenceNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who modified the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified On</para>
		/// <para><strong>Description</strong>: Date and time when the record was modified.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By (Delegate)</para>
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who modified the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Analysis Component</para>
		/// <para><strong>Description</strong>: Unique identifier for entity instances</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_analysiscomponentId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_analysiscomponentId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Analysis Component Type</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_analysiscomponentOptionSets.msdyn_AnalysisComponentType"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_analysiscomponentOptionSets.msdyn_AnalysisComponentType.Component_Health"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_analysiscomponentOptionSets.msdyn_AnalysisComponentType? msdyn_AnalysisComponentType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_AnalysisComponentType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_analysiscomponentOptionSets.msdyn_AnalysisComponentType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_AnalysisComponentType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_AnalysisComponentType] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Analysis Job</para>
		/// <para><strong>Description</strong>: The parent Analysis Job that analyzed this particular Analysis Component.</para>
		/// <para><strong>Lookup</strong>: <see cref="msdyn_analysisjob"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_AnalysisJobId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_AnalysisJobId); }
			set { Entity.Attributes[Fields.msdyn_AnalysisJobId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Component Id</para>
		/// <para>Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 50</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_ComponentId
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_ComponentId); }
			set { Entity.Attributes[Fields.msdyn_ComponentId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Component Name</para>
		/// <para>Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_ComponentName
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_ComponentName); }
			set { Entity.Attributes[Fields.msdyn_ComponentName] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Component Type</para>
		/// <para>Required - <strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_analysiscomponentOptionSets.msdyn_ComponentType"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_analysiscomponentOptionSets.msdyn_ComponentType? msdyn_ComponentType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_ComponentType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_analysiscomponentOptionSets.msdyn_ComponentType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_ComponentType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_ComponentType] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Component Version</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 50</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_ComponentVersion
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_ComponentVersion); }
			set { Entity.Attributes[Fields.msdyn_ComponentVersion] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Error Count</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_ErrorCount
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_ErrorCount); }
			set { Entity.Attributes[Fields.msdyn_ErrorCount] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Name</para>
		/// <para><strong>Description</strong>: The name of the custom entity.</para>
		/// <para><strong>Primary Name</strong>: Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_name); }
			set { Entity.Attributes[Fields.msdyn_name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Retry Count</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_RetryCount
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_RetryCount); }
			set { Entity.Attributes[Fields.msdyn_RetryCount] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Rule Fail Count</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_RuleFailCount
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_RuleFailCount); }
			set { Entity.Attributes[Fields.msdyn_RuleFailCount] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Rule Pass Count</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_RulePassCount
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_RulePassCount); }
			set { Entity.Attributes[Fields.msdyn_RulePassCount] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Rule Pass Rate</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_RulePassRate
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_RulePassRate); }
			set { Entity.Attributes[Fields.msdyn_RulePassRate] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Critical Severity Count</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_sevcriticalcount
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_sevcriticalcount); }
			set { Entity.Attributes[Fields.msdyn_sevcriticalcount] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: High Severity Count</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_sevhighcount
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_sevhighcount); }
			set { Entity.Attributes[Fields.msdyn_sevhighcount] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Low Severity Count</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_sevlowcount
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_sevlowcount); }
			set { Entity.Attributes[Fields.msdyn_sevlowcount] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Medium Severity Count</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_sevmediumcount
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_sevmediumcount); }
			set { Entity.Attributes[Fields.msdyn_sevmediumcount] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Solution Health Rule Set</para>
		/// <para><strong>Description</strong>: The Solution Health Rule Set for which this is analysis component is for.</para>
		/// <para><strong>Lookup</strong>: <see cref="msdyn_solutionhealthruleset"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_SolutionHealthRuleSetId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_SolutionHealthRuleSetId); }
			set { Entity.Attributes[Fields.msdyn_SolutionHealthRuleSetId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Suggestion Count</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_SuggestionCount
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_SuggestionCount); }
			set { Entity.Attributes[Fields.msdyn_SuggestionCount] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Warning Count</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_WarningCount
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_WarningCount); }
			set { Entity.Attributes[Fields.msdyn_WarningCount] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Record Created On</para>
		/// <para><strong>Description</strong>: Date and time that the record was migrated.</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateOnly</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverriddenCreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverriddenCreatedOn); }
			set { Entity.Attributes[Fields.OverriddenCreatedOn] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owner</para>
		/// <para><strong>Description</strong>: Owner Id</para>
		/// <para><strong>Lookup</strong>: <see cref="systemuser"/>, <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
			set { Entity.Attributes[Fields.OwnerId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning Business Unit</para>
		/// <para><strong>Description</strong>: Unique identifier for the business unit that owns the record</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="businessunit"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning Team</para>
		/// <para><strong>Description</strong>: Unique identifier for the team that owns the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning User</para>
		/// <para><strong>Description</strong>: Unique identifier for the user that owns the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Status</para>
		/// <para><strong>Description</strong>: Status of the Analysis Component</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_analysiscomponentOptionSets.statecode"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_analysiscomponentOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_analysiscomponentOptionSets.statecode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.statecode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.statecode] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Status Reason</para>
		/// <para><strong>Description</strong>: Reason for the status of the Analysis Component</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_analysiscomponentOptionSets.statuscode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_analysiscomponentOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_analysiscomponentOptionSets.statuscode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.statuscode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.statuscode] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Time Zone Rule Version Number</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -1 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? TimeZoneRuleVersionNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.TimeZoneRuleVersionNumber); }
			set { Entity.Attributes[Fields.TimeZoneRuleVersionNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: UTC Conversion Time Zone Code</para>
		/// <para><strong>Description</strong>: Time zone code that was in use when the record was created.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -1 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? UTCConversionTimeZoneCode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.UTCConversionTimeZoneCode); }
			set { Entity.Attributes[Fields.UTCConversionTimeZoneCode] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Version Number</para>
		/// <para><strong>Description</strong>: Version Number</para>
		/// <para><strong>ReadOnly</strong> - <strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}