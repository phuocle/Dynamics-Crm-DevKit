﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-07-30 10:00:46
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.msdyn_solutionhistoryOptionSets
{
	public enum msdyn_operation
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Cung cấp Ngôn ngữ</para>
		/// <para><strong>Value</strong>: 5</para>
		/// </summary>
		Cung_cap_Ngon_ngu = 5,
		/// <summary>
		/// <para><strong>Display Name</strong>: Dỡ cài đặt</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Do_cai_dat = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Không có</para>
		/// <para><strong>Value</strong>: 9</para>
		/// </summary>
		Khong_co = 9,
		/// <summary>
		/// <para><strong>Display Name</strong>: Nhập</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Nhap = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Nhập Bản dịch</para>
		/// <para><strong>Value</strong>: 6</para>
		/// </summary>
		Nhap_Ban_dich = 6,
		/// <summary>
		/// <para><strong>Display Name</strong>: Phát hành</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Phat_hanh = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Phát hành Tất cả</para>
		/// <para><strong>Value</strong>: 4</para>
		/// </summary>
		Phat_hanh_Tat_ca = 4,
		/// <summary>
		/// <para><strong>Display Name</strong>: Thao tác Siêu dữ liệu trong Ruy băng</para>
		/// <para><strong>Value</strong>: 7</para>
		/// </summary>
		Thao_tac_Sieu_du_lieu_trong_Ruy_bang = 7,
		/// <summary>
		/// <para><strong>Display Name</strong>: Trạng thái Đặt Quy trình làm việc</para>
		/// <para><strong>Value</strong>: 8</para>
		/// </summary>
		Trang_thai_Dat_Quy_trinh_lam_viec = 8,
		/// <summary>
		/// <para><strong>Display Name</strong>: Xuất</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Xuat = 2
	}
	public enum msdyn_status
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã bắt đầu</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Da_bat_dau = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã hoàn thành</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Da_hoan_thanh = 1
	}
	public enum msdyn_suboperation
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Cập nhật</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Cap_nhat = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Không có</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Khong_co = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Mới</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Moi = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Nâng cấp</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Nang_cap = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Xóa</para>
		/// <para><strong>Value</strong>: 4</para>
		/// </summary>
		Xoa = 4
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class msdyn_solutionhistory : EntityBase
	{
		public struct Fields
		{
			public const string msdyn_activityid = "msdyn_activityid";
			public const string msdyn_correlationid = "msdyn_correlationid";
			public const string msdyn_endtime = "msdyn_endtime";
			public const string msdyn_errorcode = "msdyn_errorcode";
			public const string msdyn_exceptionmessage = "msdyn_exceptionmessage";
			public const string msdyn_exceptionstack = "msdyn_exceptionstack";
			public const string msdyn_ismanaged = "msdyn_ismanaged";
			public const string msdyn_isoverwritecustomizations = "msdyn_isoverwritecustomizations";
			public const string msdyn_ispatch = "msdyn_ispatch";
			public const string msdyn_maxretries = "msdyn_maxretries";
			public const string msdyn_name = "msdyn_name";
			public const string msdyn_operation = "msdyn_operation";
			public const string msdyn_packagename = "msdyn_packagename";
			public const string msdyn_packageversion = "msdyn_packageversion";
			public const string msdyn_publisherid = "msdyn_publisherid";
			public const string msdyn_publishername = "msdyn_publishername";
			public const string msdyn_result = "msdyn_result";
			public const string msdyn_retrycount = "msdyn_retrycount";
			public const string msdyn_solutionhistoryId = "msdyn_solutionhistoryid";
			public const string msdyn_solutionid = "msdyn_solutionid";
			public const string msdyn_solutionversion = "msdyn_solutionversion";
			public const string msdyn_starttime = "msdyn_starttime";
			public const string msdyn_status = "msdyn_status";
			public const string msdyn_suboperation = "msdyn_suboperation";
			public const string msdyn_totaltime = "msdyn_totaltime";
		}
		public const string EntityLogicalName = "msdyn_solutionhistory";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10004;
		public const string EntityCollectionSchemaName = "msdyn_solutionhistories";
		public const string EntityDisplayCollectionName = "Lịch sử Giải pháp";
		public const string DisplayName = "Lịch sử Giải pháp";
		public const string EntitySetName = "msdyn_solutionhistories";
		public const string EntityLogicalCollectionName = "msdyn_solutionhistories";
		public const string EntityPrimaryIdAttribute = "msdyn_solutionhistoryid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "msdyn_name";
		public const string EntitySchemaName = "msdyn_solutionhistory";
		[DebuggerNonUserCode()]
		public msdyn_solutionhistory()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_solutionhistory(Guid msdyn_solutionhistoryId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_solutionhistoryId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_solutionhistory(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_solutionhistory"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public msdyn_solutionhistory(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_solutionhistory"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyn_solutionhistory(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyn_solutionhistory(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="msdyn_solutionhistory"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyn_solutionhistory(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyn_solutionhistory(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public msdyn_solutionhistory(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Id hoạt động</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_activityid
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_activityid); }
			set { Entity.Attributes[Fields.msdyn_activityid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Id tương quan</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_correlationid
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_correlationid); }
			set { Entity.Attributes[Fields.msdyn_correlationid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thời gian Kết thúc</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdyn_endtimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdyn_endtime); }
			set { Entity.Attributes[Fields.msdyn_endtime] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Mã lỗi</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_errorcode
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_errorcode); }
			set { Entity.Attributes[Fields.msdyn_errorcode] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thông báo Ngoại lệ</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 10,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_exceptionmessage
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_exceptionmessage); }
			set { Entity.Attributes[Fields.msdyn_exceptionmessage] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngăn xếp ngoại lệ</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 10,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_exceptionstack
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_exceptionstack); }
			set { Entity.Attributes[Fields.msdyn_exceptionstack] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Được quản lý</para>
		/// <para><strong>Two Option</strong> - [<strong>Có</strong>]: true - [<strong>Không</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Không</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_ismanaged
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_ismanaged); }
			set { Entity.Attributes[Fields.msdyn_ismanaged] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ghi đè tùy chỉnh</para>
		/// <para><strong>Two Option</strong> - [<strong>Có</strong>]: true - [<strong>Không</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Không</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_isoverwritecustomizations
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_isoverwritecustomizations); }
			set { Entity.Attributes[Fields.msdyn_isoverwritecustomizations] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Bản vá</para>
		/// <para><strong>Two Option</strong> - [<strong>Có</strong>]: true - [<strong>Không</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Không</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_ispatch
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_ispatch); }
			set { Entity.Attributes[Fields.msdyn_ispatch] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Số lần thử lại tối đa</para>
		/// <para><strong>Description</strong>: Số lần thử lại tối đa.</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_maxretries
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_maxretries); }
			set { Entity.Attributes[Fields.msdyn_maxretries] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tên giải pháp</para>
		/// <para><strong>Description</strong>: Tên thực thể tùy chỉnh.</para>
		/// <para><strong>Primary Name</strong>: Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_name); }
			set { Entity.Attributes[Fields.msdyn_name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thao tác</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_solutionhistoryOptionSets.msdyn_operation"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_solutionhistoryOptionSets.msdyn_operation? msdyn_operation
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_operation);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_solutionhistoryOptionSets.msdyn_operation)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_operation] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_operation] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tên gói</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 4,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_packagename
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_packagename); }
			set { Entity.Attributes[Fields.msdyn_packagename] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Phiên bản gói</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_packageversion
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_packageversion); }
			set { Entity.Attributes[Fields.msdyn_packageversion] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Id nhà phát hành</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_publisherid
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_publisherid); }
			set { Entity.Attributes[Fields.msdyn_publisherid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tên người phát hành</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 1,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_publishername
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_publishername); }
			set { Entity.Attributes[Fields.msdyn_publishername] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Kết quả</para>
		/// <para><strong>Two Option</strong> - [<strong>Thành công</strong>]: true - [<strong>Lỗi</strong>]: false</para>
		/// <para><strong>Default Value</strong> [<strong>Lỗi</strong>]: false</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public bool? msdyn_result
		{
			get { return Entity.GetAttributeValue<bool?>(Fields.msdyn_result); }
			set { Entity.Attributes[Fields.msdyn_result] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Số lần thử lại</para>
		/// <para><strong>Description</strong>: Số lần thử lại</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_retrycount
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_retrycount); }
			set { Entity.Attributes[Fields.msdyn_retrycount] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Solutionhistory</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của phiên bản thực thể</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_solutionhistoryId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_solutionhistoryId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Id giải pháp</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_solutionid
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_solutionid); }
			set { Entity.Attributes[Fields.msdyn_solutionid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Phiên bản giải pháp</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_solutionversion
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_solutionversion); }
			set { Entity.Attributes[Fields.msdyn_solutionversion] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thời gian Bắt đầu</para>
		/// <para><strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? msdyn_starttimeUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.msdyn_starttime); }
			set { Entity.Attributes[Fields.msdyn_starttime] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Trạng thái</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_solutionhistoryOptionSets.msdyn_status"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_solutionhistoryOptionSets.msdyn_status? msdyn_status
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_status);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_solutionhistoryOptionSets.msdyn_status)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_status] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_status] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thao tác phụ</para>
		/// <para><strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.msdyn_solutionhistoryOptionSets.msdyn_suboperation"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.msdyn_solutionhistoryOptionSets.msdyn_suboperation? msdyn_suboperation
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.msdyn_suboperation);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.msdyn_solutionhistoryOptionSets.msdyn_suboperation)value.Value;
			}
			set
			{
				if (value.HasValue)
					Entity.Attributes[Fields.msdyn_suboperation] = new OptionSetValue((int)value.Value);
				else
					Entity.Attributes[Fields.msdyn_suboperation] = null;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Tổng thời gian (giây)</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 2,147,483,647</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_totaltime
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_totaltime); }
			set { Entity.Attributes[Fields.msdyn_totaltime] = value; }
		}
	}
}