'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.ImportFileApi = function (e) {
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
		var _importfile = {
			AdditionalHeaderRow: { a: 'additionalheaderrow', r: true },
			CompletedOn_UtcDateOnly: { a: 'completedon', r: true },
			Content: { a: 'content' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DataDelimiterCode: { a: 'datadelimitercode' },
			EnableDuplicateDetection: { a: 'enableduplicatedetection' },
			EntityKeyId: { a: 'entitykeyid' },
			FailureCount: { a: 'failurecount', r: true },
			FieldDelimiterCode: { a: 'fielddelimitercode' },
			FileTypeCode: { a: 'filetypecode' },
			HeaderRow: { a: 'headerrow', r: true },
			ImportFileId: { a: 'importfileid' },
			ImportId: { b: 'importid', a: '_importid_value', c: 'imports', d: 'import' },
			ImportMapId: { b: 'importmapid', a: '_importmapid_value', c: 'importmaps', d: 'importmap' },
			IsFirstRowHeader: { a: 'isfirstrowheader' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ParsedTableColumnPrefix: { a: 'parsedtablecolumnprefix', r: true },
			ParsedTableColumnsNumber: { a: 'parsedtablecolumnsnumber', r: true },
			ParsedTableName: { a: 'parsedtablename', r: true },
			PartialFailureCount: { a: 'partialfailurecount', r: true },
			ProcessCode: { a: 'processcode' },
			ProcessingStatus: { a: 'processingstatus', r: true },
			ProgressCounter: { a: 'progresscounter', r: true },
			recordsownerid_systemuser: { b: 'recordsownerid_systemuser', a: '_recordsownerid_value', c: 'systemusers', d: 'systemuser' },
			recordsownerid_team: { b: 'recordsownerid_team', a: '_recordsownerid_value', c: 'teams', d: 'team' },
			RelatedEntityColumns: { a: 'relatedentitycolumns' },
			Size: { a: 'size' },
			Source: { a: 'source' },
			SourceEntityName: { a: 'sourceentityname' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			SuccessCount: { a: 'successcount', r: true },
			TargetEntityName: { a: 'targetentityname' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TotalCount: { a: 'totalcount', r: true },
			UpsertModeCode: { a: 'upsertmodecode' },
			UseSystemMap: { a: 'usesystemmap' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' }
		};
		if (e === undefined) e = {};
		var u = {};
		var importfile = {};
		importfile.ODataEntity = e;
		importfile.FormattedValue = {};
		for (var field in _importfile) {
			var a = _importfile[field].a;
			var b = _importfile[field].b;
			var c = _importfile[field].c;
			var d = _importfile[field].d;
			var g = _importfile[field].g;
			var r = _importfile[field].r;
			webApiField(importfile, field, e, a, b, c, d, r, u, g);
		}
		importfile.Entity = u;
		importfile.EntityName = 'importfile';
		importfile.EntityCollectionName = 'importfiles';
		importfile['@odata.etag'] = e['@odata.etag'];
		importfile.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		importfile.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return importfile;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ImportFile = {
		DataDelimiterCode : {
			DoubleQuote: 1,
			Khong: 2,
			SingleQuote: 3
		},
		FieldDelimiterCode : {
			Dau_cham_phay: 4,
			Dau_hai_cham: 1,
			Dau_phay: 2,
			Tab: 3
		},
		FileTypeCode : {
			CSV: 0,
			Tep_dinh_kem: 2,
			Trang_tinh_XML_2003: 1,
			XLSX: 3
		},
		ProcessCode : {
			Bo_qua: 2,
			Noi_bo: 3,
			Quy_trinh: 1
		},
		ProcessingStatus : {
			Chua_bat_dau: 1,
			Chuyen_doi_Chu_so_huu: 7,
			Chuyen_doi_Danh_sach_chon: 6,
			Chuyen_doi_Hoan_hanh: 8,
			Chuyen_doi_Khoa_Chinh: 12,
			Chuyen_doi_Phuc_hop: 4,
			Chuyen_doi_Tra_cuu: 5,
			Dang_phan_tich: 2,
			Nhap_Chuyen_qua_1: 9,
			Nhap_Chuyen_qua_2: 10,
			Nhap_Hoan_thanh: 11,
			Phan_tich_Hoan_thanh: 3
		},
		RecordsOwnerIdType : {
		},
		StateCode : {
			Hien_hoat: 0
		},
		StatusCode : {
			Da_gui: 0,
			Da_hoan_thanh: 4,
			Dang_chuyen_doi: 2,
			Dang_nhap: 3,
			Dang_phan_tich: 1,
			Khong_thanh_cong: 5
		},
		UpsertModeCode : {
			Bo_qua: 2,
			Cap_nhat: 1,
			Tao: 0
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