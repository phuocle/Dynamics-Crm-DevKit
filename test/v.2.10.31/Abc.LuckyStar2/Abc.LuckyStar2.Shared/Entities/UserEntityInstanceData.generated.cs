﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Abc.LuckyStar2.Shared.Entities.UserEntityInstanceDataOptionSets
{

}

namespace Abc.LuckyStar2.Shared.Entities
{
	public partial class UserEntityInstanceData : EntityBase
	{
		public struct Fields
		{
			public const string CommonEnd = "commonend";
			public const string CommonStart = "commonstart";
			public const string DueDate = "duedate";
			public const string FlagDueBy = "flagdueby";
			public const string FlagRequest = "flagrequest";
			public const string FlagStatus = "flagstatus";
			public const string ObjectId = "objectid";
			public const string ObjectTypeCode = "objecttypecode";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string PersonalCategories = "personalcategories";
			public const string ReminderSet = "reminderset";
			public const string ReminderTime = "remindertime";
			public const string StartTime = "starttime";
			public const string ToDoItemFlags = "todoitemflags";
			public const string ToDoOrdinalDate = "todoordinaldate";
			public const string ToDoSubOrdinal = "todosubordinal";
			public const string ToDoTitle = "todotitle";
			public const string UserEntityInstanceDataId = "userentityinstancedataid";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "userentityinstancedata";

		public const int EntityTypeCode = 2501;

		[DebuggerNonUserCode()]
		public UserEntityInstanceData()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public UserEntityInstanceData(Guid UserEntityInstanceDataId)
		{
			Entity = new Entity(EntityLogicalName, UserEntityInstanceDataId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public UserEntityInstanceData(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public UserEntityInstanceData(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public UserEntityInstanceData(Entity entity, Entity merge)
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
		public UserEntityInstanceData(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Common end date</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Common end date</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CommonEndUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CommonEnd); }
			set { Entity.Attributes[Fields.CommonEnd] = value; }
		}

		/// <summary>
		/// <para>Common start date</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Common start date</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CommonStartUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CommonStart); }
			set { Entity.Attributes[Fields.CommonStart] = value; }
		}

		/// <summary>
		/// <para>Due Date</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Due Date</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? DueDateUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.DueDate); }
			set { Entity.Attributes[Fields.DueDate] = value; }
		}

		/// <summary>
		/// <para>Flag due by</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Flag due by</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? FlagDueByUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.FlagDueBy); }
			set { Entity.Attributes[Fields.FlagDueBy] = value; }
		}

		/// <summary>
		/// <para>Flag request</para>
		/// <para>String - MaxLength: 20</para>
		/// <para>Flag Request</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string FlagRequest
		{
			get { return Entity.GetAttributeValue<string>(Fields.FlagRequest); }
			set { Entity.Attributes[Fields.FlagRequest] = value; }
		}

		/// <summary>
		/// <para>Flag status.</para>
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? FlagStatus
		{
			get { return Entity.GetAttributeValue<int?>(Fields.FlagStatus); }
			set { Entity.Attributes[Fields.FlagStatus] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the source record.</para>
		/// <para>Lookup</para>
		/// <para>Object Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ObjectId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ObjectId); }
			set { Entity.Attributes[Fields.ObjectId] = value; }
		}

		/// <summary>
		/// <para>Object Type Code</para>
		/// <para>Integer - MinValue: 0 - MaxValue: 2,147,483,647</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ObjectTypeCode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ObjectTypeCode); }
			set { Entity.Attributes[Fields.ObjectTypeCode] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the user or team who owns the user entity instance data.</para>
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
		/// <para>Unique identifier of the business unit that owns this.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Owning Business Unit</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}

		/// <summary>
		/// <para>Unique identifier of the team who owns this object.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Owning Team</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}

		/// <summary>
		/// <para>Unique identifier of the user who owns this object.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Owning User</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}

		/// <summary>
		/// <para>Personal categories</para>
		/// <para>String - MaxLength: 2000</para>
		/// <para>personal categories</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string PersonalCategories
		{
			get { return Entity.GetAttributeValue<string>(Fields.PersonalCategories); }
			set { Entity.Attributes[Fields.PersonalCategories] = value; }
		}

		/// <summary>
		/// <para>Indicates whether a reminder is set on this object.</para>
		/// <para>Boolean</para>
		/// <para>Is Reminder set</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? ReminderSet
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.ReminderSet); }
			set { Entity.Attributes[Fields.ReminderSet] = value; }
		}

		/// <summary>
		/// <para>Reminder time</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Reminder time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ReminderTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ReminderTime); }
			set { Entity.Attributes[Fields.ReminderTime] = value; }
		}

		/// <summary>
		/// <para>Start Time</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Start Time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? StartTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.StartTime); }
			set { Entity.Attributes[Fields.StartTime] = value; }
		}

		/// <summary>
		/// <para>To Do item flags.</para>
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ToDoItemFlags
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ToDoItemFlags); }
			set { Entity.Attributes[Fields.ToDoItemFlags] = value; }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>To Do Primary Sort Date</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ToDoOrdinalDateUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ToDoOrdinalDate); }
			set { Entity.Attributes[Fields.ToDoOrdinalDate] = value; }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>String - MaxLength: 20</para>
		/// <para>To Do Sort Tie Breaker</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ToDoSubOrdinal
		{
			get { return Entity.GetAttributeValue<string>(Fields.ToDoSubOrdinal); }
			set { Entity.Attributes[Fields.ToDoSubOrdinal] = value; }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>String - MaxLength: 4000</para>
		/// <para>To Do Title</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ToDoTitle
		{
			get { return Entity.GetAttributeValue<string>(Fields.ToDoTitle); }
			set { Entity.Attributes[Fields.ToDoTitle] = value; }
		}

		/// <summary>
		/// <para>Unique identifier user entity</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid UserEntityInstanceDataId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.UserEntityInstanceDataId] = value;
				Entity.Id = value;
			}
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
