﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Abc.MyDog.Shared.Entities.ProcessTriggerOptionSets
{
	public enum ComponentState
	{
		/// <summary>
		/// Deleted = 2
		/// </summary>
		Deleted = 2,
		/// <summary>
		/// Deleted_Unpublished = 3
		/// </summary>
		Deleted_Unpublished = 3,
		/// <summary>
		/// Published = 0
		/// </summary>
		Published = 0,
		/// <summary>
		/// Unpublished = 1
		/// </summary>
		Unpublished = 1
	}

	public enum ControlType
	{
		/// <summary>
		/// Attribute = 1
		/// </summary>
		Attribute = 1,
		/// <summary>
		/// Form_Tab = 2
		/// </summary>
		Form_Tab = 2
	}

	public enum PipelineStage
	{
		/// <summary>
		/// After_Main_Operation = 40
		/// </summary>
		After_Main_Operation = 40,
		/// <summary>
		/// Before_Main_Operation = 20
		/// </summary>
		Before_Main_Operation = 20,
		/// <summary>
		/// Default_Value = 0
		/// </summary>
		Default_Value = 0
	}

	public enum Scope
	{
		/// <summary>
		/// Entity = 2
		/// </summary>
		Entity = 2,
		/// <summary>
		/// Form = 1
		/// </summary>
		Form = 1
	}
}

namespace Abc.MyDog.Shared.Entities
{
	public partial class ProcessTrigger : EntityBase
	{
		public struct Fields
		{
			public const string ComponentState = "componentstate";
			public const string ControlName = "controlname";
			public const string ControlType = "controltype";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Event = "event";
			public const string FormId = "formid";
			public const string IsManaged = "ismanaged";
			public const string MethodId = "methodid";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string OverwriteTime = "overwritetime";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningUser = "owninguser";
			public const string PipelineStage = "pipelinestage";
			public const string PrimaryEntityTypeCode = "primaryentitytypecode";
			public const string ProcessId = "processid";
			public const string ProcessTriggerId = "processtriggerid";
			public const string ProcessTriggerIdUnique = "processtriggeridunique";
			public const string Scope = "scope";
			public const string SolutionId = "solutionid";
			public const string SupportingSolutionId = "supportingsolutionid";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "processtrigger";

		public const int EntityTypeCode = 4712;

		[DebuggerNonUserCode()]
		public ProcessTrigger()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ProcessTrigger(Guid ProcessTriggerId)
		{
			Entity = new Entity(EntityLogicalName, ProcessTriggerId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ProcessTrigger(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ProcessTrigger(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public ProcessTrigger(Entity entity, Entity merge)
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
		public ProcessTrigger(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - Picklist</para>
		/// <para>Component State</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Abc.MyDog.Shared.Entities.ProcessTriggerOptionSets.ComponentState? ComponentState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ComponentState);
				if (value == null) return null;
				return (Abc.MyDog.Shared.Entities.ProcessTriggerOptionSets.ComponentState)value.Value;
			}
		}

		/// <summary>
		/// <para>Name of the control.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Control Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ControlName
		{
			get { return Entity.GetAttributeValue<string>(Fields.ControlName); }
			set { Entity.Attributes[Fields.ControlName] = value; }
		}

		/// <summary>
		/// <para>Type of the control to which this trigger is bound</para>
		/// <para>Picklist</para>
		/// <para>Control Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Abc.MyDog.Shared.Entities.ProcessTriggerOptionSets.ControlType? ControlType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ControlType);
				if (value == null) return null;
				return (Abc.MyDog.Shared.Entities.ProcessTriggerOptionSets.ControlType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.ControlType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.ControlType] = null;
			}
		}

		/// <summary>
		/// <para>Shows who created the record.</para>
		/// <para>ReadOnly - Lookup</para>
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
		/// <para>ReadOnly - Lookup</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Indicates the event.</para>
		/// <para>String - MaxLength: 100</para>
		/// <para>Event</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Event
		{
			get { return Entity.GetAttributeValue<string>(Fields.Event); }
			set { Entity.Attributes[Fields.Event] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the form associated with the trigger.</para>
		/// <para>Lookup</para>
		/// <para>Form</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference FormId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.FormId); }
			set { Entity.Attributes[Fields.FormId] = value; }
		}

		/// <summary>
		/// <para>Indicates whether the solution component is part of a managed solution.</para>
		/// <para>ReadOnly - Boolean</para>
		/// <para>Is Managed</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsManaged
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsManaged); }
		}

		/// <summary>
		/// <para>Displays StageID to which the PBL rule belongs to</para>
		/// <para>Uniqueidentifier</para>
		/// <para>MethodId</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? MethodId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.MethodId); }
			set { Entity.Attributes[Fields.MethodId] = value; }
		}

		/// <summary>
		/// <para>Shows who last updated the record.</para>
		/// <para>ReadOnly - Lookup</para>
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
		/// <para>ReadOnly - Lookup</para>
		/// <para>Modified By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateOnly</para>
		/// <para>Record Overwrite Time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverwriteTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverwriteTime); }
		}

		/// <summary>
		/// <para>Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user.</para>
		/// <para>ReadOnly - Required - Owner</para>
		/// <para>Owner</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
		}

		/// <summary>
		/// <para>Select the business unit that owns the record.</para>
		/// <para>ReadOnly - Required - Uniqueidentifier</para>
		/// <para>Owning Business Unit</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.OwningBusinessUnit); }
		}

		/// <summary>
		/// <para>Unique identifier for the user that owns the record.</para>
		/// <para>ReadOnly - Required - Uniqueidentifier</para>
		/// <para>Owning User</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? OwningUser
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.OwningUser); }
		}

		/// <summary>
		/// <para>Pipeline Stage to Execute Workflow Event Plugin.</para>
		/// <para>Picklist</para>
		/// <para>PipelineStage</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Abc.MyDog.Shared.Entities.ProcessTriggerOptionSets.PipelineStage? PipelineStage
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.PipelineStage);
				if (value == null) return null;
				return (Abc.MyDog.Shared.Entities.ProcessTriggerOptionSets.PipelineStage)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.PipelineStage] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.PipelineStage] = null;
			}
		}

		/// <summary>
		/// <para>Primary entity for the process which is invoked by the event.</para>
		/// <para>EntityName</para>
		/// <para>Primary Entity</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string PrimaryEntityTypeCode
		{
			get { return Entity.GetAttributeValue<string>(Fields.PrimaryEntityTypeCode); }
			set { Entity.Attributes[Fields.PrimaryEntityTypeCode] = value; }
		}

		/// <summary>
		/// <para>Shows the ID of the process.</para>
		/// <para>Lookup</para>
		/// <para>Process</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ProcessId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ProcessId); }
			set { Entity.Attributes[Fields.ProcessId] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the process trigger record.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Process Trigger</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid ProcessTriggerId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.ProcessTriggerId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para>Process Id</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? ProcessTriggerIdUnique
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.ProcessTriggerIdUnique); }
		}

		/// <summary>
		/// <para>Scope level for PBL rules.</para>
		/// <para>Picklist</para>
		/// <para>Scope</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Abc.MyDog.Shared.Entities.ProcessTriggerOptionSets.Scope? Scope
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.Scope);
				if (value == null) return null;
				return (Abc.MyDog.Shared.Entities.ProcessTriggerOptionSets.Scope)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Scope] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.Scope] = null;
			}
		}

		/// <summary>
		/// <para>Unique identifier of the associated solution.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para>Solution</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SolutionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SolutionId); }
		}

		/// <summary>
		/// <para>For internal use only.</para>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para>Solution</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SupportingSolutionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SupportingSolutionId); }
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