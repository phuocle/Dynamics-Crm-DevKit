'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.AccountApi = function (e) {
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var getFormattedValue = function () {
				if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName + f];
					}
					return '';
				}
				if (isMultiOptionSet) {
					return entity[logicalName + f].toString().split(';').map(function (item) { return item.trim(); });
				}
				return entity[logicalName + f];
			};
			var getValue = function () {
				if (entity[logicalName] === undefined || entity[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === undefined || entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName];
					}
					return null;
				}
				if (isMultiOptionSet) {
					return entity[logicalName].toString().split(',').map(function (item) { return parseInt(item, 10); });
				}
				return entity[logicalName];
			};
			var setValue = function (value) {
				if (isMultiOptionSet) value = value.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						value = value.replace('{', '').replace('}', '');
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
					}
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(obj.FormattedValue, field, {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(obj, field, {
					get: getValue
				});
			}
			else {
				Object.defineProperty(obj, field, {
					get: getValue,
					set: setValue
				});
			}
		}
		var _account = {
			AccountCategoryCode: { a: 'accountcategorycode' },
			AccountClassificationCode: { a: 'accountclassificationcode' },
			AccountId: { a: 'accountid' },
			AccountNumber: { a: 'accountnumber' },
			AccountRatingCode: { a: 'accountratingcode' },
			Address1_AddressId: { a: 'address1_addressid' },
			Address1_AddressTypeCode: { a: 'address1_addresstypecode' },
			Address1_City: { a: 'address1_city' },
			Address1_Composite: { a: 'address1_composite', r: true },
			Address1_Country: { a: 'address1_country' },
			Address1_County: { a: 'address1_county' },
			Address1_Fax: { a: 'address1_fax' },
			Address1_FreightTermsCode: { a: 'address1_freighttermscode' },
			Address1_Latitude: { a: 'address1_latitude' },
			Address1_Line1: { a: 'address1_line1' },
			Address1_Line2: { a: 'address1_line2' },
			Address1_Line3: { a: 'address1_line3' },
			Address1_Longitude: { a: 'address1_longitude' },
			Address1_Name: { a: 'address1_name' },
			Address1_PostalCode: { a: 'address1_postalcode' },
			Address1_PostOfficeBox: { a: 'address1_postofficebox' },
			Address1_PrimaryContactName: { a: 'address1_primarycontactname' },
			Address1_ShippingMethodCode: { a: 'address1_shippingmethodcode' },
			Address1_StateOrProvince: { a: 'address1_stateorprovince' },
			Address1_Telephone1: { a: 'address1_telephone1' },
			Address1_Telephone2: { a: 'address1_telephone2' },
			Address1_Telephone3: { a: 'address1_telephone3' },
			Address1_UPSZone: { a: 'address1_upszone' },
			Address1_UTCOffset: { a: 'address1_utcoffset' },
			Address2_AddressId: { a: 'address2_addressid' },
			Address2_AddressTypeCode: { a: 'address2_addresstypecode' },
			Address2_City: { a: 'address2_city' },
			Address2_Composite: { a: 'address2_composite', r: true },
			Address2_Country: { a: 'address2_country' },
			Address2_County: { a: 'address2_county' },
			Address2_Fax: { a: 'address2_fax' },
			Address2_FreightTermsCode: { a: 'address2_freighttermscode' },
			Address2_Latitude: { a: 'address2_latitude' },
			Address2_Line1: { a: 'address2_line1' },
			Address2_Line2: { a: 'address2_line2' },
			Address2_Line3: { a: 'address2_line3' },
			Address2_Longitude: { a: 'address2_longitude' },
			Address2_Name: { a: 'address2_name' },
			Address2_PostalCode: { a: 'address2_postalcode' },
			Address2_PostOfficeBox: { a: 'address2_postofficebox' },
			Address2_PrimaryContactName: { a: 'address2_primarycontactname' },
			Address2_ShippingMethodCode: { a: 'address2_shippingmethodcode' },
			Address2_StateOrProvince: { a: 'address2_stateorprovince' },
			Address2_Telephone1: { a: 'address2_telephone1' },
			Address2_Telephone2: { a: 'address2_telephone2' },
			Address2_Telephone3: { a: 'address2_telephone3' },
			Address2_UPSZone: { a: 'address2_upszone' },
			Address2_UTCOffset: { a: 'address2_utcoffset' },
			Adx_CreatedByIPAddress: { a: 'adx_createdbyipaddress' },
			Adx_CreatedByUsername: { a: 'adx_createdbyusername' },
			Adx_ModifiedByIPAddress: { a: 'adx_modifiedbyipaddress' },
			Adx_ModifiedByUsername: { a: 'adx_modifiedbyusername' },
			Aging30: { a: 'aging30', r: true },
			Aging30_Base: { a: 'aging30_base', r: true },
			Aging60: { a: 'aging60', r: true },
			Aging60_Base: { a: 'aging60_base', r: true },
			Aging90: { a: 'aging90', r: true },
			Aging90_Base: { a: 'aging90_base', r: true },
			BusinessTypeCode: { a: 'businesstypecode' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedByExternalParty: { b: 'createdbyexternalparty', a: '_createdbyexternalparty_value', c: 'externalparties', d: 'externalparty', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreditLimit: { a: 'creditlimit' },
			CreditLimit_Base: { a: 'creditlimit_base', r: true },
			CreditOnHold: { a: 'creditonhold' },
			CustomerSizeCode: { a: 'customersizecode' },
			CustomerTypeCode: { a: 'customertypecode' },
			Description: { a: 'description' },
			DoNotBulkEMail: { a: 'donotbulkemail' },
			DoNotBulkPostalMail: { a: 'donotbulkpostalmail' },
			DoNotEMail: { a: 'donotemail' },
			DoNotFax: { a: 'donotfax' },
			DoNotPhone: { a: 'donotphone' },
			DoNotPostalMail: { a: 'donotpostalmail' },
			DoNotSendMM: { a: 'donotsendmm' },
			EMailAddress1: { a: 'emailaddress1' },
			EMailAddress2: { a: 'emailaddress2' },
			EMailAddress3: { a: 'emailaddress3' },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			Fax: { a: 'fax' },
			FollowEmail: { a: 'followemail' },
			FtpSiteURL: { a: 'ftpsiteurl' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IndustryCode: { a: 'industrycode' },
			IsPrivate: { a: 'isprivate', r: true },
			LastOnHoldTime_UtcDateAndTime: { a: 'lastonholdtime' },
			LastUsedInCampaign_UtcDateOnly: { a: 'lastusedincampaign' },
			MarketCap: { a: 'marketcap' },
			MarketCap_Base: { a: 'marketcap_base', r: true },
			MarketingOnly: { a: 'marketingonly' },
			MasterId: { b: 'masterid', a: '_masterid_value', c: 'accounts', d: 'account', r: true },
			Merged: { a: 'merged', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedByExternalParty: { b: 'modifiedbyexternalparty', a: '_modifiedbyexternalparty_value', c: 'externalparties', d: 'externalparty', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msa_managingpartnerid: { b: 'msa_managingpartnerid', a: '_msa_managingpartnerid_value', c: 'accounts', d: 'account' },
			Name: { a: 'name' },
			NumberOfEmployees: { a: 'numberofemployees' },
			OnHoldTime: { a: 'onholdtime', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwnershipCode: { a: 'ownershipcode' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ParentAccountId: { b: 'parentaccountid', a: '_parentaccountid_value', c: 'accounts', d: 'account' },
			ParticipatesInWorkflow: { a: 'participatesinworkflow' },
			PaymentTermsCode: { a: 'paymenttermscode' },
			PreferredAppointmentDayCode: { a: 'preferredappointmentdaycode' },
			PreferredAppointmentTimeCode: { a: 'preferredappointmenttimecode' },
			PreferredContactMethodCode: { a: 'preferredcontactmethodcode' },
			PreferredSystemUserId: { b: 'preferredsystemuserid', a: '_preferredsystemuserid_value', c: 'systemusers', d: 'systemuser' },
			PrimaryContactId: { b: 'primarycontactid', a: '_primarycontactid_value', c: 'contacts', d: 'contact' },
			PrimarySatoriId: { a: 'primarysatoriid' },
			PrimaryTwitterId: { a: 'primarytwitterid' },
			ProcessId: { a: 'processid' },
			Revenue: { a: 'revenue' },
			Revenue_Base: { a: 'revenue_base', r: true },
			SharesOutstanding: { a: 'sharesoutstanding' },
			ShippingMethodCode: { a: 'shippingmethodcode' },
			SIC: { a: 'sic' },
			SLAId: { b: 'slaid', a: '_slaid_value', c: 'slas', d: 'sla' },
			SLAInvokedId: { b: 'slainvokedid', a: '_slainvokedid_value', c: 'slas', d: 'sla', r: true },
			StageId: { a: 'stageid' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			StockExchange: { a: 'stockexchange' },
			Telephone1: { a: 'telephone1' },
			Telephone2: { a: 'telephone2' },
			Telephone3: { a: 'telephone3' },
			TerritoryCode: { a: 'territorycode' },
			TickerSymbol: { a: 'tickersymbol' },
			TimeSpentByMeOnEmailAndMeetings: { a: 'timespentbymeonemailandmeetings', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true },
			WebSiteURL: { a: 'websiteurl' },
			YomiName: { a: 'yominame' }
		};
		if (e === undefined) e = {};
		var u = {};
		var account = {};
		account.ODataEntity = e;
		account.FormattedValue = {};
		for (var field in _account) {
			var a = _account[field].a;
			var b = _account[field].b;
			var c = _account[field].c;
			var d = _account[field].d;
			var g = _account[field].g;
			var r = _account[field].r;
			webApiField(account, field, e, a, b, c, d, r, u, g);
		}
		account.Entity = u;
		account.EntityName = 'account';
		account.EntityCollectionName = 'accounts';
		account['@odata.etag'] = e['@odata.etag'];
		account.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		account.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return account;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Account = {
		AccountCategoryCode : {
			Chuan: 2,
			Khach_hang_Uu_tien: 1
		},
		AccountClassificationCode : {
			Gia_tri_mac_dinh: 1
		},
		AccountRatingCode : {
			Gia_tri_mac_dinh: 1
		},
		Address1_AddressTypeCode : {
			Chinh: 3,
			Khac: 4,
			Nhan_hang: 2,
			Nhan_hoa_don: 1
		},
		Address1_FreightTermsCode : {
			Cang_giao_hang: 1,
			Mien_phi: 2
		},
		Address1_ShippingMethodCode : {
			Ban_le_dat_hang_truoc: 7,
			Chuyen_cho_bang_may_bay: 1,
			Day_tai: 6,
			DHL: 2,
			FedEx: 3,
			Thu_gui_buu_dien: 5,
			UPS: 4
		},
		Address2_AddressTypeCode : {
			Gia_tri_mac_dinh: 1
		},
		Address2_FreightTermsCode : {
			Gia_tri_mac_dinh: 1
		},
		Address2_ShippingMethodCode : {
			Gia_tri_mac_dinh: 1
		},
		BusinessTypeCode : {
			Gia_tri_mac_dinh: 1
		},
		CustomerSizeCode : {
			Gia_tri_mac_dinh: 1
		},
		CustomerTypeCode : {
			Bao_chi: 7,
			Dai_ly: 11,
			Doi_tac: 5,
			Doi_thu_canh_tranh: 1,
			Khac: 12,
			Khach_hang: 3,
			Khach_hang_trien_vong: 8,
			Nguoi_anh_huong: 6,
			Nha_ban_le: 9,
			Nha_cung_cap: 10,
			Nha_dau_tu: 4,
			Tu_van_vien: 2
		},
		IndustryCode : {
			Ban_buon: 33,
			Ban_le_Dich_vu: 25,
			Ban_le_Dich_vu_Cap_nuoc_trong_Toa_nha: 5,
			Ban_le_Dich_vu_Giai_tri: 14,
			Ban_le_Hang_hoa_Khong_lau_ben: 22,
			Ban_le_Phuong_tien: 32,
			Bao_hiem: 20,
			Bat_dong_san_Dac_biet: 29,
			Che_bien_Thuc_pham_va_Thuoc_la: 17,
			Chi_nhanh_SIG: 26,
			Dia_diem_An_Uong: 13,
			Dich_vu_Kinh_doanh: 6,
			Dich_vu_Phap_ly: 21,
			Dich_vu_Tieu_dung: 8,
			Dich_vu_Tieu_dung_Ben_ngoai: 23,
			Dich_vu_Xa_hoi: 27,
			In_va_Xuat_ban_Truyen_thong: 3,
			Ke_toan: 1,
			Nha_moi_gioi: 4,
			Nha_phan_phoi_Nguoi_dieu_van_va_Nha_che_bien: 10,
			Nha_thau_Giao_dich_Ben_ngoai_Dac_biet: 28,
			Nong_nghiep_va_Trich_xuat_Tai_nguyen_Thien_nhien_Khong_Dau: 2,
			Quan_ly_Thiet_ke_Chi_dao_va_Quang_cao: 9,
			San_xuat_Lau_ben: 12,
			Sua_chua_va_Bao_duong_Chuyen_den: 19,
			Tai_chinh: 16,
			Tao_va_Phan_phoi_Tien_ich: 31,
			Thue_va_Cho_thue_Thiet_bi: 15,
			Trich_xuat_va_Phan_phoi_Hoa_dau: 24,
			Tu_van: 7,
			Van_phong_va_Phong_kham_Bac_si: 11,
			Van_tai: 30,
			Xu_ly_Dua_vao_Nhieu_von_Chuyen_ve: 18
		},
		OwnershipCode : {
			Cong_khai: 1,
			Cong_ty_con: 3,
			Khac: 4,
			Rieng_tu: 2
		},
		PaymentTermsCode : {
			_2_10_Tong_30: 2,
			Tong_30: 1,
			Tong_45: 3,
			Tong_60: 4
		},
		PreferredAppointmentDayCode : {
			Chu_Nhat: 0,
			Thu_Ba: 2,
			Thu_Bay: 6,
			Thu_Hai: 1,
			Thu_Nam: 4,
			Thu_Sau: 5,
			Thu_Tu: 3
		},
		PreferredAppointmentTimeCode : {
			Buoi_chieu: 2,
			Buoi_sang: 1,
			Buoi_toi: 3
		},
		PreferredContactMethodCode : {
			Bat_ky: 1,
			Dien_thoai: 3,
			Email: 2,
			Fax: 4,
			Thu: 5
		},
		ShippingMethodCode : {
			Gia_tri_mac_dinh: 1
		},
		StateCode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		StatusCode : {
			Hien_hoat: 1,
			Khong_hoat_dong: 2
		},
		TerritoryCode : {
			Gia_tri_mac_dinh: 1
		},
		RollupState : {
			NotCalculated: 0,
			Calculated: 1,
			OverflowError: 2,
			OtherError: 3,
			RetryLimitExceeded: 4,
			HierarchicalRecursionLimitReached: 5,
			LoopDetected: 6
		}
	};
})(OptionSet || (OptionSet = {}));