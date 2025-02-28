﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-07-30 10:00:06
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.CalendarOptionSets
{
	public enum Type
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Dịch vụ khách hàng</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Dich_vu_khach_hang = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Lịch nghỉ lễ</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Lich_nghi_le = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Mặc định</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Mac_dinh = 0
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class Calendar : EntityBase
	{
		public struct Fields
		{
			public const string BusinessUnitId = "businessunitid";
			public const string CalendarId = "calendarid";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Description = "description";
			public const string HolidayScheduleCalendarId = "holidayschedulecalendarid";
			public const string IsShared = "isshared";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string Name = "name";
			public const string OrganizationId = "organizationid";
			public const string PrimaryUserId = "primaryuserid";
			public const string Type = "type";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "calendar";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 4003;
		public const string EntityCollectionSchemaName = "Calendars";
		public const string EntityDisplayCollectionName = "Lịch";
		public const string DisplayName = "Lịch";
		public const string EntitySetName = "calendars";
		public const string EntityLogicalCollectionName = "calendars";
		public const string EntityPrimaryIdAttribute = "calendarid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "name";
		public const string EntitySchemaName = "Calendar";
		[DebuggerNonUserCode()]
		public Calendar()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public Calendar(Guid CalendarId)
		{
			Entity = new Entity(EntityLogicalName, CalendarId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public Calendar(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="Calendar"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public Calendar(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="Calendar"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public Calendar(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new Calendar(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="Calendar"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public Calendar(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new Calendar(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public Calendar(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Đơn vị Kinh doanh</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của đơn vị kinh doanh có lịch được liên kết.</para>
		/// <para><strong>Lookup</strong>: <see cref="businessunit"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference BusinessUnitId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.BusinessUnitId); }
			set { Entity.Attributes[Fields.BusinessUnitId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Lịch</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của lịch.</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid CalendarId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.CalendarId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người tạo</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đã tạo lịch.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày tạo</para>
		/// <para><strong>Description</strong>: Ngày và giờ tạo lịch.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người tạo (Đại diện)</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đại diện đã tạo lịch.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Mô tả</para>
		/// <para><strong>Description</strong>: Lịch được hệ thống lên lịch dùng để xác định thời điểm cuộc hẹn hoặc hoạt động diễn ra.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.Description); }
			set { Entity.Attributes[Fields.Description] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: CalendarId Kế hoạch Nghỉ lễ</para>
		/// <para><strong>Description</strong>: CalendarId Kế hoạch Nghỉ lễ</para>
		/// <para><strong>Lookup</strong>: <see cref="calendar"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference HolidayScheduleCalendarId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.HolidayScheduleCalendarId); }
			set { Entity.Attributes[Fields.HolidayScheduleCalendarId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Được Chia sẻ</para>
		/// <para><strong>Description</strong>: Lịch được các lịch khác chia sẻ, chẳng hạn như lịch tổ chức.</para>
		/// <para><strong>Two Option</strong> - [<strong>Có</strong>]: true - [<strong>Không</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Không</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsShared
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsShared); }
			set { Entity.Attributes[Fields.IsShared] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người Sửa đổi</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng sửa đổi lịch lần cuối.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Sửa đổi Vào</para>
		/// <para><strong>Description</strong>: Ngày và giờ sửa đổi lịch lần cuối.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người Sửa đổi (Đại diện)</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đại diện đã sửa đổi lịch lần cuối.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tên</para>
		/// <para><strong>Description</strong>: Tên của lịch.</para>
		/// <para><strong>Primary Name</strong>: <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 160</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tổ chức</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của tổ chức có lịch được liên kết.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="organization"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người dùng Chính</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng chính của lịch này.</para>
		/// <para>Required - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? PrimaryUserId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.PrimaryUserId); }
			set { Entity.Attributes[Fields.PrimaryUserId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Loại Lịch</para>
		/// <para><strong>Description</strong>: Loại lịch, chẳng hạn như lịch giờ làm việc của Người dùng hoặc lịch giờ dịch vụ Khách hàng.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.CalendarOptionSets.Type"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.CalendarOptionSets.Type.Mac_dinh"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.CalendarOptionSets.Type? Type
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.Type);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.CalendarOptionSets.Type)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Type] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.Type] = null;
			}
		}
		/// <summary>
		/// <para><strong>ReadOnly</strong> - <strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}