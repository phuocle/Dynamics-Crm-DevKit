﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyn_playbookinstanceOptionSets
{
	public enum statecode
	{
		/// <summary>
		/// Active = 0
		/// </summary>
		Active = 0,
		/// <summary>
		/// Completed = 1
		/// </summary>
		Completed = 1
	}

	public enum statuscode
	{
		/// <summary>
		/// In Progress = 1
		/// </summary>
		In_Progress = 1,
		/// <summary>
		/// Not Required = 5
		/// </summary>
		Not_Required = 5,
		/// <summary>
		/// Not Successful = 3
		/// </summary>
		Not_Successful = 3,
		/// <summary>
		/// Not Tracked = 6
		/// </summary>
		Not_Tracked = 6,
		/// <summary>
		/// Partially Successful = 4
		/// </summary>
		Partially_Successful = 4,
		/// <summary>
		/// Successful = 2
		/// </summary>
		Successful = 2
	}
}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class msdyn_playbookinstance : EntityBase
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
			public const string msdyn_activitiesassociated = "msdyn_activitiesassociated";
			public const string msdyn_activitiesclosed = "msdyn_activitiesclosed";
			public const string msdyn_categoryid = "msdyn_categoryid";
			public const string msdyn_estimatedclose = "msdyn_estimatedclose";
			public const string msdyn_evaluateactivityclosure = "msdyn_evaluateactivityclosure";
			public const string msdyn_name = "msdyn_name";
			public const string msdyn_playbookinstanceId = "msdyn_playbookinstanceid";
			public const string msdyn_playbooktemplateid = "msdyn_playbooktemplateid";
			public const string msdyn_trackprogress = "msdyn_trackprogress";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string Regarding = "regarding";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "msdyn_playbookinstance";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10245;

		[DebuggerNonUserCode()]
		public msdyn_playbookinstance()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_playbookinstance(Guid msdyn_playbookinstanceId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_playbookinstanceId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_playbookinstance(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_playbookinstance(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_playbookinstance(Entity entity, Entity merge)
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
		public msdyn_playbookinstance(KeyAttributeCollection keys)
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
		/// <para>Date and time when the playbook was started.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Started On</para>
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
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para>Total activities</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_activitiesassociated
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_activitiesassociated); }
			set { Entity.Attributes[Fields.msdyn_activitiesassociated] = value; }
		}

		/// <summary>
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para>Completed activities</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_activitiesclosed
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_activitiesclosed); }
			set { Entity.Attributes[Fields.msdyn_activitiesclosed] = value; }
		}

		/// <summary>
		/// <para>Select the playbook category for the playbook.</para>
		/// <para>Lookup to msdyn_playbookcategory</para>
		/// <para>Category</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_categoryid
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_categoryid); }
			set { Entity.Attributes[Fields.msdyn_categoryid] = value; }
		}

		/// <summary>
		/// <para>Estimated close date for a playbook based on the estimated duration specified for the playbook template.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly</para>
		/// <para>Estimated close</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdyn_estimatedcloseUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdyn_estimatedclose); }
			set { Entity.Attributes[Fields.msdyn_estimatedclose] = value; }
		}

		/// <summary>
		/// <para>Internal Use Only</para>
		/// <para>Boolean</para>
		/// <para>Evaluate Activity Closure</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_evaluateactivityclosure
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_evaluateactivityclosure); }
			set { Entity.Attributes[Fields.msdyn_evaluateactivityclosure] = value; }
		}

		/// <summary>
		/// <para>Type the name of the playbook.</para>
		/// <para>Required - String - MaxLength: 128</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_name); }
			set { Entity.Attributes[Fields.msdyn_name] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Playbook</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_playbookinstanceId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_playbookinstanceId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Shows the unique ID of the playbook template associated with the playbook.</para>
		/// <para>Required - Lookup to msdyn_playbooktemplate</para>
		/// <para>Playbook Template</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_playbooktemplateid
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_playbooktemplateid); }
			set { Entity.Attributes[Fields.msdyn_playbooktemplateid] = value; }
		}

		/// <summary>
		/// <para>Select whether or not to track the progress of the playbook by creating the activities under a playbook which is in turn linked to the record type the playbook applies to.</para>
		/// <para>Required - Boolean</para>
		/// <para>Track progress</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_trackprogress
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_trackprogress); }
			set { Entity.Attributes[Fields.msdyn_trackprogress] = value; }
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
		/// <para>Shows the entity the playbook is launched for.</para>
		/// <para>Lookup to account, contact, invoice, lead, opportunity, quote, salesorder</para>
		/// <para>Regarding</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference Regarding
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.Regarding); }
			set { Entity.Attributes[Fields.Regarding] = value; }
		}

		/// <summary>
		/// <para>Status of the Playbook</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_playbookinstanceOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_playbookinstanceOptionSets.statecode)value.Value;
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
		/// <para>Playbook result</para>
		/// <para>Status</para>
		/// <para>Result</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_playbookinstanceOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_playbookinstanceOptionSets.statuscode)value.Value;
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
