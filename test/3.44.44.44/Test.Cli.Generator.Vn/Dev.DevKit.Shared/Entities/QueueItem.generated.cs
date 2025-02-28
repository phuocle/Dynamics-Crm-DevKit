﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-07-30 10:00:53
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.QueueItemOptionSets
{
	public enum ObjectTypeCode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Bài viết trong cơ sở kiến thức</para>
		/// <para><strong>Value</strong>: 9,953</para>
		/// </summary>
		Bai_viet_trong_co_so_kien_thuc = 9_953,
		/// <summary>
		/// <para><strong>Display Name</strong>: Cuộc gọi điện thoại</para>
		/// <para><strong>Value</strong>: 4,210</para>
		/// </summary>
		Cuoc_goi_dien_thoai = 4_210,
		/// <summary>
		/// <para><strong>Display Name</strong>: Cuộc hẹn</para>
		/// <para><strong>Value</strong>: 4,201</para>
		/// </summary>
		Cuoc_hen = 4_201,
		/// <summary>
		/// <para><strong>Display Name</strong>: Cuộc hẹn lặp lại</para>
		/// <para><strong>Value</strong>: 4,251</para>
		/// </summary>
		Cuoc_hen_lap_lai = 4_251,
		/// <summary>
		/// <para><strong>Display Name</strong>: Email</para>
		/// <para><strong>Value</strong>: 4,202</para>
		/// </summary>
		Email = 4_202,
		/// <summary>
		/// <para><strong>Display Name</strong>: Fax</para>
		/// <para><strong>Value</strong>: 4,204</para>
		/// </summary>
		Fax = 4_204,
		/// <summary>
		/// <para><strong>Display Name</strong>: Hoạt động</para>
		/// <para><strong>Value</strong>: 4,200</para>
		/// </summary>
		Hoat_dong = 4_200,
		/// <summary>
		/// <para><strong>Display Name</strong>: Hoạt động mạng xã hội</para>
		/// <para><strong>Value</strong>: 4,216</para>
		/// </summary>
		Hoat_dong_mang_xa_hoi = 4_216,
		/// <summary>
		/// <para><strong>Display Name</strong>: Knowledge Article Template</para>
		/// <para><strong>Value</strong>: 10,201</para>
		/// </summary>
		Knowledge_Article_Template = 10_201,
		/// <summary>
		/// <para><strong>Display Name</strong>: Nhận xét Cổng thông tin</para>
		/// <para><strong>Value</strong>: 10,311</para>
		/// </summary>
		Nhan_xet_Cong_thong_tin = 10_311,
		/// <summary>
		/// <para><strong>Display Name</strong>: Nhiệm vụ</para>
		/// <para><strong>Value</strong>: 4,212</para>
		/// </summary>
		Nhiem_vu = 4_212,
		/// <summary>
		/// <para><strong>Display Name</strong>: Quy đổi Lời mời</para>
		/// <para><strong>Value</strong>: 10,310</para>
		/// </summary>
		Quy_doi_Loi_moi = 10_310,
		/// <summary>
		/// <para><strong>Display Name</strong>: Thư tín</para>
		/// <para><strong>Value</strong>: 4,207</para>
		/// </summary>
		Thu_tin = 4_207,
		/// <summary>
		/// <para><strong>Display Name</strong>: Trò chuyện qua Teams</para>
		/// <para><strong>Value</strong>: 10,185</para>
		/// </summary>
		Tro_chuyen_qua_Teams = 10_185
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
	public partial class QueueItem : EntityBase
	{
		public struct Fields
		{
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string EnteredOn = "enteredon";
			public const string ExchangeRate = "exchangerate";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string ObjectId = "objectid";
			public const string ObjectTypeCode = "objecttypecode";
			public const string OrganizationId = "organizationid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningUser = "owninguser";
			[System.Obsolete("Deprecated from version: 5.0.0.0")]
			public const string Priority = "priority";
			public const string QueueId = "queueid";
			public const string QueueItemId = "queueitemid";
			[System.Obsolete("Deprecated from version: 5.0.0.0")]
			public const string Sender = "sender";
			[System.Obsolete("Deprecated from version: 5.0.0.0")]
			public const string State = "state";
			public const string StateCode = "statecode";
			[System.Obsolete("Deprecated from version: 5.0.0.0")]
			public const string Status = "status";
			public const string StatusCode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string Title = "title";
			[System.Obsolete("Deprecated from version: 5.0.0.0")]
			public const string ToRecipients = "torecipients";
			public const string TransactionCurrencyId = "transactioncurrencyid";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
			public const string WorkerId = "workerid";
			public const string WorkerIdModifiedOn = "workeridmodifiedon";
		}
		public const string EntityLogicalName = "queueitem";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 2029;
		public const string EntityCollectionSchemaName = "QueueItems";
		public const string EntityDisplayCollectionName = "Mục trong hàng đợi";
		public const string DisplayName = "Mục trong hàng đợi";
		public const string EntitySetName = "queueitems";
		public const string EntityLogicalCollectionName = "queueitems";
		public const string EntityPrimaryIdAttribute = "queueitemid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "title";
		public const string EntitySchemaName = "QueueItem";
		[DebuggerNonUserCode()]
		public QueueItem()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public QueueItem(Guid QueueItemId)
		{
			Entity = new Entity(EntityLogicalName, QueueItemId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public QueueItem(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="QueueItem"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public QueueItem(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="QueueItem"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public QueueItem(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new QueueItem(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="QueueItem"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public QueueItem(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new QueueItem(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public QueueItem(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người tạo</para>
		/// <para><strong>Description</strong>: Cho biết người tạo bản ghi.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày tạo</para>
		/// <para><strong>Description</strong>: Cho biết ngày và giờ tạo bản ghi. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người tạo (Đại diện)</para>
		/// <para><strong>Description</strong>: Cho biết người tạo bản ghi thay mặt cho người dùng khác.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Hàng đợi đã nhập</para>
		/// <para><strong>Description</strong>: Hiện ngày gán bản ghi cho hàng đợi.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? EnteredOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.EnteredOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tỷ giá</para>
		/// <para><strong>Description</strong>: Cho biết tỷ giá quy đổi của loại tiền trên bản ghi. Tỷ giá được dùng để đổi tất cả các trường tiền trong bản ghi từ loại tiền địa phương sang loại tiền mặc định của hệ thống.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Floating Point Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 100,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? ExchangeRate
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.ExchangeRate); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Số Thứ tự Nhập</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của quá trình nhập dữ liệu hoặc dịch chuyển dữ liệu đã tạo bản ghi này.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ImportSequenceNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ImportSequenceNumber); }
			set { Entity.Attributes[Fields.ImportSequenceNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người Sửa đổi</para>
		/// <para><strong>Description</strong>: Cho biết người cập nhật bản ghi sau cùng.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Sửa đổi Vào</para>
		/// <para><strong>Description</strong>: Cho biết ngày và giờ cập nhật bản ghi lần cuối. Ngày và giờ được hiển thị trong múi giờ được chọn theo tùy chọn Microsoft Dynamics 365.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người Sửa đổi (Đại diện)</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đại diện đã sửa queueitem lần cuối.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Đối tượng</para>
		/// <para><strong>Description</strong>: Chọn hoạt động, trường hợp hoặc bài viết đã gán cho hàng đợi.</para>
		/// <para>Required - <strong>Lookup</strong>: <see cref="activitypointer"/>, <see cref="adx_inviteredemption"/>, <see cref="adx_portalcomment"/>, <see cref="appointment"/>, <see cref="chat"/>, <see cref="email"/>, <see cref="fax"/>, <see cref="knowledgearticle"/>, <see cref="letter"/>, <see cref="msdyn_knowledgearticletemplate"/>, <see cref="phonecall"/>, <see cref="recurringappointmentmaster"/>, <see cref="socialactivity"/>, <see cref="task"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ObjectId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ObjectId); }
			set { Entity.Attributes[Fields.ObjectId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Loại</para>
		/// <para><strong>Description</strong>: Chọn loại mục trong hàng đợi, như loại hoạt động, trường hợp hoặc cuộc hẹn.</para>
		/// <para><strong>ReadOnly</strong> - <strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.QueueItemOptionSets.ObjectTypeCode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.QueueItemOptionSets.ObjectTypeCode? ObjectTypeCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ObjectTypeCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.QueueItemOptionSets.ObjectTypeCode)value.Value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tổ chức</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của tổ chức có liên kết với mục trong hàng đợi.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="organization"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
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
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng hoặc nhóm sở hữu mục trong hàng đợi.</para>
		/// <para><strong>ReadOnly</strong> - Required - <strong>Lookup</strong>: <see cref="systemuser"/>, <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Đơn vị Kinh doanh Sở hữu</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của bơn vị kinh doanh sở hữu mục trong hàng đợi.</para>
		/// <para><strong>ReadOnly</strong> - Required - <strong>Lookup</strong>: <see cref="businessunit"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người dùng Sở hữu</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng sở hữu mục trong hàng đợi.</para>
		/// <para><strong>ReadOnly</strong> - Required - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ưu tiên</para>
		/// <para><strong>Description</strong>: Mức ưu tiên của mục trong hàng đợi.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 1,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		[System.Obsolete("Deprecated from version: 5.0.0.0")]
		public int? Priority
		{
			get { return Entity.GetAttributeValue<int?>(Fields.Priority); }
			set { Entity.Attributes[Fields.Priority] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Hàng đợi</para>
		/// <para><strong>Description</strong>: Chọn hàng đợi có mục gán cho nó.</para>
		/// <para>Required - <strong>Lookup</strong>: <see cref="queue"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference QueueId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.QueueId); }
			set { Entity.Attributes[Fields.QueueId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Mục trong hàng đợi</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của hạng mục trong hàng đợi.</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid QueueItemId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.QueueItemId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Từ</para>
		/// <para><strong>Description</strong>: Người gửi đã tạo mục trong hàng đợi.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 250</para>
		/// </summary>
		[DebuggerNonUserCode()]
		[System.Obsolete("Deprecated from version: 5.0.0.0")]
		public string Sender
		{
			get { return Entity.GetAttributeValue<string>(Fields.Sender); }
			set { Entity.Attributes[Fields.Sender] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Trạng thái (không còn dùng)</para>
		/// <para><strong>Description</strong>: Trạng thái của mục trong hàng đợi.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 1,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		[System.Obsolete("Deprecated from version: 5.0.0.0")]
		public int? State
		{
			get { return Entity.GetAttributeValue<int?>(Fields.State); }
			set { Entity.Attributes[Fields.State] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Trạng thái</para>
		/// <para><strong>Description</strong>: Cho biết bản ghi hàng đợi là hiện hoạt hay không hiện hoạt. Bản ghi hàng đợi không hiện hoạt có trạng thái chỉ đọc và bạn chỉ có thể sửa bản ghi khi kích hoạt lại chúng.</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.QueueItemOptionSets.StateCode"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.QueueItemOptionSets.StateCode.Hien_hoat"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.QueueItemOptionSets.StateCode? StateCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StateCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.QueueItemOptionSets.StateCode)value.Value;
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
		/// <para><strong>Display Name</strong>: Lý do dẫn đến trạng thái (không còn dùng)</para>
		/// <para><strong>Description</strong>: Lý do cho trạng thái của mục trong hàng đợi.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 1,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		[System.Obsolete("Deprecated from version: 5.0.0.0")]
		public int? Status
		{
			get { return Entity.GetAttributeValue<int?>(Fields.Status); }
			set { Entity.Attributes[Fields.Status] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Lý do dẫn đến Trạng thái</para>
		/// <para><strong>Description</strong>: Chọn trạng thái của mục.</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.QueueItemOptionSets.StatusCode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.QueueItemOptionSets.StatusCode? StatusCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StatusCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.QueueItemOptionSets.StatusCode)value.Value;
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
		/// <para><strong>Display Name</strong>: Số Phiên bản Quy tắc Múi Giờ</para>
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
		/// <para><strong>Display Name</strong>: Tiêu đề</para>
		/// <para><strong>Description</strong>: Hiển thị tiêu đề hoặc tên mô tả bản ghi hàng đợi. Giá trị này được sao chép từ bản ghi được gán cho hàng đợi.</para>
		/// <para><strong>Primary Name</strong>: <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 850</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Title
		{
			get { return Entity.GetAttributeValue<string>(Fields.Title); }
			set { Entity.Attributes[Fields.Title] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tới</para>
		/// <para><strong>Description</strong>: Người nhận nằm trong dòng Đến của thư dành cho mục trong hàng đợi email.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 500</para>
		/// </summary>
		[DebuggerNonUserCode()]
		[System.Obsolete("Deprecated from version: 5.0.0.0")]
		public string ToRecipients
		{
			get { return Entity.GetAttributeValue<string>(Fields.ToRecipients); }
			set { Entity.Attributes[Fields.ToRecipients] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Loại tiền</para>
		/// <para><strong>Description</strong>: Chọn loại tiền địa phương cho bản ghi để đảm bảo ngân sách được báo cáo theo đúng loại tiền.</para>
		/// <para><strong>Lookup</strong>: <see cref="transactioncurrency"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference TransactionCurrencyId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.TransactionCurrencyId); }
			set { Entity.Attributes[Fields.TransactionCurrencyId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Mã Múi Giờ Chuyển đổi UTC</para>
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
		/// <para><strong>Display Name</strong>: Số Phiên bản</para>
		/// <para><strong>Description</strong>: Số phiên bản của mục trong hàng đợi.</para>
		/// <para><strong>ReadOnly</strong> - <strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người thực hiện</para>
		/// <para><strong>Description</strong>: Cho biết người đang làm việc trên mục trong hàng đợi.</para>
		/// <para><strong>Lookup</strong>: <see cref="systemuser"/>, <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference WorkerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.WorkerId); }
			set { Entity.Attributes[Fields.WorkerId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thực hiện vào</para>
		/// <para><strong>Description</strong>: Hiện ngày giờ gán mục trong hàng đợi cho người dùng lần cuối.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateOnly</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? WorkerIdModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.WorkerIdModifiedOn); }
		}
	}
}