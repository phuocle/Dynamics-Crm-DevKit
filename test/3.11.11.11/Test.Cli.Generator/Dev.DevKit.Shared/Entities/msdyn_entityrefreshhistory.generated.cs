﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyn_entityrefreshhistoryOptionSets
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
	[DebuggerNonUserCode()]
	public partial class msdyn_entityrefreshhistory : EntityBase
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
			public const string msdyn_DataflowHistoryLookup = "msdyn_dataflowhistorylookup";
			public const string msdyn_DataflowId = "msdyn_dataflowid";
			public const string msdyn_DataflowName = "msdyn_dataflowname";
			public const string msdyn_EndTime = "msdyn_endtime";
			public const string msdyn_EntityName = "msdyn_entityname";
			public const string msdyn_entityrefreshhistoryId = "msdyn_entityrefreshhistoryid";
			public const string msdyn_ErrorCount = "msdyn_errorcount";
			public const string msdyn_ErrorInfoErrorCode = "msdyn_errorinfoerrorcode";
			public const string msdyn_ErrorInfoErrorMessage = "msdyn_errorinfoerrormessage";
			public const string msdyn_ErrorInfoEvaluationResultJson = "msdyn_errorinfoevaluationresultjson";
			public const string msdyn_ErrorInfoEvaluationResultJsonMemo = "msdyn_errorinfoevaluationresultjsonmemo";
			public const string msdyn_ErrorInfoLoadToCdsErrorInfoJson = "msdyn_errorinfoloadtocdserrorinfojson";
			public const string msdyn_ErrorInfoLoadToCdsErrorInfoJsonMemo = "msdyn_errorinfoloadtocdserrorinfojsonmemo";
			public const string msdyn_InsertCount = "msdyn_insertcount";
			public const string msdyn_Name = "msdyn_name";
			public const string msdyn_RefreshStatus = "msdyn_refreshstatus";
			public const string msdyn_StartTime = "msdyn_starttime";
			public const string msdyn_TransactionId = "msdyn_transactionid";
			public const string msdyn_UpsertCount = "msdyn_upsertcount";
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

		public const string EntityLogicalName = "msdyn_entityrefreshhistory";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10037;

		[DebuggerNonUserCode()]
		public msdyn_entityrefreshhistory()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_entityrefreshhistory(Guid msdyn_entityrefreshhistoryId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_entityrefreshhistoryId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_entityrefreshhistory(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_entityrefreshhistory(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_entityrefreshhistory(Entity entity, Entity merge)
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
		public msdyn_entityrefreshhistory(KeyAttributeCollection keys)
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
		/// <para>Lookup to msdyn_dataflowrefreshhistory</para>
		/// <para>DataflowHistoryLookup</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_DataflowHistoryLookup
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_DataflowHistoryLookup); }
			set { Entity.Attributes[Fields.msdyn_DataflowHistoryLookup] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 100</para>
		/// <para>DataflowId</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_DataflowId
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_DataflowId); }
			set { Entity.Attributes[Fields.msdyn_DataflowId] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 100</para>
		/// <para>DataflowName</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_DataflowName
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_DataflowName); }
			set { Entity.Attributes[Fields.msdyn_DataflowName] = value; }
		}

		/// <summary>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>EndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdyn_EndTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdyn_EndTime); }
			set { Entity.Attributes[Fields.msdyn_EndTime] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 100</para>
		/// <para>EntityName</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_EntityName
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_EntityName); }
			set { Entity.Attributes[Fields.msdyn_EntityName] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for entity instances</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>EntityRefreshHistory</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_entityrefreshhistoryId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_entityrefreshhistoryId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para>ErrorCount</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_ErrorCount
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_ErrorCount); }
			set { Entity.Attributes[Fields.msdyn_ErrorCount] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 100</para>
		/// <para>ErrorInfoErrorCode</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_ErrorInfoErrorCode
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_ErrorInfoErrorCode); }
			set { Entity.Attributes[Fields.msdyn_ErrorInfoErrorCode] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 4000</para>
		/// <para>ErrorInfoErrorMessage</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_ErrorInfoErrorMessage
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_ErrorInfoErrorMessage); }
			set { Entity.Attributes[Fields.msdyn_ErrorInfoErrorMessage] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 4000</para>
		/// <para>ErrorInfoEvaluationResultJson</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_ErrorInfoEvaluationResultJson
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_ErrorInfoEvaluationResultJson); }
			set { Entity.Attributes[Fields.msdyn_ErrorInfoEvaluationResultJson] = value; }
		}

		/// <summary>
		/// <para>Memo - MaxLength: 1048576</para>
		/// <para>ErrorInfoEvaluationResultJsonMemo</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_ErrorInfoEvaluationResultJsonMemo
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_ErrorInfoEvaluationResultJsonMemo); }
			set { Entity.Attributes[Fields.msdyn_ErrorInfoEvaluationResultJsonMemo] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 4000</para>
		/// <para>ErrorInfoLoadToCdsErrorInfoJson</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_ErrorInfoLoadToCdsErrorInfoJson
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_ErrorInfoLoadToCdsErrorInfoJson); }
			set { Entity.Attributes[Fields.msdyn_ErrorInfoLoadToCdsErrorInfoJson] = value; }
		}

		/// <summary>
		/// <para>Memo - MaxLength: 1048576</para>
		/// <para>ErrorInfoLoadToCdsErrorInfoJsonMemo</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_ErrorInfoLoadToCdsErrorInfoJsonMemo
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_ErrorInfoLoadToCdsErrorInfoJsonMemo); }
			set { Entity.Attributes[Fields.msdyn_ErrorInfoLoadToCdsErrorInfoJsonMemo] = value; }
		}

		/// <summary>
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para>InsertCount</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_InsertCount
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_InsertCount); }
			set { Entity.Attributes[Fields.msdyn_InsertCount] = value; }
		}

		/// <summary>
		/// <para>Required name field</para>
		/// <para>Required - String - MaxLength: 100</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_Name); }
			set { Entity.Attributes[Fields.msdyn_Name] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 100</para>
		/// <para>RefreshStatus</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_RefreshStatus
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_RefreshStatus); }
			set { Entity.Attributes[Fields.msdyn_RefreshStatus] = value; }
		}

		/// <summary>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>StartTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdyn_StartTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdyn_StartTime); }
			set { Entity.Attributes[Fields.msdyn_StartTime] = value; }
		}

		/// <summary>
		/// <para>String - MaxLength: 100</para>
		/// <para>TransactionId</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_TransactionId
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_TransactionId); }
			set { Entity.Attributes[Fields.msdyn_TransactionId] = value; }
		}

		/// <summary>
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para>UpsertCount</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_UpsertCount
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_UpsertCount); }
			set { Entity.Attributes[Fields.msdyn_UpsertCount] = value; }
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
		/// <para>Status of the EntityRefreshHistory</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_entityrefreshhistoryOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_entityrefreshhistoryOptionSets.statecode)value.Value;
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
		/// <para>Reason for the status of the EntityRefreshHistory</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_entityrefreshhistoryOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_entityrefreshhistoryOptionSets.statuscode)value.Value;
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
