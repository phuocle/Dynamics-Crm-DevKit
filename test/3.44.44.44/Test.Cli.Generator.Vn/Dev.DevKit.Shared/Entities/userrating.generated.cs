﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-07-30 10:01:25
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.userratingOptionSets
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
	public partial class userrating : EntityBase
	{
		public struct Fields
		{
			public const string AppModuleId = "appmoduleid";
			public const string Browser = "browser";
			public const string Comment = "comment";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Device = "device";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string Name = "name";
			public const string OrganizationId = "organizationid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string Score = "score";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string userratingId = "userratingid";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "userrating";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10241;
		public const string EntityCollectionSchemaName = "userratings";
		public const string EntityDisplayCollectionName = "Xếp hạng người dùng";
		public const string DisplayName = "Xếp hạng người dùng";
		public const string EntitySetName = "userratings";
		public const string EntityLogicalCollectionName = "userratings";
		public const string EntityPrimaryIdAttribute = "userratingid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "name";
		public const string EntitySchemaName = "userrating";
		[DebuggerNonUserCode()]
		public userrating()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public userrating(Guid userratingId)
		{
			Entity = new Entity(EntityLogicalName, userratingId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public userrating(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="userrating"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public userrating(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="userrating"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public userrating(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new userrating(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="userrating"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public userrating(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new userrating(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public userrating(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ID mô-đun ứng dụng</para>
		/// <para><strong>Lookup</strong>: <see cref="appmodule"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference AppModuleId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.AppModuleId); }
			set { Entity.Attributes[Fields.AppModuleId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Trình duyệt</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Browser
		{
			get { return Entity.GetAttributeValue<string>(Fields.Browser); }
			set { Entity.Attributes[Fields.Browser] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Nhận xét</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Comment
		{
			get { return Entity.GetAttributeValue<string>(Fields.Comment); }
			set { Entity.Attributes[Fields.Comment] = value; }
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
		/// <para><strong>Display Name</strong>: Thiết bị</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Device
		{
			get { return Entity.GetAttributeValue<string>(Fields.Device); }
			set { Entity.Attributes[Fields.Device] = value; }
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
		/// <para><strong>Description</strong>: Trường tên bắt buộc</para>
		/// <para><strong>Primary Name</strong>: <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Organization Id</para>
		/// <para><strong>Description</strong>: Unique identifier for the organization</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="organization"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
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
		/// <para><strong>Display Name</strong>: Điểm số</para>
		/// <para>Required - <strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? Score
		{
			get { return Entity.GetAttributeValue<int?>(Fields.Score); }
			set { Entity.Attributes[Fields.Score] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Trạng thái</para>
		/// <para><strong>Description</strong>: Trạng thái Xếp hạng người dùng</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.userratingOptionSets.statecode"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.userratingOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.userratingOptionSets.statecode)value.Value;
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
		/// <para><strong>Description</strong>: Lý do dẫn đến trạng thái của Xếp hạng người dùng</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.userratingOptionSets.statuscode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.userratingOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.userratingOptionSets.statuscode)value.Value;
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
		/// <para><strong>Display Name</strong>: Xếp hạng người dùng</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của phiên bản thực thể</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid userratingId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.userratingId] = value;
				Entity.Id = value;
			}
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