﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-07-30 10:00:05
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.AzureServiceConnectionOptionSets
{
	public enum ConnectionType
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Đề xuất</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		De_xuat = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Phân tích Văn bản</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Phan_tich_Van_ban = 2
	}
	public enum LastConnectionStatusCode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Lỗi</para>
		/// <para><strong>Value</strong>: 2</para>
		/// <para><strong>StateCode.Hien_hoat</strong></para>
		/// </summary>
		Loi = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Thành công</para>
		/// <para><strong>Value</strong>: 1</para>
		/// <para><strong>StateCode.Hien_hoat</strong></para>
		/// </summary>
		Thanh_cong = 1
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
	public partial class AzureServiceConnection : EntityBase
	{
		public struct Fields
		{
			public const string AccountKey = "accountkey";
			public const string AzureServiceConnectionId = "azureserviceconnectionid";
			public const string ConnectionType = "connectiontype";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Description = "description";
			public const string LastConnectionStatusCode = "lastconnectionstatuscode";
			public const string LastConnectionTime = "lastconnectiontime";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string Name = "name";
			public const string OrganizationId = "organizationid";
			public const string ServiceUri = "serviceuri";
			public const string StateCode = "statecode";
			public const string StatusCode = "statuscode";
		}
		public const string EntityLogicalName = "azureserviceconnection";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 9936;
		public const string EntityCollectionSchemaName = "AzureServiceConnections";
		public const string EntityDisplayCollectionName = "Các kết nối Dịch vụ Azure";
		public const string DisplayName = "Kết nối Dịch vụ Azure";
		public const string EntitySetName = "azureserviceconnections";
		public const string EntityLogicalCollectionName = "azureserviceconnections";
		public const string EntityPrimaryIdAttribute = "azureserviceconnectionid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "name";
		public const string EntitySchemaName = "AzureServiceConnection";
		[DebuggerNonUserCode()]
		public AzureServiceConnection()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public AzureServiceConnection(Guid AzureServiceConnectionId)
		{
			Entity = new Entity(EntityLogicalName, AzureServiceConnectionId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public AzureServiceConnection(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="AzureServiceConnection"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public AzureServiceConnection(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="AzureServiceConnection"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public AzureServiceConnection(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new AzureServiceConnection(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="AzureServiceConnection"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public AzureServiceConnection(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new AzureServiceConnection(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public AzureServiceConnection(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Khóa Tài khoản Azure</para>
		/// <para><strong>Description</strong>: Nhập khóa tài khoản Azure.</para>
		/// <para>Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AccountKey
		{
			get { return Entity.GetAttributeValue<string>(Fields.AccountKey); }
			set { Entity.Attributes[Fields.AccountKey] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Kết nối Dịch vụ Azure</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của kết nối dịch vụ Azure.</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid AzureServiceConnectionId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.AzureServiceConnectionId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Loại Kết nối</para>
		/// <para><strong>Description</strong>: Loại kết nối dịch vụ Azure</para>
		/// <para>Required - <strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.AzureServiceConnectionOptionSets.ConnectionType"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.AzureServiceConnectionOptionSets.ConnectionType? ConnectionType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.ConnectionType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.AzureServiceConnectionOptionSets.ConnectionType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.ConnectionType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.ConnectionType] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người tạo</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đã tạo kết nối dịch vụ Azure.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày Tạo</para>
		/// <para><strong>Description</strong>: Ngày và giờ tạo kết nối dịch vụ Azure.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người tạo (Đại diện)</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đại diện đã tạo kết nối dịch vụ Azure.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CreatedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CreatedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Mô tả</para>
		/// <para><strong>Description</strong>: Nhập mô tả của kết nối dịch vụ Azure.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.Description); }
			set { Entity.Attributes[Fields.Description] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Trạng thái Kết nối Sau cùng</para>
		/// <para><strong>Description</strong>: Hiển thị trạng thái của kết nối sau cùng đến dịch vụ Azure.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.AzureServiceConnectionOptionSets.LastConnectionStatusCode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.AzureServiceConnectionOptionSets.LastConnectionStatusCode? LastConnectionStatusCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.LastConnectionStatusCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.AzureServiceConnectionOptionSets.LastConnectionStatusCode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.LastConnectionStatusCode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.LastConnectionStatusCode] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thời gian Kết nối Sau cùng</para>
		/// <para><strong>Description</strong>: hiển thị thời gian của kết nối sau cùng đến dịch vụ Azure.</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? LastConnectionTimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.LastConnectionTime); }
			set { Entity.Attributes[Fields.LastConnectionTime] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người sửa đổi</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đã sửa đổi kết nối dịch vụ Azure.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày Sửa đổi</para>
		/// <para><strong>Description</strong>: Ngày và giờ sửa đổi kết nối dịch vụ Azure lần cuối.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? ModifiedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.ModifiedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người sửa đổi (Đại diện)</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng đại diện đã sửa đổi kết nối dịch vụ Azure lần cuối.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ModifiedOnBehalfBy
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ModifiedOnBehalfBy); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tên</para>
		/// <para><strong>Description</strong>: Nhập tên lôgic cho kết nối.</para>
		/// <para><strong>Primary Name</strong>: Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 160</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Name
		{
			get { return Entity.GetAttributeValue<string>(Fields.Name); }
			set { Entity.Attributes[Fields.Name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tổ chức</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của tổ chức liên kết với kết nối dịch vụ Azure.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="organization"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference OrganizationId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.OrganizationId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: URL Dịch vụ Azure</para>
		/// <para><strong>Description</strong>: Nhập URL dịch vụ cho dịch vụ Azure.</para>
		/// <para>Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 500</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ServiceUri
		{
			get { return Entity.GetAttributeValue<string>(Fields.ServiceUri); }
			set { Entity.Attributes[Fields.ServiceUri] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Trạng thái</para>
		/// <para><strong>Description</strong>: Cho biết kết nối dịch vụ Azure hiện hoạt hay không hoạt động.</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.AzureServiceConnectionOptionSets.StateCode"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.AzureServiceConnectionOptionSets.StateCode.Khong_hoat_dong"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.AzureServiceConnectionOptionSets.StateCode? StateCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StateCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.AzureServiceConnectionOptionSets.StateCode)value.Value;
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
		/// <para><strong>Description</strong>: Chọn trạng thái của kết nối dịch vụ Azure.</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.AzureServiceConnectionOptionSets.StatusCode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.AzureServiceConnectionOptionSets.StatusCode? StatusCode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.StatusCode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.AzureServiceConnectionOptionSets.StatusCode)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.StatusCode] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.StatusCode] = null;
			}
		}
	}
}