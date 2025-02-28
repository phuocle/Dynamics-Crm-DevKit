﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.AzureServiceConnectionOptionSets
{
	public enum ConnectionType
	{
		/// <summary>
		/// Recommendation = 1
		/// </summary>
		Recommendation = 1,
		/// <summary>
		/// Text Analytics = 2
		/// </summary>
		Text_Analytics = 2
	}

	public enum LastConnectionStatusCode
	{
		/// <summary>
		/// Failure = 2
		/// </summary>
		Failure = 2,
		/// <summary>
		/// Success = 1
		/// </summary>
		Success = 1
	}

	public enum StateCode
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

	public enum StatusCode
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
	public partial class AzureServiceConnection : EntityBase
	{
		public struct Fields
		{
			public const string AccountKey = "accountkey";
			public const string AzureServiceConnectionId = "azureserviceconnectionid";
			public const string ConnectionType = "connectiontype";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Description = "description";
			public const string LastConnectionStatusCode = "lastconnectionstatuscode";
			public const string LastConnectionTime = "lastconnectiontime";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string Name = "name";
			public const string OrganizationId = "organizationid";
			public const string ServiceUri = "serviceuri";
			public const string StateCode = "statecode";
			public const string StatusCode = "statuscode";
		}

		public const string EntityLogicalName = "azureserviceconnection";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 9936;

		[DebuggerNonUserCode()]
		public AzureServiceConnection()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public AzureServiceConnection(Guid AzureServiceConnectionId)
		{
			Entity = new Entity(EntityLogicalName, AzureServiceConnectionId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public AzureServiceConnection(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public AzureServiceConnection(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public AzureServiceConnection(Entity entity, Entity merge)
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
		public AzureServiceConnection(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>Type the Azure account key.</para>
		/// <para>Required - String - MaxLength: 100</para>
		/// <para>Azure Account Key</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AccountKey
		{
			get { return Entity.GetAttributeValue<string>(Fields.AccountKey); }
			set { Entity.Attributes[Fields.AccountKey] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the Azure service connection.</para>
		/// <para>Primary Key - Uniqueidentifier</para>
		/// <para>Azure Service Connection</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid AzureServiceConnectionId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.AzureServiceConnectionId] = value;
				Entity.Id = value;
			}
		}

		/// <summary>
		/// <para>Azure service connection type</para>
		/// <para>Required - Picklist</para>
		/// <para>Connection Type</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.AzureServiceConnectionOptionSets.ConnectionType? ConnectionType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ConnectionType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.AzureServiceConnectionOptionSets.ConnectionType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.ConnectionType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.ConnectionType] = null;
			}
		}

		/// <summary>
		/// <para>Unique identifier of the user who created the Azure service connection.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}

		/// <summary>
		/// <para>Date and time when the Azure service connection was created.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Created On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who created the Azure service connection.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Created By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Enter a description of the Azure service connection.</para>
		/// <para>Memo - MaxLength: 2000</para>
		/// <para>Description</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.Description); }
			set { Entity.Attributes[Fields.Description] = value; }
		}

		/// <summary>
		/// <para>Shows the status of the last connection to the Azure service.</para>
		/// <para>Picklist</para>
		/// <para>Last Connection Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.AzureServiceConnectionOptionSets.LastConnectionStatusCode? LastConnectionStatusCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.LastConnectionStatusCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.AzureServiceConnectionOptionSets.LastConnectionStatusCode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.LastConnectionStatusCode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.LastConnectionStatusCode] = null;
			}
		}

		/// <summary>
		/// <para>shows the time of the last connection to the Azure service.</para>
		/// <para>DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Last Connection Time</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? LastConnectionTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.LastConnectionTime); }
			set { Entity.Attributes[Fields.LastConnectionTime] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the user who modified the Azure service connection.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}

		/// <summary>
		/// <para>Date and time when the Azure service connection was last modified.</para>
		/// <para>ReadOnly - DateTimeBehavior: UserLocal - DateTimeFormat: DateAndTime</para>
		/// <para>Modified On</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}

		/// <summary>
		/// <para>Unique identifier of the delegate user who last modified the Azure service connection.</para>
		/// <para>ReadOnly - Lookup to systemuser</para>
		/// <para>Modified By (Delegate)</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}

		/// <summary>
		/// <para>Type a logical name for the connection.</para>
		/// <para>Required - String - MaxLength: 160</para>
		/// <para>Name</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}

		/// <summary>
		/// <para>Unique identifier of the organization associated with the Azure service connection.</para>
		/// <para>ReadOnly - Lookup to organization</para>
		/// <para>Organization</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}

		/// <summary>
		/// <para>Type the service URL for the Azure service.</para>
		/// <para>Required - String - MaxLength: 500</para>
		/// <para>Azure Service URL</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ServiceUri
		{
			get { return Entity.GetAttributeValue<string>(Fields.ServiceUri); }
			set { Entity.Attributes[Fields.ServiceUri] = value; }
		}

		/// <summary>
		/// <para>Shows whether the Azure service connection is active or inactive.</para>
		/// <para>State</para>
		/// <para>Status</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.AzureServiceConnectionOptionSets.StateCode? StateCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StateCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.AzureServiceConnectionOptionSets.StateCode)value.Value;
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
		/// <para>Select the Azure service connection&apos;s status.</para>
		/// <para>Status</para>
		/// <para>Status Reason</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.AzureServiceConnectionOptionSets.StatusCode? StatusCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StatusCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.AzureServiceConnectionOptionSets.StatusCode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.StatusCode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.StatusCode] = null;
			}
		}
	}
}
