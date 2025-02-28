﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-07-30 10:00:04
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.AppModuleOptionSets
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
	public enum NavigationType
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Đa phiên</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Da_phien = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Một phiên</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Mot_phien = 0
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
		/// <para><strong>Display Name</strong>: Đã xóa</para>
		/// <para><strong>Value</strong>: 3</para>
		/// <para><strong>StateCode.Khong_hoat_dong</strong></para>
		/// </summary>
		Da_xoa = 3,
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
	public partial class AppModule : EntityBase
	{
		public struct Fields
		{
			public const string aiappdescription = "aiappdescription";
			public const string aidescriptiongeneratedon = "aidescriptiongeneratedon";
			public const string appgraph = "appgraph";
			public const string AppModuleId = "appmoduleid";
			public const string AppModuleIdUnique = "appmoduleidunique";
			public const string AppModuleVersion = "appmoduleversion";
			public const string AppModuleXmlManaged = "appmodulexmlmanaged";
			public const string ClientType = "clienttype";
			public const string ComponentState = "componentstate";
			public const string ConfigXML = "configxml";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Description = "description";
			public const string Descriptor = "descriptor";
			public const string EventHandlers = "eventhandlers";
			public const string FormFactor = "formfactor";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string IntroducedVersion = "introducedversion";
			public const string IsDefault = "isdefault";
			public const string IsFeatured = "isfeatured";
			public const string IsManaged = "ismanaged";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string Name = "name";
			public const string NavigationType = "navigationtype";
			public const string OptimizedFor = "optimizedfor";
			public const string OrganizationId = "organizationid";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string OverwriteTime = "overwritetime";
			public const string PublishedOn = "publishedon";
			public const string PublisherId = "publisherid";
			public const string SolutionId = "solutionid";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string SupportingSolutionId = "supportingsolutionid";
			public const string UniqueName = "uniquename";
			public const string URL = "url";
			public const string VersionNumber = "versionnumber";
			public const string WebResourceId = "webresourceid";
			public const string WelcomePageId = "welcomepageid";
		}
		public const string EntityLogicalName = "appmodule";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 9006;
		public const string EntityCollectionSchemaName = "AppModules";
		public const string EntityDisplayCollectionName = "Các ứng dụng định hướng mô hình";
		public const string DisplayName = "Ứng dụng định hướng mô hình";
		public const string EntitySetName = "appmodules";
		public const string EntityLogicalCollectionName = "appmodules";
		public const string EntityPrimaryIdAttribute = "appmoduleid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "name";
		public const string EntitySchemaName = "AppModule";
		[DebuggerNonUserCode()]
		public AppModule()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public AppModule(Guid AppModuleId)
		{
			Entity = new Entity(EntityLogicalName, AppModuleId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public AppModule(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="AppModule"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public AppModule(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="AppModule"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public AppModule(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new AppModule(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="AppModule"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public AppModule(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new AppModule(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public AppModule(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Nội dung mô tả ứng dụng của trí tuệ nhân tạo</para>
		/// <para><strong>Description</strong>: Trường này dùng để lưu trữ nội dung mô tả do trí tuệ nhân tạo đã tạo cho ứng dụng dựa trên mô hình</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 1,048,576</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string aiappdescription
		{
			get { return Entity.GetAttributeValue<string>(Fields.aiappdescription); }
			set { Entity.Attributes[Fields.aiappdescription] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày trí tuệ nhân tạo đã tạo ra nội dung mô tả</para>
		/// <para><strong>Description</strong>: Trường này lưu trữ thời gian mà trí tuệ nhân tạo đã tạo ra nội dung mô tả ứng dụng gần đây nhất.</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? aidescriptiongeneratedonUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.aidescriptiongeneratedon); }
			set { Entity.Attributes[Fields.aidescriptiongeneratedon] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Biểu đồ ứng dụng</para>
		/// <para><strong>Description</strong>: Trường này dùng để lưu trữ biểu đồ ứng dụng cho ứng dụng dựa trên mô hình</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 1,048,576</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string appgraph
		{
			get { return Entity.GetAttributeValue<string>(Fields.appgraph); }
			set { Entity.Attributes[Fields.appgraph] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: AppModuleId</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của phiên bản thực thể</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid AppModuleId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.AppModuleId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ID Duy nhất của Mô-đun Ứng dụng</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của Mô-đun Ứng dụng được sử dụng khi đồng bộ các tùy chỉnh cho ứng dụng khách Microsoft Dynamics 365 dành cho Outlook</para>
		/// <para><strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? AppModuleIdUnique
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.AppModuleIdUnique); }
			set { Entity.Attributes[Fields.AppModuleIdUnique] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Phiên bản Mô-đun Ứng dụng</para>
		/// <para><strong>Description</strong>: Phiên bản Mô-đun Ứng dụng</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 48</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AppModuleVersion
		{
			get { return Entity.GetAttributeValue<string>(Fields.AppModuleVersion); }
			set { Entity.Attributes[Fields.AppModuleVersion] = value; }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Xml Mô-đun Ứng dụng Được quản lý</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 1,073,741,823</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AppModuleXmlManaged
		{
			get { return Entity.GetAttributeValue<string>(Fields.AppModuleXmlManaged); }
			set { Entity.Attributes[Fields.AppModuleXmlManaged] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Loại Máy khách</para>
		/// <para><strong>Description</strong>: Loại Máy khách như Web hoặc UCI</para>
		/// <para>Required - <strong>Whole Number</strong> - <strong>MinValue</strong>: 1 - <strong>MaxValue</strong>: 31</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ClientType
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ClientType); }
			set { Entity.Attributes[Fields.ClientType] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Trạng thái Thành phần</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ</para>
		/// <para><strong>ReadOnly</strong> - <strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.AppModuleOptionSets.ComponentState"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.AppModuleOptionSets.ComponentState? ComponentState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ComponentState);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.AppModuleOptionSets.ComponentState)value.Value;
			}
		}
		/// <summary>
		/// <para><strong>Description</strong>: Chứa XML cấu hình</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 1,073,741,823</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ConfigXML
		{
			get { return Entity.GetAttributeValue<string>(Fields.ConfigXML); }
			set { Entity.Attributes[Fields.ConfigXML] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người Tạo</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đã tạo bản ghi.</para>
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
		/// <para><strong>Display Name</strong>: Người Tạo (Đại diện)</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đại diện đã tạo bản ghi.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Mô tả</para>
		/// <para><strong>Description</strong>: Mô tả về thực thể</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.Description); }
			set { Entity.Attributes[Fields.Description] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thông tin mô tả</para>
		/// <para><strong>Description</strong>: Thông tin mô tả Mô-đun Ứng dụng</para>
		/// <para><strong>ReadOnly</strong> - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 1,073,741,823</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Descriptor
		{
			get { return Entity.GetAttributeValue<string>(Fields.Descriptor); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Quy trình Xử lý Sự kiện</para>
		/// <para><strong>Description</strong>: Quy trình Xử lý Sự kiện Mô-đun Ứng dụng</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 1,073,741,823</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string EventHandlers
		{
			get { return Entity.GetAttributeValue<string>(Fields.EventHandlers); }
			set { Entity.Attributes[Fields.EventHandlers] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Nhân tố biểu mẫu</para>
		/// <para><strong>Description</strong>: Nhân tố biểu mẫu</para>
		/// <para>Required - <strong>Whole Number</strong> - <strong>MinValue</strong>: 1 - <strong>MaxValue</strong>: 8</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? FormFactor
		{
			get { return Entity.GetAttributeValue<int?>(Fields.FormFactor); }
			set { Entity.Attributes[Fields.FormFactor] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Số thứ tự nhập</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của quá trình nhập dữ liệu hoặc di chuyển dữ liệu đã tạo bản ghi này.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? ImportSequenceNumber
		{
			get { return Entity.GetAttributeValue<int?>(Fields.ImportSequenceNumber); }
			set { Entity.Attributes[Fields.ImportSequenceNumber] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Phiên bản được Giới thiệu</para>
		/// <para><strong>Description</strong>: Phiên bản trong đó quy tắc tương tự được giới thiệu.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string IntroducedVersion
		{
			get { return Entity.GetAttributeValue<string>(Fields.IntroducedVersion); }
			set { Entity.Attributes[Fields.IntroducedVersion] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Là mặc định</para>
		/// <para><strong>Description</strong>: Là mặc định</para>
		/// <para>Required - <strong>Two Option</strong> - [<strong>Có</strong>]: true - [<strong>Không</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Không</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsDefault
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsDefault); }
			set { Entity.Attributes[Fields.IsDefault] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: IsFeatured</para>
		/// <para><strong>Description</strong>: Là nổi bật</para>
		/// <para><strong>Two Option</strong> - [<strong>Có</strong>]: true - [<strong>Không</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Không</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsFeatured
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsFeatured); }
			set { Entity.Attributes[Fields.IsFeatured] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: IsManaged</para>
		/// <para><strong>Description</strong>: Được quản lý</para>
		/// <para><strong>ReadOnly</strong> - Required - <strong>Two Option</strong> - [<strong>Được quản lý</strong>]: true - [<strong>Không được quản lý</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Không được quản lý</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsManaged
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsManaged); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người Sửa đổi</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng sửa đổi bản ghi.</para>
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
		/// <para><strong>Display Name</strong>: Người Sửa đổi (Đại diện)</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đại diện đã sửa đổi bản ghi.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tên</para>
		/// <para><strong>Description</strong>: Tên Mô-đun Ứng dụng</para>
		/// <para><strong>Primary Name</strong>: <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Loại điều hướng</para>
		/// <para><strong>Description</strong>: Loại điều hướng ứng dụng</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.AppModuleOptionSets.NavigationType"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.AppModuleOptionSets.NavigationType? NavigationType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.NavigationType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.AppModuleOptionSets.NavigationType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.NavigationType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.NavigationType] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Máy khách được Tối ưu hóa</para>
		/// <para><strong>Description</strong>: Máy khách mà ứng dụng này được tối ưu hóa</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string OptimizedFor
		{
			get { return Entity.GetAttributeValue<string>(Fields.OptimizedFor); }
			set { Entity.Attributes[Fields.OptimizedFor] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tổ chức</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của tổ chức liên kết với ứng dụng.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="organization"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày Tạo Bản ghi</para>
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
		/// <para><strong>Display Name</strong>: Ghi đè Thời gian</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateOnly</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OverwriteTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OverwriteTime); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày Xuất bản</para>
		/// <para><strong>Description</strong>: Ngày và giờ xuất bản bản ghi.</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? PublishedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.PublishedOn); }
			set { Entity.Attributes[Fields.PublishedOn] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Nhà phát hành</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của nhà phát hành.</para>
		/// <para>Required - <strong>Lookup</strong>: <see cref="publisher"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference PublisherId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.PublisherId); }
			set { Entity.Attributes[Fields.PublisherId] = value; }
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
		/// <para><strong>Display Name</strong>: Trạng thái</para>
		/// <para><strong>Description</strong>: Trạng thái của Ứng dụng dựa trên mô hình</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.AppModuleOptionSets.statecode"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.AppModuleOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.AppModuleOptionSets.statecode)value.Value;
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
		/// <para><strong>Description</strong>: Lý do dẫn đến trạng thái của Ứng dụng dựa trên mô hình</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.AppModuleOptionSets.statuscode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.AppModuleOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.AppModuleOptionSets.statuscode)value.Value;
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
		/// <para><strong>Display Name</strong>: Tên duy nhất</para>
		/// <para><strong>Description</strong>: Tên duy nhất của mô-đun ứng dụng</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string UniqueName
		{
			get { return Entity.GetAttributeValue<string>(Fields.UniqueName); }
			set { Entity.Attributes[Fields.UniqueName] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: URL</para>
		/// <para><strong>Description</strong>: Chứa URL</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string URL
		{
			get { return Entity.GetAttributeValue<string>(Fields.URL); }
			set { Entity.Attributes[Fields.URL] = value; }
		}
		/// <summary>
		/// <para><strong>ReadOnly</strong> - <strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ID Tài nguyên Web</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của Tài nguyên Web</para>
		/// <para><strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? WebResourceId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.WebResourceId); }
			set { Entity.Attributes[Fields.WebResourceId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ID Trang Chào mừng</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của Tài nguyên Web dưới dạng ID Trang Chào mừng</para>
		/// <para><strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? WelcomePageId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.WelcomePageId); }
			set { Entity.Attributes[Fields.WelcomePageId] = value; }
		}
	}
}