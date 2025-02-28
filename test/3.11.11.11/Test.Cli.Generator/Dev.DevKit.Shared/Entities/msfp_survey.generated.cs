﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msfp_surveyOptionSets
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
		/// Deleted = 100000002
		/// </summary>
		Deleted = 100000002,
		/// <summary>
		/// Draft = 100000000
		/// </summary>
		Draft = 100000000,
		/// <summary>
		/// Inactive = 2
		/// </summary>
		Inactive = 2,
		/// <summary>
		/// Published = 100000003
		/// </summary>
		Published = 100000003
	}
}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class msfp_survey : EntityBase
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
			public const string msdyn_Inspection = "msdyn_inspection";
			public const string msfp_acceptanonymousresponses = "msfp_acceptanonymousresponses";
			public const string msfp_anonymousurl = "msfp_anonymousurl";
			public const string msfp_description = "msfp_description";
			public const string msfp_embedcode = "msfp_embedcode";
			public const string msfp_enddate = "msfp_enddate";
			public const string msfp_friendlyname = "msfp_friendlyname";
			public const string msfp_name = "msfp_name";
			public const string msfp_otherproperties = "msfp_otherproperties";
			public const string msfp_PermanentID = "msfp_permanentid";
			public const string msfp_project = "msfp_project";
			public const string msfp_publishedby = "msfp_publishedby";
			public const string msfp_publishedon = "msfp_publishedon";
			public const string msfp_sourcesurveyidentifier = "msfp_sourcesurveyidentifier";
			public const string msfp_sourcesurveymodifieddate = "msfp_sourcesurveymodifieddate";
			public const string msfp_sourcesurveyversion = "msfp_sourcesurveyversion";
			public const string msfp_startdate = "msfp_startdate";
			public const string msfp_surveyId = "msfp_surveyid";
			public const string msfp_surveysource = "msfp_surveysource";
			public const string msfp_surveyurl = "msfp_surveyurl";
			public const string msfp_variables = "msfp_variables";
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

		public const string EntityLogicalName = "msfp_survey";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10339;

		[DebuggerNonUserCode()]
		public msfp_survey()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msfp_survey(Guid msfp_surveyId)
		{
			Entity = new Entity(EntityLogicalName, msfp_surveyId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msfp_survey(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msfp_survey(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msfp_survey(Entity entity, Entity merge)
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
		public msfp_survey(KeyAttributeCollection keys)
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
		/// <para>Unique identifier for Inspection Template associated with Survey.</para>
		/// <para>Lookup to msdyn_inspection</para>
		/// <para>Inspection Template</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_Inspection
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_Inspection); }
			set { Entity.Attributes[Fields.msdyn_Inspection] = value; }
		}

		/// <summary>
		/// <para>Specifies if responses can be accepted from anonymous respondents.</para>
		/// <para>Boolean</para>
		/// <para>Accept anonymous responses</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msfp_acceptanonymousresponses
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msfp_acceptanonymousresponses); }
			set { Entity.Attributes[Fields.msfp_acceptanonymousresponses] = value; }
		}

		/// <summary>
		/// <para>Link to the anonymous survey response.</para>
		/// <para>String - MaxLength: 4000</para>
		/// <para>Anonymous URL</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msfp_anonymousurl
		{
			get { return Entity.GetAttributeValue<string>(Fields.msfp_anonymousurl); }
			set { Entity.Attributes[Fields.msfp_anonymousurl] = value; }
		}

		/// <summary>
		/// <para>Description of the survey.</para>
		/// <para>Memo - MaxLength: 1000000</para>
		/// <para>Description</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msfp_description
		{
			get { return Entity.GetAttributeValue<string>(Fields.msfp_description); }
			set { Entity.Attributes[Fields.msfp_description] = value; }
		}

		/// <summary>
		/// <para>Embed code for the survey</para>
		/// <para>Memo - MaxLength: 1000000</para>
		/// <para>Embed code for the survey</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msfp_embedcode
		{
			get { return Entity.GetAttributeValue<string>(Fields.msfp_embedcode); }
			set { Entity.Attributes[Fields.msfp_embedcode] = value; }
		}

		/// <summary>
		/// <para>End date and time of the survey, if configured.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>End date</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msfp_enddateUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msfp_enddate); }
			set { Entity.Attributes[Fields.msfp_enddate] = value; }
		}

		/// <summary>
		/// <para>Friendly name of the survey.</para>
		/// <para>String - MaxLength: 400</para>
		/// <para>Friendly name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msfp_friendlyname
		{
			get { return Entity.GetAttributeValue<string>(Fields.msfp_friendlyname); }
			set { Entity.Attributes[Fields.msfp_friendlyname] = value; }
		}

		/// <summary>
		/// <para>The name of the custom entity.</para>
		/// <para>Required - String - MaxLength: 450</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msfp_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msfp_name); }
			set { Entity.Attributes[Fields.msfp_name] = value; }
		}

		/// <summary>
		/// <para>Other survey properties in JSON format.</para>
		/// <para>Memo - MaxLength: 1000000</para>
		/// <para>Other properties</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msfp_otherproperties
		{
			get { return Entity.GetAttributeValue<string>(Fields.msfp_otherproperties); }
			set { Entity.Attributes[Fields.msfp_otherproperties] = value; }
		}

		/// <summary>
		/// <para>Permanent ID is auto-generated for a new survey. For a copied survey, the ID is carried over from the original survey.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Permanent ID</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msfp_PermanentID
		{
			get { return Entity.GetAttributeValue<string>(Fields.msfp_PermanentID); }
			set { Entity.Attributes[Fields.msfp_PermanentID] = value; }
		}

		/// <summary>
		/// <para>Project associated with the survey.</para>
		/// <para>Lookup to msfp_project</para>
		/// <para>Project</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msfp_project
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msfp_project); }
			set { Entity.Attributes[Fields.msfp_project] = value; }
		}

		/// <summary>
		/// <para>User who published the survey.</para>
		/// <para>Lookup to systemuser</para>
		/// <para>Published by</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msfp_publishedby
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msfp_publishedby); }
			set { Entity.Attributes[Fields.msfp_publishedby] = value; }
		}

		/// <summary>
		/// <para>Date and time on which the survey was published.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Published on</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msfp_publishedonUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msfp_publishedon); }
			set { Entity.Attributes[Fields.msfp_publishedon] = value; }
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
		/// <para>Date when a survey is modified in source.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly</para>
		/// <para>Source survey modified date</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msfp_sourcesurveymodifieddateUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msfp_sourcesurveymodifieddate); }
			set { Entity.Attributes[Fields.msfp_sourcesurveymodifieddate] = value; }
		}

		/// <summary>
		/// <para>Version number of the survey.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Source survey version</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msfp_sourcesurveyversion
		{
			get { return Entity.GetAttributeValue<string>(Fields.msfp_sourcesurveyversion); }
			set { Entity.Attributes[Fields.msfp_sourcesurveyversion] = value; }
		}

		/// <summary>
		/// <para>Start date and time of the survey, if configured.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Start date</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msfp_startdateUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msfp_startdate); }
			set { Entity.Attributes[Fields.msfp_startdate] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Survey</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msfp_surveyId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msfp_surveyId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Source through which the survey was created.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Survey source</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msfp_surveysource
		{
			get { return Entity.GetAttributeValue<string>(Fields.msfp_surveysource); }
			set { Entity.Attributes[Fields.msfp_surveysource] = value; }
		}

		/// <summary>
		/// <para>Link to the survey in Customer Voice.</para>
		/// <para>String - MaxLength: 4000</para>
		/// <para>Survey URL</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msfp_surveyurl
		{
			get { return Entity.GetAttributeValue<string>(Fields.msfp_surveyurl); }
			set { Entity.Attributes[Fields.msfp_surveyurl] = value; }
		}

		/// <summary>
		/// <para>Stores survey variables and their default values in JSON format.</para>
		/// <para>Memo - MaxLength: 1000000</para>
		/// <para>Variables</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msfp_variables
		{
			get { return Entity.GetAttributeValue<string>(Fields.msfp_variables); }
			set { Entity.Attributes[Fields.msfp_variables] = value; }
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
		/// <para>Lookup to systemuser, team</para>
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
		/// <para>Status of the Survey</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msfp_surveyOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msfp_surveyOptionSets.statecode)value.Value;
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
		/// <para>Reason for the status of the Survey</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msfp_surveyOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msfp_surveyOptionSets.statuscode)value.Value;
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
