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
namespace Dev.DevKit.Shared.Entities.WebResourceOptionSets
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
	public enum WebResourceType
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Chuỗi (RESX)</para>
		/// <para><strong>Value</strong>: 12</para>
		/// </summary>
		Chuoi_RESX = 12,
		/// <summary>
		/// <para><strong>Display Name</strong>: Định dạng GIF</para>
		/// <para><strong>Value</strong>: 7</para>
		/// </summary>
		Dinh_dang_GIF = 7,
		/// <summary>
		/// <para><strong>Display Name</strong>: Định dạng ICO</para>
		/// <para><strong>Value</strong>: 10</para>
		/// </summary>
		Dinh_dang_ICO = 10,
		/// <summary>
		/// <para><strong>Display Name</strong>: Định dạng JPG</para>
		/// <para><strong>Value</strong>: 6</para>
		/// </summary>
		Dinh_dang_JPG = 6,
		/// <summary>
		/// <para><strong>Display Name</strong>: Định dạng PNG</para>
		/// <para><strong>Value</strong>: 5</para>
		/// </summary>
		Dinh_dang_PNG = 5,
		/// <summary>
		/// <para><strong>Display Name</strong>: Định dạng véc tơ (SVG)</para>
		/// <para><strong>Value</strong>: 11</para>
		/// </summary>
		Dinh_dang_vec_to_SVG = 11,
		/// <summary>
		/// <para><strong>Display Name</strong>: Dữ liệu (XML)</para>
		/// <para><strong>Value</strong>: 4</para>
		/// </summary>
		Du_lieu_XML = 4,
		/// <summary>
		/// <para><strong>Display Name</strong>: Script (JScript)</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Script_JScript = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Silverlight (XAP)</para>
		/// <para><strong>Value</strong>: 8</para>
		/// </summary>
		Silverlight_XAP = 8,
		/// <summary>
		/// <para><strong>Display Name</strong>: Tờ mẫu (CSS)</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		To_mau_CSS = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Tờ mẫu (XSL)</para>
		/// <para><strong>Value</strong>: 9</para>
		/// </summary>
		To_mau_XSL = 9,
		/// <summary>
		/// <para><strong>Display Name</strong>: Trang web (HTML)</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Trang_web_HTML = 1
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class WebResource : EntityBase
	{
		public struct Fields
		{
			public const string ComponentState = "componentstate";
			public const string Content = "content";
			public const string ContentFileRef = "contentfileref";
			public const string ContentFileRef_name = "contentfileref_name";
			public const string ContentJson = "contentjson";
			public const string ContentJsonFileRef = "contentjsonfileref";
			public const string ContentJsonFileRef_name = "contentjsonfileref_name";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string DependencyXml = "dependencyxml";
			public const string Description = "description";
			public const string DisplayName = "displayname";
			public const string IntroducedVersion = "introducedversion";
			public const string IsAvailableForMobileOffline = "isavailableformobileoffline";
			public const string IsEnabledForMobileClient = "isenabledformobileclient";
			public const string IsManaged = "ismanaged";
			public const string LanguageCode = "languagecode";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string Name = "name";
			public const string OrganizationId = "organizationid";
			public const string OverwriteTime = "overwritetime";
			public const string SilverlightVersion = "silverlightversion";
			public const string SolutionId = "solutionid";
			public const string SupportingSolutionId = "supportingsolutionid";
			public const string VersionNumber = "versionnumber";
			public const string WebResourceId = "webresourceid";
			public const string WebResourceIdUnique = "webresourceidunique";
			public const string WebResourceType = "webresourcetype";
		}
		public const string EntityLogicalName = "webresource";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 9333;
		public const string EntityCollectionSchemaName = "WebResources";
		public const string EntityDisplayCollectionName = "Tài nguyên web";
		public const string DisplayName = "Tài nguyên web";
		public const string EntitySetName = "webresourceset";
		public const string EntityLogicalCollectionName = "webresources";
		public const string EntityPrimaryIdAttribute = "webresourceid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "name";
		public const string EntitySchemaName = "WebResource";
		[DebuggerNonUserCode()]
		public WebResource()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public WebResource(Guid WebResourceId)
		{
			Entity = new Entity(EntityLogicalName, WebResourceId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public WebResource(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="WebResource"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public WebResource(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="WebResource"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public WebResource(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new WebResource(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="WebResource"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public WebResource(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new WebResource(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public WebResource(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Trạng thái Thành phần</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.WebResourceOptionSets.ComponentState"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.WebResourceOptionSets.ComponentState? ComponentState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ComponentState);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.WebResourceOptionSets.ComponentState)value.Value;
			}
		}
		/// <summary>
		/// <para><strong>Description</strong>: Byte của tài nguyên web, trong định dạng Base64.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 1,073,741,823</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Content
		{
			get { return Entity.GetAttributeValue<string>(Fields.Content); }
			set { Entity.Attributes[Fields.Content] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ContentFileRef</para>
		/// <para><strong>Description</strong>: Tham chiếu đến tệp nội dung trên Azure.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Virtual</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ContentFileRef_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.ContentFileRef_name); }
		}
		/// <summary>
		/// <para><strong>Description</strong>: Trình bày Json của nội dung nguồn lực.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 1,073,741,823</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ContentJson
		{
			get { return Entity.GetAttributeValue<string>(Fields.ContentJson); }
			set { Entity.Attributes[Fields.ContentJson] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ContentJsonFileRef</para>
		/// <para><strong>Description</strong>: Tham chiếu đến tệp nội dung Json trên Azure.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Virtual</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ContentJsonFileRef_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.ContentJsonFileRef_name); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người tạo</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đã tạo tài nguyên web.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày tạo</para>
		/// <para><strong>Description</strong>: Ngày và giờ tạo tài nguyên web.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người tạo (Đại diện)</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đại diện đã tạo tài nguyên web.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: DependencyXML</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 5,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string DependencyXml
		{
			get { return Entity.GetAttributeValue<string>(Fields.DependencyXml); }
			set { Entity.Attributes[Fields.DependencyXml] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Mô tả</para>
		/// <para><strong>Description</strong>: Mô tả về tài nguyên web.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.Description); }
			set { Entity.Attributes[Fields.Description] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tên hiển thị</para>
		/// <para><strong>Description</strong>: Tên hiển thị của tài nguyên web.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 200</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string DisplayName2
		{
			get { return Entity.GetAttributeValue<string>(Fields.DisplayName); }
			set { Entity.Attributes[Fields.DisplayName] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Phiên bản được Giới thiệu</para>
		/// <para><strong>Description</strong>: Phiên bản có biểu mẫu được giới thiệu.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 48</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string IntroducedVersion
		{
			get { return Entity.GetAttributeValue<string>(Fields.IntroducedVersion); }
			set { Entity.Attributes[Fields.IntroducedVersion] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Khả dụng Đối với Mobile Offline</para>
		/// <para><strong>Description</strong>: Thông tin chỉ định xem tài nguyên web này có khả dụng cho máy khách di động trong chế độ ngoại tuyến hay không.</para>
		/// <para><strong>Two Option</strong> - [<strong>Có</strong>]: true - [<strong>Không</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Không</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsAvailableForMobileOffline
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsAvailableForMobileOffline); }
			set { Entity.Attributes[Fields.IsAvailableForMobileOffline] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Bật cho máy khách di động</para>
		/// <para><strong>Description</strong>: Thông tin chỉ định khả năng sẽ bật tài nguyên web này cho máy khách di động.</para>
		/// <para><strong>Two Option</strong> - [<strong>Có</strong>]: true - [<strong>Không</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Không</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsEnabledForMobileClient
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsEnabledForMobileClient); }
			set { Entity.Attributes[Fields.IsEnabledForMobileClient] = value; }
		}
		/// <summary>
		/// <para><strong>ReadOnly</strong> - <strong>Two Option</strong> - [<strong>Được quản lý</strong>]: true - [<strong>Không được quản lý</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Không được quản lý</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? IsManaged
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.IsManaged); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngôn ngữ</para>
		/// <para><strong>Description</strong>: Ngôn ngữ của tài nguyên web.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? LanguageCode
		{
			get { return Entity.GetAttributeValue<int?>(Fields.LanguageCode); }
			set { Entity.Attributes[Fields.LanguageCode] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người Sửa đổi</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng sửa đổi tài nguyên web lần cuối.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Sửa đổi Vào</para>
		/// <para><strong>Description</strong>: Ngày và giờ sửa đổi tài nguyên web lần cuối.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người tạo (Đại diện)</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đại diện đã sửa tài nguyên web.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tên</para>
		/// <para><strong>Description</strong>: Tên của tài nguyên web.</para>
		/// <para><strong>Primary Name</strong>: <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 256</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tổ chức</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của tổ chức liên kết với tài nguyên web.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="organization"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
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
		/// <para><strong>Display Name</strong>: Phiên bản Silverlight</para>
		/// <para><strong>Description</strong>: Tài nguyên web Silverlight yêu cầu phải có số phiên bản thời gian chạy Silverlight.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 20</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SilverlightVersion
		{
			get { return Entity.GetAttributeValue<string>(Fields.SilverlightVersion); }
			set { Entity.Attributes[Fields.SilverlightVersion] = value; }
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
		/// <para><strong>ReadOnly</strong> - <strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Mã định danh tài nguyên web</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của tài nguyên web.</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid WebResourceId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.WebResourceId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? WebResourceIdUnique
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.WebResourceIdUnique); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Loại</para>
		/// <para><strong>Description</strong>: Danh sách thả xuống để chọn loại tài nguyên web.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.WebResourceOptionSets.WebResourceType"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.WebResourceOptionSets.WebResourceType? WebResourceType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.WebResourceType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.WebResourceOptionSets.WebResourceType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.WebResourceType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.WebResourceType] = null;
			}
		}
	}
}