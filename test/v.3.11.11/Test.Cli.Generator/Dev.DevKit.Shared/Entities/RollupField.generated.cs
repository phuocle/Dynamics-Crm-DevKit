﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.RollupFieldOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class RollupField : EntityBase
	{
		public struct Fields
		{
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string DateAttribute = "dateattribute";
			public const string GoalAttribute = "goalattribute";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string IsStateParentEntityAttribute = "isstateparententityattribute";
			public const string MetricId = "metricid";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string OrganizationId = "organizationid";
			public const string RollupFieldId = "rollupfieldid";
			public const string SourceAttribute = "sourceattribute";
			public const string SourceState = "sourcestate";
			public const string SourceStatus = "sourcestatus";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "rollupfield";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 9604;

		[DebuggerNonUserCode()]
		public RollupField()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public RollupField(Guid RollupFieldId)
		{
			Entity = new Entity(EntityLogicalName, RollupFieldId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public RollupField(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public RollupField(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public RollupField(Entity entity, Entity merge)
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
		public RollupField(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
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
		/// <para>Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		/// <summary>
		/// <para>Shows who created the record on behalf of another user.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Select a date field for the selected record type, such as Actual Closed Date for the Opportunity record type. A record participates in the goal rollup, if the selected date falls between the start date and the end date for the goal.</para>
		/// <para>Required - String - MaxLength: 100</para>
		/// <para>Date Field</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string DateAttribute
		{
			get { return Entity.GetAttributeValue<string>(Fields.DateAttribute); }
			set { Entity.Attributes[Fields.DateAttribute] = value; }
		}

		/// <summary>
		/// <para>Select a rollup field where the metric rollup data will be displayed in the goal. The options are an integer or money, depending on the Metric Type you chose for the goal metric.</para>
		/// <para>Required - String - MaxLength: 100</para>
		/// <para>Rollup Field</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string GoalAttribute
		{
			get { return Entity.GetAttributeValue<string>(Fields.GoalAttribute); }
			set { Entity.Attributes[Fields.GoalAttribute] = value; }
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
		/// <para>Tells whether the state or status belongs to the parent entity.</para>
		/// <para>Boolean</para>
		/// <para>Is State/Status From Parent Entity</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsStateParentEntityAttribute
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsStateParentEntityAttribute); }
			set { Entity.Attributes[Fields.IsStateParentEntityAttribute] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the goal metric associated with the rollup field.</para>
		/// <para>Required - Lookup to metric</para>
		/// <para>Goal Metric</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference MetricId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.MetricId); }
			set { Entity.Attributes[Fields.MetricId] = value; }
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
		/// <para>Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options.</para>
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
		/// <para>Choose the ID of the organization that the record is associated with.</para>
		/// <para>ReadOnly - Lookup to </para>
		/// <para>Organization Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}

		/// <summary>
		/// <para>Unique identifier of the rollup field.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Rollup Field</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid RollupFieldId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.RollupFieldId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Type the name of the field that the data for the goal rolls up from.</para>
		/// <para>Required - String - MaxLength: 100</para>
		/// <para>Source Field</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SourceAttribute
		{
			get { return Entity.GetAttributeValue<string>(Fields.SourceAttribute); }
			set { Entity.Attributes[Fields.SourceAttribute] = value; }
		}

		/// <summary>
		/// <para>Select the state of the records you want to use as the source of the rollup data for the metric.</para>
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para>Source Record Type State</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? SourceState
		{
			get { return Entity.GetAttributeValue<int?>(Fields.SourceState); }
			set { Entity.Attributes[Fields.SourceState] = value; }
		}

		/// <summary>
		/// <para>Select the status of the records you want to use as the source of the rollup data for the metric.</para>
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para>Source Record Type Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? SourceStatus
		{
			get { return Entity.GetAttributeValue<int?>(Fields.SourceStatus); }
			set { Entity.Attributes[Fields.SourceStatus] = value; }
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
		/// <para>Version number of the rollup field.</para>
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