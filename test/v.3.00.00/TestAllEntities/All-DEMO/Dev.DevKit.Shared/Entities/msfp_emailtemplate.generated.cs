﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msfp_emailtemplateOptionSets
{
	public enum msfp_templatetype
	{
		/// <summary>
		/// Survey = 647390001
		/// </summary>
		Survey = 647390001,
		/// <summary>
		/// User = 647390000
		/// </summary>
		User = 647390000
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

namespace Dev.DevKit.Shared.Entities
{
	public partial class msfp_emailtemplate : EntityBase
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
			public const string msfp_Candelete = "msfp_candelete";
			public const string msfp_Canedit = "msfp_canedit";
			public const string msfp_Canrename = "msfp_canrename";
			public const string msfp_emailtemplatebody = "msfp_emailtemplatebody";
			public const string msfp_emailtemplateId = "msfp_emailtemplateid";
			public const string msfp_emailtemplatesubject = "msfp_emailtemplatesubject";
			public const string msfp_language = "msfp_language";
			public const string msfp_name = "msfp_name";
			public const string msfp_sourcesurveyidentifier = "msfp_sourcesurveyidentifier";
			public const string msfp_survey = "msfp_survey";
			public const string msfp_tags = "msfp_tags";
			public const string msfp_templatetype = "msfp_templatetype";
			public const string msfp_version = "msfp_version";
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

		public const string EntityLogicalName = "msfp_emailtemplate";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10263;

		[DebuggerNonUserCode()]
		public msfp_emailtemplate()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msfp_emailtemplate(Guid msfp_emailtemplateId)
		{
			Entity = new Entity(EntityLogicalName, msfp_emailtemplateId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msfp_emailtemplate(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msfp_emailtemplate(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msfp_emailtemplate(Entity entity, Entity merge)
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
		public msfp_emailtemplate(KeyAttributeCollection keys)
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
		/// <para>Specifies if the email template can be deleted.</para>
		/// <para>Boolean</para>
		/// <para>Is deletable</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msfp_Candelete
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msfp_Candelete); }
			set { Entity.Attributes[Fields.msfp_Candelete] = value; }
		}

		/// <summary>
		/// <para>Specifies if the email template can be edited.</para>
		/// <para>Boolean</para>
		/// <para>Is editable</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msfp_Canedit
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msfp_Canedit); }
			set { Entity.Attributes[Fields.msfp_Canedit] = value; }
		}

		/// <summary>
		/// <para>Specifies if the email template can be renamed.</para>
		/// <para>Boolean</para>
		/// <para>Is renamable</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msfp_Canrename
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msfp_Canrename); }
			set { Entity.Attributes[Fields.msfp_Canrename] = value; }
		}

		/// <summary>
		/// <para>Stores body of the email template.</para>
		/// <para>Memo - MaxLength: 1000000</para>
		/// <para>Email template body</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msfp_emailtemplatebody
		{
			get { return Entity.GetAttributeValue<string>(Fields.msfp_emailtemplatebody); }
			set { Entity.Attributes[Fields.msfp_emailtemplatebody] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Survey email template</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msfp_emailtemplateId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msfp_emailtemplateId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Stores subject of the email template.</para>
		/// <para>String - MaxLength: 1000</para>
		/// <para>Email template subject</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msfp_emailtemplatesubject
		{
			get { return Entity.GetAttributeValue<string>(Fields.msfp_emailtemplatesubject); }
			set { Entity.Attributes[Fields.msfp_emailtemplatesubject] = value; }
		}

		/// <summary>
		/// <para>Language of the email message template</para>
		/// <para>String - MaxLength: 400</para>
		/// <para>Language</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msfp_language
		{
			get { return Entity.GetAttributeValue<string>(Fields.msfp_language); }
			set { Entity.Attributes[Fields.msfp_language] = value; }
		}

		/// <summary>
		/// <para>The name of the custom entity.</para>
		/// <para>Required - String - MaxLength: 250</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msfp_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msfp_name); }
			set { Entity.Attributes[Fields.msfp_name] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for the survey in the source application.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Source survey identifier</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msfp_sourcesurveyidentifier
		{
			get { return Entity.GetAttributeValue<string>(Fields.msfp_sourcesurveyidentifier); }
			set { Entity.Attributes[Fields.msfp_sourcesurveyidentifier] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for Customer Voice survey associated with Customer Voice survey email template.</para>
		/// <para>Lookup to msfp_survey</para>
		/// <para>survey email template</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msfp_survey
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msfp_survey); }
			set { Entity.Attributes[Fields.msfp_survey] = value; }
		}

		/// <summary>
		/// <para>Stores tags added to the email template.</para>
		/// <para>String - MaxLength: 1000</para>
		/// <para>Tags</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msfp_tags
		{
			get { return Entity.GetAttributeValue<string>(Fields.msfp_tags); }
			set { Entity.Attributes[Fields.msfp_tags] = value; }
		}

		/// <summary>
		/// <para>Determines the type of template.</para>
		/// <para>Picklist</para>
		/// <para>Template type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msfp_emailtemplateOptionSets.msfp_templatetype? msfp_templatetype
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msfp_templatetype);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msfp_emailtemplateOptionSets.msfp_templatetype)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msfp_templatetype] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msfp_templatetype] = null;
			}
		}

		/// <summary>
		/// <para>Version of the email message template</para>
		/// <para>String - MaxLength: 400</para>
		/// <para>Version</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msfp_version
		{
			get { return Entity.GetAttributeValue<string>(Fields.msfp_version); }
			set { Entity.Attributes[Fields.msfp_version] = value; }
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
		/// <para>Owner Id</para>
		/// <para>Lookup to systemuser;team</para>
		/// <para>Owner</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
			set { Entity.Attributes[Fields.OwnerId] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for the business unit that owns the record</para>
		/// <para>ReadOnly - Lookup to businessunit</para>
		/// <para>Owning Business Unit</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}

		/// <summary>
		/// <para>Unique identifier for the team that owns the record.</para>
		/// <para>ReadOnly - Lookup to team</para>
		/// <para>Owning Team</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}

		/// <summary>
		/// <para>Unique identifier for the user that owns the record.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Owning User</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}

		/// <summary>
		/// <para>Status of the Survey email template</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msfp_emailtemplateOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msfp_emailtemplateOptionSets.statecode)value.Value;
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
		/// <para>Reason for the status of the Survey email template</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msfp_emailtemplateOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msfp_emailtemplateOptionSets.statuscode)value.Value;
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