﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:48:38
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.msdyn_occommunicationprovidersettingOptionSets
{
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
	public enum msdyn_appmodule
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Service</para>
		/// <para><strong>Value</strong>: 192,350,000</para>
		/// </summary>
		Service = 192_350_000
	}
	public enum msdyn_OcCommunicationProvider
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Azure Communication Services</para>
		/// <para><strong>Value</strong>: 192,350,000</para>
		/// </summary>
		Azure_Communication_Services = 192_350_000,
		/// <summary>
		/// <para><strong>Display Name</strong>: Microsoft Teams Phone System</para>
		/// <para><strong>Value</strong>: 192,350,003</para>
		/// </summary>
		Microsoft_Teams_Phone_System = 192_350_003,
		/// <summary>
		/// <para><strong>Display Name</strong>: TeleSign</para>
		/// <para><strong>Value</strong>: 192,350,002</para>
		/// </summary>
		TeleSign = 192_350_002,
		/// <summary>
		/// <para><strong>Display Name</strong>: Twilio</para>
		/// <para><strong>Value</strong>: 192,350,001</para>
		/// </summary>
		Twilio = 192_350_001
	}
	public enum statecode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Active</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Active = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Inactive</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Inactive = 1
	}
	public enum statuscode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Active</para>
		/// <para><strong>Value</strong>: 1</para>
		/// <para><strong>StateCode.Active</strong></para>
		/// </summary>
		Active = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Inactive</para>
		/// <para><strong>Value</strong>: 2</para>
		/// <para><strong>StateCode.Inactive</strong></para>
		/// </summary>
		Inactive = 2
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class msdyn_occommunicationprovidersetting : EntityBase
	{
		public struct Fields
		{
			public const string ComponentIdUnique = "componentidunique";
			public const string ComponentState = "componentstate";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string IsManaged = "ismanaged";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string msdyn_AccountSID = "msdyn_accountsid";
			public const string msdyn_appmodule = "msdyn_appmodule";
			public const string msdyn_isTrial = "msdyn_istrial";
			public const string msdyn_name = "msdyn_name";
			public const string msdyn_OcCommunicationProvider = "msdyn_occommunicationprovider";
			public const string msdyn_occommunicationproviderdatalocation = "msdyn_occommunicationproviderdatalocation";
			public const string msdyn_occommunicationproviderimmutableid = "msdyn_occommunicationproviderimmutableid";
			public const string msdyn_occommunicationprovidersettingId = "msdyn_occommunicationprovidersettingid";
			public const string msdyn_Secret = "msdyn_secret";
			public const string msdyn_securesecret = "msdyn_securesecret";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string OverwriteTime = "overwritetime";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string SolutionId = "solutionid";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string SupportingSolutionId = "supportingsolutionid";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "msdyn_occommunicationprovidersetting";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 11037;
		public const string EntityCollectionSchemaName = "msdyn_occommunicationprovidersettings";
		public const string EntityDisplayCollectionName = "Communication Provider Settings";
		public const string DisplayName = "Communication Provider Setting";
		public const string EntitySetName = "msdyn_occommunicationprovidersettings";
		public const string EntityLogicalCollectionName = "msdyn_occommunicationprovidersettings";
		public const string EntityPrimaryIdAttribute = "msdyn_occommunicationprovidersettingid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "msdyn_name";
		public const string EntitySchemaName = "msdyn_occommunicationprovidersetting";
		[DebuggerNonUserCode()]
		public msdyn_occommunicationprovidersetting()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_occommunicationprovidersetting(Guid msdyn_occommunicationprovidersettingId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_occommunicationprovidersettingId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_occommunicationprovidersetting(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_occommunicationprovidersetting"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public msdyn_occommunicationprovidersetting(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_occommunicationprovidersetting"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyn_occommunicationprovidersetting(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyn_occommunicationprovidersetting(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="msdyn_occommunicationprovidersetting"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyn_occommunicationprovidersetting(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyn_occommunicationprovidersetting(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public msdyn_occommunicationprovidersetting(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Row id unique</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? ComponentIdUnique
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.ComponentIdUnique); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Component State</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>ReadOnly</strong> - <strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_occommunicationprovidersettingOptionSets.ComponentState"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_occommunicationprovidersettingOptionSets.ComponentState? ComponentState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ComponentState);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_occommunicationprovidersettingOptionSets.ComponentState)value.Value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who created the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created On</para>
		/// <para><strong>Description</strong>: Date and time when the record was created.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By (Delegate)</para>
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who created the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Import Sequence Number</para>
		/// <para><strong>Description</strong>: Sequence number of the import that created this record.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ImportSequenceNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ImportSequenceNumber); }
			set { Entity.Attributes[Fields.ImportSequenceNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Is Managed</para>
		/// <para><strong>Description</strong>: Indicates whether the solution component is part of a managed solution.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Two Option</strong> - [<strong>Managed</strong>]: true - [<strong>Unmanaged</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Unmanaged</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsManaged
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsManaged); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who modified the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified On</para>
		/// <para><strong>Description</strong>: Date and time when the record was modified.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By (Delegate)</para>
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who modified the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Account SID</para>
		/// <para><strong>Description</strong>: Account SID</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 800</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_AccountSID
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_AccountSID); }
			set { Entity.Attributes[Fields.msdyn_AccountSID] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Application module</para>
		/// <para><strong>Description</strong>: Application module picklist</para>
		/// <para><strong>MultiSelect OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_occommunicationprovidersettingOptionSets.msdyn_appmodule"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_occommunicationprovidersettingOptionSets.msdyn_appmodule.Service"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public System.Collections.Generic.List<Dev.DevKit.Shared.Entities.msdyn_occommunicationprovidersettingOptionSets.msdyn_appmodule> msdyn_appmodule
		{
			get
			{
				var data = new System.Collections.Generic.List<Dev.DevKit.Shared.Entities.msdyn_occommunicationprovidersettingOptionSets.msdyn_appmodule>();
				var items = Entity.GetAttributeValue<OptionSetValueCollection>(Fields.msdyn_appmodule);
				if (items != null)
				{
					foreach (OptionSetValue item in items)
					{
						data.Add((Dev.DevKit.Shared.Entities.msdyn_occommunicationprovidersettingOptionSets.msdyn_appmodule)item.Value);
					}
				}
				return data;
			}
			set
			{
				var data = new OptionSetValueCollection();
				foreach (var item in value)
				{
					data.Add(new OptionSetValue((int)item));
				}
				if (data.Count == 0)
				{
					Entity.Attributes[Fields.msdyn_appmodule] = null;
				}
				else
				{
					Entity.Attributes[Fields.msdyn_appmodule] = data;
				}
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: isTrial</para>
		/// <para><strong>Description</strong>: Flag specifying whether account is trial or not.</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_isTrial
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_isTrial); }
			set { Entity.Attributes[Fields.msdyn_isTrial] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Name</para>
		/// <para><strong>Description</strong>: The name of the custom entity.</para>
		/// <para><strong>Primary Name</strong>: Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_name); }
			set { Entity.Attributes[Fields.msdyn_name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Communication Provider</para>
		/// <para><strong>Description</strong>: Communication provider picklist</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_occommunicationprovidersettingOptionSets.msdyn_OcCommunicationProvider"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_occommunicationprovidersettingOptionSets.msdyn_OcCommunicationProvider? msdyn_OcCommunicationProvider
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_OcCommunicationProvider);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_occommunicationprovidersettingOptionSets.msdyn_OcCommunicationProvider)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_OcCommunicationProvider] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_OcCommunicationProvider] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Data Location</para>
		/// <para><strong>Description</strong>: The data residency location of the resource.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 800</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_occommunicationproviderdatalocation
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_occommunicationproviderdatalocation); }
			set { Entity.Attributes[Fields.msdyn_occommunicationproviderdatalocation] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Immutable Id</para>
		/// <para><strong>Description</strong>: The immutable id of the resource.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 800</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_occommunicationproviderimmutableid
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_occommunicationproviderimmutableid); }
			set { Entity.Attributes[Fields.msdyn_occommunicationproviderimmutableid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Communication Provider Setting</para>
		/// <para><strong>Description</strong>: Unique identifier for entity instances</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_occommunicationprovidersettingId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_occommunicationprovidersettingId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Secret</para>
		/// <para><strong>Description</strong>: Authtoken or connectionstring</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_Secret
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_Secret); }
			set { Entity.Attributes[Fields.msdyn_Secret] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Secure Secret value</para>
		/// <para><strong>Description</strong>: Secure Authtoken or connectionstring value</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_securesecret
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_securesecret); }
			set { Entity.Attributes[Fields.msdyn_securesecret] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Record Created On</para>
		/// <para><strong>Description</strong>: Date and time that the record was migrated.</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateOnly</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverriddenCreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverriddenCreatedOn); }
			set { Entity.Attributes[Fields.OverriddenCreatedOn] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Record Overwrite Time</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverwriteTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverwriteTime); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owner</para>
		/// <para><strong>Description</strong>: Owner Id</para>
		/// <para><strong>Lookup</strong>: <see cref="systemuser"/>, <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
			set { Entity.Attributes[Fields.OwnerId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning Business Unit</para>
		/// <para><strong>Description</strong>: Unique identifier for the business unit that owns the record</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="businessunit"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning Team</para>
		/// <para><strong>Description</strong>: Unique identifier for the team that owns the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning User</para>
		/// <para><strong>Description</strong>: Unique identifier for the user that owns the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
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
		/// <para><strong>Display Name</strong>: Status</para>
		/// <para><strong>Description</strong>: Status of the Communication Provider Setting</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_occommunicationprovidersettingOptionSets.statecode"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_occommunicationprovidersettingOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_occommunicationprovidersettingOptionSets.statecode)value.Value;
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
		/// <para><strong>Display Name</strong>: Status Reason</para>
		/// <para><strong>Description</strong>: Reason for the status of the Communication Provider Setting</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_occommunicationprovidersettingOptionSets.statuscode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_occommunicationprovidersettingOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_occommunicationprovidersettingOptionSets.statuscode)value.Value;
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
		/// <para><strong>Display Name</strong>: Time Zone Rule Version Number</para>
		/// <para><strong>Description</strong>: For internal use only.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -1 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? TimeZoneRuleVersionNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.TimeZoneRuleVersionNumber); }
			set { Entity.Attributes[Fields.TimeZoneRuleVersionNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: UTC Conversion Time Zone Code</para>
		/// <para><strong>Description</strong>: Time zone code that was in use when the record was created.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -1 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? UTCConversionTimeZoneCode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.UTCConversionTimeZoneCode); }
			set { Entity.Attributes[Fields.UTCConversionTimeZoneCode] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Version Number</para>
		/// <para><strong>Description</strong>: Version Number</para>
		/// <para><strong>ReadOnly</strong> - <strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}