﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.AppConfigMasterOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	public partial class AppConfigMaster : EntityBase
	{
		public struct Fields
		{
			public const string AppConfigMasterId = "appconfigmasterid";
			public const string ConfigType = "configtype";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string DefaultValue = "defaultvalue";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string IsNavigationSetting = "isnavigationsetting";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string Name = "name";
			public const string OrganizationId = "organizationid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string ParentAppConfigMasterId = "parentappconfigmasterid";
			public const string Validator = "validator";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "appconfigmaster";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 9011;

		[DebuggerNonUserCode()]
		public AppConfigMaster()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public AppConfigMaster(Guid AppConfigMasterId)
		{
			Entity = new Entity(EntityLogicalName, AppConfigMasterId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public AppConfigMaster(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public AppConfigMaster(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public AppConfigMaster(Entity entity, Entity merge)
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
		public AppConfigMaster(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>System-Populated App Configuration instance identifier.</para>
		/// <para>ReadOnly - Primary Key - Uniqueidentifier</para>
		/// <para>AppConfigMasterId</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid AppConfigMasterId
		{
			get { return Id; }
		}

		/// <summary>
		/// <para>Enter the App Configuration and Setting property data type.</para>
		/// <para>ReadOnly - String - MaxLength: 100</para>
		/// <para>ConfigType</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ConfigType
		{
			get { return Entity.GetAttributeValue<string>(Fields.ConfigType); }
		}

		/// <summary>
		/// <para>Shows who created the record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}

		/// <summary>
		/// <para>Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		/// <summary>
		/// <para>Shows who created the record on behalfÂ of another user.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Enter the default value of the App Configuration and Setting property.</para>
		/// <para>ReadOnly - String - MaxLength: 100</para>
		/// <para>DefaultValue</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string DefaultValue
		{
			get { return Entity.GetAttributeValue<string>(Fields.DefaultValue); }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para>Import Sequence Number</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ImportSequenceNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ImportSequenceNumber); }
		}

		/// <summary>
		/// <para>Enter whether this App Configuration and Setting is Navigation Setting.</para>
		/// <para>ReadOnly - Integer - MinValue: 0 - MaxValue: 1</para>
		/// <para>Is Nagivation Setting</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? IsNavigationSetting
		{
			get { return Entity.GetAttributeValue<int?>(Fields.IsNavigationSetting); }
		}

		/// <summary>
		/// <para>Shows who last updated the record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}

		/// <summary>
		/// <para>Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Modified On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}

		/// <summary>
		/// <para>Shows who last updated the record on behalf of another user.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Enter the name of the App Configuration and Setting property with which this customization will be identified.</para>
		/// <para>String - MaxLength: 200</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}

		/// <summary>
		/// <para>System-calculated field for Organization identifier.</para>
		/// <para>ReadOnly - Lookup to organization</para>
		/// <para>Organization</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}

		/// <summary>
		/// <para>Shows the date and time when the record was migrated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly</para>
		/// <para>Record Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverriddenCreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverriddenCreatedOn); }
		}

		/// <summary>
		/// <para>ParentAppConfigMasterId</para>
		/// <para>ReadOnly - String - MaxLength: 100</para>
		/// <para>Enter the parent of App Configuration customization property.</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ParentAppConfigMasterId
		{
			get { return Entity.GetAttributeValue<string>(Fields.ParentAppConfigMasterId); }
		}

		/// <summary>
		/// <para>Validator</para>
		/// <para>ReadOnly - String - MaxLength: 4000</para>
		/// <para>Enter the validator configuration xml which will validate against its value when creating AppConfigInstance.</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Validator
		{
			get { return Entity.GetAttributeValue<string>(Fields.Validator); }
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