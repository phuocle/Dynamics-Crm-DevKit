﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyn_wallsavedqueryOptionSets
{
	public enum statecode
	{
		/// <summary>
		/// Active = 0
		/// </summary>
		Active = 0,
		/// <summary>
		/// Inactive = 1
		/// </summary>
		Inactive = 1
	}

	public enum statuscode
	{
		/// <summary>
		/// Active = 1
		/// </summary>
		Active = 1,
		/// <summary>
		/// Inactive = 2
		/// </summary>
		Inactive = 2
	}
}

namespace Dev.DevKit.Shared.Entities
{
	public partial class msdyn_wallsavedquery : EntityBase
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
			public const string msdyn_entitydisplayname = "msdyn_entitydisplayname";
			public const string msdyn_entityname = "msdyn_entityname";
			public const string msdyn_IsVirtual = "msdyn_isvirtual";
			public const string msdyn_IsVisible = "msdyn_isvisible";
			public const string msdyn_isvisiblebit = "msdyn_isvisiblebit";
			public const string msdyn_otc = "msdyn_otc";
			public const string msdyn_postconfigurationid = "msdyn_postconfigurationid";
			public const string msdyn_SavedQueryId = "msdyn_savedqueryid";
			public const string msdyn_savedqueryname = "msdyn_savedqueryname";
			public const string msdyn_wallsavedqueryId = "msdyn_wallsavedqueryid";
			public const string OrganizationId = "organizationid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "msdyn_wallsavedquery";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10292;

		[DebuggerNonUserCode()]
		public msdyn_wallsavedquery()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_wallsavedquery(Guid msdyn_wallsavedqueryId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_wallsavedqueryId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_wallsavedquery(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_wallsavedquery(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_wallsavedquery(Entity entity, Entity merge)
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
		public msdyn_wallsavedquery(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
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
		/// <para>Sequence number of the import that created this record.</para>
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para>Import Sequence Number</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ImportSequenceNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ImportSequenceNumber); }
			set { Entity.Attributes[Fields.ImportSequenceNumber] = value; }
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
		/// <para>Type of entity to which the corresponding views belong</para>
		/// <para>String - MaxLength: 128</para>
		/// <para>Entity Display Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_entitydisplayname
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_entitydisplayname); }
			set { Entity.Attributes[Fields.msdyn_entitydisplayname] = value; }
		}

		/// <summary>
		/// <para>Name of the entity to which the corresponding views belong.</para>
		/// <para>String - MaxLength: 128</para>
		/// <para>Entity Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_entityname
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_entityname); }
			set { Entity.Attributes[Fields.msdyn_entityname] = value; }
		}

		/// <summary>
		/// <para>Information that indicates whether the entity is virtual, that is whether, it is generated by a plug-in, and no corresponding entity instance exists.</para>
		/// <para>Required - Boolean</para>
		/// <para>Is Virtual</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_IsVirtual
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_IsVirtual); }
			set { Entity.Attributes[Fields.msdyn_IsVirtual] = value; }
		}

		/// <summary>
		/// <para>Indicates that corresponding system view should be displayed on personal wall</para>
		/// <para>Required - Boolean</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_IsVisible
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_IsVisible); }
			set { Entity.Attributes[Fields.msdyn_IsVisible] = value; }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para>Is Visible bit</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_isvisiblebit
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_isvisiblebit); }
			set { Entity.Attributes[Fields.msdyn_isvisiblebit] = value; }
		}

		/// <summary>
		/// <para>Type of entity to which the corresponding views belong.</para>
		/// <para>Integer - MinValue: 0 - MaxValue: 2,147,483,647</para>
		/// <para>Entity Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_otc
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_otc); }
			set { Entity.Attributes[Fields.msdyn_otc] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for Post Configuration associated with Wall View.</para>
		/// <para>Required - Lookup to msdyn_postconfig</para>
		/// <para>Post Entity Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_postconfigurationid
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_postconfigurationid); }
			set { Entity.Attributes[Fields.msdyn_postconfigurationid] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the view that should be displayed on the personal wall for all users.</para>
		/// <para>Required - String - MaxLength: 50</para>
		/// <para>View Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_SavedQueryId
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_SavedQueryId); }
			set { Entity.Attributes[Fields.msdyn_SavedQueryId] = value; }
		}

		/// <summary>
		/// <para>Name of the corresponding view.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_savedqueryname
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_savedqueryname); }
			set { Entity.Attributes[Fields.msdyn_savedqueryname] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Wall View</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_wallsavedqueryId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_wallsavedqueryId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Unique identifier for the organization</para>
		/// <para>ReadOnly - Lookup to organization</para>
		/// <para>Organization Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}

		/// <summary>
		/// <para>Date and time that the record was migrated.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly</para>
		/// <para>Record Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverriddenCreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverriddenCreatedOn); }
			set { Entity.Attributes[Fields.OverriddenCreatedOn] = value; }
		}

		/// <summary>
		/// <para>Status of the Wall View</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_wallsavedqueryOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_wallsavedqueryOptionSets.statecode)value.Value;
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
		/// <para>Reason for the status of the Wall View</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_wallsavedqueryOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_wallsavedqueryOptionSets.statuscode)value.Value;
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
		/// <para>Version Number</para>
		/// <para>ReadOnly - BigInt</para>
		/// <para>Version Number</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}