﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:49:41
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.msevtmgt_HotelRoomReservationOptionSets
{
	public enum msevtmgt_Guesttype
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Attendee</para>
		/// <para><strong>Value</strong>: 100,000,000</para>
		/// </summary>
		Attendee = 100_000_000,
		/// <summary>
		/// <para><strong>Display Name</strong>: Event team member</para>
		/// <para><strong>Value</strong>: 100,000,002</para>
		/// </summary>
		Event_team_member = 100_000_002,
		/// <summary>
		/// <para><strong>Display Name</strong>: Speaker</para>
		/// <para><strong>Value</strong>: 100,000,001</para>
		/// </summary>
		Speaker = 100_000_001
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
	public partial class msevtmgt_HotelRoomReservation : EntityBase
	{
		public struct Fields
		{
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string msevtmgt_Attendee = "msevtmgt_attendee";
			public const string msevtmgt_EventTeamMemberId = "msevtmgt_eventteammemberid";
			public const string msevtmgt_Guesttype = "msevtmgt_guesttype";
			public const string msevtmgt_HotelRoomAllocation = "msevtmgt_hotelroomallocation";
			public const string msevtmgt_HotelRoomReservationId = "msevtmgt_hotelroomreservationid";
			public const string msevtmgt_Name = "msevtmgt_name";
			public const string msevtmgt_RewardsProgramNumber = "msevtmgt_rewardsprogramnumber";
			public const string msevtmgt_SpeakerId = "msevtmgt_speakerid";
			public const string msevtmgt_SpecialRequests = "msevtmgt_specialrequests";
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
		public const string EntityLogicalName = "msevtmgt_hotelroomreservation";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 11108;
		public const string EntityCollectionSchemaName = "msevtmgt_HotelRoomReservations";
		public const string EntityDisplayCollectionName = "Hotel Room Reservations";
		public const string DisplayName = "Hotel Room Reservation";
		public const string EntitySetName = "msevtmgt_hotelroomreservations";
		public const string EntityLogicalCollectionName = "msevtmgt_hotelroomreservations";
		public const string EntityPrimaryIdAttribute = "msevtmgt_hotelroomreservationid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "msevtmgt_name";
		public const string EntitySchemaName = "msevtmgt_HotelRoomReservation";
		[DebuggerNonUserCode()]
		public msevtmgt_HotelRoomReservation()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msevtmgt_HotelRoomReservation(Guid msevtmgt_HotelRoomReservationId)
		{
			Entity = new Entity(EntityLogicalName, msevtmgt_HotelRoomReservationId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msevtmgt_HotelRoomReservation(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msevtmgt_HotelRoomReservation"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public msevtmgt_HotelRoomReservation(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msevtmgt_HotelRoomReservation"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msevtmgt_HotelRoomReservation(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msevtmgt_HotelRoomReservation(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="msevtmgt_HotelRoomReservation"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msevtmgt_HotelRoomReservation(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msevtmgt_HotelRoomReservation(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public msevtmgt_HotelRoomReservation(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created by</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who created the record</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created on</para>
		/// <para><strong>Description</strong>: The date and time when the record was created</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Created by (delegate)</para>
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who created the record</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Import sequence number</para>
		/// <para><strong>Description</strong>: The sequence number of the import that created this record</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ImportSequenceNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ImportSequenceNumber); }
			set { Entity.Attributes[Fields.ImportSequenceNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified by</para>
		/// <para><strong>Description</strong>: Unique identifier of the user who modified the record</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified on</para>
		/// <para><strong>Description</strong>: The date and time when the record was modified</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Modified by (delegate)</para>
		/// <para><strong>Description</strong>: Unique identifier of the delegate user who modified the record</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Attendee</para>
		/// <para><strong>Description</strong>: Room reservation attendee</para>
		/// <para>Required - <strong>Lookup</strong>: <see cref="msevtmgt_eventregistration"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msevtmgt_Attendee
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msevtmgt_Attendee); }
			set { Entity.Attributes[Fields.msevtmgt_Attendee] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Event team member</para>
		/// <para><strong>Description</strong>: Unique identifier for event team member associated with hotel room reservation.</para>
		/// <para><strong>Lookup</strong>: <see cref="msevtmgt_eventteammember"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msevtmgt_EventTeamMemberId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msevtmgt_EventTeamMemberId); }
			set { Entity.Attributes[Fields.msevtmgt_EventTeamMemberId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Guest type</para>
		/// <para>Required - <strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.msevtmgt_HotelRoomReservationOptionSets.msevtmgt_Guesttype"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.msevtmgt_HotelRoomReservationOptionSets.msevtmgt_Guesttype.Attendee"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msevtmgt_HotelRoomReservationOptionSets.msevtmgt_Guesttype? msevtmgt_Guesttype
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msevtmgt_Guesttype);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msevtmgt_HotelRoomReservationOptionSets.msevtmgt_Guesttype)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msevtmgt_Guesttype] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msevtmgt_Guesttype] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Hotel room allocation</para>
		/// <para>Required - <strong>Lookup</strong>: <see cref="msevtmgt_hotelroomallocation"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msevtmgt_HotelRoomAllocation
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msevtmgt_HotelRoomAllocation); }
			set { Entity.Attributes[Fields.msevtmgt_HotelRoomAllocation] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Hotel room reservation</para>
		/// <para><strong>Description</strong>: Unique identifier for entity instances</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msevtmgt_HotelRoomReservationId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msevtmgt_HotelRoomReservationId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Reservation number</para>
		/// <para><strong>Description</strong>: The reservation number</para>
		/// <para><strong>Primary Name</strong>: <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msevtmgt_Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msevtmgt_Name); }
			set { Entity.Attributes[Fields.msevtmgt_Name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Rewards program number</para>
		/// <para><strong>Description</strong>: Room reservation rewards program number</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msevtmgt_RewardsProgramNumber
		{
			get { return Entity.GetAttributeValue<string>(Fields.msevtmgt_RewardsProgramNumber); }
			set { Entity.Attributes[Fields.msevtmgt_RewardsProgramNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Speaker</para>
		/// <para><strong>Description</strong>: Unique identifier for speaker associated with hotel room reservation.</para>
		/// <para><strong>Lookup</strong>: <see cref="msevtmgt_speaker"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msevtmgt_SpeakerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msevtmgt_SpeakerId); }
			set { Entity.Attributes[Fields.msevtmgt_SpeakerId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Special requests</para>
		/// <para><strong>Description</strong>: Room reservation special requests</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msevtmgt_SpecialRequests
		{
			get { return Entity.GetAttributeValue<string>(Fields.msevtmgt_SpecialRequests); }
			set { Entity.Attributes[Fields.msevtmgt_SpecialRequests] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Record created on</para>
		/// <para><strong>Description</strong>: The date and time when the record was migrated</para>
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
		/// <para><strong>Description</strong>: Owner ID</para>
		/// <para><strong>Lookup</strong>: <see cref="systemuser"/>, <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
			set { Entity.Attributes[Fields.OwnerId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning business unit</para>
		/// <para><strong>Description</strong>: Unique identifier for the business unit that owns the record</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="businessunit"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning team</para>
		/// <para><strong>Description</strong>: Unique identifier for the team that owns the record</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Owning user</para>
		/// <para><strong>Description</strong>: Unique identifier for the user that owns the record</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Status</para>
		/// <para><strong>Description</strong>: Status of the hotel room reservation</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.msevtmgt_HotelRoomReservationOptionSets.statecode"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msevtmgt_HotelRoomReservationOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msevtmgt_HotelRoomReservationOptionSets.statecode)value.Value;
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
		/// <para><strong>Display Name</strong>: Status reason</para>
		/// <para><strong>Description</strong>: Reason for the status of the hotel room reservation</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.msevtmgt_HotelRoomReservationOptionSets.statuscode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msevtmgt_HotelRoomReservationOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msevtmgt_HotelRoomReservationOptionSets.statuscode)value.Value;
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
		/// <para><strong>Display Name</strong>: Time zone rule version number</para>
		/// <para><strong>Description</strong>: For internal use only</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -1 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? TimeZoneRuleVersionNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.TimeZoneRuleVersionNumber); }
			set { Entity.Attributes[Fields.TimeZoneRuleVersionNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: UTC conversion time zone code</para>
		/// <para><strong>Description</strong>: The time zone code that was in use when the record was created</para>
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