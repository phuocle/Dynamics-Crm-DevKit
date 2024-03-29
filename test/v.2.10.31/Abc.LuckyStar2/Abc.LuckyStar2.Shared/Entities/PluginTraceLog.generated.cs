﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Abc.LuckyStar2.Shared.Entities.PluginTraceLogOptionSets
{
	public enum Mode
	{
		/// <summary>
		/// Asynchronous = 1
		/// </summary>
		Asynchronous = 1,
		/// <summary>
		/// Synchronous = 0
		/// </summary>
		Synchronous = 0
	}

	public enum OperationType
	{
		/// <summary>
		/// Plug_in = 1
		/// </summary>
		Plug_in = 1,
		/// <summary>
		/// Unknown = 0
		/// </summary>
		Unknown = 0,
		/// <summary>
		/// Workflow_Activity = 2
		/// </summary>
		Workflow_Activity = 2
	}
}

namespace Abc.LuckyStar2.Shared.Entities
{
	public partial class PluginTraceLog : EntityBase
	{
		public struct Fields
		{
			public const string Configuration = "configuration";
			public const string CorrelationId = "correlationid";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Depth = "depth";
			public const string ExceptionDetails = "exceptiondetails";
			public const string IsSystemCreated = "issystemcreated";
			public const string MessageBlock = "messageblock";
			public const string MessageName = "messagename";
			public const string Mode = "mode";
			public const string OperationType = "operationtype";
			public const string OrganizationId = "organizationid";
			public const string PerformanceConstructorDuration = "performanceconstructorduration";
			public const string PerformanceConstructorStartTime = "performanceconstructorstarttime";
			public const string PerformanceExecutionDuration = "performanceexecutionduration";
			public const string PerformanceExecutionStartTime = "performanceexecutionstarttime";
			public const string PersistenceKey = "persistencekey";
			public const string PluginStepId = "pluginstepid";
			public const string PluginTraceLogId = "plugintracelogid";
			public const string PrimaryEntity = "primaryentity";
			public const string Profile = "profile";
			public const string RequestId = "requestid";
			public const string SecureConfiguration = "secureconfiguration";
			public const string TypeName = "typename";
		}

		public const string EntityLogicalName = "plugintracelog";

		public const int EntityTypeCode = 4619;

		[DebuggerNonUserCode()]
		public PluginTraceLog()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public PluginTraceLog(Guid PluginTraceLogId)
		{
			Entity = new Entity(EntityLogicalName, PluginTraceLogId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public PluginTraceLog(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public PluginTraceLog(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public PluginTraceLog(Entity entity, Entity merge)
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
		public PluginTraceLog(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Unsecured configuration for the plug-in trace log.</para>
		/// <para>ReadOnly - Memo - MaxLength: 1073741823</para>
		/// <para>Configuration</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Configuration
		{
			get { return Entity.GetAttributeValue<string>(Fields.Configuration); }
		}

		/// <summary>
		/// <para>Unique identifier for tracking plug-in or custom workflow activity execution.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para>Correlation Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? CorrelationId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.CorrelationId); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who created the record.</para>
		/// <para>ReadOnly - Lookup</para>
		/// <para>Created By (Delegate)</para>
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
		/// <para>Depth of execution of the plug-in or custom workflow activity.</para>
		/// <para>ReadOnly - Integer - MinValue: 0 - MaxValue: 2,147,483,647</para>
		/// <para>Depth</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? Depth
		{
			get { return Entity.GetAttributeValue<int?>(Fields.Depth); }
		}

		/// <summary>
		/// <para>Details of the exception.</para>
		/// <para>ReadOnly - Memo - MaxLength: 1073741823</para>
		/// <para>Exception Details</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ExceptionDetails
		{
			get { return Entity.GetAttributeValue<string>(Fields.ExceptionDetails); }
		}

		/// <summary>
		/// <para>Where the event originated. Set to true if it's a system trace; otherwise, false.</para>
		/// <para>ReadOnly - Boolean</para>
		/// <para>System Created</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsSystemCreated
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsSystemCreated); }
		}

		/// <summary>
		/// <para>Trace text from the plug-in.</para>
		/// <para>ReadOnly - Memo - MaxLength: 1073741823</para>
		/// <para>Message Block</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string MessageBlock
		{
			get { return Entity.GetAttributeValue<string>(Fields.MessageBlock); }
		}

		/// <summary>
		/// <para>Name of the message that triggered this plug-in.</para>
		/// <para>ReadOnly - String - MaxLength: 1024</para>
		/// <para>Message Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string MessageName
		{
			get { return Entity.GetAttributeValue<string>(Fields.MessageName); }
		}

		/// <summary>
		/// <para>Type of execution.</para>
		/// <para>ReadOnly - Picklist</para>
		/// <para>Mode</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Abc.LuckyStar2.Shared.Entities.PluginTraceLogOptionSets.Mode? Mode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.Mode);
				if (value == null) return null;
				return (Abc.LuckyStar2.Shared.Entities.PluginTraceLogOptionSets.Mode)value.Value;
			}
		}

