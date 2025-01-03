﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:44:32
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.adx_invitationOptionSets
{
	public enum adx_type
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Group</para>
		/// <para><strong>Value</strong>: 756,150,001</para>
		/// </summary>
		Group = 756_150_001,
		/// <summary>
		/// <para><strong>Display Name</strong>: Single</para>
		/// <para><strong>Value</strong>: 756,150,000</para>
		/// </summary>
		Single = 756_150_000
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
		/// <para><strong>Display Name</strong>: Inactive</para>
		/// <para><strong>Value</strong>: 2</para>
		/// <para><strong>StateCode.Inactive</strong></para>
		/// </summary>
		Inactive = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: New</para>
		/// <para><strong>Value</strong>: 1</para>
		/// <para><strong>StateCode.Active</strong></para>
		/// </summary>
		New = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Redeemed</para>
		/// <para><strong>Value</strong>: 756,150,001</para>
		/// <para><strong>StateCode.Active</strong></para>
		/// </summary>
		Redeemed = 756_150_001,
		/// <summary>
		/// <para><strong>Display Name</strong>: Sent</para>
		/// <para><strong>Value</strong>: 756,150,000</para>
		/// <para><strong>StateCode.Active</strong></para>
		/// </summary>
		Sent = 756_150_000
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class adx_invitation : EntityBase
	{
		public struct Fields
		{
			public const string adx_assignToAccount = "adx_assigntoaccount";
			public const string adx_expiryDate = "adx_expirydate";
			public const string adx_invitationCode = "adx_invitationcode";
			public const string adx_invitationId = "adx_invitationid";
			public const string adx_inviteContact = "adx_invitecontact";
			public const string adx_invitercontact = "adx_invitercontact";
			public const string adx_maximumRedemptions = "adx_maximumredemptions";
			public const string adx_name = "adx_name";
			public const string adx_redeemedContact = "adx_redeemedcontact";
			public const string adx_redemptions = "adx_redemptions";
			public const string adx_redemptionWorkflow = "adx_redemptionworkflow";
			public const string adx_type = "adx_type";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string mspp_websiteid = "mspp_websiteid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "adx_invitation";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10309;
		public const string EntityCollectionSchemaName = "adx_invitations";
		public const string EntityDisplayCollectionName = "Invitations";
		public const string DisplayName = "Invitation";
		public const string EntitySetName = "adx_invitations";
		public const string EntityLogicalCollectionName = "adx_invitations";
		public const string EntityPrimaryIdAttribute = "adx_invitationid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "adx_name";
		public const string EntitySchemaName = "adx_invitation";
		[DebuggerNonUserCode()]
		public adx_invitation()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public adx_invitation(Guid adx_invitationId)
		{
			Entity = new Entity(EntityLogicalName, adx_invitationId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public adx_invitation(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="adx_invitation"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public adx_invitation(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="adx_invitation"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public adx_invitation(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new adx_invitation(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="adx_invitation"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public adx_invitation(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new adx_invitation(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public adx_invitation(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Assign To Account</para>
		/// <para><strong>Description</strong>: An account record to assign the redeemed contact to.</para>
		/// <para><strong>Lookup</strong>: <see cref="account"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference adx_assignToAccount
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.adx_assignToAccount); }
			set { Entity.Attributes[Fields.adx_assignToAccount] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Expiry Date</para>
		/// <para><strong>Description</strong>: The date the invitation is no longer valid for redemption.</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateOnly</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? adx_expiryDateUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.adx_expiryDate); }
			set { Entity.Attributes[Fields.adx_expiryDate] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Invitation Code</para>
		/// <para><strong>Description</strong>: Shows the user who is redeeming the invitation.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string adx_invitationCode
		{
			get { return Entity.GetAttributeValue<string>(Fields.adx_invitationCode); }
			set { Entity.Attributes[Fields.adx_invitationCode] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Invitation</para>
		/// <para><strong>Description</strong>: Shows the entity instance.</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid adx_invitationId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.adx_invitationId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Invite Contact</para>
		/// <para><strong>Description</strong>: The contact to send an invitation to.</para>
		/// <para><strong>Lookup</strong>: <see cref="contact"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference adx_inviteContact
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.adx_inviteContact); }
			set { Entity.Attributes[Fields.adx_inviteContact] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Inviter</para>
		/// <para><strong>Description</strong>: The contact that invited.</para>
		/// <para><strong>Lookup</strong>: <see cref="contact"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference adx_invitercontact
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.adx_invitercontact); }
			set { Entity.Attributes[Fields.adx_invitercontact] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Maximum Redemptions</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: 1 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? adx_maximumRedemptions
		{
			get { return Entity.GetAttributeValue<int?>(Fields.adx_maximumRedemptions); }
			set { Entity.Attributes[Fields.adx_maximumRedemptions] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Name</para>
		/// <para><strong>Description</strong>: Type the name of the custom entity.</para>
		/// <para><strong>Primary Name</strong>: Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string adx_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.adx_name); }
			set { Entity.Attributes[Fields.adx_name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Redeemed Contact</para>
		/// <para><strong>Description</strong>: The contact associated with the redemption of this invitation.</para>
		/// <para><strong>Lookup</strong>: <see cref="contact"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference adx_redeemedContact
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.adx_redeemedContact); }
			set { Entity.Attributes[Fields.adx_redeemedContact] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Redemptions</para>
		/// <para><strong>Description</strong>: The current number of times this invitation has been redeemed.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? adx_redemptions
		{
			get { return Entity.GetAttributeValue<int?>(Fields.adx_redemptions); }
			set { Entity.Attributes[Fields.adx_redemptions] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Redemption Workflow</para>
		/// <para><strong>Description</strong>: A workflow to execute on the redeeming contact.</para>
		/// <para><strong>Lookup</strong>: <see cref="workflow"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference adx_redemptionWorkflow
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.adx_redemptionWorkflow); }
			set { Entity.Attributes[Fields.adx_redemptionWorkflow] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Type</para>
		/// <para><strong>Description</strong>: The type of invitation.</para>
		/// <para>Required - <strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.adx_invitationOptionSets.adx_type"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.adx_invitationOptionSets.adx_type? adx_type
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.adx_type);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.adx_invitationOptionSets.adx_type)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.adx_type] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.adx_type] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By</para>
		/// <para><strong>Description</strong>: Shows who created the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created On</para>
		/// <para><strong>Description</strong>: Shows the date and time when the record was created.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created By (Delegate)</para>
		/// <para><strong>Description</strong>: Shows who created the record on behalf of another user.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Import Sequence Number</para>
		/// <para><strong>Description</strong>: Shows the sequence number of the import that created this record.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ImportSequenceNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ImportSequenceNumber); }
			set { Entity.Attributes[Fields.ImportSequenceNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By</para>
		/// <para><strong>Description</strong>: Shows who last updated the record.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified On</para>
		/// <para><strong>Description</strong>: Shows the date and time when the record was modified.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified By (Delegate)</para>
		/// <para><strong>Description</strong>: Shows who last updated the record on behalf of another user.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Website</para>
		/// <para><strong>Lookup</strong>: <see cref="powerpagesite"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference mspp_websiteid
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.mspp_websiteid); }
			set { Entity.Attributes[Fields.mspp_websiteid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Record Created On</para>
		/// <para><strong>Description</strong>: Shows the date and time that the record was migrated.</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateOnly</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverriddenCreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverriddenCreatedOn); }
			set { Entity.Attributes[Fields.OverriddenCreatedOn] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owner</para>
		/// <para><strong>Description</strong>: Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user.</para>
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
		/// <para><strong>Description</strong>: Shows the business unit that owns the record.</para>
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
		/// <para><strong>Display Name</strong>: Status</para>
		/// <para><strong>Description</strong>: Status of the Invitation</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.adx_invitationOptionSets.statecode"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.adx_invitationOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.adx_invitationOptionSets.statecode)value.Value;
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
		/// <para><strong>Description</strong>: Select the invitation&apos;s status.</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.adx_invitationOptionSets.statuscode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.adx_invitationOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.adx_invitationOptionSets.statuscode)value.Value;
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
		/// <para><strong>Description</strong>: Shows the time zone code that was in use when the record was created.</para>
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