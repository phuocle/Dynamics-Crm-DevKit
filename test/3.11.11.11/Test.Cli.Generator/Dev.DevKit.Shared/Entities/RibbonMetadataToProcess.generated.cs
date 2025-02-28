﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.RibbonMetadataToProcessOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class RibbonMetadataToProcess : EntityBase
	{
		public struct Fields
		{
			public const string CompletedOn = "completedon";
			public const string CreatedOn = "createdon";
			public const string EntityName = "entityname";
			public const string ExceptionMessage = "exceptionmessage";
			public const string IsDbUpdate = "isdbupdate";
			public const string ProcessedOn = "processedon";
			public const string RetryCount = "retrycount";
			public const string RibbonMetadataRowId = "ribbonmetadatarowid";
			public const string SolutionId = "solutionid";
			public const string SolutionName = "solutionname";
			public const string Status = "status";
		}

		public const string EntityLogicalName = "ribbonmetadatatoprocess";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 9880;

		[DebuggerNonUserCode()]
		public RibbonMetadataToProcess()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public RibbonMetadataToProcess(Guid RibbonMetadataToProcessId)
		{
			Entity = new Entity(EntityLogicalName, RibbonMetadataToProcessId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public RibbonMetadataToProcess(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public RibbonMetadataToProcess(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public RibbonMetadataToProcess(Entity entity, Entity merge)
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
		public RibbonMetadataToProcess(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Shows the date and time when the ribbon entity record has finished processing. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Completed On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CompletedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CompletedOn); }
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
		/// <para>Entity Logical Name</para>
		/// <para>String - MaxLength: 256</para>
		/// <para>Entity Logical Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string EntityName
		{
			get { return Entity.GetAttributeValue<string>(Fields.EntityName); }
			set { Entity.Attributes[Fields.EntityName] = value; }
		}

		/// <summary>
		/// <para>Exception message</para>
		/// <para>String - MaxLength: 1024</para>
		/// <para>Exception message which occurred during ribbon entity processing.</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ExceptionMessage
		{
			get { return Entity.GetAttributeValue<string>(Fields.ExceptionMessage); }
			set { Entity.Attributes[Fields.ExceptionMessage] = value; }
		}

		/// <summary>
		/// <para>Is entity created via Db Update</para>
		/// <para>Integer - MinValue: 0 - MaxValue: 10</para>
		/// <para>Is entity created via Db Update</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? IsDbUpdate
		{
			get { return Entity.GetAttributeValue<int?>(Fields.IsDbUpdate); }
			set { Entity.Attributes[Fields.IsDbUpdate] = value; }
		}

		/// <summary>
		/// <para>Shows the date and time when the record was processed. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Processed On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ProcessedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ProcessedOn); }
		}

		/// <summary>
		/// <para>Retry Count</para>
		/// <para>Integer - MinValue: 0 - MaxValue: 100</para>
		/// <para>Retry Count</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? RetryCount
		{
			get { return Entity.GetAttributeValue<int?>(Fields.RetryCount); }
			set { Entity.Attributes[Fields.RetryCount] = value; }
		}

		/// <summary>
		/// <para>Unique identifier for Ribbon Metadata Instance To Process</para>
		/// <para>Uniqueidentifier</para>
		/// <para>Ribbon Metadata To Process</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? RibbonMetadataRowId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.RibbonMetadataRowId); }
			set { Entity.Attributes[Fields.RibbonMetadataRowId] = value; }
		}

		/// <summary>
		/// <para>Solution Id</para>
		/// <para>Uniqueidentifier</para>
		/// <para>Solution Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SolutionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SolutionId); }
			set { Entity.Attributes[Fields.SolutionId] = value; }
		}

		/// <summary>
		/// <para>Solution Name of the ribbon entity</para>
		/// <para>String - MaxLength: 256</para>
		/// <para>Solution Name of the ribbon entity.</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SolutionName
		{
			get { return Entity.GetAttributeValue<string>(Fields.SolutionName); }
			set { Entity.Attributes[Fields.SolutionName] = value; }
		}

		/// <summary>
		/// <para>Status</para>
		/// <para>Integer - MinValue: 0 - MaxValue: 100</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? Status
		{
			get { return Entity.GetAttributeValue<int?>(Fields.Status); }
			set { Entity.Attributes[Fields.Status] = value; }
		}
	}
}