		/// <summary>
		/// <para>Type of custom code.</para>
		/// <para>ReadOnly - Picklist</para>
		/// <para>Operation Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Abc.LuckyStar2.Shared.Entities.PluginTraceLogOptionSets.OperationType? OperationType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.OperationType);
				if (value == null) return null;
				return (Abc.LuckyStar2.Shared.Entities.PluginTraceLogOptionSets.OperationType)value.Value;
			}
		}

		/// <summary>
		/// <para>Unique identifier for the organization.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para>Organization Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? OrganizationId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.OrganizationId); }
		}

		/// <summary>
		/// <para>Time, in milliseconds, to construct.</para>
		/// <para>ReadOnly - Integer - MinValue: 0 - MaxValue: 2,147,483,647</para>
		/// <para>Constructor Duration</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? PerformanceConstructorDuration
		{
			get { return Entity.GetAttributeValue<int?>(Fields.PerformanceConstructorDuration); }
		}

		/// <summary>
		/// <para>Date and time when constructed.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Constructor Start Time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? PerformanceConstructorStartTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.PerformanceConstructorStartTime); }
		}

		/// <summary>
		/// <para>Time, in milliseconds, to execute the request.</para>
		/// <para>ReadOnly - Integer - MinValue: 0 - MaxValue: 2,147,483,647</para>
		/// <para>Execution Duration</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? PerformanceExecutionDuration
		{
			get { return Entity.GetAttributeValue<int?>(Fields.PerformanceExecutionDuration); }
		}

		/// <summary>
		/// <para>Time, in milliseconds, to execute the request.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Execution Start Time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? PerformanceExecutionStartTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.PerformanceExecutionStartTime); }
		}

		/// <summary>
		/// <para>Asynchronous workflow persistence key.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para>Persistence Key</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? PersistenceKey
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.PersistenceKey); }
		}

		/// <summary>
		/// <para>ID of the plug-in registration step.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para>Plugin Step ID</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? PluginStepId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.PluginStepId); }
		}

		/// <summary>
		/// <para>Unique identifier for an entity instance.</para>
		/// <para>ReadOnly - Primary Key - Uniqueidentifier</para>
		/// <para>Plug-in Trace Log</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid PluginTraceLogId
		{
			get { return Id; }
		}

		/// <summary>
		/// <para>Entity, if any, that the plug-in is executed against.</para>
		/// <para>ReadOnly - String - MaxLength: 1000</para>
		/// <para>Primary Entity</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string PrimaryEntity
		{
			get { return Entity.GetAttributeValue<string>(Fields.PrimaryEntity); }
		}

		/// <summary>
		/// <para>Plug-in profile formatted as serialized text.</para>
		/// <para>ReadOnly - Memo - MaxLength: 1073741823</para>
		/// <para>Profile</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Profile
		{
			get { return Entity.GetAttributeValue<string>(Fields.Profile); }
		}

		/// <summary>
		/// <para>Unique identifier of the message request.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para>Request ID</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? RequestId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.RequestId); }
		}

		/// <summary>
		/// <para>Secured configuration for the plug-in trace log.</para>
		/// <para>ReadOnly - Memo - MaxLength: 1073741823</para>
		/// <para>Secure Configuration</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SecureConfiguration
		{
			get { return Entity.GetAttributeValue<string>(Fields.SecureConfiguration); }
		}

		/// <summary>
		/// <para>Class name of the plug-in.</para>
		/// <para>ReadOnly - String - MaxLength: 1024</para>
		/// <para>Type Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string TypeName
		{
			get { return Entity.GetAttributeValue<string>(Fields.TypeName); }
		}
	}
}
