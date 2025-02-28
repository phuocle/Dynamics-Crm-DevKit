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
namespace Dev.DevKit.Shared.Entities.AuditOptionSets
{
	public enum Action
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Ánh xạ Nhập</para>
		/// <para><strong>Value</strong>: 60</para>
		/// </summary>
		Anh_xa_Nhap = 60,
		/// <summary>
		/// <para><strong>Display Name</strong>: ApplicationBasedAccessAllowed</para>
		/// <para><strong>Value</strong>: 122</para>
		/// </summary>
		ApplicationBasedAccessAllowed = 122,
		/// <summary>
		/// <para><strong>Display Name</strong>: ApplicationBasedAccessDenied</para>
		/// <para><strong>Value</strong>: 121</para>
		/// </summary>
		ApplicationBasedAccessDenied = 121,
		/// <summary>
		/// <para><strong>Display Name</strong>: Archive</para>
		/// <para><strong>Value</strong>: 115</para>
		/// </summary>
		Archive = 115,
		/// <summary>
		/// <para><strong>Display Name</strong>: Cập nhật</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Cap_nhat = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: Chia sẻ</para>
		/// <para><strong>Value</strong>: 14</para>
		/// </summary>
		Chia_se = 14,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã bật cho tổ chức</para>
		/// <para><strong>Value</strong>: 63</para>
		/// </summary>
		Da_bat_cho_to_chuc = 63,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã bắt đầu Kiểm tra Thực thể</para>
		/// <para><strong>Value</strong>: 105</para>
		/// </summary>
		Da_bat_dau_Kiem_tra_Thuc_the = 105,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã bắt đầu Kiểm tra Thuộc tính</para>
		/// <para><strong>Value</strong>: 106</para>
		/// </summary>
		Da_bat_dau_Kiem_tra_Thuoc_tinh = 106,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã bắt đầu Kiểm tra Truy cập Người dùng</para>
		/// <para><strong>Value</strong>: 112</para>
		/// </summary>
		Da_bat_dau_Kiem_tra_Truy_cap_Nguoi_dung = 112,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã bật Kiểm tra</para>
		/// <para><strong>Value</strong>: 107</para>
		/// </summary>
		Da_bat_Kiem_tra = 107,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã dừng Kiểm tra Thực thể</para>
		/// <para><strong>Value</strong>: 108</para>
		/// </summary>
		Da_dung_Kiem_tra_Thuc_the = 108,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã dừng Kiểm tra Thuộc tính</para>
		/// <para><strong>Value</strong>: 109</para>
		/// </summary>
		Da_dung_Kiem_tra_Thuoc_tinh = 109,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã dừng Kiểm tra Truy cập Người dùng</para>
		/// <para><strong>Value</strong>: 113</para>
		/// </summary>
		Da_dung_Kiem_tra_Truy_cap_Nguoi_dung = 113,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã tắt Kiểm tra</para>
		/// <para><strong>Value</strong>: 110</para>
		/// </summary>
		Da_tat_Kiem_tra = 110,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đã trả</para>
		/// <para><strong>Value</strong>: 23</para>
		/// </summary>
		Da_tra = 23,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đăng ký</para>
		/// <para><strong>Value</strong>: 50</para>
		/// </summary>
		Dang_ky = 50,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đang xử lý Nội bộ</para>
		/// <para><strong>Value</strong>: 46</para>
		/// </summary>
		Dang_xu_ly_Noi_bo = 46,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đặt Trạng thái</para>
		/// <para><strong>Value</strong>: 41</para>
		/// </summary>
		Dat_Trang_thai = 41,
		/// <summary>
		/// <para><strong>Display Name</strong>: Định tính</para>
		/// <para><strong>Value</strong>: 24</para>
		/// </summary>
		Dinh_tinh = 24,
		/// <summary>
		/// <para><strong>Display Name</strong>: Đóng</para>
		/// <para><strong>Value</strong>: 16</para>
		/// </summary>
		Dong = 16,
		/// <summary>
		/// <para><strong>Display Name</strong>: Dừng kích hoạt</para>
		/// <para><strong>Value</strong>: 5</para>
		/// </summary>
		Dung_kich_hoat = 5,
		/// <summary>
		/// <para><strong>Display Name</strong>: Dừng liên kết Thực thể</para>
		/// <para><strong>Value</strong>: 34</para>
		/// </summary>
		Dung_lien_ket_Thuc_the = 34,
		/// <summary>
		/// <para><strong>Display Name</strong>: Gán</para>
		/// <para><strong>Value</strong>: 13</para>
		/// </summary>
		Gan = 13,
		/// <summary>
		/// <para><strong>Display Name</strong>: Gán Vai trò cho Người dùng</para>
		/// <para><strong>Value</strong>: 55</para>
		/// </summary>
		Gan_Vai_tro_cho_Nguoi_dung = 55,
		/// <summary>
		/// <para><strong>Display Name</strong>: Gán Vai trò cho Nhóm</para>
		/// <para><strong>Value</strong>: 53</para>
		/// </summary>
		Gan_Vai_tro_cho_Nhom = 53,
		/// <summary>
		/// <para><strong>Display Name</strong>: Gia hạn</para>
		/// <para><strong>Value</strong>: 42</para>
		/// </summary>
		Gia_han = 42,
		/// <summary>
		/// <para><strong>Display Name</strong>: Giải quyết</para>
		/// <para><strong>Value</strong>: 20</para>
		/// </summary>
		Giai_quyet = 20,
		/// <summary>
		/// <para><strong>Display Name</strong>: Gửi</para>
		/// <para><strong>Value</strong>: 26</para>
		/// </summary>
		Gui = 26,
		/// <summary>
		/// <para><strong>Display Name</strong>: Gửi Email Trực tiếp</para>
		/// <para><strong>Value</strong>: 62</para>
		/// </summary>
		Gui_Email_Truc_tiep = 62,
		/// <summary>
		/// <para><strong>Display Name</strong>: Hóa đơn</para>
		/// <para><strong>Value</strong>: 29</para>
		/// </summary>
		Hoa_don = 29,
		/// <summary>
		/// <para><strong>Display Name</strong>: Hoàn thành</para>
		/// <para><strong>Value</strong>: 18</para>
		/// </summary>
		Hoan_thanh = 18,
		/// <summary>
		/// <para><strong>Display Name</strong>: Hợp nhất</para>
		/// <para><strong>Value</strong>: 12</para>
		/// </summary>
		Hop_nhat = 12,
		/// <summary>
		/// <para><strong>Display Name</strong>: Hủy</para>
		/// <para><strong>Value</strong>: 17</para>
		/// </summary>
		Huy = 17,
		/// <summary>
		/// <para><strong>Display Name</strong>: Hủy tư cách</para>
		/// <para><strong>Value</strong>: 25</para>
		/// </summary>
		Huy_tu_cach = 25,
		/// <summary>
		/// <para><strong>Display Name</strong>: IPFirewallAcccesAllowed</para>
		/// <para><strong>Value</strong>: 119</para>
		/// </summary>
		IPFirewallAcccesAllowed = 119,
		/// <summary>
		/// <para><strong>Display Name</strong>: IPFirewallAcccesDenied</para>
		/// <para><strong>Value</strong>: 118</para>
		/// </summary>
		IPFirewallAcccesDenied = 118,
		/// <summary>
		/// <para><strong>Display Name</strong>: Không chia sẻ</para>
		/// <para><strong>Value</strong>: 49</para>
		/// </summary>
		Khong_chia_se = 49,
		/// <summary>
		/// <para><strong>Display Name</strong>: Không xác định</para>
		/// <para><strong>Value</strong>: 0</para>
		/// </summary>
		Khong_xac_dinh = 0,
		/// <summary>
		/// <para><strong>Display Name</strong>: Kích hoạt</para>
		/// <para><strong>Value</strong>: 4</para>
		/// </summary>
		Kich_hoat = 4,
		/// <summary>
		/// <para><strong>Display Name</strong>: Lên lịch lại</para>
		/// <para><strong>Value</strong>: 47</para>
		/// </summary>
		Len_lich_lai = 47,
		/// <summary>
		/// <para><strong>Display Name</strong>: Liên kết Thực thể</para>
		/// <para><strong>Value</strong>: 33</para>
		/// </summary>
		Lien_ket_Thuc_the = 33,
		/// <summary>
		/// <para><strong>Display Name</strong>: Loại bỏ Đặc quyền khỏi Vai trò</para>
		/// <para><strong>Value</strong>: 58</para>
		/// </summary>
		Loai_bo_Dac_quyen_khoi_Vai_tro = 58,
		/// <summary>
		/// <para><strong>Display Name</strong>: Loại bỏ Hàng thay thế</para>
		/// <para><strong>Value</strong>: 40</para>
		/// </summary>
		Loai_bo_Hang_thay_the = 40,
		/// <summary>
		/// <para><strong>Display Name</strong>: Loại bỏ Mục</para>
		/// <para><strong>Value</strong>: 38</para>
		/// </summary>
		Loai_bo_Muc = 38,
		/// <summary>
		/// <para><strong>Display Name</strong>: Loại bỏ Thành viên</para>
		/// <para><strong>Value</strong>: 32</para>
		/// </summary>
		Loai_bo_Thanh_vien_32 = 32,
		/// <summary>
		/// <para><strong>Display Name</strong>: Loại bỏ Thành viên</para>
		/// <para><strong>Value</strong>: 36</para>
		/// </summary>
		Loai_bo_Thanh_vien_36 = 36,
		/// <summary>
		/// <para><strong>Display Name</strong>: Loại bỏ Vai trò khỏi Người dùng</para>
		/// <para><strong>Value</strong>: 56</para>
		/// </summary>
		Loai_bo_Vai_tro_khoi_Nguoi_dung = 56,
		/// <summary>
		/// <para><strong>Display Name</strong>: Loại bỏ Vai trò khỏi Nhóm</para>
		/// <para><strong>Value</strong>: 54</para>
		/// </summary>
		Loai_bo_Vai_tro_khoi_Nhom = 54,
		/// <summary>
		/// <para><strong>Display Name</strong>: Mở lại</para>
		/// <para><strong>Value</strong>: 21</para>
		/// </summary>
		Mo_lai = 21,
		/// <summary>
		/// <para><strong>Display Name</strong>: Phân tầng</para>
		/// <para><strong>Value</strong>: 11</para>
		/// </summary>
		Phan_tang = 11,
		/// <summary>
		/// <para><strong>Display Name</strong>: Phê duyệt</para>
		/// <para><strong>Value</strong>: 28</para>
		/// </summary>
		Phe_duyet = 28,
		/// <summary>
		/// <para><strong>Display Name</strong>: Restore</para>
		/// <para><strong>Value</strong>: 120</para>
		/// </summary>
		Restore = 120,
		/// <summary>
		/// <para><strong>Display Name</strong>: Retain</para>
		/// <para><strong>Value</strong>: 116</para>
		/// </summary>
		Retain = 116,
		/// <summary>
		/// <para><strong>Display Name</strong>: RollbackRetain</para>
		/// <para><strong>Value</strong>: 117</para>
		/// </summary>
		RollbackRetain = 117,
		/// <summary>
		/// <para><strong>Display Name</strong>: Sao y</para>
		/// <para><strong>Value</strong>: 61</para>
		/// </summary>
		Sao_y = 61,
		/// <summary>
		/// <para><strong>Display Name</strong>: Sửa đổi Chia sẻ</para>
		/// <para><strong>Value</strong>: 48</para>
		/// </summary>
		Sua_doi_Chia_se = 48,
		/// <summary>
		/// <para><strong>Display Name</strong>: Sửa lại</para>
		/// <para><strong>Value</strong>: 43</para>
		/// </summary>
		Sua_lai = 43,
		/// <summary>
		/// <para><strong>Display Name</strong>: Tạo</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Tao = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Tạo Báo giá từ Cơ hội</para>
		/// <para><strong>Value</strong>: 51</para>
		/// </summary>
		Tao_Bao_gia_tu_Co_hoi = 51,
		/// <summary>
		/// <para><strong>Display Name</strong>: Thắng</para>
		/// <para><strong>Value</strong>: 44</para>
		/// </summary>
		Thang = 44,
		/// <summary>
		/// <para><strong>Display Name</strong>: Thay đổi Kiểm tra ở Cấp độ Thực thể</para>
		/// <para><strong>Value</strong>: 102</para>
		/// </summary>
		Thay_doi_Kiem_tra_o_Cap_do_Thuc_the = 102,
		/// <summary>
		/// <para><strong>Display Name</strong>: Thay đổi Kiểm tra ở Cấp độ Thuộc tính</para>
		/// <para><strong>Value</strong>: 103</para>
		/// </summary>
		Thay_doi_Kiem_tra_o_Cap_do_Thuoc_tinh = 103,
		/// <summary>
		/// <para><strong>Display Name</strong>: Thay đổi Kiểm tra ở Cấp độ Tổ chức</para>
		/// <para><strong>Value</strong>: 104</para>
		/// </summary>
		Thay_doi_Kiem_tra_o_Cap_do_To_chuc = 104,
		/// <summary>
		/// <para><strong>Display Name</strong>: Thay thế Đặc quyền trong Vai trò</para>
		/// <para><strong>Value</strong>: 59</para>
		/// </summary>
		Thay_the_Dac_quyen_trong_Vai_tro = 59,
		/// <summary>
		/// <para><strong>Display Name</strong>: Thêm Đặc quyền vào Vai trò</para>
		/// <para><strong>Value</strong>: 57</para>
		/// </summary>
		Them_Dac_quyen_vao_Vai_tro = 57,
		/// <summary>
		/// <para><strong>Display Name</strong>: Thêm Hàng thay thế</para>
		/// <para><strong>Value</strong>: 39</para>
		/// </summary>
		Them_Hang_thay_the = 39,
		/// <summary>
		/// <para><strong>Display Name</strong>: Thêm Mục</para>
		/// <para><strong>Value</strong>: 37</para>
		/// </summary>
		Them_Muc = 37,
		/// <summary>
		/// <para><strong>Display Name</strong>: Thêm Thành viên</para>
		/// <para><strong>Value</strong>: 31</para>
		/// </summary>
		Them_Thanh_vien_31 = 31,
		/// <summary>
		/// <para><strong>Display Name</strong>: Thêm Thành viên</para>
		/// <para><strong>Value</strong>: 35</para>
		/// </summary>
		Them_Thanh_vien_35 = 35,
		/// <summary>
		/// <para><strong>Display Name</strong>: Thêm vào Hàng đợi</para>
		/// <para><strong>Value</strong>: 52</para>
		/// </summary>
		Them_vao_Hang_doi = 52,
		/// <summary>
		/// <para><strong>Display Name</strong>: Thua</para>
		/// <para><strong>Value</strong>: 45</para>
		/// </summary>
		Thua = 45,
		/// <summary>
		/// <para><strong>Display Name</strong>: Thực hiện</para>
		/// <para><strong>Value</strong>: 22</para>
		/// </summary>
		Thuc_hien = 22,
		/// <summary>
		/// <para><strong>Display Name</strong>: Treo</para>
		/// <para><strong>Value</strong>: 30</para>
		/// </summary>
		Treo = 30,
		/// <summary>
		/// <para><strong>Display Name</strong>: Truy cập Người dùng qua Dịch vụ Web</para>
		/// <para><strong>Value</strong>: 65</para>
		/// </summary>
		Truy_cap_Nguoi_dung_qua_Dich_vu_Web = 65,
		/// <summary>
		/// <para><strong>Display Name</strong>: Truy cập Người dùng qua Web</para>
		/// <para><strong>Value</strong>: 64</para>
		/// </summary>
		Truy_cap_Nguoi_dung_qua_Web = 64,
		/// <summary>
		/// <para><strong>Display Name</strong>: Truy xuất</para>
		/// <para><strong>Value</strong>: 15</para>
		/// </summary>
		Truy_xuat = 15,
		/// <summary>
		/// <para><strong>Display Name</strong>: Từ chối</para>
		/// <para><strong>Value</strong>: 27</para>
		/// </summary>
		Tu_choi = 27,
		/// <summary>
		/// <para><strong>Display Name</strong>: Upsert</para>
		/// <para><strong>Value</strong>: 6</para>
		/// </summary>
		Upsert = 6,
		/// <summary>
		/// <para><strong>Display Name</strong>: Xóa</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Xoa = 3,
		/// <summary>
		/// <para><strong>Display Name</strong>: Xóa Nhật ký Kiểm tra</para>
		/// <para><strong>Value</strong>: 111</para>
		/// </summary>
		Xoa_Nhat_ky_Kiem_tra = 111,
		/// <summary>
		/// <para><strong>Display Name</strong>: Xóa Thực thể</para>
		/// <para><strong>Value</strong>: 100</para>
		/// </summary>
		Xoa_Thuc_the = 100,
		/// <summary>
		/// <para><strong>Display Name</strong>: Xóa Thuộc tính</para>
		/// <para><strong>Value</strong>: 101</para>
		/// </summary>
		Xoa_Thuoc_tinh = 101
	}
	public enum Operation
	{
		/// <summary>
		/// <para><strong>Display Name</strong>: Archive</para>
		/// <para><strong>Value</strong>: 115</para>
		/// </summary>
		Archive = 115,
		/// <summary>
		/// <para><strong>Display Name</strong>: Cập nhật</para>
		/// <para><strong>Value</strong>: 2</para>
		/// </summary>
		Cap_nhat = 2,
		/// <summary>
		/// <para><strong>Display Name</strong>: CustomOperation</para>
		/// <para><strong>Value</strong>: 200</para>
		/// </summary>
		CustomOperation = 200,
		/// <summary>
		/// <para><strong>Display Name</strong>: Restore</para>
		/// <para><strong>Value</strong>: 118</para>
		/// </summary>
		Restore = 118,
		/// <summary>
		/// <para><strong>Display Name</strong>: Retain</para>
		/// <para><strong>Value</strong>: 116</para>
		/// </summary>
		Retain = 116,
		/// <summary>
		/// <para><strong>Display Name</strong>: RollbackRetain</para>
		/// <para><strong>Value</strong>: 117</para>
		/// </summary>
		RollbackRetain = 117,
		/// <summary>
		/// <para><strong>Display Name</strong>: Tạo</para>
		/// <para><strong>Value</strong>: 1</para>
		/// </summary>
		Tao = 1,
		/// <summary>
		/// <para><strong>Display Name</strong>: Truy cập</para>
		/// <para><strong>Value</strong>: 4</para>
		/// </summary>
		Truy_cap = 4,
		/// <summary>
		/// <para><strong>Display Name</strong>: Upsert</para>
		/// <para><strong>Value</strong>: 5</para>
		/// </summary>
		Upsert = 5,
		/// <summary>
		/// <para><strong>Display Name</strong>: Xóa</para>
		/// <para><strong>Value</strong>: 3</para>
		/// </summary>
		Xoa = 3
	}
}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class Audit : EntityBase
	{
		public struct Fields
		{
			public const string Action = "action";
			public const string AdditionalInfo = "additionalinfo";
			public const string AttributeMask = "attributemask";
			public const string AuditId = "auditid";
			public const string CallingUserId = "callinguserid";
			public const string ChangeData = "changedata";
			public const string CreatedOn = "createdon";
			public const string ObjectId = "objectid";
			public const string Operation = "operation";
			public const string RegardingObjectId = "regardingobjectid";
			public const string TransactionId = "transactionid";
			public const string UserAdditionalInfo = "useradditionalinfo";
			public const string UserId = "userid";
			public const string VersionNumber = "versionnumber";
		}
		public const string EntityLogicalName = "audit";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 4567;
		public const string EntityCollectionSchemaName = "Audit";
		public const string EntityDisplayCollectionName = "Kiểm tra";
		public const string DisplayName = "Kiểm tra";
		public const string EntitySetName = "audits";
		public const string EntityLogicalCollectionName = "audits";
		public const string EntityPrimaryIdAttribute = "auditid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "";
		public const string EntitySchemaName = "Audit";
		[DebuggerNonUserCode()]
		public Audit()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public Audit(Guid AuditId)
		{
			Entity = new Entity(EntityLogicalName, AuditId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public Audit(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="Audit"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public Audit(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="Audit"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public Audit(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new Audit(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="Audit"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public Audit(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new Audit(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public Audit(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Sự kiện</para>
		/// <para><strong>Description</strong>: Thao tác người dùng có thể thực hiện để tạo ra thay đổi</para>
		/// <para><strong>ReadOnly</strong> - Required - <strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.AuditOptionSets.Action"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.AuditOptionSets.Action? Action
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.Action);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.AuditOptionSets.Action)value.Value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Additional Info</para>
		/// <para><strong>Description</strong>: Additional Info for Audit</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AdditionalInfo
		{
			get { return Entity.GetAttributeValue<string>(Fields.AdditionalInfo); }
			set { Entity.Attributes[Fields.AdditionalInfo] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Trường đã Thay đổi</para>
		/// <para><strong>Description</strong>: Chứa CSV của thuộc tính siêu dữ liệu ColumnNumber</para>
		/// <para><strong>ReadOnly</strong> - <strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string AttributeMask
		{
			get { return Entity.GetAttributeValue<string>(Fields.AttributeMask); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Id Bản ghi</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của phiên bản kiểm tra.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid AuditId
		{
			get { return Id; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người dùng Gọi</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng gọi trong trường hợp cuộc gọi được cá nhân hóa</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference CallingUserId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.CallingUserId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Dữ liệu Thay đổi</para>
		/// <para><strong>Description</strong>: Chứa CSV gồm những giá trị cũ của tất cả các thuộc tính có thuộc tính IsAuditEnabled ở trạng thái Đúng và đang được thay đổi</para>
		/// <para><strong>ReadOnly</strong> - <strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string ChangeData
		{
			get { return Entity.GetAttributeValue<string>(Fields.ChangeData); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Ngày Thay đổi</para>
		/// <para><strong>Description</strong>: Ngày và giờ tạo bản ghi kiểm tra lần cuối.</para>
		/// <para><strong>ReadOnly</strong> - <strong>Date and Time</strong> - <strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public DateTime? CreatedOnUtc
		{
			get { return Entity.GetAttributeValue<DateTime?>(Fields.CreatedOn); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Bản ghi</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của bản ghi đang được kiểm tra</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>:</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference ObjectId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.ObjectId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thao tác</para>
		/// <para><strong>Description</strong>: Thao tác dẫn đến kiểm tra--thao tác này bao gồm tạo, xóa hoặc cập nhật</para>
		/// <para><strong>ReadOnly</strong> - <strong>OptionSet</strong>: <see cref="Dev.DevKit.Shared.Entities.AuditOptionSets.Operation"/></para>
		/// <para><strong>Default Value</strong>: <see langword="null"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Dev.DevKit.Shared.Entities.AuditOptionSets.Operation? Operation
		{
			get
			{
				var value = Entity.GetAttributeValue<OptionSetValue>(Fields.Operation);
				if (value == null) return null;
				return (Dev.DevKit.Shared.Entities.AuditOptionSets.Operation)value.Value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Bản lưu ý</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của đối tượng có bản ghi được liên kết.</para>
		/// <para><strong>Lookup</strong>:</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference RegardingObjectId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.RegardingObjectId); }
			set { Entity.Attributes[Fields.RegardingObjectId] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Id Giao dịch</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất cho nhiều thay đổi là một phần trong một thao tác; trường này chứa cùng một GUID cho tất cả các hàng kiểm tra được tạo trong một giao dịch</para>
		/// <para><strong>ReadOnly</strong> - <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? TransactionId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.TransactionId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Thông tin Người dùng</para>
		/// <para><strong>Description</strong>: Thông tin bổ sung liên quan tới người dùng đã gây ra sự thay đổi.</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 350</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string UserAdditionalInfo
		{
			get { return Entity.GetAttributeValue<string>(Fields.UserAdditionalInfo); }
			set { Entity.Attributes[Fields.UserAdditionalInfo] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Người Thay đổi</para>
		/// <para><strong>Description</strong>: Mã định danh duy nhất của người dùng tạo ra thay đổi</para>
		/// <para><strong>ReadOnly</strong> - <strong>Lookup</strong>: <see cref="externalparty"/>, <see cref="systemuser"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference UserId
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.UserId); }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Version Number</para>
		/// <para><strong>Description</strong>: Version number of the audit.</para>
		/// <para><strong>ReadOnly</strong> - <strong>BigInt</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}