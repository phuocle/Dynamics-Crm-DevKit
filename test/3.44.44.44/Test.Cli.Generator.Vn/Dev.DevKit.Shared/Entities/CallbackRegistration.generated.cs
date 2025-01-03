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
namespace Dev.DevKit.Shared.Entities.CallbackRegistrationOptionSets
{
	public enum Message
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Cập nhật</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Cap_nhat = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Cập nhật hoặc Xóa</para>
		/// <para><strong>Value</strong>: 6</para>
		/// </summary>
		Cap_nhat_hoac_Xoa = 6,
		/// <summary>
		/// <para><strong>Display Name</strong>: Tạo</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Tao = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Tạo hoặc Cập nhật</para>
		/// <para><strong>Value</strong>: 4</para>
		/// </summary>
		Tao_hoac_Cap_nhat = 4,
		/// <summary>
		/// <para><strong>Display Name</strong>: Tạo hoặc Cập nhật hoặc Xóa</para>
		/// <para><strong>Value</strong>: 7</para>
		/// </summary>
		Tao_hoac_Cap_nhat_hoac_Xoa = 7,
		/// <summary>
		/// <para><strong>Display Name</strong>: Tạo hoặc Xóa</para>
		/// <para><strong>Value</strong>: 5</para>
		/// </summary>
		Tao_hoac_Xoa = 5,
		/// <summary>
		/// <para><strong>Display Name</strong>: Xóa</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Xoa = 2
	}
	public enum RunAs
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Chủ sở hữu Bản ghi</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Chu_so_huu_Ban_ghi = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Chủ sở hữu Quy trình</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Chu_so_huu_Quy_trinh = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đang kích hoạt Người dùng</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Dang_kich_hoat_Nguoi_dung = 1
	}
	public enum Scope
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Đơn vị Kinh doanh</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Don_vi_Kinh_doanh = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Người dùng</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Nguoi_dung = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: ParentChildBusinessUnit</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		ParentChildBusinessUnit = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Tổ chức</para>
		/// <para><strong>Value</strong>: 4</para>
		/// </summary>
		To_chuc = 4
	}
	public enum Version
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: V1</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		V1 = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: V2</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		V2 = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: V3</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		V3 = 3
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class CallbackRegistration : EntityBase
	{
		public struct Fields
		{
			public const string CallbackRegistrationId = "callbackregistrationid";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string EntityName = "entityname";
			public const string FilterExpression = "filterexpression";
			public const string FilteringAttributes = "filteringattributes";
			public const string HardDelete = "harddelete";
			public const string LogicAppsVersion = "logicappsversion";
			public const string Message = "message";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string Name = "name";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string PostponeUntil = "postponeuntil";
			public const string RunAs = "runas";
			public const string RuntimeIntegrationProperties = "runtimeintegrationproperties";
			public const string Scope = "scope";
			public const string SdkMessageName = "sdkmessagename";
			public const string SoftDeleteStatus = "softdeletestatus";
			public const string Url = "url";
			public const string Version = "version";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "callbackregistration";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 301;
		public const string EntityCollectionSchemaName = "CallbackRegistrations";
		public const string EntityDisplayCollectionName = "Đăng ký Cuộc gọi lại";
		public const string DisplayName = "Đăng ký Cuộc gọi lại";
		public const string EntitySetName = "callbackregistrations";
		public const string EntityLogicalCollectionName = "callbackregistrations";
		public const string EntityPrimaryIdAttribute = "callbackregistrationid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "name";
		public const string EntitySchemaName = "CallbackRegistration";
		[DebuggerNonUserCode()]
		public CallbackRegistration()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public CallbackRegistration(Guid CallbackRegistrationId)
		{
			Entity = new Entity(EntityLogicalName, CallbackRegistrationId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public CallbackRegistration(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="CallbackRegistration"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public CallbackRegistration(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="CallbackRegistration"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public CallbackRegistration(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new CallbackRegistration(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="CallbackRegistration"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public CallbackRegistration(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new CallbackRegistration(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public CallbackRegistration(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của đăng ký cuộc gọi lại.</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid CallbackRegistrationId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.CallbackRegistrationId] = value;
				Entity.Id = value;
			}
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
		/// <para><strong>Description</strong>: Ngày và giờ tạo đăng ký cuộc gọi lại.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người tạo (Đại diện)</para>
		/// <para><strong>Description</strong>: Hiển thị người tạo bản ghi thay mặt cho người dùng khác.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tên Thực thể</para>
		/// <para><strong>Description</strong>: Tên Thực thể.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 255</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string EntityName2
		{
			get { return Entity.GetAttributeValue<string>(Fields.EntityName); }
			set { Entity.Attributes[Fields.EntityName] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Lọc Biểu thức</para>
		/// <para><strong>Description</strong>: điều kiện được biểu thị bằng cú pháp OData $filter</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string FilterExpression
		{
			get { return Entity.GetAttributeValue<string>(Fields.FilterExpression); }
			set { Entity.Attributes[Fields.FilterExpression] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thuộc tính lọc</para>
		/// <para><strong>Description</strong>: Danh sách thuộc tính, phân tách bằng dấu phẩy. Nếu sửa ít nhất một thuộc tính thì URL cuộc gọi lại phải được gọi.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string FilteringAttributes
		{
			get { return Entity.GetAttributeValue<string>(Fields.FilteringAttributes); }
			set { Entity.Attributes[Fields.FilteringAttributes] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Hard Delete</para>
		/// <para><strong>Description</strong>: For internal use only. Holds hard delete information.</para>
		/// <para><strong>Two Option</strong> - [<strong></strong>]: true - [<strong></strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong></strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? HardDelete
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.HardDelete); }
			set { Entity.Attributes[Fields.HardDelete] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Logic Apps Version</para>
		/// <para><strong>Description</strong>: For internal use only. Holds version of logic apps trigger.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string LogicAppsVersion
		{
			get { return Entity.GetAttributeValue<string>(Fields.LogicAppsVersion); }
			set { Entity.Attributes[Fields.LogicAppsVersion] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Nêu rõ loại thông báo</para>
		/// <para><strong>Description</strong>: Nêu rõ loại thông báo</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.CallbackRegistrationOptionSets.Message"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.CallbackRegistrationOptionSets.Message? Message
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.Message);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.CallbackRegistrationOptionSets.Message)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Message] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.Message] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người sửa đổi</para>
		/// <para><strong>Description</strong>: Cho biết người cập nhật bản ghi sau cùng.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày sửa đổi</para>
		/// <para><strong>Description</strong>: Ngày và giờ sửa đổi đăng ký cuộc gọi lại lần cuối.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người sửa đổi (Đại diện)</para>
		/// <para><strong>Description</strong>: Cho biết người cập nhật bản ghi lần cuối thay mặt cho người dùng khác.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tên</para>
		/// <para><strong>Description</strong>: Tên đăng ký cuộc gọi lại.</para>
		/// <para><strong>Primary Name</strong>: <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 256</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Chủ sở hữu</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng hoặc nhóm sở hữu đăng ký cuộc gọi lại.</para>
		/// <para><strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwnerId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwnerId); }
			set { Entity.Attributes[Fields.OwnerId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Đơn vị Kinh doanh Sở hữu</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của đơn vị kinh doanh sở hữu đăng ký cuộc gọi lại.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="businessunit"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningBusinessUnit
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningBusinessUnit); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Nhóm sở hữu</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của nhóm sở hữu đăng ký cuộc gọi lại.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="team"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningTeam
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningTeam); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người dùng Sở hữu</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng sở hữu đăng ký cuộc gọi lại.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OwningUser
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OwningUser); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Hoãn Cho đến</para>
		/// <para><strong>Description</strong>: độ trễ biểu thị bằng biểu thức OData</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string PostponeUntil
		{
			get { return Entity.GetAttributeValue<string>(Fields.PostponeUntil); }
			set { Entity.Attributes[Fields.PostponeUntil] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: RunAs</para>
		/// <para><strong>Description</strong>: Chỉ định bối cảnh người dùng mà cuộc gọi lại này sẽ thực hiện</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.CallbackRegistrationOptionSets.RunAs"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.CallbackRegistrationOptionSets.RunAs? RunAs
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.RunAs);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.CallbackRegistrationOptionSets.RunAs)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.RunAs] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.RunAs] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thuộc tính tích hợp thời gian chạy</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ. Giữ các thuộc tính chung liên quan đến tích hợp thời gian chạy.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 512</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string RuntimeIntegrationProperties
		{
			get { return Entity.GetAttributeValue<string>(Fields.RuntimeIntegrationProperties); }
			set { Entity.Attributes[Fields.RuntimeIntegrationProperties] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Chỉ định loại phạm vi</para>
		/// <para><strong>Description</strong>: Chỉ định Phạm vi</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.CallbackRegistrationOptionSets.Scope"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.CallbackRegistrationOptionSets.Scope? Scope
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.Scope);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.CallbackRegistrationOptionSets.Scope)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Scope] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.Scope] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: SDK Message Name</para>
		/// <para><strong>Description</strong>: Name of the SDK message the subscriber is interested in</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 256</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string SdkMessageName
		{
			get { return Entity.GetAttributeValue<string>(Fields.SdkMessageName); }
			set { Entity.Attributes[Fields.SdkMessageName] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Soft Delete Status</para>
		/// <para><strong>Description</strong>: For internal use only. Holds soft delete information.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>: -2,147,483,648 - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? SoftDeleteStatus
		{
			get { return Entity.GetAttributeValue<int?>(Fields.SoftDeleteStatus); }
			set { Entity.Attributes[Fields.SoftDeleteStatus] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Địa chỉ Url</para>
		/// <para><strong>Description</strong>: URL đăng ký cuộc gọi lại đầy đủ.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Url
		{
			get { return Entity.GetAttributeValue<string>(Fields.Url); }
			set { Entity.Attributes[Fields.Url] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Chỉ định loại phiên bản đăng ký Cuộc gọi lại</para>
		/// <para><strong>Description</strong>: Chỉ định loại phiên bản đăng ký Cuộc gọi lại</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.CallbackRegistrationOptionSets.Version"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.CallbackRegistrationOptionSets.Version? Version
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.Version);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.CallbackRegistrationOptionSets.Version)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.Version] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.Version] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Version Number</para>
		/// <para><strong>Description</strong>: Version number of the callbackregistration.</para>
		/// <para><strong>ReadOnly</strong> - <strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}