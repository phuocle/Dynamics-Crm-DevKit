﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:49:34
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.msdyn_wallsavedqueryusersettingsOptionSets
{
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
		/// <para><strong>Display Name</strong>: Active</para>
		/// <para><strong>Value</strong>: 1</para>
		/// <para><strong>StateCode.Active</strong></para>
		/// </summary>
		Active = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Inactive</para>
		/// <para><strong>Value</strong>: 2</para>
		/// <para><strong>StateCode.Inactive</strong></para>
		/// </summary>
		Inactive = 2
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class msdyn_wallsavedqueryusersettings : EntityBase
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
			public const string msdyn_data = "msdyn_data";
			public const string msdyn_default = "msdyn_default";
			public const string msdyn_entitydisplayname = "msdyn_entitydisplayname";
			public const string msdyn_entityname = "msdyn_entityname";
			public const string msdyn_includewallinresponse = "msdyn_includewallinresponse";
			public const string msdyn_isfollowing = "msdyn_isfollowing";
			public const string msdyn_IsVirtual = "msdyn_isvirtual";
			public const string msdyn_isvisible = "msdyn_isvisible";
			public const string msdyn_isvisiblebit = "msdyn_isvisiblebit";
			public const string msdyn_otc = "msdyn_otc";
			public const string msdyn_savedqueryname = "msdyn_savedqueryname";
			public const string msdyn_sortorder = "msdyn_sortorder";
			public const string msdyn_type = "msdyn_type";
			public const string msdyn_userid = "msdyn_userid";
			public const string msdyn_wallsavedqueryid = "msdyn_wallsavedqueryid";
			public const string msdyn_wallsavedqueryusersettingsId = "msdyn_wallsavedqueryusersettingsid";
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
		public const string EntityLogicalName = "msdyn_wallsavedqueryusersettings";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10599;
		public const string EntityCollectionSchemaName = "msdyn_wallsavedqueryusersettingses";
		public const string EntityDisplayCollectionName = "Filters";
		public const string DisplayName = "Filter";
		public const string EntitySetName = "msdyn_wallsavedqueryusersettingses";
		public const string EntityLogicalCollectionName = "msdyn_wallsavedqueryusersettingses";
		public const string EntityPrimaryIdAttribute = "msdyn_wallsavedqueryusersettingsid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "msdyn_entityname";
		public const string EntitySchemaName = "msdyn_wallsavedqueryusersettings";
		[DebuggerNonUserCode()]
		public msdyn_wallsavedqueryusersettings()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_wallsavedqueryusersettings(Guid msdyn_wallsavedqueryusersettingsId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_wallsavedqueryusersettingsId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_wallsavedqueryusersettings(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_wallsavedqueryusersettings"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public msdyn_wallsavedqueryusersettings(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_wallsavedqueryusersettings"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyn_wallsavedqueryusersettings(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyn_wallsavedqueryusersettings(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="msdyn_wallsavedqueryusersettings"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyn_wallsavedqueryusersettings(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyn_wallsavedqueryusersettings(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public msdyn_wallsavedqueryusersettings(KeyAttributeCollection keys)
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
		/// <para><strong>Display Name</strong>: Data</para>
		/// <para><strong>Description</strong>: XML blob that stores personalization data for the user.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 10,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_data
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_data); }
			set { Entity.Attributes[Fields.msdyn_data] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Default</para>
		/// <para><strong>Description</strong>: Indicates that view is selected by default if value is greater than 0. Also contains information which specific filter is applied.</para>
		/// <para>Required - <strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_default
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_default); }
			set { Entity.Attributes[Fields.msdyn_default] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Entity Display Name</para>
		/// <para><strong>Description</strong>: Display name of the entity to which the corresponding views belong.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 128</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_entitydisplayname
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_entitydisplayname); }
			set { Entity.Attributes[Fields.msdyn_entitydisplayname] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Entity Name</para>
		/// <para><strong>Description</strong>: Name of the entity to which the corresponding views belong.</para>
		/// <para><strong>Primary Name</strong>: <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 128</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_entityname
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_entityname); }
			set { Entity.Attributes[Fields.msdyn_entityname] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Include Wall in response</para>
		/// <para><strong>Description</strong>: Indicates that wall should be included in response to avoid roundtrips to server</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_includewallinresponse
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_includewallinresponse); }
			set { Entity.Attributes[Fields.msdyn_includewallinresponse] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Is Following</para>
		/// <para><strong>Description</strong>: Indicates that corresponding view is following view</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_isfollowing
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_isfollowing); }
			set { Entity.Attributes[Fields.msdyn_isfollowing] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Is Virtual</para>
		/// <para><strong>Description</strong>: Indicates that the record is virtual</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_IsVirtual
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_IsVirtual); }
			set { Entity.Attributes[Fields.msdyn_IsVirtual] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Display on the wall</para>
		/// <para><strong>Description</strong>: Information that indicates whether the corresponding view should be displayed on the personal wall for this user.</para>
		/// <para><strong>Two Option</strong> - [<strong>Shown</strong>]: true - [<strong>Hidden</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Shown</strong>]: true</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_isvisible
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_isvisible); }
			set { Entity.Attributes[Fields.msdyn_isvisible] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Is Visible bit</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_isvisiblebit
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_isvisiblebit); }
			set { Entity.Attributes[Fields.msdyn_isvisiblebit] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Entity Type</para>
		/// <para><strong>Description</strong>: Virtual column which contains entity type code for the entities returned by corresponding savedquery</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_otc
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_otc); }
			set { Entity.Attributes[Fields.msdyn_otc] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: View Name</para>
		/// <para><strong>Description</strong>: Name of the corresponding view.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_savedqueryname
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_savedqueryname); }
			set { Entity.Attributes[Fields.msdyn_savedqueryname] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Sort Order</para>
		/// <para><strong>Description</strong>: Sort order to be used when displaying the filter on the user’s personal wall.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_sortorder
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_sortorder); }
			set { Entity.Attributes[Fields.msdyn_sortorder] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Type</para>
		/// <para><strong>Description</strong>: Reserved to support different view types. Currently not used.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_type
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_type); }
			set { Entity.Attributes[Fields.msdyn_type] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: User Id</para>
		/// <para><strong>Description</strong>: Unique identifier for User associated with Wall View User Setting.</para>
		/// <para>Required - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_userid
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_userid); }
			set { Entity.Attributes[Fields.msdyn_userid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Wall View Id</para>
		/// <para><strong>Description</strong>: Unique identifier for Wall View associated with Wall View User Setting.</para>
		/// <para>Required - <strong>Lookup</strong>: <see cref="msdyn_wallsavedquery"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_wallsavedqueryid
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_wallsavedqueryid); }
			set { Entity.Attributes[Fields.msdyn_wallsavedqueryid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Filter</para>
		/// <para><strong>Description</strong>: Unique identifier for entity instances</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_wallsavedqueryusersettingsId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_wallsavedqueryusersettingsId] = value;
				Entity.Id = value;
			}
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
		/// <para><strong>Description</strong>: Status of the Wall View User Setting</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_wallsavedqueryusersettingsOptionSets.statecode"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_wallsavedqueryusersettingsOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_wallsavedqueryusersettingsOptionSets.statecode)value.Value;
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
		/// <para><strong>Description</strong>: Reason for the status of the Wall View User Setting</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_wallsavedqueryusersettingsOptionSets.statuscode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_wallsavedqueryusersettingsOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_wallsavedqueryusersettingsOptionSets.statuscode)value.Value;
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