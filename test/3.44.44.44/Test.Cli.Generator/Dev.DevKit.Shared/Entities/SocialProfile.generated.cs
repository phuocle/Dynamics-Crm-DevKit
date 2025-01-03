﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:52:39
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.SocialProfileOptionSets
{
	public enum Community
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Apple Messages For Business</para>
		/// <para><strong>Value</strong>: 16</para>
		/// </summary>
		Apple_Messages_For_Business = 16,
		/// <summary>
		/// <para><strong>Display Name</strong>: Cortana</para>
		/// <para><strong>Value</strong>: 5</para>
		/// </summary>
		Cortana = 5,
		/// <summary>
		/// <para><strong>Display Name</strong>: Direct Line</para>
		/// <para><strong>Value</strong>: 6</para>
		/// </summary>
		Direct_Line = 6,
		/// <summary>
		/// <para><strong>Display Name</strong>: Direct Line Speech</para>
		/// <para><strong>Value</strong>: 8</para>
		/// </summary>
		Direct_Line_Speech = 8,
		/// <summary>
		/// <para><strong>Display Name</strong>: Email</para>
		/// <para><strong>Value</strong>: 9</para>
		/// </summary>
		Email = 9,
		/// <summary>
		/// <para><strong>Display Name</strong>: Facebook</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Facebook = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Google's Business Messages</para>
		/// <para><strong>Value</strong>: 17</para>
		/// </summary>
		Googles_Business_Messages = 17,
		/// <summary>
		/// <para><strong>Display Name</strong>: GroupMe</para>
		/// <para><strong>Value</strong>: 10</para>
		/// </summary>
		GroupMe = 10,
		/// <summary>
		/// <para><strong>Display Name</strong>: Kik</para>
		/// <para><strong>Value</strong>: 11</para>
		/// </summary>
		Kik = 11,
		/// <summary>
		/// <para><strong>Display Name</strong>: Line</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Line = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Microsoft Teams</para>
		/// <para><strong>Value</strong>: 7</para>
		/// </summary>
		Microsoft_Teams = 7,
		/// <summary>
		/// <para><strong>Display Name</strong>: Other</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Other = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Skype</para>
		/// <para><strong>Value</strong>: 13</para>
		/// </summary>
		Skype = 13,
		/// <summary>
		/// <para><strong>Display Name</strong>: Slack</para>
		/// <para><strong>Value</strong>: 14</para>
		/// </summary>
		Slack = 14,
		/// <summary>
		/// <para><strong>Display Name</strong>: Telegram</para>
		/// <para><strong>Value</strong>: 12</para>
		/// </summary>
		Telegram = 12,
		/// <summary>
		/// <para><strong>Display Name</strong>: Twitter</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Twitter = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Wechat</para>
		/// <para><strong>Value</strong>: 4</para>
		/// </summary>
		Wechat = 4,
		/// <summary>
		/// <para><strong>Display Name</strong>: WhatsApp</para>
		/// <para><strong>Value</strong>: 15</para>
		/// </summary>
		WhatsApp = 15
	}
	public enum StateCode
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
	public enum StatusCode
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
	public partial class SocialProfile : EntityBase
	{
		public struct Fields
		{
			public const string Blocked = "blocked";
			public const string Community = "community";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string CustomerId = "customerid";
			public const string ExchangeRate = "exchangerate";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string InfluenceScore = "influencescore";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string msdyn_customeroptout = "msdyn_customeroptout";
			public const string msdyn_ocfollowercount = "msdyn_ocfollowercount";
			public const string msdyn_ocfollowingcount = "msdyn_ocfollowingcount";
			public const string msdyn_ocfriendcount = "msdyn_ocfriendcount";
			public const string msdyn_octwitterhandleid = "msdyn_octwitterhandleid";
			public const string msdyn_phonenumber = "msdyn_phonenumber";
			public const string msdyn_profileimagelink = "msdyn_profileimagelink";
			public const string msdyn_sourceid = "msdyn_sourceid";
			public const string msdyn_wechatopenid = "msdyn_wechatopenid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string ProfileFullName = "profilefullname";
			public const string ProfileLink = "profilelink";
			public const string ProfileName = "profilename";
			public const string SocialProfileId = "socialprofileid";
			public const string StateCode = "statecode";
			public const string StatusCode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string TransactionCurrencyId = "transactioncurrencyid";
			public const string UniqueProfileID = "uniqueprofileid";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "socialprofile";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 99;
		public const string EntityCollectionSchemaName = "SocialProfiles";
		public const string EntityDisplayCollectionName = "Social Profiles";
		public const string DisplayName = "Social Profile";
		public const string EntitySetName = "socialprofiles";
		public const string EntityLogicalCollectionName = "socialprofiles";
		public const string EntityPrimaryIdAttribute = "socialprofileid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "profilename";
		public const string EntitySchemaName = "SocialProfile";
		[DebuggerNonUserCode()]
		public SocialProfile()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public SocialProfile(Guid SocialProfileId)
		{
			Entity = new Entity(EntityLogicalName, SocialProfileId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public SocialProfile(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="SocialProfile"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public SocialProfile(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="SocialProfile"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public SocialProfile(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new SocialProfile(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="SocialProfile"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public SocialProfile(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new SocialProfile(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public SocialProfile(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Blocked</para>
		/// <para><strong>Description</strong>: Identifies if the social profile has been blocked.</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? Blocked
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.Blocked); }
			set { Entity.Attributes[Fields.Blocked] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Social Channel</para>
		/// <para><strong>Description</strong>: Identifies where the social profile originated from, such as Twitter, or Facebook.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.SocialProfileOptionSets.Community"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.SocialProfileOptionSets.Community.Other"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SocialProfileOptionSets.Community? Community
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.Community);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SocialProfileOptionSets.Community)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Community] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.Community] = null;
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
		/// <para><strong>Display Name</strong>: Customer</para>
		/// <para><strong>Description</strong>: Shows the customer that this social profile belongs to.</para>
		/// <para><strong>Lookup</strong>: <see cref="account"/>, <see cref="contact"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CustomerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CustomerId); }
			set { Entity.Attributes[Fields.CustomerId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Exchange Rate</para>
		/// <para><strong>Description</strong>: Shows the conversion rate of the record&apos;s currency. The exchange rate is used to convert all money fields in the record from the local currency to the system&apos;s default currency.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Floating Point Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? ExchangeRate
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.ExchangeRate); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Import Sequence Number</para>
		/// <para><strong>Description</strong>: Unique identifier of the data import or data migration that created this record.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ImportSequenceNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ImportSequenceNumber); }
			set { Entity.Attributes[Fields.ImportSequenceNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Influence Score</para>
		/// <para><strong>Description</strong>: Shows the score that determines the online social influence of the social profile.</para>
		/// <para><strong>Decimal Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 1,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public double? InfluenceScore
		{
			get { return Entity.GetAttributeValue<double?>(Fields.InfluenceScore); }
			set { Entity.Attributes[Fields.InfluenceScore] = value; }
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
		/// <para><strong>Display Name</strong>: customeroptout</para>
		/// <para><strong>Description</strong>: Flag specifying whether Customer has opted out of getting messages using this SP.</para>
		/// <para><strong>Two Option</strong> - [<strong>Yes</strong>]: true - [<strong>No</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>No</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_customeroptout
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_customeroptout); }
			set { Entity.Attributes[Fields.msdyn_customeroptout] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Follower Count</para>
		/// <para><strong>Description</strong>: Customer&apos;s Followers on the Social channel.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_ocfollowercount
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_ocfollowercount); }
			set { Entity.Attributes[Fields.msdyn_ocfollowercount] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Followings Count</para>
		/// <para><strong>Description</strong>: Customer&apos;s followings on the Social channel</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_ocfollowingcount
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_ocfollowingcount); }
			set { Entity.Attributes[Fields.msdyn_ocfollowingcount] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Friend Count</para>
		/// <para><strong>Description</strong>: Customer&apos;s Friend count on the Social Channel</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_ocfriendcount
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_ocfriendcount); }
			set { Entity.Attributes[Fields.msdyn_ocfriendcount] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Twitter Handle Id</para>
		/// <para><strong>Description</strong>: Lookup for Twitter Handle entity.</para>
		/// <para><strong>Lookup</strong>: <see cref="msdyn_octwitterhandle"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_octwitterhandleid
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_octwitterhandleid); }
			set { Entity.Attributes[Fields.msdyn_octwitterhandleid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Phone number</para>
		/// <para><strong>Description</strong>: The phone number of the social profile.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_phonenumber
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_phonenumber); }
			set { Entity.Attributes[Fields.msdyn_phonenumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Profile Image Link</para>
		/// <para><strong>Description</strong>: Link to the Customer&apos;s Social Channel Profile image.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_profileimagelink
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_profileimagelink); }
			set { Entity.Attributes[Fields.msdyn_profileimagelink] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Source Id</para>
		/// <para><strong>Description</strong>: Source Id field of social profile entity for Apple Business Messages channel.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_sourceid
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_sourceid); }
			set { Entity.Attributes[Fields.msdyn_sourceid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: WeChat Open ID</para>
		/// <para><strong>Description</strong>: Open ID field of social profile entity for WeChat channel.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_wechatopenid
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_wechatopenid); }
			set { Entity.Attributes[Fields.msdyn_wechatopenid] = value; }
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
		/// <para><strong>Display Name</strong>: Owner</para>
		/// <para><strong>Description</strong>: Shows the user or team that is assigned to manage the record. This field is updated every time the record is assigned to a different user.</para>
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
		/// <para><strong>Description</strong>: Unique identifier of the team who owns the contact.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning User</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who owns the contact.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Full Name</para>
		/// <para><strong>Description</strong>: Shows the display name of the customer on this social profile.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 160</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ProfileFullName
		{
			get { return Entity.GetAttributeValue<string>(Fields.ProfileFullName); }
			set { Entity.Attributes[Fields.ProfileFullName] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Profile Link</para>
		/// <para><strong>Description</strong>: Shows the customer that this social profile belongs to.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ProfileLink
		{
			get { return Entity.GetAttributeValue<string>(Fields.ProfileLink); }
			set { Entity.Attributes[Fields.ProfileLink] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Profile Name</para>
		/// <para><strong>Description</strong>: Shows the name of the social profile on the corresponding social channel.</para>
		/// <para><strong>Primary Name</strong>: <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ProfileName
		{
			get { return Entity.GetAttributeValue<string>(Fields.ProfileName); }
			set { Entity.Attributes[Fields.ProfileName] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Social Profile ID</para>
		/// <para><strong>Description</strong>: Unique Identifier of the social profile name.</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid SocialProfileId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.SocialProfileId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Status</para>
		/// <para><strong>Description</strong>: Status of the Social Profile</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.SocialProfileOptionSets.StateCode"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.SocialProfileOptionSets.StateCode.Active"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SocialProfileOptionSets.StateCode? StateCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StateCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SocialProfileOptionSets.StateCode)value.Value;
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
		/// <para><strong>Display Name</strong>: Status Reason</para>
		/// <para><strong>Description</strong>: Reason for the status of the Social Profile</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.SocialProfileOptionSets.StatusCode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SocialProfileOptionSets.StatusCode? StatusCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StatusCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SocialProfileOptionSets.StatusCode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.StatusCode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.StatusCode] = null;
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
		/// <para><strong>Display Name</strong>: Currency</para>
		/// <para><strong>Description</strong>: Choose the local currency for the record to make sure budgets are reported in the correct currency.</para>
		/// <para><strong>Lookup</strong>: <see cref="transactioncurrency"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference TransactionCurrencyId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.TransactionCurrencyId); }
			set { Entity.Attributes[Fields.TransactionCurrencyId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Unique Profile ID</para>
		/// <para><strong>Description</strong>: Unique ID of the Profile ID</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string UniqueProfileID
		{
			get { return Entity.GetAttributeValue<string>(Fields.UniqueProfileID); }
			set { Entity.Attributes[Fields.UniqueProfileID] = value; }
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
		/// <para><strong>Description</strong>: Version number of the social profile.</para>
		/// <para><strong>ReadOnly</strong> - <strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}