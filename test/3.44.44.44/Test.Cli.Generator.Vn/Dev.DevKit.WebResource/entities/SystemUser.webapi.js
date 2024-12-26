'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SystemUserApi = function (e) {
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
		var _systemuser = {
			AccessMode: { a: 'accessmode' },
			ActiveDirectoryGuid: { a: 'activedirectoryguid', r: true },
			Address1_AddressId: { a: 'address1_addressid' },
			Address1_AddressTypeCode: { a: 'address1_addresstypecode' },
			Address1_City: { a: 'address1_city' },
			Address1_Composite: { a: 'address1_composite', r: true },
			Address1_Country: { a: 'address1_country' },
			Address1_County: { a: 'address1_county' },
			Address1_Fax: { a: 'address1_fax' },
			Address1_Latitude: { a: 'address1_latitude' },
			Address1_Line1: { a: 'address1_line1' },
			Address1_Line2: { a: 'address1_line2' },
			Address1_Line3: { a: 'address1_line3' },
			Address1_Longitude: { a: 'address1_longitude' },
			Address1_Name: { a: 'address1_name' },
			Address1_PostalCode: { a: 'address1_postalcode' },
			Address1_PostOfficeBox: { a: 'address1_postofficebox' },
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
			Address2_Latitude: { a: 'address2_latitude' },
			Address2_Line1: { a: 'address2_line1' },
			Address2_Line2: { a: 'address2_line2' },
			Address2_Line3: { a: 'address2_line3' },
			Address2_Longitude: { a: 'address2_longitude' },
			Address2_Name: { a: 'address2_name' },
			Address2_PostalCode: { a: 'address2_postalcode' },
			Address2_PostOfficeBox: { a: 'address2_postofficebox' },
			Address2_ShippingMethodCode: { a: 'address2_shippingmethodcode' },
			Address2_StateOrProvince: { a: 'address2_stateorprovince' },
			Address2_Telephone1: { a: 'address2_telephone1' },
			Address2_Telephone2: { a: 'address2_telephone2' },
			Address2_Telephone3: { a: 'address2_telephone3' },
			Address2_UPSZone: { a: 'address2_upszone' },
			Address2_UTCOffset: { a: 'address2_utcoffset' },
			ApplicationId: { a: 'applicationid' },
			ApplicationIdUri: { a: 'applicationiduri', r: true },
			AzureActiveDirectoryObjectId: { a: 'azureactivedirectoryobjectid', r: true },
			AzureDeletedOn_UtcDateAndTime: { a: 'azuredeletedon', r: true },
			AzureState: { a: 'azurestate' },
			BusinessUnitId: { b: 'businessunitid', a: '_businessunitid_value', c: 'businessunits', d: 'businessunit' },
			CalendarId: { b: 'calendarid', a: '_calendarid_value', c: 'calendars', d: 'calendar' },
			CALType: { a: 'caltype' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DefaultFiltersPopulated: { a: 'defaultfilterspopulated', r: true },
			DefaultMailbox: { b: 'defaultmailbox', a: '_defaultmailbox_value', c: 'mailboxes', d: 'mailbox', r: true },
			DefaultOdbFolderName: { a: 'defaultodbfoldername', r: true },
			DeletedState: { a: 'deletedstate', r: true },
			DisabledReason: { a: 'disabledreason', r: true },
			DisplayInServiceViews: { a: 'displayinserviceviews' },
			DomainName: { a: 'domainname' },
			EmailRouterAccessApproval: { a: 'emailrouteraccessapproval' },
			EmployeeId: { a: 'employeeid' },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			FirstName: { a: 'firstname' },
			FullName: { a: 'fullname', r: true },
			GovernmentId: { a: 'governmentid' },
			HomePhone: { a: 'homephone' },
			IdentityId: { a: 'identityid', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IncomingEmailDeliveryMethod: { a: 'incomingemaildeliverymethod' },
			InternalEMailAddress: { a: 'internalemailaddress' },
			InviteStatusCode: { a: 'invitestatuscode' },
			IsActiveDirectoryUser: { a: 'isactivedirectoryuser', r: true },
			IsDisabled: { a: 'isdisabled' },
			IsEmailAddressApprovedByO365Admin: { a: 'isemailaddressapprovedbyo365admin', r: true },
			IsIntegrationUser: { a: 'isintegrationuser' },
			IsLicensed: { a: 'islicensed' },
			IsSyncWithDirectory: { a: 'issyncwithdirectory' },
			JobTitle: { a: 'jobtitle' },
			LastName: { a: 'lastname' },
			LatestUpdateTime_UtcDateAndTime: { a: 'latestupdatetime', r: true },
			MiddleName: { a: 'middlename' },
			MobileAlertEMail: { a: 'mobilealertemail' },
			MobileOfflineProfileId: { b: 'mobileofflineprofileid', a: '_mobileofflineprofileid_value', c: 'mobileofflineprofiles', d: 'mobileofflineprofile' },
			MobilePhone: { a: 'mobilephone' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			NickName: { a: 'nickname' },
			OrganizationId: { a: 'organizationid', r: true },
			OutgoingEmailDeliveryMethod: { a: 'outgoingemaildeliverymethod' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			ParentSystemUserId: { b: 'parentsystemuserid', a: '_parentsystemuserid_value', c: 'systemusers', d: 'systemuser' },
			PassportHi: { a: 'passporthi' },
			PassportLo: { a: 'passportlo' },
			PersonalEMailAddress: { a: 'personalemailaddress' },
			PhotoUrl: { a: 'photourl' },
			PositionId: { b: 'positionid', a: '_positionid_value', c: 'positions', d: 'position' },
			PreferredAddressCode: { a: 'preferredaddresscode' },
			PreferredEmailCode: { a: 'preferredemailcode' },
			PreferredPhoneCode: { a: 'preferredphonecode' },
			ProcessId: { a: 'processid' },
			QueueId: { b: 'queueid', a: '_queueid_value', c: 'queues', d: 'queue' },
			Salutation: { a: 'salutation' },
			SetupUser: { a: 'setupuser' },
			SharePointEmailAddress: { a: 'sharepointemailaddress' },
			Skills: { a: 'skills' },
			StageId: { a: 'stageid' },
			SystemUserId: { a: 'systemuserid' },
			TerritoryId: { b: 'territoryid', a: '_territoryid_value', c: 'territories', d: 'territory' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			Title: { a: 'title' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UserLicenseType: { a: 'userlicensetype' },
			UserPuid: { a: 'userpuid', r: true },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true },
			WindowsLiveID: { a: 'windowsliveid' },
			YammerEmailAddress: { a: 'yammeremailaddress' },
			YammerUserId: { a: 'yammeruserid' },
			YomiFirstName: { a: 'yomifirstname' },
			YomiFullName: { a: 'yomifullname', r: true },
			YomiLastName: { a: 'yomilastname' },
			YomiMiddleName: { a: 'yomimiddlename' }
		};
		if (e === undefined) e = {};
		var u = {};
		var systemuser = {};
		systemuser.ODataEntity = e;
		systemuser.FormattedValue = {};
		for (var field in _systemuser) {
			var a = _systemuser[field].a;
			var b = _systemuser[field].b;
			var c = _systemuser[field].c;
			var d = _systemuser[field].d;
			var g = _systemuser[field].g;
			var r = _systemuser[field].r;
			webApiField(systemuser, field, e, a, b, c, d, r, u, g);
		}
		systemuser.Entity = u;
		systemuser.EntityName = 'systemuser';
		systemuser.EntityCollectionName = 'systemusers';
		systemuser['@odata.etag'] = e['@odata.etag'];
		systemuser.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		systemuser.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return systemuser;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SystemUser = {
		AccessMode : {
			Doc: 2,
			Doc_ghi: 0,
			Khong_tuong_tac: 4,
			Nguoi_dung_ho_tro: 3,
			Quan_tri: 1,
			Quan_tri_vien_dai_dien: 5
		},
		Address1_AddressTypeCode : {
			Gia_tri_mac_dinh: 1
		},
		Address1_ShippingMethodCode : {
			Gia_tri_mac_dinh: 1
		},
		Address2_AddressTypeCode : {
			Gia_tri_mac_dinh: 1
		},
		Address2_ShippingMethodCode : {
			Gia_tri_mac_dinh: 1
		},
		AzureState : {
			Exists: 0,
			Not_found_or_hard_deleted: 2,
			Soft_deleted: 1
		},
		CALType : {
			Ban_hang: 9,
			Chuyen_nghiep: 0,
			Co_ban: 2,
			Dich_vu: 10,
			Doanh_nghiep: 7,
			Field_Service: 11,
			Project_Service: 12,
			Quan_tri: 1,
			Thiet_bi_chuyen_nghiep: 3,
			Thiet_bi_co_ban: 4,
			Thiet_bi_doanh_nghiep: 8,
			Thiet_bi_thiet_yeu: 6,
			Thiet_yeu: 5
		},
		DeletedState : {
			Not_deleted: 0,
			Soft_deleted: 1
		},
		EmailRouterAccessApproval : {
			Bi_tu_choi: 3,
			Da_phe_chuan: 1,
			Dang_cho_Phe_duyet: 2,
			Trong: 0
		},
		IncomingEmailDeliveryMethod : {
			Dong_bo_phia_May_chu_hoac_Bo_dinh_tuyen_Email: 2,
			Hop_thu_chuyen_tiep: 3,
			Khong: 0,
			Microsoft_Dynamics_365_danh_cho_Outlook: 1
		},
		InviteStatusCode : {
			Chua_gui_loi_moi: 0,
			Da_moi: 1,
			Loi_moi_da_chap_nhan: 4,
			Loi_moi_da_het_han: 3,
			Loi_moi_da_thu_hoi: 6,
			Loi_moi_da_tu_choi: 5,
			Loi_moi_gan_het_han: 2
		},
		OutgoingEmailDeliveryMethod : {
			Dong_bo_phia_May_chu_hoac_Bo_dinh_tuyen_Email: 2,
			Khong: 0,
			Microsoft_Dynamics_365_danh_cho_Outlook: 1
		},
		PreferredAddressCode : {
			Dia_chi_khac: 2,
			Dia_chi_thu_tin: 1
		},
		PreferredEmailCode : {
			Gia_tri_mac_dinh: 1
		},
		PreferredPhoneCode : {
			Dien_thoai_Chinh: 1,
			Dien_thoai_Di_dong: 4,
			Dien_thoai_Khac: 2,
			Dien_thoai_Nha_rieng: 3
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