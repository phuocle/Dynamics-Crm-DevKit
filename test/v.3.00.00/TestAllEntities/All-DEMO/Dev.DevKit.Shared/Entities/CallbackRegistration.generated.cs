﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.CallbackRegistrationOptionSets
{
	public enum Message
	{
		/// <summary>
		/// Added = 1
		/// </summary>
		Added = 1,
		/// <summary>
		/// Added or Deleted = 5
		/// </summary>
		Added_or_Deleted = 5,
		/// <summary>
		/// Added or Modified = 4
		/// </summary>
		Added_or_Modified = 4,
		/// <summary>
		/// Added or Modified or Deleted = 7
		/// </summary>
		Added_or_Modified_or_Deleted = 7,
		/// <summary>
		/// Deleted = 2
		/// </summary>
		Deleted = 2,
		/// <summary>
		/// Modified = 3
		/// </summary>
		Modified = 3,
		/// <summary>
		/// Modified or Deleted = 6
		/// </summary>
		Modified_or_Deleted = 6
	}

	public enum RunAs
	{
		/// <summary>
		/// Flow owner = 3
		/// </summary>
		Flow_owner = 3,
		/// <summary>
		/// Modifying user = 1
		/// </summary>
		Modifying_user = 1,
		/// <summary>
		/// Row owner = 2
		/// </summary>
		Row_owner = 2
	}

	public enum Scope
	{
		/// <summary>
		/// BusinessUnit = 2
		/// </summary>
		BusinessUnit = 2,
		/// <summary>
		/// Organization = 4
		/// </summary>
		Organization = 4,
		/// <summary>
		/// ParentChildBusinessUnit = 3
		/// </summary>
		ParentChildBusinessUnit = 3,
		/// <summary>
		/// User = 1
		/// </summary>
		User = 1
	}

	public enum Version
	{
		/// <summary>
		/// V1 = 1
		/// </summary>
		V1 = 1,
		/// <summary>
		/// V2 = 2
		/// </summary>
		V2 = 2,
		/// <summary>
		/// V3 = 3
		/// </summary>
		V3 = 3
	}
}

namespace Dev.DevKit.Shared.Entities
{
	public partial class CallbackRegistration : EntityBase
	{
		public struct Fields
		{
			public const string CallbackRegistrationId = "callbackregistrationid";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string EntityName = "entityname";
			public const string FilterExpression = "filterexpression";
			public const string FilteringAttributes = "filteringattributes";
			public const string Message = "message";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string Name = "name";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string PostponeUntil = "postponeuntil";
			public const string RunAs = "runas";
			public const string RuntimeIntegrationProperties = "runtimeintegrationproperties";
			public const string Scope = "scope";
			public const string SdkMessageName = "sdkmessagename";
			public const string SoftDeleteStatus = "softdeletestatus";
			public const string Url = "url";
			public const string Version = "version";
		}

		public const string EntityLogicalName = "callbackregistration";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 301;

