﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-07-30 10:00:02
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.ActivityMimeAttachmentOptionSets
{
	public enum ComponentState
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã phát hành</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Da_phat_hanh = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã xóa</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Da_xoa = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã xóa Hủy phát hành</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Da_xoa_Huy_phat_hanh = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Hủy phát hành</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Huy_phat_hanh = 1
	}
	public enum ObjectTypeCode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Hoạt động Email</para>
		/// <para><strong>Value</strong>: 4,200</para>
		/// </summary>
		Hoat_dong_Email = 4_200,
		/// <summary>
		/// <para><strong>Display Name</strong>: Mẫu email</para>
		/// <para><strong>Value</strong>: 2,010</para>
		/// </summary>
		Mau_email = 2_010
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class ActivityMimeAttachment : EntityBase
	{
		public struct Fields
		{
			[System.Obsolete("Deprecated from version: 5.0.0.0")]
			public const string ActivityId = "activityid";
			public const string ActivityMimeAttachmentId = "activitymimeattachmentid";
			public const string ActivityMimeAttachmentIdUnique = "activitymimeattachmentidunique";
			public const string ActivitySubject = "activitysubject";
			public const string AnonymousLink = "anonymouslink";
			public const string AttachmentContentId = "attachmentcontentid";
			public const string AttachmentId = "attachmentid";
			public const string AttachmentNumber = "attachmentnumber";
			public const string Body = "body";
			public const string ComponentState = "componentstate";
			public const string FileName = "filename";
			public const string FileSize = "filesize";
			public const string IsFollowed = "isfollowed";
			public const string IsManaged = "ismanaged";
			public const string MimeType = "mimetype";
			public const string ObjectId = "objectid";
			public const string ObjectTypeCode = "objecttypecode";
			public const string OverwriteTime = "overwritetime";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningUser = "owninguser";
			public const string SolutionId = "solutionid";
			public const string Subject = "subject";
			public const string SupportingSolutionId = "supportingsolutionid";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "activitymimeattachment";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 1001;
		public const string EntityCollectionSchemaName = "ActivityMimeAttachments";
		public const string EntityDisplayCollectionName = "Tệp đính kèm";
		public const string DisplayName = "Tệp đính kèm";
		public const string EntitySetName = "activitymimeattachments";
		public const string EntityLogicalCollectionName = "activitymimeattachments";
		public const string EntityPrimaryIdAttribute = "activitymimeattachmentid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "filename";
		public const string EntitySchemaName = "ActivityMimeAttachment";
		[DebuggerNonUserCode()]
		public ActivityMimeAttachment()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public ActivityMimeAttachment(Guid ActivityMimeAttachmentId)
		{
			Entity = new Entity(EntityLogicalName, ActivityMimeAttachmentId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public ActivityMimeAttachment(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="ActivityMimeAttachment"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public ActivityMimeAttachment(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="ActivityMimeAttachment"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public ActivityMimeAttachment(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new ActivityMimeAttachment(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="ActivityMimeAttachment"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public ActivityMimeAttachment(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new ActivityMimeAttachment(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public ActivityMimeAttachment(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Bản lưu ý</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của hoạt động liên kết với tệp đính kèm.</para>
		/// <para><strong>Lookup</strong>: <see cref="activitypointer"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		[System.Obsolete("Deprecated from version: 5.0.0.0")]
		public EntityReference ActivityId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ActivityId); }
			set { Entity.Attributes[Fields.ActivityId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tệp đính kèm Mime của Hoạt động</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của tệp đính kèm.</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid ActivityMimeAttachmentId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.ActivityMimeAttachmentId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? ActivityMimeAttachmentIdUnique
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.ActivityMimeAttachmentIdUnique); }
			set { Entity.Attributes[Fields.ActivityMimeAttachmentIdUnique] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ActivitySubject</para>
		/// <para><strong>Description</strong>: Chủ đề mô tả cho hoạt động.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ActivitySubject
		{
			get { return Entity.GetAttributeValue<string>(Fields.ActivitySubject); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>Description</strong>: liên kết ẩn danh</para>
		/// <para><strong>ReadOnly</strong> - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AnonymousLink
		{
			get { return Entity.GetAttributeValue<string>(Fields.AnonymousLink); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Id Nội dung</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 250</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AttachmentContentId
		{
			get { return Entity.GetAttributeValue<string>(Fields.AttachmentContentId); }
			set { Entity.Attributes[Fields.AttachmentContentId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tệp đính kèm</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của tệp đính kèm liên kết với activitymimeattachment này.</para>
		/// <para>Required - <strong>Lookup</strong>: <see cref="attachment"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference AttachmentId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.AttachmentId); }
			set { Entity.Attributes[Fields.AttachmentId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Số Tệp đính kèm</para>
		/// <para><strong>Description</strong>: Số lượng tệp đính kèm.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 1,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? AttachmentNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.AttachmentNumber); }
			set { Entity.Attributes[Fields.AttachmentNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Nội dung</para>
		/// <para><strong>Description</strong>: Nội dung của tệp đính kèm.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 1,073,741,823</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Body
		{
			get { return Entity.GetAttributeValue<string>(Fields.Body); }
			set { Entity.Attributes[Fields.Body] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Trạng thái Thành phần</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.ActivityMimeAttachmentOptionSets.ComponentState"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.ActivityMimeAttachmentOptionSets.ComponentState? ComponentState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ComponentState);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.ActivityMimeAttachmentOptionSets.ComponentState)value.Value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tên Tệp</para>
		/// <para><strong>Description</strong>: Tên tệp đính kèm.</para>
		/// <para><strong>Primary Name</strong>: <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 255</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string FileName
		{
			get { return Entity.GetAttributeValue<string>(Fields.FileName); }
			set { Entity.Attributes[Fields.FileName] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Kích thước Tệp (Byte)</para>
		/// <para><strong>Description</strong>: Kích thước của tệp đính kèm.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 1,000,000,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? FileSize
		{
			get { return Entity.GetAttributeValue<int?>(Fields.FileSize); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã theo dõi</para>
		/// <para><strong>Description</strong>: Cho biết tệp đính kèm này có được theo dõi hay không.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Two Option</strong> - [<strong>Có</strong>]: true - [<strong>Không</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Không</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsFollowed
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsFollowed); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Được Quản lý</para>
		/// <para><strong>Description</strong>: Cho biết thành phần giải pháp có là một phần của giải pháp được quản lý hay không.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Two Option</strong> - [<strong>Được quản lý</strong>]: true - [<strong>Không được quản lý</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Không được quản lý</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsManaged
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsManaged); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Loại Mime</para>
		/// <para><strong>Description</strong>: Loại MIME của tệp đính kèm.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 256</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string MimeType
		{
			get { return Entity.GetAttributeValue<string>(Fields.MimeType); }
			set { Entity.Attributes[Fields.MimeType] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Mục</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của bản ghi có tệp đính kèm được liên kết</para>
		/// <para><strong>Lookup</strong>: <see cref="activitypointer"/>, <see cref="template"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ObjectId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ObjectId); }
			set { Entity.Attributes[Fields.ObjectId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thực thể</para>
		/// <para><strong>Description</strong>: Mã Loại Đối tượng của thực thể liên kết với tệp đính kèm.</para>
		/// <para><strong>EntityName</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ObjectTypeCode
		{
			get { return Entity.GetAttributeValue<string>(Fields.ObjectTypeCode); }
			set { Entity.Attributes[Fields.ObjectTypeCode] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thời gian Ghi đè Bản ghi</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateOnly</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverwriteTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverwriteTime); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Chủ sở hữu</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng hoặc nhóm sở hữu activity_mime_attachment.</para>
		/// <para><strong>ReadOnly</strong> - Required - <strong>Lookup</strong>: <see cref="systemuser"/>, <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Đơn vị Kinh doanh Sở hữu</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của đơn vị kinh doanh sở hữu tệp đính kèm mime của hoạt động.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="businessunit"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Chủ sở hữu</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng sở hữu tệp đính kèm mime của hoạt động.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Giải pháp</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của giải pháp được liên kết.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SolutionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SolutionId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Chủ đề</para>
		/// <para><strong>Description</strong>: Chủ đề mô tả cho tệp đính kèm.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Subject
		{
			get { return Entity.GetAttributeValue<string>(Fields.Subject); }
			set { Entity.Attributes[Fields.Subject] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Giải pháp</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? SupportingSolutionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.SupportingSolutionId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Số Phiên bản</para>
		/// <para><strong>Description</strong>: Số phiên bản của tệp đính kèm mime của hoạt động.</para>
		/// <para><strong>ReadOnly</strong> - <strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}