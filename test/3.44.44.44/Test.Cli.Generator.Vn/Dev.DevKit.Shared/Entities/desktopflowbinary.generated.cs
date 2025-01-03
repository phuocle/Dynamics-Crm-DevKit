﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-07-30 10:00:10
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.desktopflowbinaryOptionSets
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
	public partial class desktopflowbinary : EntityBase
	{
		public struct Fields
		{
			public const string ComponentIdUnique = "componentidunique";
			public const string ComponentState = "componentstate";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Data = "data";
			public const string Data_name = "data_name";
			public const string desktopflowbinaryId = "desktopflowbinaryid";
			public const string DesktopFlowModule = "desktopflowmodule";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string IsManaged = "ismanaged";
			public const string Metadata = "metadata";
			public const string MimeType = "mimetype";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string name = "name";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string OverwriteTime = "overwritetime";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string Process = "process";
			public const string Reference = "reference";
			public const string ReferenceName = "referencename";
			public const string SolutionId = "solutionid";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string SupportingSolutionId = "supportingsolutionid";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string Type = "type";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "desktopflowbinary";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10090;
		public const string EntityCollectionSchemaName = "desktopflowbinaries";
		public const string EntityDisplayCollectionName = "Dữ liệu nhị phân dòng màn hình nền";
		public const string DisplayName = "Dữ liệu nhị phân dòng màn hình nền";
		public const string EntitySetName = "desktopflowbinaries";
		public const string EntityLogicalCollectionName = "desktopflowbinaries";
		public const string EntityPrimaryIdAttribute = "desktopflowbinaryid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "name";
		public const string EntitySchemaName = "desktopflowbinary";
		[DebuggerNonUserCode()]
		public desktopflowbinary()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public desktopflowbinary(Guid desktopflowbinaryId)
		{
			Entity = new Entity(EntityLogicalName, desktopflowbinaryId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public desktopflowbinary(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="desktopflowbinary"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public desktopflowbinary(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="desktopflowbinary"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public desktopflowbinary(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new desktopflowbinary(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="desktopflowbinary"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public desktopflowbinary(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new desktopflowbinary(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public desktopflowbinary(KeyAttributeCollection keys)
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
		/// <para><strong>ReadOnly</strong> - <strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.desktopflowbinaryOptionSets.ComponentState"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.desktopflowbinaryOptionSets.ComponentState? ComponentState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ComponentState);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.desktopflowbinaryOptionSets.ComponentState)value.Value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người tạo</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đã tạo bản ghi.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày tạo</para>
		/// <para><strong>Description</strong>: Ngày và giờ tạo bản ghi.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người tạo (đại diện)</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Dữ liệu</para>
		/// <para><strong>Description</strong>: Tệp dựa trên lưu trữ Azure blob chứa dữ liệu nhị phân</para>
		/// <para><strong>ReadOnly</strong> - <strong>Virtual</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Data_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Data_name); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Dữ liệu nhị phân dòng màn hình nền</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của phiên bản thực thể</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid desktopflowbinaryId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.desktopflowbinaryId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ID mô-đun dòng màn hình nền</para>
		/// <para><strong>Description</strong>: ID của thực thể mô-đun dòng màn hình nền chứa dữ liệu nhị phân</para>
		/// <para><strong>Lookup</strong>: <see cref="desktopflowmodule"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference DesktopFlowModule
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.DesktopFlowModule); }
			set { Entity.Attributes[Fields.DesktopFlowModule] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Số thứ tự của lượt nhập</para>
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
		/// <para><strong>Display Name</strong>: Is Managed</para>
		/// <para><strong>Description</strong>: Indicates whether the solution component is part of a managed solution.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Two Option</strong> - [<strong>Được quản lý</strong>]: true - [<strong>Không được quản lý</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Không được quản lý</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsManaged
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsManaged); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Siêu dữ liệu</para>
		/// <para><strong>Description</strong>: Blob JSON chứa siêu dữ liệu về dữ liệu nhị phân</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 20,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Metadata
		{
			get { return Entity.GetAttributeValue<string>(Fields.Metadata); }
			set { Entity.Attributes[Fields.Metadata] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Loại MIME</para>
		/// <para><strong>Description</strong>: Chứa loại MIME của nhị phân</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string MimeType
		{
			get { return Entity.GetAttributeValue<string>(Fields.MimeType); }
			set { Entity.Attributes[Fields.MimeType] = value; }
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
		/// <para><strong>Display Name</strong>: Người sửa đổi (đại diện)</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tên</para>
		/// <para><strong>Description</strong>: Tên thực thể tùy chỉnh.</para>
		/// <para><strong>Primary Name</strong>: Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string name
		{
			get { return Entity.GetAttributeValue<string>(Fields.name); }
			set { Entity.Attributes[Fields.name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày tạo bản ghi</para>
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
		/// <para><strong>Display Name</strong>: ID quá trình</para>
		/// <para><strong>Description</strong>: ID của thực thể quy trình làm việc chứa dữ liệu nhị phân</para>
		/// <para><strong>Lookup</strong>: <see cref="workflow"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference Process
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.Process); }
			set { Entity.Attributes[Fields.Process] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Mã tham chiếu</para>
		/// <para><strong>Description</strong>: Mã tham chiếu cho dữ liệu nhị phân quy trình làm việc</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 100,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Reference
		{
			get { return Entity.GetAttributeValue<string>(Fields.Reference); }
			set { Entity.Attributes[Fields.Reference] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tên tham chiếu</para>
		/// <para><strong>Description</strong>: Tên tham chiếu cho dữ liệu nhị phân quy trình làm việc</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ReferenceName
		{
			get { return Entity.GetAttributeValue<string>(Fields.ReferenceName); }
			set { Entity.Attributes[Fields.ReferenceName] = value; }
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
		/// <para><strong>Display Name</strong>: Trạng thái</para>
		/// <para><strong>Description</strong>: Trạng thái của Dữ liệu nhị phân dòng màn hình nền</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.desktopflowbinaryOptionSets.statecode"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.desktopflowbinaryOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.desktopflowbinaryOptionSets.statecode)value.Value;
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
		/// <para><strong>Description</strong>: Lý do dẫn đến trạng thái của Dữ liệu nhị phân dòng màn hình nền</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.desktopflowbinaryOptionSets.statuscode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.desktopflowbinaryOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.desktopflowbinaryOptionSets.statuscode)value.Value;
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
		/// <para><strong>Display Name</strong>: Số phiên bản quy tắc múi giờ</para>
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
		/// <para><strong>Display Name</strong>: Loại</para>
		/// <para><strong>Description</strong>: Loại của dữ liệu nhị phân quy trình làm việc</para>
		/// <para>Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Type
		{
			get { return Entity.GetAttributeValue<string>(Fields.Type); }
			set { Entity.Attributes[Fields.Type] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Mã múi giờ chuyển đổi theo UTC</para>
		/// <para><strong>Description</strong>: Mã múi giờ đã dùng khi tạo bản ghi.</para>
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