		[DebuggerNonUserCode()]
		public CallbackRegistration()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public CallbackRegistration(Guid CallbackRegistrationId)
		{
			Entity = new Entity(EntityLogicalName, CallbackRegistrationId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public CallbackRegistration(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public CallbackRegistration(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public CallbackRegistration(Entity entity, Entity merge)
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
		public CallbackRegistration(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Unique identifier of the callback registration.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid CallbackRegistrationId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.CallbackRegistrationId] = value;
				Entity.Id = value;
			}
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
		/// <para>Date and time when the callback registration was created.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		/// <summary>
		/// <para>Shows who created the record on behalfÂ of another user.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Entity Name.</para>
		/// <para>String - MaxLength: 255</para>
		/// <para>Entity Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string EntityName
		{
			get { return Entity.GetAttributeValue<string>(Fields.EntityName); }
			set { Entity.Attributes[Fields.EntityName] = value; }
		}

		/// <summary>
		/// <para>condition represented with OData $filter syntax</para>
		/// <para>String - MaxLength: 100000</para>
		/// <para>Filter Expression</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string FilterExpression
		{
			get { return Entity.GetAttributeValue<string>(Fields.FilterExpression); }
			set { Entity.Attributes[Fields.FilterExpression] = value; }
		}

		/// <summary>
		/// <para>Comma-separated list of attributes. If at least one of these attributes is modified, the callback url should be called.</para>
		/// <para>String - MaxLength: 100000</para>
		/// <para>Filtering Attributes</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string FilteringAttributes
		{
			get { return Entity.GetAttributeValue<string>(Fields.FilteringAttributes); }
			set { Entity.Attributes[Fields.FilteringAttributes] = value; }
		}

		/// <summary>
		/// <para>Specifies the message type</para>
		/// <para>Picklist</para>
		/// <para>Specifies the message type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.CallbackRegistrationOptionSets.Message? Message
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.Message);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.CallbackRegistrationOptionSets.Message)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Message] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.Message] = null;
			}
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
		/// <para>Date and time when the callback registration was last modified.</para>
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
		/// <para>Name of callback registration.</para>
		/// <para>String - MaxLength: 256</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the user or team who owns the callback registration.</para>
		/// <para>Lookup to systemuser;team</para>
		/// <para>Owner</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
			set { Entity.Attributes[Fields.OwnerId] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the business unit that owns the callback registration.</para>
		/// <para>ReadOnly - Lookup to businessunit</para>
		/// <para>Owning Business Unit</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}

		/// <summary>
		/// <para>Unique identifier of the team who owns the callback registration.</para>
		/// <para>ReadOnly - Lookup to team</para>
		/// <para>Owning Team</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}

		/// <summary>
		/// <para>Unique identifier of the user who owns the callback registration.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Owning User</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}

		/// <summary>
		/// <para>delay represented with OData expression</para>
		/// <para>String - MaxLength: 100000</para>
		/// <para>Postpone Until</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string PostponeUntil
		{
			get { return Entity.GetAttributeValue<string>(Fields.PostponeUntil); }
			set { Entity.Attributes[Fields.PostponeUntil] = value; }
		}

		/// <summary>
		/// <para>Specifies the user context under which the callback will run</para>
		/// <para>Picklist</para>
		/// <para>RunAs</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.CallbackRegistrationOptionSets.RunAs? RunAs
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.RunAs);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.CallbackRegistrationOptionSets.RunAs)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.RunAs] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.RunAs] = null;
			}
		}

		/// <summary>
		/// <para>For internal use only. Holds miscellaneous properties related to runtime integration.</para>
		/// <para>String - MaxLength: 512</para>
		/// <para>Runtime Integration Properties</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string RuntimeIntegrationProperties
		{
			get { return Entity.GetAttributeValue<string>(Fields.RuntimeIntegrationProperties); }
			set { Entity.Attributes[Fields.RuntimeIntegrationProperties] = value; }
		}

		/// <summary>
		/// <para>Specifies the Scope</para>
		/// <para>Picklist</para>
		/// <para>Specifies the scope type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.CallbackRegistrationOptionSets.Scope? Scope
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.Scope);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.CallbackRegistrationOptionSets.Scope)value.Value;
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
		/// <para>Name of the SDK message the subscriber is interested in</para>
		/// <para>String - MaxLength: 256</para>
		/// <para>SDK Message Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SdkMessageName
		{
			get { return Entity.GetAttributeValue<string>(Fields.SdkMessageName); }
			set { Entity.Attributes[Fields.SdkMessageName] = value; }
		}

		/// <summary>
		/// <para>For internal use only. Holds soft delete information.</para>
		/// <para>Integer - MinValue: -2,147,483,648 - MaxValue: 2,147,483,647</para>
		/// <para>Soft Delete Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? SoftDeleteStatus
		{
			get { return Entity.GetAttributeValue<int?>(Fields.SoftDeleteStatus); }
			set { Entity.Attributes[Fields.SoftDeleteStatus] = value; }
		}

		/// <summary>
		/// <para>Full callback registration Url.</para>
		/// <para>String - MaxLength: 2000</para>
		/// <para>Url Address</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Url
		{
			get { return Entity.GetAttributeValue<string>(Fields.Url); }
			set { Entity.Attributes[Fields.Url] = value; }
		}

		/// <summary>
		/// <para>Specifies the Callback registration version type</para>
		/// <para>Picklist</para>
		/// <para>Specifies the Callback registration version type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.CallbackRegistrationOptionSets.Version? Version
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.Version);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.CallbackRegistrationOptionSets.Version)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Version] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.Version] = null;
			}
		}
	}
}