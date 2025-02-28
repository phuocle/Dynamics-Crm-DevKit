﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-07-30 10:00:43
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.msdyn_customcontrolextendedsettingsOptionSets
{
	public enum statecode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Hiện hoạt</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Hien_hoat = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Không hoạt động</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Khong_hoat_dong = 1
	}
	public enum statuscode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Hiện hoạt</para>
		/// <para><strong>Value</strong>: 1</para>
		/// <para><strong>StateCode.Hien_hoat</strong></para>
		/// </summary>
		Hien_hoat = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Không hoạt động</para>
		/// <para><strong>Value</strong>: 2</para>
		/// <para><strong>StateCode.Khong_hoat_dong</strong></para>
		/// </summary>
		Khong_hoat_dong = 2
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class msdyn_customcontrolextendedsettings : EntityBase
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
			public const string msdyn_copilothub_settings = "msdyn_copilothub_settings";
			public const string msdyn_customcontrolextendedsettingsId = "msdyn_customcontrolextendedsettingsid";
			public const string msdyn_name = "msdyn_name";
			public const string msdyn_rte_userpersonalizationsettings = "msdyn_rte_userpersonalizationsettings";
			public const string msdyn_timeline_displaylayoutoption = "msdyn_timeline_displaylayoutoption";
			public const string msdyn_timelineWall_bookmarks = "msdyn_timelineWall_bookmarks";
			public const string msdyn_timelineWall_isAutoExpanded = "msdyn_timelineWall_isAutoExpanded";
			public const string msdyn_timelineWall_isFilterPaneOpen = "msdyn_timelineWall_isFilterPaneOpen";
			public const string msdyn_timelineWall_isSortOrderNewerToOlder = "msdyn_timelineWall_isSortOrderNewerToOlder";
			public const string msdyn_timelineWall_searchTermApplied = "msdyn_timelineWall_searchTermApplied";
			public const string msdyn_timelineWall_userFilters = "msdyn_timelineWall_userFilters";
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
		public const string EntityLogicalName = "msdyn_customcontrolextendedsettings";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10259;
		public const string EntityCollectionSchemaName = "msdyn_customcontrolextendedsettingses";
		public const string EntityDisplayCollectionName = "Thiết đặt mở rộng cho đối tượng điều khiển tùy chỉnh";
		public const string DisplayName = "Thiết đặt mở rộng cho đối tượng điều khiển tùy chỉnh";
		public const string EntitySetName = "msdyn_customcontrolextendedsettingses";
		public const string EntityLogicalCollectionName = "msdyn_customcontrolextendedsettingses";
		public const string EntityPrimaryIdAttribute = "msdyn_customcontrolextendedsettingsid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "msdyn_name";
		public const string EntitySchemaName = "msdyn_customcontrolextendedsettings";
		[DebuggerNonUserCode()]
		public msdyn_customcontrolextendedsettings()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_customcontrolextendedsettings(Guid msdyn_customcontrolextendedsettingsId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_customcontrolextendedsettingsId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_customcontrolextendedsettings(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_customcontrolextendedsettings"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public msdyn_customcontrolextendedsettings(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_customcontrolextendedsettings"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyn_customcontrolextendedsettings(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyn_customcontrolextendedsettings(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="msdyn_customcontrolextendedsettings"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyn_customcontrolextendedsettings(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyn_customcontrolextendedsettings(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public msdyn_customcontrolextendedsettings(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người tạo</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đã tạo bản ghi.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày tạo</para>
		/// <para><strong>Description</strong>: Ngày và giờ tạo bản ghi.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người tạo (Đại diện)</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Số thứ tự lượt nhập</para>
		/// <para><strong>Description</strong>: Số thứ tự của quá trình nhập đã tạo bản ghi này.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ImportSequenceNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ImportSequenceNumber); }
			set { Entity.Attributes[Fields.ImportSequenceNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người sửa đổi</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đã sửa đổi bản ghi.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày sửa đổi</para>
		/// <para><strong>Description</strong>: Ngày và giờ sửa đổi bản ghi.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người sửa đổi (Đại diện)</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thiết đặt Copilot Hub</para>
		/// <para><strong>Description</strong>: Dữ liệu người dùng cho đối tượng điều khiển Copilot Hub</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 65,536</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_copilothub_settings
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_copilothub_settings); }
			set { Entity.Attributes[Fields.msdyn_copilothub_settings] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thiết đặt mở rộng cho đối tượng điều khiển tùy chỉnh</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của phiên bản thực thể</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_customcontrolextendedsettingsId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_customcontrolextendedsettingsId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tên</para>
		/// <para><strong>Description</strong>: Tên thực thể tùy chỉnh.</para>
		/// <para><strong>Primary Name</strong>: <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_name); }
			set { Entity.Attributes[Fields.msdyn_name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thiết đặt cá nhân hóa cho người dùng RTE</para>
		/// <para><strong>Description</strong>: Thiết đặt cá nhân do người dùng đặt cấu hình dành cho Trình soạn thảo văn bản đa dạng thức</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 65,536</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_rte_userpersonalizationsettings
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_rte_userpersonalizationsettings); }
			set { Entity.Attributes[Fields.msdyn_rte_userpersonalizationsettings] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tùy chọn bố cục hiển thị dòng thời gian</para>
		/// <para><strong>Description</strong>: Tùy chọn bố cục hiển thị do người dùng đặt cấu hình cho đối tượng điều khiển Dòng thời gian</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 65,536</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_timeline_displaylayoutoption
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_timeline_displaylayoutoption); }
			set { Entity.Attributes[Fields.msdyn_timeline_displaylayoutoption] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thẻ đánh dấu</para>
		/// <para><strong>Description</strong>: Thiết đặt bộ lọc do người dùng đặt cấu hình dành cho Tường dòng thời gian</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 65,536</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_timelineWall_bookmarks
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_timelineWall_bookmarks); }
			set { Entity.Attributes[Fields.msdyn_timelineWall_bookmarks] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Được mở rộng tự động</para>
		/// <para><strong>Description</strong>: Trạng thái mở rộng do người dùng đặt cấu hình dành cho Tường dòng thời gian</para>
		/// <para><strong>Two Option</strong> - [<strong>Có</strong>]: true - [<strong>Không</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Không</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_timelineWall_isAutoExpanded
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_timelineWall_isAutoExpanded); }
			set { Entity.Attributes[Fields.msdyn_timelineWall_isAutoExpanded] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngăn bộ lọc có mở hay không</para>
		/// <para><strong>Description</strong>: Liệu ngăn bộ lọc có mở theo mặc định khi tải Tường dòng thời gian không</para>
		/// <para><strong>Two Option</strong> - [<strong>Có</strong>]: true - [<strong>Không</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Không</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_timelineWall_isFilterPaneOpen
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_timelineWall_isFilterPaneOpen); }
			set { Entity.Attributes[Fields.msdyn_timelineWall_isFilterPaneOpen] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Là thứ tự sắp xếp từ mới hơn đến cũ hơn cho Tường dòng thời gian</para>
		/// <para><strong>Description</strong>: Liệu Tường dòng thời gian có được thiết đặt để sắp xếp các bản ghi theo thứ tự từ mới hơn đến cũ hơn hay không</para>
		/// <para><strong>Two Option</strong> - [<strong>Có</strong>]: true - [<strong>Không</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Có</strong>]: true</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_timelineWall_isSortOrderNewerToOlder
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_timelineWall_isSortOrderNewerToOlder); }
			set { Entity.Attributes[Fields.msdyn_timelineWall_isSortOrderNewerToOlder] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Từ tìm kiếm được áp dụng</para>
		/// <para><strong>Description</strong>: Từ tìm kiếm được áp dụng khi tải Tường dòng thời gian</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 500</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_timelineWall_searchTermApplied
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_timelineWall_searchTermApplied); }
			set { Entity.Attributes[Fields.msdyn_timelineWall_searchTermApplied] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Bộ lọc người dùng</para>
		/// <para><strong>Description</strong>: Thiết đặt bộ lọc do người dùng đặt cấu hình dành cho Tường dòng thời gian</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 65,536</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_timelineWall_userFilters
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_timelineWall_userFilters); }
			set { Entity.Attributes[Fields.msdyn_timelineWall_userFilters] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày tạo bản ghi</para>
		/// <para><strong>Description</strong>: Ngày và giờ di chuyển bản ghi.</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateOnly</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverriddenCreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverriddenCreatedOn); }
			set { Entity.Attributes[Fields.OverriddenCreatedOn] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Chủ sở hữu</para>
		/// <para><strong>Description</strong>: ID chủ sở hữu</para>
		/// <para><strong>Lookup</strong>: <see cref="systemuser"/>, <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
			set { Entity.Attributes[Fields.OwnerId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Đơn vị kinh doanh sở hữu</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của đơn vị kinh doanh sở hữu bản ghi</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="businessunit"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Nhóm sở hữu</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất cho nhóm sở hữu bản ghi.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người dùng sở hữu</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất cho người dùng sở hữu bản ghi.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Trạng thái</para>
		/// <para><strong>Description</strong>: Trạng thái của Thiết đặt mở rộng cho Tường dòng thời gian</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_customcontrolextendedsettingsOptionSets.statecode"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_customcontrolextendedsettingsOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_customcontrolextendedsettingsOptionSets.statecode)value.Value;
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
		/// <para><strong>Display Name</strong>: Lý do dẫn đến trạng thái</para>
		/// <para><strong>Description</strong>: Lý do dẫn đến trạng thái của Thiết đặt mở rộng cho Tường dòng thời gian</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_customcontrolextendedsettingsOptionSets.statuscode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_customcontrolextendedsettingsOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_customcontrolextendedsettingsOptionSets.statuscode)value.Value;
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
		/// <para><strong>Display Name</strong>: Số phiên bản của quy tắc múi giờ</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -1 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? TimeZoneRuleVersionNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.TimeZoneRuleVersionNumber); }
			set { Entity.Attributes[Fields.TimeZoneRuleVersionNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Mã múi giờ chuyển đổi UTC</para>
		/// <para><strong>Description</strong>: Mã múi giờ đã dùng khi tạo bản ghi.</para>
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