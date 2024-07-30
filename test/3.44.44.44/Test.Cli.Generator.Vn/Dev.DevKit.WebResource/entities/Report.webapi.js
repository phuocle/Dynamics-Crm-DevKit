'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.ReportApi = function (e) {
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
		var _report = {
			ApplicationId: { a: 'applicationid', r: true },
			BodyBinary: { a: 'bodybinary' },
			BodyText: { a: 'bodytext' },
			BodyUrl: { a: 'bodyurl' },
			CdsDatasetId: { a: 'cdsdatasetid', r: true },
			ComponentState: { a: 'componentstate', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedInMajorVersion: { a: 'createdinmajorversion' },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CustomReportXml: { a: 'customreportxml', r: true },
			DefaultFilter: { a: 'defaultfilter' },
			DependentModelReportId: { b: 'dependentmodelreportid', a: '_dependentmodelreportid_value', c: 'reports', d: 'report' },
			Description: { a: 'description' },
			FileContent_name: { a: 'filecontent', r: true },
			FileName: { a: 'filename' },
			FileSize: { a: 'filesize', r: true },
			IntroducedVersion: { a: 'introducedversion' },
			IsCustomizable: { a: 'iscustomizable' },
			IsCustomReport: { a: 'iscustomreport', r: true },
			IsManaged: { a: 'ismanaged', r: true },
			IsPersonal: { a: 'ispersonal' },
			IsScheduledReport: { a: 'isscheduledreport', r: true },
			LanguageCode: { a: 'languagecode' },
			ManagedType: { a: 'managedtype' },
			MimeType: { a: 'mimetype' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OriginalBodyText: { a: 'originalbodytext', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ParentReportId: { b: 'parentreportid', a: '_parentreportid_value', c: 'reports', d: 'report' },
			PowerBiFeatureTag: { a: 'powerbifeaturetag' },
			PowerBiReportId: { a: 'powerbireportid', r: true },
			PowerBiReportInternalState: { a: 'powerbireportinternalstate', r: true },
			PowerBiReportName: { a: 'powerbireportname', r: true },
			PowerBiWorkspaceInfo: { a: 'powerbiworkspaceinfo', r: true },
			QueryInfo: { a: 'queryinfo', r: true },
			RdlHash: { a: 'rdlhash', r: true },
			ReportId: { a: 'reportid' },
			ReportIdUnique: { a: 'reportidunique', r: true },
			ReportNameOnSRS: { a: 'reportnameonsrs', r: true },
			ReportStatus: { a: 'reportstatus' },
			ReportTypeCode: { a: 'reporttypecode' },
			ReportVersion: { a: 'reportversion' },
			ScheduleXml: { a: 'schedulexml', r: true },
			SignatureDate_UtcDateOnly: { a: 'signaturedate' },
			SignatureId: { a: 'signatureid' },
			SignatureLcid: { a: 'signaturelcid' },
			SignatureMajorVersion: { a: 'signaturemajorversion' },
			SignatureMinorVersion: { a: 'signatureminorversion' },
			SolutionId: { a: 'solutionid', r: true },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var report = {};
		report.ODataEntity = e;
		report.FormattedValue = {};
		for (var field in _report) {
			var a = _report[field].a;
			var b = _report[field].b;
			var c = _report[field].c;
			var d = _report[field].d;
			var g = _report[field].g;
			var r = _report[field].r;
			webApiField(report, field, e, a, b, c, d, r, u, g);
		}
		report.Entity = u;
		report.EntityName = 'report';
		report.EntityCollectionName = 'reports';
		report['@odata.etag'] = e['@odata.etag'];
		report.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		report.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return report;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Report = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		ManagedType : {
			Customer: 1,
			Dataverse: 0
		},
		ReportTypeCode : {
			Bao_cao_da_lien_ket: 3,
			Bao_cao_duoc_phan_trang_trong_Power_BI: 4,
			Bao_cao_khac: 2,
			Bao_cao_phan_tich_trong_Power_BI: 5,
			Bao_cao_ve_dich_vu_bao_cao: 1,
			Excel_Embedded_Report: 6,
			Excel_Embedded_Report_Template: 7
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