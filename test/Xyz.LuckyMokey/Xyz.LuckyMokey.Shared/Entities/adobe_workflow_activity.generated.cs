﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Xyz.LuckyMokey.Shared.Entities.adobe_workflow_activityOptionSets
{
	public enum adobe_identityverification
	{
		/// <summary>
		/// EMAIL = 648770003
		/// </summary>
		EMAIL = 648770003,
		/// <summary>
		/// PASSWORD = 648770000
		/// </summary>
		PASSWORD = 648770000,
		/// <summary>
		/// KNOWLEDGE_BASE = 648770001
		/// </summary>
		KNOWLEDGE_BASE = 648770001,
		/// <summary>
		/// WEB_IDENTITY = 648770002
		/// </summary>
		WEB_IDENTITY = 648770002
	}

	public enum adobe_notes_type
	{
		/// <summary>
		/// PRIMARY_ENTITY_NOTES = 648770000
		/// </summary>
		PRIMARY_ENTITY_NOTES = 648770000,
		/// <summary>
		/// PROCESS_NOTES = 648770001
		/// </summary>
		PROCESS_NOTES = 648770001
	}

	public enum adobe_recipient_lookup_type
	{
		/// <summary>
		/// Lead = 648770000
		/// </summary>
		Lead = 648770000,
		/// <summary>
		/// Contact = 648770001
		/// </summary>
		Contact = 648770001,
		/// <summary>
		/// User = 648770002
		/// </summary>
		User = 648770002
	}

	public enum adobe_sender_signing_options
	{
		/// <summary>
		/// I_do_not_sign = 648770003
		/// </summary>
		I_do_not_sign = 648770003,
		/// <summary>
		/// I_sign_first = 648770000
		/// </summary>
		I_sign_first = 648770000,
		/// <summary>
		/// I_sign_last = 648770001
		/// </summary>
		I_sign_last = 648770001,
		/// <summary>
		/// Only_I_sign = 648770002
		/// </summary>
		Only_I_sign = 648770002
	}

	public enum adobe_signature_type
	{
		/// <summary>
		/// ESIGN = 648770000
		/// </summary>
		ESIGN = 648770000,
		/// <summary>
		/// WRITTEN = 648770001
		/// </summary>
		WRITTEN = 648770001
	}

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

namespace Xyz.LuckyMokey.Shared.Entities
{
	public partial class adobe_workflow_activity : EntityBase
	{
		public struct Fields
		{
			public const string adobe_identityverification = "adobe_identityverification";
			public const string adobe_name = "adobe_name";
			public const string adobe_notes_type = "adobe_notes_type";
			public const string adobe_recipient_lookup_type = "adobe_recipient_lookup_type";
			public const string adobe_sender_signing_options = "adobe_sender_signing_options";
			public const string adobe_signature_type = "adobe_signature_type";
			public const string adobe_workflow_activityId = "adobe_workflow_activityid";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string OrganizationId = "organizationid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "adobe_workflow_activity";

		public const int EntityTypeCode = 10406;

		[DebuggerNonUserCode()]
		public adobe_workflow_activity()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public adobe_workflow_activity(Guid adobe_workflow_activityId)
		{
			Entity = new Entity(EntityLogicalName, adobe_workflow_activityId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public adobe_workflow_activity(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public adobe_workflow_activity(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public adobe_workflow_activity(Entity entity, Entity merge)
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
		public adobe_workflow_activity(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Picklist</para>
		/// <para>Identity Verification</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Xyz.LuckyMokey.Shared.Entities.adobe_workflow_activityOptionSets.adobe_identityverification? adobe_identityverification
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.adobe_identityverification);
				if (value == null) return null;
				return (Xyz.LuckyMokey.Shared.Entities.adobe_workflow_activityOptionSets.adobe_identityverification)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.adobe_identityverification] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.adobe_identityverification] = null;
			}
		}

		/// <summary>
		/// <para>The name of the custom entity.</para>
		/// <para>Required - String - MaxLength: 100</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string adobe_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.adobe_name); }
			set { Entity.Attributes[Fields.adobe_name] = value; }
		}

		/// <summary>
		/// <para>Picklist</para>
		/// <para>notes type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Xyz.LuckyMokey.Shared.Entities.adobe_workflow_activityOptionSets.adobe_notes_type? adobe_notes_type
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.adobe_notes_type);
				if (value == null) return null;
				return (Xyz.LuckyMokey.Shared.Entities.adobe_workflow_activityOptionSets.adobe_notes_type)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.adobe_notes_type] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.adobe_notes_type] = null;
			}
		}

		/// <summary>
		/// <para>Picklist</para>
		/// <para>Recipient Lookup Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Xyz.LuckyMokey.Shared.Entities.adobe_workflow_activityOptionSets.adobe_recipient_lookup_type? adobe_recipient_lookup_type
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.adobe_recipient_lookup_type);
				if (value == null) return null;
				return (Xyz.LuckyMokey.Shared.Entities.adobe_workflow_activityOptionSets.adobe_recipient_lookup_type)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.adobe_recipient_lookup_type] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.adobe_recipient_lookup_type] = null;
			}
		}

		/// <summary>
		/// <para>Picklist</para>
		/// <para>sender_signing_options</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Xyz.LuckyMokey.Shared.Entities.adobe_workflow_activityOptionSets.adobe_sender_signing_options? adobe_sender_signing_options
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.adobe_sender_signing_options);
				if (value == null) return null;
				return (Xyz.LuckyMokey.Shared.Entities.adobe_workflow_activityOptionSets.adobe_sender_signing_options)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.adobe_sender_signing_options] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.adobe_sender_signing_options] = null;
			}
		}

		/// <summary>
		/// <para>Picklist</para>
		/// <para>signature_type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Xyz.LuckyMokey.Shared.Entities.adobe_workflow_activityOptionSets.adobe_signature_type? adobe_signature_type
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.adobe_signature_type);
				if (value == null) return null;
				return (Xyz.LuckyMokey.Shared.Entities.adobe_workflow_activityOptionSets.adobe_signature_type)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.adobe_signature_type] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.adobe_signature_type] = null;
			}
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Workflow Activity</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid adobe_workflow_activityId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.adobe_workflow_activityId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the record.</para>
		/// <para>ReadOnly - Lookup</para>
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
		/// <para>ReadOnly - Lookup</para>
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
		/// <para>ReadOnly - Lookup</para>
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
		/// <para>ReadOnly - Lookup</para>
		/// <para>Modified By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Unique identifier for the organization</para>
		/// <para>ReadOnly - Lookup</para>
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
		/// <para>Status of the Workflow Activity</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Xyz.LuckyMokey.Shared.Entities.adobe_workflow_activityOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Xyz.LuckyMokey.Shared.Entities.adobe_workflow_activityOptionSets.statecode)value.Value;
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
		/// <para>Reason for the status of the Workflow Activity</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Xyz.LuckyMokey.Shared.Entities.adobe_workflow_activityOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Xyz.LuckyMokey.Shared.Entities.adobe_workflow_activityOptionSets.statuscode)value.Value;
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