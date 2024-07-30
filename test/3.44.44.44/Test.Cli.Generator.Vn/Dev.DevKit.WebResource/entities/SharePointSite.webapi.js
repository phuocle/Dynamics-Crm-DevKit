'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SharePointSiteApi = function (e) {
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
					value = value.replace('{', '').replace('}', '');
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
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
		var _sharepointsite = {
			AbsoluteURL: { a: 'absoluteurl' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsDefault: { a: 'isdefault' },
			IsGridPresent: { a: 'isgridpresent' },
			IsPowerBISite: { a: 'ispowerbisite' },
			LastValidated_UtcDateAndTime: { a: 'lastvalidated' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ParentSite: { b: 'parentsite', a: '_parentsite_value', c: 'sharepointsites', d: 'sharepointsite' },
			RelativeUrl: { a: 'relativeurl' },
			ServiceType: { a: 'servicetype' },
			SharePointSiteId: { a: 'sharepointsiteid' },
			SiteCollectionId: { a: 'sitecollectionid', r: true },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency', r: true },
			UserId: { a: 'userid' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			ValidationStatus: { a: 'validationstatus' },
			ValidationStatusErrorCode: { a: 'validationstatuserrorcode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var sharepointsite = {};
		sharepointsite.ODataEntity = e;
		sharepointsite.FormattedValue = {};
		for (var field in _sharepointsite) {
			var a = _sharepointsite[field].a;
			var b = _sharepointsite[field].b;
			var c = _sharepointsite[field].c;
			var d = _sharepointsite[field].d;
			var g = _sharepointsite[field].g;
			var r = _sharepointsite[field].r;
			webApiField(sharepointsite, field, e, a, b, c, d, r, u, g);
		}
		sharepointsite.Entity = u;
		sharepointsite.EntityName = 'sharepointsite';
		sharepointsite.EntityCollectionName = 'sharepointsites';
		sharepointsite['@odata.etag'] = e['@odata.etag'];
		sharepointsite.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		sharepointsite.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return sharepointsite;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SharePointSite = {
		FolderStructureEntity : {
			Khong: 0,
			Nguoi_lien_he: 2,
			Tai_khoan: 1
		},
		ParentSiteObjectTypeCode : {
		},
		ServiceType : {
			Cac_nhom_MS: 3,
			Duoc_chia_se_voi_toi: 2,
			OneDrive: 1,
			SharePoint: 0
		},
		StateCode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		StatusCode : {
			Hien_hoat: 1,
			Khong_hoat_dong: 2
		},
		ValidationStatus : {
			Chua_xac_thuc: 1,
			Dang_tien_hanh: 2,
			Hop_le: 4,
			Khong_hop_le: 3,
			Khong_the_xac_thuc: 5
		},
		ValidationStatusErrorCode : {
			Chua_xac_thuc_URL_cua_ban_ghi_nay: 1,
			Chung_chi_khong_hop_le: 7,
			Khong_the_truy_cap_URL_do_thiet_dat_bao_mat_cua_Internet_Explorer: 5,
			Loi_xac_thuc: 6,
			So_do_URL_cua_Microsoft_Dynamics_365_va_SharePoint_khac_nhau: 4,
			URL_cua_ban_ghi_nay_co_hop_le: 2,
			URL_cua_ban_ghi_nay_khong_hop_le: 3
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