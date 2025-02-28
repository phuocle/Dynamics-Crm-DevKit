﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:49:47
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets
{
	public enum AuthType
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Access Key</para>
		/// <para><strong>Value</strong>: 8</para>
		/// </summary>
		Access_Key = 8,
		/// <summary>
		/// <para><strong>Display Name</strong>: ACS</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		ACS = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Connection String</para>
		/// <para><strong>Value</strong>: 7</para>
		/// </summary>
		Connection_String = 7,
		/// <summary>
		/// <para><strong>Display Name</strong>: Http Header</para>
		/// <para><strong>Value</strong>: 5</para>
		/// </summary>
		Http_Header = 5,
		/// <summary>
		/// <para><strong>Display Name</strong>: Http Query String</para>
		/// <para><strong>Value</strong>: 6</para>
		/// </summary>
		Http_Query_String = 6,
		/// <summary>
		/// <para><strong>Display Name</strong>: SAS Key</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		SAS_Key = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: SAS Token</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		SAS_Token = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Webhook Key</para>
		/// <para><strong>Value</strong>: 4</para>
		/// </summary>
		Webhook_Key = 4
	}
	public enum ComponentState
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Deleted</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Deleted = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Deleted Unpublished</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Deleted_Unpublished = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Published</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Published = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Unpublished</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Unpublished = 1
	}
	public enum ConnectionMode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Federated</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Federated = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Normal</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Normal = 1
	}
	public enum Contract
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Event Grid</para>
		/// <para><strong>Value</strong>: 9</para>
		/// </summary>
		Event_Grid = 9,
		/// <summary>
		/// <para><strong>Display Name</strong>: Event Hub</para>
		/// <para><strong>Value</strong>: 7</para>
		/// </summary>
		Event_Hub = 7,
		/// <summary>
		/// <para><strong>Display Name</strong>: Managed Data Lake</para>
		/// <para><strong>Value</strong>: 10</para>
		/// </summary>
		Managed_Data_Lake = 10,
		/// <summary>
		/// <para><strong>Display Name</strong>: OneWay</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		OneWay = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Queue</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Queue = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Queue (Persistent)</para>
		/// <para><strong>Value</strong>: 6</para>
		/// </summary>
		Queue_Persistent = 6,
		/// <summary>
		/// <para><strong>Display Name</strong>: Rest</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Rest = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Topic</para>
		/// <para><strong>Value</strong>: 5</para>
		/// </summary>
		Topic = 5,
		/// <summary>
		/// <para><strong>Display Name</strong>: TwoWay</para>
		/// <para><strong>Value</strong>: 4</para>
		/// </summary>
		TwoWay = 4,
		/// <summary>
		/// <para><strong>Display Name</strong>: Webhook</para>
		/// <para><strong>Value</strong>: 8</para>
		/// </summary>
		Webhook = 8
	}
	public enum MessageCharset
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Default</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Default = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: UTF8</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		UTF8 = 1
	}
	public enum MessageFormat
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Binary XML</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Binary_XML = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Json</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Json = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Text XML</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Text_XML = 3
	}
	public enum NamespaceFormat
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Namespace Address</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Namespace_Address = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Namespace Name</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Namespace_Name = 1
	}
	public enum SchemaType
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Cloud Events</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Cloud_Events = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Event Grid</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Event_Grid = 1
	}
	public enum UserClaim
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: None</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		None = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: UserId</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		UserId = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: UserInfo</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		UserInfo = 3
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class ServiceEndpoint : EntityBase
	{
		public struct Fields
		{
			public const string AuthType = "authtype";
			public const string AuthValue = "authvalue";
			public const string ComponentState = "componentstate";
			public const string ConnectionMode = "connectionmode";
			public const string Contract = "contract";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Description = "description";
			public const string IntroducedVersion = "introducedversion";
			public const string IsAuthValueSet = "isauthvalueset";
			public const string IsManaged = "ismanaged";
			public const string IsSASKeySet = "issaskeyset";
			public const string IsSASTokenSet = "issastokenset";
			public const string KeyVaultReferenceId = "keyvaultreferenceid";
			public const string MessageCharset = "messagecharset";
			public const string MessageFormat = "messageformat";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string Name = "name";
			public const string NamespaceAddress = "namespaceaddress";
			public const string NamespaceFormat = "namespaceformat";
			public const string OrganizationId = "organizationid";
			public const string OverwriteTime = "overwritetime";
			public const string Path = "path";
			public const string RuntimeIntegrationProperties = "runtimeintegrationproperties";
			public const string SASKey = "saskey";
			public const string SASKeyName = "saskeyname";
			public const string SASToken = "sastoken";
			public const string SchemaType = "schematype";
			public const string ServiceEndpointId = "serviceendpointid";
			public const string ServiceEndpointIdUnique = "serviceendpointidunique";
			public const string SolutionId = "solutionid";
			public const string SolutionNamespace = "solutionnamespace";
			public const string SupportingSolutionId = "supportingsolutionid";
			public const string Url = "url";
			public const string UseKeyVaultConfiguration = "usekeyvaultconfiguration";
			public const string UserClaim = "userclaim";
		}
		public const string EntityLogicalName = "serviceendpoint";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 4618;
		public const string EntityCollectionSchemaName = "ServiceEndpoints";
		public const string EntityDisplayCollectionName = "Service Endpoints";
		public const string DisplayName = "Service Endpoint";
		public const string EntitySetName = "serviceendpoints";
		public const string EntityLogicalCollectionName = "serviceendpoints";
		public const string EntityPrimaryIdAttribute = "serviceendpointid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "name";
		public const string EntitySchemaName = "ServiceEndpoint";
		[DebuggerNonUserCode()]
		public ServiceEndpoint()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public ServiceEndpoint(Guid ServiceEndpointId)
		{
			Entity = new Entity(EntityLogicalName, ServiceEndpointId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public ServiceEndpoint(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="ServiceEndpoint"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public ServiceEndpoint(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="ServiceEndpoint"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public ServiceEndpoint(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new ServiceEndpoint(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="ServiceEndpoint"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public ServiceEndpoint(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new ServiceEndpoint(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public ServiceEndpoint(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Specifies mode of authentication with SB</para>
		/// <para><strong>Description</strong>: Specifies mode of authentication with SB</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.AuthType"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.AuthType? AuthType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.AuthType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.AuthType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.AuthType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.AuthType] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Authentication Value</para>
		/// <para><strong>Description</strong>: Authentication Value</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 2,048</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AuthValue
		{
			get { return Entity.GetAttributeValue<string>(Fields.AuthValue); }
			set { Entity.Attributes[Fields.AuthValue] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Component State</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>ReadOnly</strong> - <strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.ComponentState"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.ComponentState? ComponentState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ComponentState);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.ComponentState)value.Value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Connection Mode</para>
		/// <para><strong>Description</strong>: Connection mode to contact the service endpoint.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.ConnectionMode"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.ConnectionMode.Normal"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.ConnectionMode? ConnectionMode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ConnectionMode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.ConnectionMode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.ConnectionMode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.ConnectionMode] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Contract</para>
		/// <para><strong>Description</strong>: Type of the endpoint contract.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.Contract"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.Contract.OneWay"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.Contract? Contract
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.Contract);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.Contract)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Contract] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.Contract] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who created the service endpoint.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created On</para>
		/// <para><strong>Description</strong>: Date and time when the service endpoint was created.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By (Delegate)</para>
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who created the service endpoint.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Description</para>
		/// <para><strong>Description</strong>: Description of the service endpoint.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.Description); }
			set { Entity.Attributes[Fields.Description] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Introduced Version</para>
		/// <para><strong>Description</strong>: Version in which the form is introduced.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 48</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string IntroducedVersion
		{
			get { return Entity.GetAttributeValue<string>(Fields.IntroducedVersion); }
			set { Entity.Attributes[Fields.IntroducedVersion] = value; }
		}
		/// <summary>
		/// <para><strong>ReadOnly</strong> - <strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsAuthValueSet
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsAuthValueSet); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: State</para>
		/// <para><strong>Description</strong>: Information that specifies whether this component is managed.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Two Option</strong> - [<strong>Managed</strong>]: true - [<strong>Unmanaged</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Unmanaged</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsManaged
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsManaged); }
		}
		/// <summary>
		/// <para><strong>ReadOnly</strong> - <strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsSASKeySet
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsSASKeySet); }
		}
		/// <summary>
		/// <para><strong>ReadOnly</strong> - <strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsSASTokenSet
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsSASTokenSet); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: KeyVaultReferenceId</para>
		/// <para><strong>Description</strong>: Unique identifier for keyvaultreference associated with serviceendpoint.</para>
		/// <para><strong>Lookup</strong>: <see cref="keyvaultreference"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference KeyVaultReferenceId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.KeyVaultReferenceId); }
			set { Entity.Attributes[Fields.KeyVaultReferenceId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Specifies the character encoding to be used for messages sent to a service endpoint</para>
		/// <para><strong>Description</strong>: Specifies the character encoding for message content</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.MessageCharset"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.MessageCharset? MessageCharset
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.MessageCharset);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.MessageCharset)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.MessageCharset] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.MessageCharset] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Content type of the message</para>
		/// <para><strong>Description</strong>: Content type of the message</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.MessageFormat"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.MessageFormat? MessageFormat
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.MessageFormat);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.MessageFormat)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.MessageFormat] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.MessageFormat] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who last modified the service endpoint.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified On</para>
		/// <para><strong>Description</strong>: Date and time when the service endpoint was last modified.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By (Delegate)</para>
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who modified the service endpoint.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Name</para>
		/// <para><strong>Description</strong>: Name of Service end point.</para>
		/// <para><strong>Primary Name</strong>: <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 256</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Namespace Address</para>
		/// <para><strong>Description</strong>: Full service endpoint address.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 255</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string NamespaceAddress
		{
			get { return Entity.GetAttributeValue<string>(Fields.NamespaceAddress); }
			set { Entity.Attributes[Fields.NamespaceAddress] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Format of Service Bus Namespace</para>
		/// <para><strong>Description</strong>: Format of Service Bus Namespace</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.NamespaceFormat"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.NamespaceFormat? NamespaceFormat
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.NamespaceFormat);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.NamespaceFormat)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.NamespaceFormat] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.NamespaceFormat] = null;
			}
		}
		/// <summary>
		/// <para><strong>Description</strong>: Unique identifier of the organization with which the service endpoint is associated.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="organization"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Record Overwrite Time</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateOnly</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverwriteTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverwriteTime); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Path</para>
		/// <para><strong>Description</strong>: Path to the service endpoint.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 160</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Path
		{
			get { return Entity.GetAttributeValue<string>(Fields.Path); }
			set { Entity.Attributes[Fields.Path] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Runtime Integration Properties</para>
		/// <para><strong>Description</strong>: For internal use only. Holds miscellaneous properties related to runtime integration.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 512</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string RuntimeIntegrationProperties
		{
			get { return Entity.GetAttributeValue<string>(Fields.RuntimeIntegrationProperties); }
			set { Entity.Attributes[Fields.RuntimeIntegrationProperties] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Shared Access Key</para>
		/// <para><strong>Description</strong>: Shared Access Key</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 256</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SASKey
		{
			get { return Entity.GetAttributeValue<string>(Fields.SASKey); }
			set { Entity.Attributes[Fields.SASKey] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Shared Access Key Name</para>
		/// <para><strong>Description</strong>: Shared Access Key Name</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 256</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SASKeyName
		{
			get { return Entity.GetAttributeValue<string>(Fields.SASKeyName); }
			set { Entity.Attributes[Fields.SASKeyName] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Shared Access Token</para>
		/// <para><strong>Description</strong>: Shared Access Token</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 256</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SASToken
		{
			get { return Entity.GetAttributeValue<string>(Fields.SASToken); }
			set { Entity.Attributes[Fields.SASToken] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Specifies schema type for event grid events</para>
		/// <para><strong>Description</strong>: Specifies schema type for event grid events</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.SchemaType"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.SchemaType? SchemaType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.SchemaType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.SchemaType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.SchemaType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.SchemaType] = null;
			}
		}
		/// <summary>
		/// <para><strong>Description</strong>: Unique identifier of the service endpoint.</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid ServiceEndpointId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.ServiceEndpointId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Description</strong>: Unique identifier of the service endpoint.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? ServiceEndpointIdUnique
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.ServiceEndpointIdUnique); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Solution</para>
		/// <para><strong>Description</strong>: Unique identifier of the associated solution.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SolutionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SolutionId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Service Namespace</para>
		/// <para><strong>Description</strong>: Namespace of the App Fabric solution.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 160</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SolutionNamespace
		{
			get { return Entity.GetAttributeValue<string>(Fields.SolutionNamespace); }
			set { Entity.Attributes[Fields.SolutionNamespace] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Solution</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SupportingSolutionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SupportingSolutionId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Url Address</para>
		/// <para><strong>Description</strong>: Full service endpoint Url.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Url
		{
			get { return Entity.GetAttributeValue<string>(Fields.Url); }
			set { Entity.Attributes[Fields.Url] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Use Auth Information in KeyVault</para>
		/// <para><strong>Description</strong>: Use Auth Information in KeyVault</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? UseKeyVaultConfiguration
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.UseKeyVaultConfiguration); }
			set { Entity.Attributes[Fields.UseKeyVaultConfiguration] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: User Claim</para>
		/// <para><strong>Description</strong>: Additional user claim value type.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.UserClaim"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.UserClaim.None"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.UserClaim? UserClaim
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.UserClaim);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ServiceEndpointOptionSets.UserClaim)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.UserClaim] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.UserClaim] = null;
			}
		}
	}
}