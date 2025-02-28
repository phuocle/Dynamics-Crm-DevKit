﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-07-30 10:00:25
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.flowmachineOptionSets
{
	public enum HostedMachineState
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã bật</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Da_bat = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã tắt</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Da_tat = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Lỗi</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Loi = 2
	}
	public enum HostingType
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Được lưu trữ</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Duoc_luu_tru = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Khách hàng</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Khach_hang = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: PC trên đám mây</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		PC_tren_dam_may = 2
	}
	public enum KeyDeliveryStatus
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: KeyExpired</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		KeyExpired = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Mặc định</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Mac_dinh = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: PendingNewKey</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		PendingNewKey = 2
	}
	public enum LastKnownPictureInPictureSupport
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã bật</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Da_bat = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã tắt</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Da_tat = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Không xác định</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Khong_xac_dinh = 0
	}
	public enum statecode
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Bảo trì</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Bao_tri = 2,
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
		/// <para><strong>Display Name</strong>: Đã tắt</para>
		/// <para><strong>Value</strong>: 9</para>
		/// <para><strong>StateCode.Bao_tri</strong></para>
		/// </summary>
		Da_tat = 9,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đang cung cấp</para>
		/// <para><strong>Value</strong>: 10</para>
		/// <para><strong>StateCode.Bao_tri</strong></para>
		/// </summary>
		Dang_cung_cap = 10,
		/// <summary>
		/// <para><strong>Display Name</strong>: DrainMode</para>
		/// <para><strong>Value</strong>: 5</para>
		/// <para><strong>StateCode.Bao_tri</strong></para>
		/// </summary>
		DrainMode = 5,
		/// <summary>
		/// <para><strong>Display Name</strong>: Hiện hoạt</para>
		/// <para><strong>Value</strong>: 1</para>
		/// <para><strong>StateCode.Hien_hoat</strong></para>
		/// </summary>
		Hien_hoat = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: HostedMachineOvercapacity</para>
		/// <para><strong>Value</strong>: 13</para>
		/// <para><strong>StateCode.Hien_hoat</strong></para>
		/// </summary>
		HostedMachineOvercapacity = 13,
		/// <summary>
		/// <para><strong>Display Name</strong>: HostedMachineOvercapacityDeleted</para>
		/// <para><strong>Value</strong>: 14</para>
		/// <para><strong>StateCode.Bao_tri</strong></para>
		/// </summary>
		HostedMachineOvercapacityDeleted = 14,
		/// <summary>
		/// <para><strong>Display Name</strong>: HostedMachineOvercapacityDisabled</para>
		/// <para><strong>Value</strong>: 15</para>
		/// <para><strong>StateCode.Bao_tri</strong></para>
		/// </summary>
		HostedMachineOvercapacityDisabled = 15,
		/// <summary>
		/// <para><strong>Display Name</strong>: Không hoạt động</para>
		/// <para><strong>Value</strong>: 2</para>
		/// <para><strong>StateCode.Khong_hoat_dong</strong></para>
		/// </summary>
		Khong_hoat_dong = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Lỗi</para>
		/// <para><strong>Value</strong>: 8</para>
		/// <para><strong>StateCode.Bao_tri</strong></para>
		/// </summary>
		Loi = 8,
		/// <summary>
		/// <para><strong>Display Name</strong>: ManualMaintenance</para>
		/// <para><strong>Value</strong>: 4</para>
		/// <para><strong>StateCode.Bao_tri</strong></para>
		/// </summary>
		ManualMaintenance = 4,
		/// <summary>
		/// <para><strong>Display Name</strong>: ProvisionedWithError</para>
		/// <para><strong>Value</strong>: 12</para>
		/// <para><strong>StateCode.Bao_tri</strong></para>
		/// </summary>
		ProvisionedWithError = 12,
		/// <summary>
		/// <para><strong>Display Name</strong>: RequiresGroupKey</para>
		/// <para><strong>Value</strong>: 11</para>
		/// <para><strong>StateCode.Bao_tri</strong></para>
		/// </summary>
		RequiresGroupKey = 11,
		/// <summary>
		/// <para><strong>Display Name</strong>: RequiresReconnection</para>
		/// <para><strong>Value</strong>: 3</para>
		/// <para><strong>StateCode.Bao_tri</strong></para>
		/// </summary>
		RequiresReconnection = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Sẽ xóa</para>
		/// <para><strong>Value</strong>: 6</para>
		/// <para><strong>StateCode.Bao_tri</strong></para>
		/// </summary>
		Se_xoa = 6,
		/// <summary>
		/// <para><strong>Display Name</strong>: Tạm thời</para>
		/// <para><strong>Value</strong>: 7</para>
		/// <para><strong>StateCode.Bao_tri</strong></para>
		/// </summary>
		Tam_thoi = 7
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class flowmachine : EntityBase
	{
		public struct Fields
		{
			public const string AgentVersion = "agentversion";
			public const string ConnectivityConfiguration = "connectivityconfiguration";
			public const string CreatedBy = "createdby";
			public const string CreatedOn = "createdon";
			public const string CreatedOnBehalfBy = "createdonbehalfby";
			public const string Description = "description";
			public const string FlowMachineGroupId = "flowmachinegroupid";
			public const string flowmachineId = "flowmachineid";
			public const string FlowMachineImageVersionId = "flowmachineimageversionid";
			public const string FlowMachineNetworkId = "flowmachinenetworkid";
			public const string HostedMachineError = "hostedmachineerror";
			public const string HostedMachineState = "hostedmachinestate";
			public const string HostingType = "hostingtype";
			public const string ImportSequenceNumber = "importsequencenumber";
			public const string KeyDeliveryStatus = "keydeliverystatus";
			public const string KeyReceivedDate = "keyreceiveddate";
			public const string LastHeartbeatDate = "lastheartbeatdate";
			public const string LastKnownPictureInPictureSupport = "lastknownpictureinpicturesupport";
			public const string MachineMetadata = "machinemetadata";
			public const string ModifiedBy = "modifiedby";
			public const string ModifiedOn = "modifiedon";
			public const string ModifiedOnBehalfBy = "modifiedonbehalfby";
			public const string name = "name";
			public const string OvercapacitySince = "overcapacitysince";
			public const string OverriddenCreatedOn = "overriddencreatedon";
			public const string OwnerId = "ownerid";
			public const string OwningBusinessUnit = "owningbusinessunit";
			public const string OwningTeam = "owningteam";
			public const string OwningUser = "owninguser";
			public const string SessionCapacity = "sessioncapacity";
			public const string statecode = "statecode";
			public const string statuscode = "statuscode";
			public const string TimeZoneRuleVersionNumber = "timezoneruleversionnumber";
			public const string UTCConversionTimeZoneCode = "utcconversiontimezonecode";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "flowmachine";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10082;
		public const string EntityCollectionSchemaName = "flowmachines";
		public const string EntityDisplayCollectionName = "Máy trong dòng quy trình";
		public const string DisplayName = "Máy trong dòng quy trình";
		public const string EntitySetName = "flowmachines";
		public const string EntityLogicalCollectionName = "flowmachines";
		public const string EntityPrimaryIdAttribute = "flowmachineid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "name";
		public const string EntitySchemaName = "flowmachine";
		[DebuggerNonUserCode()]
		public flowmachine()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public flowmachine(Guid flowmachineId)
		{
			Entity = new Entity(EntityLogicalName, flowmachineId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public flowmachine(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="flowmachine"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public flowmachine(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="flowmachine"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public flowmachine(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new flowmachine(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="flowmachine"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public flowmachine(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new flowmachine(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public flowmachine(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Phiên bản dành cho tổng đài viên</para>
		/// <para><strong>Description</strong>: Phiên bản cài đặt trên máy</para>
		/// <para>Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AgentVersion
		{
			get { return Entity.GetAttributeValue<string>(Fields.AgentVersion); }
			set { Entity.Attributes[Fields.AgentVersion] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Cấu hình kết nối</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para>Required - <strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 25,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ConnectivityConfiguration
		{
			get { return Entity.GetAttributeValue<string>(Fields.ConnectivityConfiguration); }
			set { Entity.Attributes[Fields.ConnectivityConfiguration] = value; }
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
		/// <para><strong>Display Name</strong>: Mô tả</para>
		/// <para><strong>Description</strong>: Mô tả về Máy trong dòng quy trình.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string Description
		{
			get { return Entity.GetAttributeValue<string>(Fields.Description); }
			set { Entity.Attributes[Fields.Description] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Nhóm máy trong dòng quy trình</para>
		/// <para><strong>Description</strong>: Nhóm của Máy trong dòng quy trình này.</para>
		/// <para><strong>Lookup</strong>: <see cref="flowmachinegroup"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference FlowMachineGroupId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.FlowMachineGroupId); }
			set { Entity.Attributes[Fields.FlowMachineGroupId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Máy trong dòng quy trình</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của phiên bản thực thể</para>
		/// <para><strong>ReadOnly</strong> - <strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid flowmachineId
		{
			get { return Id; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Phiên bản hình ảnh máy trong dòng quy trình</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất cho Phiên bản hình ảnh máy trong dòng quy trình được liên kết với Máy trong dòng quy trình.</para>
		/// <para><strong>Lookup</strong>: <see cref="flowmachineimageversion"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference FlowMachineImageVersionId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.FlowMachineImageVersionId); }
			set { Entity.Attributes[Fields.FlowMachineImageVersionId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Mạng máy trong dòng quy trình</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất cho Mạng máy trong dòng quy trình được liên kết với Máy trong dòng quy trình.</para>
		/// <para><strong>Lookup</strong>: <see cref="flowmachinenetwork"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference FlowMachineNetworkId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.FlowMachineNetworkId); }
			set { Entity.Attributes[Fields.FlowMachineNetworkId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Lỗi máy trong dòng quy trình được lưu trữ.</para>
		/// <para><strong>Description</strong>: Lỗi máy trong dòng quy trình được lưu trữ.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 100,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string HostedMachineError
		{
			get { return Entity.GetAttributeValue<string>(Fields.HostedMachineError); }
			set { Entity.Attributes[Fields.HostedMachineError] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Trạng thái máy được lưu trữ</para>
		/// <para><strong>Description</strong>: Trạng thái của máy nếu máy đó được lưu trữ.</para>
		/// <para>Required - <strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.flowmachineOptionSets.HostedMachineState"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.flowmachineOptionSets.HostedMachineState.Da_tat"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.flowmachineOptionSets.HostedMachineState? HostedMachineState
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.HostedMachineState);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.flowmachineOptionSets.HostedMachineState)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.HostedMachineState] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.HostedMachineState] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Loại lưu trữ của máy trong dòng quy trình</para>
		/// <para><strong>Description</strong>: Loại lưu trữ của máy trong dòng quy trình.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.flowmachineOptionSets.HostingType"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.flowmachineOptionSets.HostingType.Khach_hang"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.flowmachineOptionSets.HostingType? HostingType
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.HostingType);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.flowmachineOptionSets.HostingType)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.HostingType] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.HostingType] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Số thứ tự của lần nhập</para>
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
		/// <para><strong>Display Name</strong>: Trạng thái gửi khóa máy</para>
		/// <para><strong>Description</strong>: Trạng thái gửi khóa của nhóm trên máy.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.flowmachineOptionSets.KeyDeliveryStatus"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.flowmachineOptionSets.KeyDeliveryStatus.Mac_dinh"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.flowmachineOptionSets.KeyDeliveryStatus? KeyDeliveryStatus
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.KeyDeliveryStatus);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.flowmachineOptionSets.KeyDeliveryStatus)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.KeyDeliveryStatus] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.KeyDeliveryStatus] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày nhận khóa máy</para>
		/// <para><strong>Description</strong>: Ngày gửi khóa nhóm mới đây nhất.</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? KeyReceivedDateUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.KeyReceivedDate); }
			set { Entity.Attributes[Fields.KeyReceivedDate] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày có thông báo hoạt động gần đây nhất</para>
		/// <para><strong>Description</strong>: Ngày gần đây nhất nhận được thông báo hoạt động từ máy.</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? LastHeartbeatDateUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.LastHeartbeatDate); }
			set { Entity.Attributes[Fields.LastHeartbeatDate] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Hỗ trợ tính năng hình trong hình được biết đến cuối cùng</para>
		/// <para><strong>Description</strong>: Cho biết trạng thái hỗ trợ tính năng hình trong hình được biết đến cuối cùng cho bản ghi mục tiêu. Giá trị mặc định là Không xác định.</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.flowmachineOptionSets.LastKnownPictureInPictureSupport"/></para>
		/// <para><strong>Default Value</strong>: <see cref="Dev.DevKit.Shared.Entities.flowmachineOptionSets.LastKnownPictureInPictureSupport.Khong_xac_dinh"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.flowmachineOptionSets.LastKnownPictureInPictureSupport? LastKnownPictureInPictureSupport
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.LastKnownPictureInPictureSupport);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.flowmachineOptionSets.LastKnownPictureInPictureSupport)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.LastKnownPictureInPictureSupport] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.LastKnownPictureInPictureSupport] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Siêu dữ liệu máy</para>
		/// <para><strong>Description</strong>: Chỉ sử dụng nội bộ.</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 25,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string MachineMetadata
		{
			get { return Entity.GetAttributeValue<string>(Fields.MachineMetadata); }
			set { Entity.Attributes[Fields.MachineMetadata] = value; }
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
		/// <para><strong>Display Name</strong>: Tên</para>
		/// <para><strong>Description</strong>: Tên của Máy trong dòng quy trình.</para>
		/// <para><strong>Primary Name</strong>: Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string name
		{
			get { return Entity.GetAttributeValue<string>(Fields.name); }
			set { Entity.Attributes[Fields.name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Quá công suất kể từ</para>
		/// <para><strong>Description</strong>: Ngày và giờ khi máy được gắn cờ là quá công suất.</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? OvercapacitySinceUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.OvercapacitySince); }
			set { Entity.Attributes[Fields.OvercapacitySince] = value; }
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
		/// <para><strong>Display Name</strong>: Chủ sở hữu</para>
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
		/// <para><strong>Display Name</strong>: Năng lực của phiên</para>
		/// <para><strong>Description</strong>: Số phiên song song tối đa.</para>
		/// <para>Required - <strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? SessionCapacity
		{
			get { return Entity.GetAttributeValue<int?>(Fields.SessionCapacity); }
			set { Entity.Attributes[Fields.SessionCapacity] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Trạng thái</para>
		/// <para><strong>Description</strong>: Trạng thái của Máy trong dòng quy trình</para>
		/// <para><strong>Status</strong>: <see cref="Dev.DevKit.Shared.Entities.flowmachineOptionSets.statecode"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.flowmachineOptionSets.statecode? statecode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statecode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.flowmachineOptionSets.statecode)value.Value;
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
		/// <para><strong>Description</strong>: Lý do dẫn đến trạng thái của Máy trong dòng quy trình</para>
		/// <para><strong>Status Reason</strong>: <see cref="Dev.DevKit.Shared.Entities.flowmachineOptionSets.statuscode"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.flowmachineOptionSets.statuscode? statuscode
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.statuscode);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.flowmachineOptionSets.statuscode)value.Value;
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