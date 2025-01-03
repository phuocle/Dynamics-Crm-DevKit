﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-07-30 10:00:57
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.SharePointDocumentLocationOptionSets
{
	public enum LocationType
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Dành riêng cho Tích hợp OneNote</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Danh_rieng_cho_Tich_hop_OneNote = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Tổng quát</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Tong_quat = 0
	}
	public enum ServiceType
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Các nhóm MS</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Cac_nhom_MS = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Được chia sẻ với tôi</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Duoc_chia_se_voi_toi = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: OneDrive</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		OneDrive = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: SharePoint</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		SharePoint = 0
	}
	public enum StateCode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Hiện hoạt</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Hien_hoat = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Không hoạt động</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Khong_hoat_dong = 1
	}
	public enum StatusCode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Hiện hoạt</para>
		/// <para><strong>Value</strong>: 1</para>
		/// <para><strong>StateCode.Hien_hoat</strong></para>
		/// </summary>
		Hien_hoat = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Không hoạt động</para>
		/// <para><strong>Value</strong>: 2</para>
		/// <para><strong>StateCode.Khong_hoat_dong</strong></para>
		/// </summary>
		Khong_hoat_dong = 2
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class SharePointDocumentLocation : EntityBase
	{
		public struct Fields
		{
			public const string AbsoluteURL = "absoluteurl";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Description = "description";
			public const string ExchangeRate = "exchangerate";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string LocationType = "locationtype";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string Name = "name";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string ParentSiteOrLocation = "parentsiteorlocation";
			public const string RegardingObjectId = "regardingobjectid";
			public const string RelativeUrl = "relativeurl";
			public const string ServiceType = "servicetype";
			public const string SharePointDocumentLocationId = "sharepointdocumentlocationid";
			public const string SiteCollectionId = "sitecollectionid";
			public const string StateCode = "statecode";
			public const string StatusCode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string TransactionCurrencyId = "transactioncurrencyid";
			public const string UserId = "userid";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "sharepointdocumentlocation";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 9508;
		public const string EntityCollectionSchemaName = "SharePointDocumentLocations";
		public const string EntityDisplayCollectionName = "Vị trí tài liệu";
		public const string DisplayName = "Vị trí tài liệu";
		public const string EntitySetName = "sharepointdocumentlocations";
		public const string EntityLogicalCollectionName = "sharePointdocumentlocations";
		public const string EntityPrimaryIdAttribute = "sharepointdocumentlocationid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "name";
		public const string EntitySchemaName = "SharePointDocumentLocation";
		[DebuggerNonUserCode()]
		public SharePointDocumentLocation()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public SharePointDocumentLocation(Guid SharePointDocumentLocationId)
		{
			Entity = new Entity(EntityLogicalName, SharePointDocumentLocationId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public SharePointDocumentLocation(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="SharePointDocumentLocation"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public SharePointDocumentLocation(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="SharePointDocumentLocation"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public SharePointDocumentLocation(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new SharePointDocumentLocation(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="SharePointDocumentLocation"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public SharePointDocumentLocation(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new SharePointDocumentLocation(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public SharePointDocumentLocation(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: URL tuyệt đối</para>
		/// <para><strong>Description</strong>: URL tuyệt đối của vị trí tài liệu SharePoint.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AbsoluteURL
		{
			get { return Entity.GetAttributeValue<string>(Fields.AbsoluteURL); }
			set { Entity.Attributes[Fields.AbsoluteURL] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người tạo</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đã tạo bản ghi vị trí tài liệu SharePoint.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày tạo</para>
		/// <para><strong>Description</strong>: Ngày giờ tạo bản ghi vị trí tài liệu SharePoint.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người tạo (Đại diện)</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi vị trí tài liệu SharePoint.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Mô tả</para>
		/// <para><strong>Description</strong>: Mô tả của bản ghi vị trí tài liệu SharePoint.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.Description); }
			set { Entity.Attributes[Fields.Description] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tỷ giá</para>
		/// <para><strong>Description</strong>: Tỷ giá giữa loại tiền đã liên kết với bản ghi vị trí tài liệu SharePoint và loại tiền gốc.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Floating Point Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? ExchangeRate
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.ExchangeRate); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Số Thứ tự Nhập</para>
		/// <para><strong>Description</strong>: Số tuần tự của lần nhập đã tạo bản ghi vị trí tài liệu SharePoint.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ImportSequenceNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ImportSequenceNumber); }
			set { Entity.Attributes[Fields.ImportSequenceNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Kiểu Vị trí</para>
		/// <para><strong>Description</strong>: Kiểu vị trí của vị trí tài liệu SharePoint.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.SharePointDocumentLocationOptionSets.LocationType"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.SharePointDocumentLocationOptionSets.LocationType.Tong_quat"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SharePointDocumentLocationOptionSets.LocationType? LocationType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.LocationType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SharePointDocumentLocationOptionSets.LocationType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.LocationType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.LocationType] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người Sửa đổi</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đã sửa bản ghi vị trí tài liệu SharePoint lần cuối.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Sửa đổi Vào</para>
		/// <para><strong>Description</strong>: Ngày giờ sửa bản ghi vị trí tài liệu SharePoint lần cuối.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người Sửa đổi (Đại diện)</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi vị trí tài liệu SharePoint.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tên</para>
		/// <para><strong>Description</strong>: Tên của bản ghi vị trí tài liệu SharePoint.</para>
		/// <para><strong>Primary Name</strong>: <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 160</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày tạo Bản ghi</para>
		/// <para><strong>Description</strong>: Ngày và giờ dịch chuyển bản ghi.</para>
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
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng hoặc nhóm sở hữu bản ghi vị trí tài liệu SharePoint.</para>
		/// <para><strong>Lookup</strong>: <see cref="systemuser"/>, <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
			set { Entity.Attributes[Fields.OwnerId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Đơn vị Kinh doanh Sở hữu</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của bơn vị kinh doanh sở hữu bản ghi vị trí tài liệu SharePoint.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="businessunit"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Nhóm Sở hữu</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của nhóm sở hữu bản ghi vị trí tài liệu SharePoint.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người dùng Sở hữu</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng sở hữu bản ghi vị trí tài liệu SharePoint.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Vị trí hay trang mẹ</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của vị trí hay trang mẹ.</para>
		/// <para><strong>Lookup</strong>: <see cref="sharepointdocumentlocation"/>, <see cref="sharepointsite"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ParentSiteOrLocation
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ParentSiteOrLocation); }
			set { Entity.Attributes[Fields.ParentSiteOrLocation] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Bản lưu ý</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của đối tượng có liên kết với bản ghi vị trí tài liệu SharePoint.</para>
		/// <para><strong>Lookup</strong>: <see cref="account"/>, <see cref="adx_portalcomment"/>, <see cref="kbarticle"/>, <see cref="knowledgearticle"/>, <see cref="msdyn_knowledgearticletemplate"/>, <see cref="mspp_website"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference RegardingObjectId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.RegardingObjectId); }
			set { Entity.Attributes[Fields.RegardingObjectId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: URL tương đối</para>
		/// <para><strong>Description</strong>: URL tương đối của vị trí tài liệu SharePoint.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 255</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string RelativeUrl
		{
			get { return Entity.GetAttributeValue<string>(Fields.RelativeUrl); }
			set { Entity.Attributes[Fields.RelativeUrl] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Loại Dịch vụ</para>
		/// <para><strong>Description</strong>: Hiển thị loại dịch vụ của trang web SharePoint.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.SharePointDocumentLocationOptionSets.ServiceType"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.SharePointDocumentLocationOptionSets.ServiceType.SharePoint"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SharePointDocumentLocationOptionSets.ServiceType? ServiceType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ServiceType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SharePointDocumentLocationOptionSets.ServiceType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.ServiceType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.ServiceType] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ID vị trí tài liệu SharePoint</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của bản ghi vị trí tài liệu SharePoint.</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid SharePointDocumentLocationId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.SharePointDocumentLocationId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SiteCollectionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SiteCollectionId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Trạng thái</para>
		/// <para><strong>Description</strong>: Trạng thái của bản ghi vị trí tài liệu SharePoint.</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.SharePointDocumentLocationOptionSets.StateCode"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.SharePointDocumentLocationOptionSets.StateCode.Hien_hoat"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SharePointDocumentLocationOptionSets.StateCode? StateCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StateCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SharePointDocumentLocationOptionSets.StateCode)value.Value;
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
		/// <para><strong>Display Name</strong>: Lý do dẫn đến Trạng thái</para>
		/// <para><strong>Description</strong>: Lý do dẫn đến trạng thái của bản ghi vị trí tài liệu SharePoint.</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.SharePointDocumentLocationOptionSets.StatusCode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.SharePointDocumentLocationOptionSets.StatusCode? StatusCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StatusCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.SharePointDocumentLocationOptionSets.StatusCode)value.Value;
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
		/// <para><strong>Display Name</strong>: Loại tiền</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của loại tiền đã liên kết với bản ghi vị trí tài liệu SharePoint.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="transactioncurrency"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference TransactionCurrencyId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.TransactionCurrencyId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Chủ sở hữu Vị trí Tài liệu SharePoint</para>
		/// <para><strong>Description</strong>: Chọn người dùng sở hữu vị trí tài liệu SharePoint.</para>
		/// <para><strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? UserId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.UserId); }
			set { Entity.Attributes[Fields.UserId] = value; }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Mã múi giờ đã được sử dụng khi tạo bản ghi.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -1 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? UTCConversionTimeZoneCode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.UTCConversionTimeZoneCode); }
			set { Entity.Attributes[Fields.UTCConversionTimeZoneCode] = value; }
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