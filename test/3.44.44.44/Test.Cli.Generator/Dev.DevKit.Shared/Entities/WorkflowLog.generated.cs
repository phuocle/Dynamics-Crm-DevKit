﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:52:40
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.WorkflowLogOptionSets
{
	public enum ChildWorkflowInstanceObjectTypeCode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Flow Session</para>
		/// <para><strong>Value</strong>: 4,720</para>
		/// </summary>
		Flow_Session = 4_720,
		/// <summary>
		/// <para><strong>Display Name</strong>: System Job</para>
		/// <para><strong>Value</strong>: 4,700</para>
		/// </summary>
		System_Job = 4_700,
		/// <summary>
		/// <para><strong>Display Name</strong>: Workflow Session</para>
		/// <para><strong>Value</strong>: 4,710</para>
		/// </summary>
		Workflow_Session = 4_710
	}
	public enum ObjectTypeCode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Flow Session</para>
		/// <para><strong>Value</strong>: 4,720</para>
		/// </summary>
		Flow_Session = 4_720,
		/// <summary>
		/// <para><strong>Display Name</strong>: System Job</para>
		/// <para><strong>Value</strong>: 4,700</para>
		/// </summary>
		System_Job = 4_700,
		/// <summary>
		/// <para><strong>Display Name</strong>: Workflow Session</para>
		/// <para><strong>Value</strong>: 4,710</para>
		/// </summary>
		Workflow_Session = 4_710
	}
	public enum Status
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Canceled</para>
		/// <para><strong>Value</strong>: 4</para>
		/// </summary>
		Canceled = 4,
		/// <summary>
		/// <para><strong>Display Name</strong>: Failed</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Failed = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: In Progress</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		In_Progress = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Succeeded</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Succeeded = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Waiting</para>
		/// <para><strong>Value</strong>: 5</para>
		/// </summary>
		Waiting = 5
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class WorkflowLog : EntityBase
	{
		public struct Fields
		{
			public const string ActivityName = "activityname";
			public const string AsyncOperationId = "asyncoperationid";
			public const string ChildWorkflowInstanceId = "childworkflowinstanceid";
			public const string CompletedOn = "completedon";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Description = "description";
			public const string Duration = "duration";
			public const string ErrorCode = "errorcode";
			public const string ErrorText = "errortext";
			public const string Inputs = "inputs";
			public const string Inputs_name = "inputs_name";
			public const string InteractionActivityResult = "interactionactivityresult";
			public const string IterationCount = "iterationcount";
			public const string Message = "message";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string Outputs = "outputs";
			public const string Outputs_name = "outputs_name";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string RegardingObjectId = "regardingobjectid";
			public const string RepetitionCount = "repetitioncount";
			public const string RepetitionId = "repetitionid";
			public const string StageName = "stagename";
			public const string StartedOn = "startedon";
			public const string Status = "status";
			public const string StepName = "stepname";
			public const string WorkflowLogId = "workflowlogid";
		}
		public const string EntityLogicalName = "workflowlog";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 4706;
		public const string EntityCollectionSchemaName = "WorkflowLogs";
		public const string EntityDisplayCollectionName = "Process Logs";
		public const string DisplayName = "Process Log";
		public const string EntitySetName = "workflowlogs";
		public const string EntityLogicalCollectionName = "workflowlogs";
		public const string EntityPrimaryIdAttribute = "workflowlogid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "";
		public const string EntitySchemaName = "WorkflowLog";
		[DebuggerNonUserCode()]
		public WorkflowLog()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public WorkflowLog(Guid WorkflowLogId)
		{
			Entity = new Entity(EntityLogicalName, WorkflowLogId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public WorkflowLog(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="WorkflowLog"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public WorkflowLog(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="WorkflowLog"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public WorkflowLog(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new WorkflowLog(preEntity, targetEntity) with targetEntity = null");
			if (preEntity == null) preEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);
			Entity = CloneThisEntity(preEntity);
			foreach (var property in targetEntity?.Attributes?.ToList())
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="WorkflowLog"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public WorkflowLog(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new WorkflowLog(preEntity, targetEntity, postEntity) with targetEntity = null");
			if (preEntity == null) preEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);
			if (postEntity == null) postEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);
			Entity = CloneThisEntity(preEntity);
			foreach (var property in targetEntity?.Attributes?.ToList())
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			foreach (var property in postEntity?.Attributes?.ToList())
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public WorkflowLog(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Activity Name</para>
		/// <para><strong>Description</strong>: Name of the activity which the process step is currently processing.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 160</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ActivityName
		{
			get { return Entity.GetAttributeValue<string>(Fields.ActivityName); }
			set { Entity.Attributes[Fields.ActivityName] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Parent record</para>
		/// <para><strong>Description</strong>: Unique identifier of the parent record.</para>
		/// <para><strong>Lookup</strong>: <see cref="asyncoperation"/>, <see cref="processsession"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference AsyncOperationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.AsyncOperationId); }
			set { Entity.Attributes[Fields.AsyncOperationId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Child Workflow System Job</para>
		/// <para><strong>Description</strong>: Unique identifier of the system job.</para>
		/// <para><strong>Lookup</strong>: <see cref="asyncoperation"/>, <see cref="processsession"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ChildWorkflowInstanceId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ChildWorkflowInstanceId); }
			set { Entity.Attributes[Fields.ChildWorkflowInstanceId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Completed On</para>
		/// <para><strong>Description</strong>: Date and time when the operation was completed.</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CompletedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CompletedOn); }
			set { Entity.Attributes[Fields.CompletedOn] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who created the process log entry.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Started On</para>
		/// <para><strong>Description</strong>: Date and time when the process log entry was created.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By (Delegate)</para>
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who created the process log.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Step Description</para>
		/// <para><strong>Description</strong>: Description of the process step.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 100,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.Description); }
			set { Entity.Attributes[Fields.Description] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Duration</para>
		/// <para><strong>Description</strong>: Duration between completed on and started on, used by business process flow.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// <para><strong>Calculated Field</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? Duration
		{
			get { return Entity.GetAttributeValue<int?>(Fields.Duration); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Error Message</para>
		/// <para><strong>Description</strong>: Error code related to process.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ErrorCode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ErrorCode); }
			set { Entity.Attributes[Fields.ErrorCode] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ErrorText</para>
		/// <para><strong>Description</strong>: The string representation of the error.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 1,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ErrorText
		{
			get { return Entity.GetAttributeValue<string>(Fields.ErrorText); }
			set { Entity.Attributes[Fields.ErrorText] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Inputs</para>
		/// <para><strong>Description</strong>: Inputs required by the workflow step.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Virtual</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Inputs_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Inputs_name); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Interaction Activity Result</para>
		/// <para><strong>Description</strong>: String specifying the result of an interaction activity.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 100,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string InteractionActivityResult
		{
			get { return Entity.GetAttributeValue<string>(Fields.InteractionActivityResult); }
			set { Entity.Attributes[Fields.InteractionActivityResult] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: IterationCount</para>
		/// <para><strong>Description</strong>: The iteration count for the action when in a do until loop.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? IterationCount
		{
			get { return Entity.GetAttributeValue<int?>(Fields.IterationCount); }
			set { Entity.Attributes[Fields.IterationCount] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Message</para>
		/// <para><strong>Description</strong>: Message related to process.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 100,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Message
		{
			get { return Entity.GetAttributeValue<string>(Fields.Message); }
			set { Entity.Attributes[Fields.Message] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who last modified the process log entry.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified On</para>
		/// <para><strong>Description</strong>: Date and time when the process log entry was last modified.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By (Delegate)</para>
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who last modified the process log.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Outputs</para>
		/// <para><strong>Description</strong>: Outputs generated by the workflow step.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Virtual</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Outputs_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Outputs_name); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owner</para>
		/// <para><strong>Description</strong>: Unique identifier of the user or team who owns the process log.</para>
		/// <para><strong>ReadOnly</strong> - Required - <strong>Lookup</strong>: <see cref="systemuser"/>, <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning Business Unit</para>
		/// <para><strong>Description</strong>: Unique identifier of the business unit that owns the process.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="businessunit"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning Team</para>
		/// <para><strong>Description</strong>: Unique identifier of the team who owns the process log.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning User</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who owns the process.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Regarding</para>
		/// <para><strong>Description</strong>: Unique identifier of the associated record.</para>
		/// <para><strong>Lookup</strong>:</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference RegardingObjectId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.RegardingObjectId); }
			set { Entity.Attributes[Fields.RegardingObjectId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: RepetitionCount</para>
		/// <para><strong>Description</strong>: The count of repetitions of the action when in a loop.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? RepetitionCount
		{
			get { return Entity.GetAttributeValue<int?>(Fields.RepetitionCount); }
			set { Entity.Attributes[Fields.RepetitionCount] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: RepetitionId</para>
		/// <para><strong>Description</strong>: The string representation of the repetition and iteration / level of the action.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 1,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string RepetitionId
		{
			get { return Entity.GetAttributeValue<string>(Fields.RepetitionId); }
			set { Entity.Attributes[Fields.RepetitionId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Process Stage</para>
		/// <para><strong>Description</strong>: Name of the process stage.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 256</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string StageName
		{
			get { return Entity.GetAttributeValue<string>(Fields.StageName); }
			set { Entity.Attributes[Fields.StageName] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Started On</para>
		/// <para><strong>Description</strong>: Date and time when the operation was started.</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? StartedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.StartedOn); }
			set { Entity.Attributes[Fields.StartedOn] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Status</para>
		/// <para><strong>Description</strong>: Status of the process step for which process log record has been created: In Progress, Successfully Completed, or Failed.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.WorkflowLogOptionSets.Status"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.WorkflowLogOptionSets.Status.In_Progress"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.WorkflowLogOptionSets.Status? Status
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.Status);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.WorkflowLogOptionSets.Status)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Status] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.Status] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Step Name</para>
		/// <para><strong>Description</strong>: Name of the process step.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 160</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string StepName
		{
			get { return Entity.GetAttributeValue<string>(Fields.StepName); }
			set { Entity.Attributes[Fields.StepName] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Process Log</para>
		/// <para><strong>Description</strong>: Unique identifier of the process log entry.</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid WorkflowLogId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.WorkflowLogId] = value;
				Entity.Id = value;
			}
		}
	}
}