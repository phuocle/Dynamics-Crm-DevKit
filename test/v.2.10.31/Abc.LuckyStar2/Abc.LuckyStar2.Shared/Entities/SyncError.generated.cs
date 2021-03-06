﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Abc.LuckyStar2.Shared.Entities.SyncErrorOptionSets
{
	public enum ErrorType
	{
		/// <summary>
		/// Conflict = 0
		/// </summary>
		Conflict = 0,
		/// <summary>
		/// Others = 3
		/// </summary>
		Others = 3,
		/// <summary>
		/// Record_already_exists = 2
		/// </summary>
		Record_already_exists = 2,
		/// <summary>
		/// Record_not_found = 1
		/// </summary>
		Record_not_found = 1
	}

	public enum StateCode
	{
		/// <summary>
		/// Active = 0
		/// </summary>
		Active = 0,
		/// <summary>
		/// Resolved = 1
		/// </summary>
		Resolved = 1
	}

	public enum StatusCode
	{
		/// <summary>
		/// Active = 0
		/// </summary>
		Active = 0,
		/// <summary>
		/// Fixed = 1
		/// </summary>
		Fixed = 1
	}
}

namespace Abc.LuckyStar2.Shared.Entities
{
	public partial class SyncError : EntityBase
	{
		public struct Fields
		{
			public const string Action = "action";
			public const string ActionData = "actiondata";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Description = "description";
			public const string ErrorCode = "errorcode";
			public const string ErrorDetail = "errordetail";
			public const string ErrorMessage = "errormessage";
			public const string ErrorTime = "errortime";
			public const string ErrorType = "errortype";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string Name = "name";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string RegardingObjectId = "regardingobjectid";
			public const string RequestData = "requestdata";
			public const string StateCode = "statecode";
			public const string StatusCode = "statuscode";
			public const string SyncErrorId = "syncerrorid";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "syncerror";

		public const int EntityTypeCode = 9869;

		[DebuggerNonUserCode()]
		public SyncError()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SyncError(Guid SyncErrorId)
		{
			Entity = new Entity(EntityLogicalName, SyncErrorId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SyncError(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SyncError(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public SyncError(Entity entity, Entity merge)
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
		public SyncError(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Action Name for which sync error has occurred</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Action</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Action
		{
			get { return Entity.GetAttributeValue<string>(Fields.Action); }
			set { Entity.Attributes[Fields.Action] = value; }
		}

		/// <summary>
		/// <para>Show the action data</para>
		/// <para>String - MaxLength: 10000</para>
		/// <para>Action Data</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ActionData
		{
			get { return Entity.GetAttributeValue<string>(Fields.ActionData); }
			set { Entity.Attributes[Fields.ActionData] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the sync error.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Created By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}

		/// <summary>
		/// <para>Date and time when the sync Error was created.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who created the sync error.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Enter a short description of the sync error.</para>
		/// <para>Memo - MaxLength: 4000</para>
		/// <para>Description</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.Description); }
			set { Entity.Attributes[Fields.Description] = value; }
		}

		/// <summary>
		/// <para>Displays the error code.</para>
		/// <para>Memo - MaxLength: 100</para>
		/// <para>Error Code</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ErrorCode
		{
			get { return Entity.GetAttributeValue<string>(Fields.ErrorCode); }
			set { Entity.Attributes[Fields.ErrorCode] = value; }
		}

		/// <summary>
		/// <para>Error description from the exception</para>
		/// <para>Memo - MaxLength: 1073741823</para>
		/// <para>Error Detail</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ErrorDetail
		{
			get { return Entity.GetAttributeValue<string>(Fields.ErrorDetail); }
			set { Entity.Attributes[Fields.ErrorDetail] = value; }
		}

		/// <summary>
		/// <para>Error Message of the exception</para>
		/// <para>String - MaxLength: 1000</para>
		/// <para>Error Message</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ErrorMessage
		{
			get { return Entity.GetAttributeValue<string>(Fields.ErrorMessage); }
			set { Entity.Attributes[Fields.ErrorMessage] = value; }
		}

		/// <summary>
		/// <para>Date and time when the upsync request was executed on CRM server</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Error Time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ErrorTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ErrorTime); }
			set { Entity.Attributes[Fields.ErrorTime] = value; }
		}

		/// <summary>
		/// <para>Select the preferred error type.</para>
		/// <para>Picklist</para>
		/// <para>Error Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Abc.LuckyStar2.Shared.Entities.SyncErrorOptionSets.ErrorType? ErrorType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ErrorType);
				if (value == null) return null;
				return (Abc.LuckyStar2.Shared.Entities.SyncErrorOptionSets.ErrorType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.ErrorType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.ErrorType] = null;
			}
		}

		/// <summary>
		/// <para>Unique identifier of the user who last modified the sync error.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Modified By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}

		/// <summary>
		/// <para>Date and time when the sync error was last modified.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Modified On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who last modified the sync error.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Modified By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Entity name of the record for which sync error has occurred</para>
		/// <para>Required - String - MaxLength: 100</para>
		/// <para>Entity</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the user or team who owns the sync error.</para>
		/// <para>Owner</para>
		/// <para>Owner</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
			set { Entity.Attributes[Fields.OwnerId] = value; }
		}

		/// <summary>
		/// <para>Business unit that owns the sync error.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Owning Business Unit</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}

		/// <summary>
		/// <para>Unique identifier of the team who owns the sync error.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Owning Team</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}

		/// <summary>
		/// <para>Unique identifier of the user who owns the sync error.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Owning User</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}

		/// <summary>
		/// <para>Choose the record that the sync error relates to.</para>
		/// <para>Lookup</para>
		/// <para>Record</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference RegardingObjectId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.RegardingObjectId); }
			set { Entity.Attributes[Fields.RegardingObjectId] = value; }
		}

		/// <summary>
		/// <para>Request data for the entity that had the sync error.</para>
		/// <para>Memo - MaxLength: 1073741823</para>
		/// <para>Request Data</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string RequestData
		{
			get { return Entity.GetAttributeValue<string>(Fields.RequestData); }
			set { Entity.Attributes[Fields.RequestData] = value; }
		}

		/// <summary>
		/// <para>Shows whether the sync error is active or resolved.</para>
		/// <para>State</para>
		/// <para>State</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Abc.LuckyStar2.Shared.Entities.SyncErrorOptionSets.StateCode? StateCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StateCode);
				if (value == null) return null;
				return (Abc.LuckyStar2.Shared.Entities.SyncErrorOptionSets.StateCode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.StateCode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.StateCode] = null;
			}
		}

		/// <summary>
		/// <para>Select the sync error status.</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Abc.LuckyStar2.Shared.Entities.SyncErrorOptionSets.StatusCode? StatusCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StatusCode);
				if (value == null) return null;
				return (Abc.LuckyStar2.Shared.Entities.SyncErrorOptionSets.StatusCode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.StatusCode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.StatusCode] = null;
			}
		}

		/// <summary>
		/// <para>Unique identifier of the sync error.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Sync Error Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid SyncErrorId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.SyncErrorId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Shows the version number of the sync error.</para>
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
