'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	if (DevKit === undefined) DevKit = {};
	DevKit.ImportFileApi = function (e) {
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
		const _importfile = {
			AdditionalHeaderRow: { a: 'additionalheaderrow', r: true },
			CompletedOn_UtcDateOnly: { a: 'completedon', r: true, g: 'DateTime' },
			Content: { a: 'content' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DataDelimiterCode: { a: 'datadelimitercode', g: 'Integer' },
			EnableDuplicateDetection: { a: 'enableduplicatedetection', g: 'Boolean' },
			EntityKeyId: { a: 'entitykeyid' },
			FailureCount: { a: 'failurecount', r: true, g: 'Integer' },
			FieldDelimiterCode: { a: 'fielddelimitercode', g: 'Integer' },
			FileTypeCode: { a: 'filetypecode', g: 'Integer' },
			HeaderRow: { a: 'headerrow', r: true },
			ImportFileId: { a: 'importfileid' },
			ImportId: { b: 'importid', a: '_importid_value', c: 'imports', d: 'import' },
			ImportMapId: { b: 'importmapid', a: '_importmapid_value', c: 'importmaps', d: 'importmap' },
			IsFirstRowHeader: { a: 'isfirstrowheader', g: 'Boolean' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ParsedTableColumnPrefix: { a: 'parsedtablecolumnprefix', r: true },
			ParsedTableColumnsNumber: { a: 'parsedtablecolumnsnumber', r: true, g: 'Integer' },
			ParsedTableName: { a: 'parsedtablename', r: true },
			PartialFailureCount: { a: 'partialfailurecount', r: true, g: 'Integer' },
			ProcessCode: { a: 'processcode', g: 'Integer' },
			ProcessingStatus: { a: 'processingstatus', r: true, g: 'Integer' },
			ProgressCounter: { a: 'progresscounter', r: true, g: 'Integer' },
			RelatedEntityColumns: { a: 'relatedentitycolumns' },
			Size: { a: 'size' },
			Source: { a: 'source' },
			SourceEntityName: { a: 'sourceentityname' },
			StateCode: { a: 'statecode', g: 'Integer' },
			StatusCode: { a: 'statuscode', g: 'Integer' },
			SuccessCount: { a: 'successcount', r: true, g: 'Integer' },
			TargetEntityName: { a: 'targetentityname' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber', g: 'Integer' },
			TotalCount: { a: 'totalcount', r: true, g: 'Integer' },
			UpsertModeCode: { a: 'upsertmodecode', g: 'Integer' },
			UseSystemMap: { a: 'usesystemmap', g: 'Boolean' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode', g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const importfile = {};
		importfile.ODataEntity = e;
		importfile.FormattedValue = {};
		for (const field in _importfile) {
			const fieldConfig = _importfile[field];
			webApiField(importfile, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		importfile.Entity = u;
		importfile.EntityName = 'importfile';
		importfile.EntityCollectionName = 'importfiles';
		importfile['@odata.etag'] = e?.['@odata.etag'];
		importfile.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		importfile.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return importfile;
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.ImportFile = {
		DataDelimiterCode: { DoubleQuote: 1, None: 2, SingleQuote: 3 },
		FieldDelimiterCode: { Colon: 1, Comma: 2, Semicolon: 4, Tab: 3 },
		FileTypeCode: { Attachment: 2, CSV: 0, XLSX: 3, XML_Spreadsheet_2003: 1 },
		ProcessCode: { Ignore: 2, Internal: 3, Process: 1 },
		ProcessingStatus: { Complex_Transformation: 4, Import_Complete: 11, Import_Pass_1: 9, Import_Pass_2: 10, Lookup_Transformation: 5, Not_Started: 1, Owner_Transformation: 7, Parsing: 2, Parsing_Complete: 3, Picklist_Transformation: 6, Primary_Key_Transformation: 12, Transformation_Complete: 8 },
		RecordsOwnerIdType: { },
		StateCode: { Active: 0 },
		StatusCode: { Completed: 4, Failed: 5, Importing: 3, Parsing: 1, Submitted: 0, Transforming: 2 },
		UpsertModeCode: { Create: 0, Ignore: 2, Update: 1 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));