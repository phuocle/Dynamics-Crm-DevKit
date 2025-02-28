﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.AppModuleComponentOptionSets
{
	public enum ComponentType
	{
		/// <summary>
		/// Business Process Flows = 29
		/// </summary>
		Business_Process_Flows = 29,
		/// <summary>
		/// Charts = 59
		/// </summary>
		Charts = 59,
		/// <summary>
		/// Command (Ribbon) for Forms, Grids, sub grids = 48
		/// </summary>
		Command_Ribbon_for_Forms_Grids_sub_grids = 48,
		/// <summary>
		/// Entities = 1
		/// </summary>
		Entities = 1,
		/// <summary>
		/// Forms = 60
		/// </summary>
		Forms = 60,
		/// <summary>
		/// Sitemap = 62
		/// </summary>
		Sitemap = 62,
		/// <summary>
		/// Views = 26
		/// </summary>
		Views = 26
	}

	public enum RootComponentBehavior
	{
		/// <summary>
		/// Do not include subcomponents = 1
		/// </summary>
		Do_not_include_subcomponents = 1,
		/// <summary>
		/// Include As Shell Only = 2
		/// </summary>
		Include_As_Shell_Only = 2,
		/// <summary>
		/// Include Subcomponents = 0
		/// </summary>
		Include_Subcomponents = 0
	}
}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class AppModuleComponent : EntityBase
	{
		public struct Fields
		{
			public const string AppModuleComponentId = "appmodulecomponentid";
			public const string AppModuleComponentIdUnique = "appmodulecomponentidunique";
			public const string AppModuleIdUnique = "appmoduleidunique";
			public const string ComponentType = "componenttype";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string ExchangeRate = "exchangerate";
			public const string IntroducedVersion = "introducedversion";
			public const string IsDefault = "isdefault";
			public const string IsMetadata = "ismetadata";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string ObjectId = "objectid";
			public const string OverwriteTime = "overwritetime";
			public const string RootAppModuleComponentId = "rootappmodulecomponentid";
			public const string RootComponentBehavior = "rootcomponentbehavior";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "appmodulecomponent";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 9007;

		[DebuggerNonUserCode()]
		public AppModuleComponent()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public AppModuleComponent(Guid AppModuleComponentId)
		{
			Entity = new Entity(EntityLogicalName, AppModuleComponentId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public AppModuleComponent(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public AppModuleComponent(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public AppModuleComponent(Entity entity, Entity merge)
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
		public AppModuleComponent(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>App Module Component</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid AppModuleComponentId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.AppModuleComponentId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Unique identifier of the Application Component used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook</para>
		/// <para>Uniqueidentifier</para>
		/// <para>Application Component Unique Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? AppModuleComponentIdUnique
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.AppModuleComponentIdUnique); }
			set { Entity.Attributes[Fields.AppModuleComponentIdUnique] = value; }
		}

		/// <summary>
		/// <para>The App Module Id Unique</para>
		/// <para>Required - Lookup to appmodule</para>
		/// <para>AppModule</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference AppModuleIdUnique
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.AppModuleIdUnique); }
			set { Entity.Attributes[Fields.AppModuleIdUnique] = value; }
		}

		/// <summary>
		/// <para>The object type code of the component.</para>
		/// <para>Required - Picklist</para>
		/// <para>Object Type Code</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.AppModuleComponentOptionSets.ComponentType? ComponentType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ComponentType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.AppModuleComponentOptionSets.ComponentType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.ComponentType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.ComponentType] = null;
			}
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}

		/// <summary>
		/// <para>Date and time when the record was created.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who created the record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Exchange rate for the currency associated with the Application Component with respect to the base currency.</para>
		/// <para>ReadOnly - Decimal - MinValue: 0 - MaxValue: 100,000,000,000</para>
		/// <para>ExchangeRate</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? ExchangeRate
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.ExchangeRate); }
		}

		/// <summary>
		/// <para>Version in which the application component record is introduced.</para>
		/// <para>String - MaxLength: 48</para>
		/// <para>Introduced Version</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string IntroducedVersion
		{
			get { return Entity.GetAttributeValue<string>(Fields.IntroducedVersion); }
			set { Entity.Attributes[Fields.IntroducedVersion] = value; }
		}

		/// <summary>
		/// <para>Is Default</para>
		/// <para>Required - Boolean</para>
		/// <para>Is Default</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsDefault
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsDefault); }
			set { Entity.Attributes[Fields.IsDefault] = value; }
		}

		/// <summary>
		/// <para>Is Metadata</para>
		/// <para>Boolean</para>
		/// <para>Is Metadata</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsMetadata
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsMetadata); }
			set { Entity.Attributes[Fields.IsMetadata] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the user who modified the record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}

		/// <summary>
		/// <para>Date and time when the record was modified.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Modified On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who modified the record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Object Id</para>
		/// <para>Uniqueidentifier</para>
		/// <para>Object</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? ObjectId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.ObjectId); }
			set { Entity.Attributes[Fields.ObjectId] = value; }
		}

		/// <summary>
		/// <para>Date and time when the record was created.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverwriteTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverwriteTime); }
		}

		/// <summary>
		/// <para>The parent ID of the subcomponent, which will be a root</para>
		/// <para>Uniqueidentifier</para>
		/// <para>Root App Module Component</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? RootAppModuleComponentId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.RootAppModuleComponentId); }
			set { Entity.Attributes[Fields.RootAppModuleComponentId] = value; }
		}

		/// <summary>
		/// <para>Indicates the include behavior of the root component.</para>
		/// <para>Picklist</para>
		/// <para>Root Component Behavior</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.AppModuleComponentOptionSets.RootComponentBehavior? RootComponentBehavior
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.RootComponentBehavior);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.AppModuleComponentOptionSets.RootComponentBehavior)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.RootComponentBehavior] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.RootComponentBehavior] = null;
			}
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>Integer - MinValue: -1 - MaxValue: 2,147,483,647</para>
		/// <para>Time Zone Rule Version Number</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? TimeZoneRuleVersionNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.TimeZoneRuleVersionNumber); }
			set { Entity.Attributes[Fields.TimeZoneRuleVersionNumber] = value; }
		}

		/// <summary>
		/// <para>Time zone code that was in use when the record was created.</para>
		/// <para>Integer - MinValue: -1 - MaxValue: 2,147,483,647</para>
		/// <para>UTC Conversion Time Zone Code</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? UTCConversionTimeZoneCode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.UTCConversionTimeZoneCode); }
			set { Entity.Attributes[Fields.UTCConversionTimeZoneCode] = value; }
		}

		/// <summary>
		/// <para>ReadOnly - BigInt</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}
