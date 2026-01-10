'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	if (DevKit === undefined) DevKit = {};
	DevKit.ReportApi = function (e) {
		const f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, type) {
			const l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			const getFormattedValue = function () {
				if (entity?.[logicalName + f] === undefined || entity?.[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === entityLogicalName) {
						return entity?.[logicalName + f];
					}
					return '';
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
				}
				return entity?.[logicalName + f];
			};
			const getValue = function () {
				if (entity?.[logicalName] === undefined || entity?.[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === undefined || entity?.[logicalName + l] === entityLogicalName) {
						return returnGet(entity?.[logicalName], type);
					}
					return null;
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName]?.toString()?.split(',').map(function (item) { return parseInt(item, 10); });
				}
				return returnGet(entity?.[logicalName], type);
			};
			const returnGet = function (data, type) {
				if (data === null || data === undefined) return null;
				if (type === null || type === undefined) return data;
				const typeParsers = {
					DateTime: function (value) {
						if (value === null || value === undefined) return null;
						if (value instanceof Date) return isNaN(value.getTime()) ? null : value;
						const trimmedString = String(value).trim();
						if (trimmedString === '') return null;
						const timestamp = Date.parse(trimmedString);
						if (isNaN(timestamp)) return null;
						const parsedDate = new Date(timestamp);
						return isNaN(parsedDate.getTime()) ? null : parsedDate;
					},
					Integer: function (value) {
						const parsed = parseInt(value, 10);
						return isNaN(parsed) ? null : parsed;
					},
					Number: function (value) {
						const parsed = Number(value);
						return isNaN(parsed) ? null : parsed;
					},
					Boolean: function (value) {
						if (value === null || value === undefined) return null;
						if (typeof value === 'boolean') return value;
						if (typeof value === 'number') return value !== 0;
						const stringValue = String(value).trim().toLowerCase();
						const trueValues = ["true", "1", "yes", "y"];
						const falseValues = ["false", "0", "no", "n"];
						if (trueValues.includes(stringValue)) return true;
						if (falseValues.includes(stringValue)) return false;
						return false;
					}
				};
				const parser = typeParsers[type];
				return parser ? parser(data) : data;
			};
			const setValue = function (value) {
				if (type === 'MultiOptionSet') value = value?.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName?.length > 0) {
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						const cleanValue = typeof value === 'string' ? value.replace(/[{}]/g, '') : value;
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + cleanValue + ')';
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
		const _report = {
			ApplicationId: { a: 'applicationid', r: true },
			BodyBinary: { a: 'bodybinary' },
			BodyText: { a: 'bodytext' },
			BodyUrl: { a: 'bodyurl' },
			CdsDatasetId: { a: 'cdsdatasetid', r: true },
			ComponentState: { a: 'componentstate', r: true, g: 'Integer' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedInMajorVersion: { a: 'createdinmajorversion', g: 'Integer' },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CustomReportXml: { a: 'customreportxml', r: true },
			DefaultFilter: { a: 'defaultfilter' },
			DependentModelReportId: { b: 'dependentmodelreportid', a: '_dependentmodelreportid_value', c: 'reports', d: 'report' },
			Description: { a: 'description' },
			FileContent_name: { a: 'filecontent', r: true },
			FileName: { a: 'filename' },
			FileSize: { a: 'filesize', r: true, g: 'Integer' },
			IntroducedVersion: { a: 'introducedversion' },
			IsCustomizable: { a: 'iscustomizable' },
			IsCustomReport: { a: 'iscustomreport', r: true, g: 'Boolean' },
			IsManaged: { a: 'ismanaged', r: true, g: 'Boolean' },
			IsPersonal: { a: 'ispersonal', g: 'Boolean' },
			IsScheduledReport: { a: 'isscheduledreport', r: true, g: 'Boolean' },
			LanguageCode: { a: 'languagecode', g: 'Integer' },
			ManagedType: { a: 'managedtype', g: 'Integer' },
			MimeType: { a: 'mimetype' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OriginalBodyText: { a: 'originalbodytext', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true, g: 'DateTime' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ParentReportId: { b: 'parentreportid', a: '_parentreportid_value', c: 'reports', d: 'report' },
			PowerBiDatasetId: { a: 'powerbidatasetid', r: true },
			PowerBiFeatureTag: { a: 'powerbifeaturetag' },
			PowerBiReportId: { a: 'powerbireportid', r: true },
			PowerBiReportInternalState: { a: 'powerbireportinternalstate', r: true },
			PowerBiReportName: { a: 'powerbireportname', r: true },
			PowerBiWorkspaceInfo: { a: 'powerbiworkspaceinfo', r: true },
			QueryInfo: { a: 'queryinfo', r: true },
			RdlHash: { a: 'rdlhash', r: true, g: 'Integer' },
			ReportId: { a: 'reportid' },
			ReportIdUnique: { a: 'reportidunique', r: true },
			ReportNameOnSRS: { a: 'reportnameonsrs', r: true },
			ReportStatus: { a: 'reportstatus' },
			ReportTypeCode: { a: 'reporttypecode', g: 'Integer' },
			ReportVersion: { a: 'reportversion', g: 'Integer' },
			ScheduleXml: { a: 'schedulexml', r: true },
			SignatureDate_UtcDateOnly: { a: 'signaturedate', g: 'DateTime' },
			SignatureId: { a: 'signatureid' },
			SignatureLcid: { a: 'signaturelcid', g: 'Integer' },
			SignatureMajorVersion: { a: 'signaturemajorversion', g: 'Integer' },
			SignatureMinorVersion: { a: 'signatureminorversion', g: 'Integer' },
			SolutionId: { a: 'solutionid', r: true },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber', g: 'Integer' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode', g: 'Integer' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const report = {};
		report.ODataEntity = e;
		report.FormattedValue = {};
		for (const field in _report) {
			const fieldConfig = _report[field];
			webApiField(report, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		report.Entity = u;
		report.EntityName = 'report';
		report.EntityCollectionName = 'reports';
		report['@odata.etag'] = e?.['@odata.etag'];
		report.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		report.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return report;
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.Report = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		ManagedType: { Customer: 1, Dataverse: 0 },
		ReportTypeCode: { Excel_Embedded_Report: 6, Excel_Embedded_Report_Template: 7, Linked_Report: 3, Other_Report: 2, Power_BI_Analytic_Report: 5, Power_BI_Paginated_Report: 4, Reporting_Services_Report: 1 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));