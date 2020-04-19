'use strict';
/** @namespace LuckyStar */
var LuckyStar;
(function (LuckyStar) {
	'use strict';
	LuckyStar.ImportFileApi = function (e) {
		var EMPTY_STRING = '';
		var f = '@OData.Community.Display.V1.FormattedValue';
        function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
            var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
            var property = {};
            var getFormattedValue = function () {
                if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
                    return EMPTY_STRING;
                }
                if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
                    if (entity[logicalName + l] === entityLogicalName) {
                        return entity[logicalName + f];
                    }
                    return EMPTY_STRING;
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
                    value = value.replace('{', EMPTY_STRING).replace('}', EMPTY_STRING);
                    upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
                } else {
                    upsertEntity[logicalName] = value;
                }
                entity[logicalName] = value;
            };
            Object.defineProperty(property, 'FormattedValue', {
                get: getFormattedValue
            });
            if (readOnly) {
                Object.defineProperty(property, 'Value', {
                    get: getValue
                });
            }
            else {
                Object.defineProperty(property, 'Value', {
                    get: getValue,
                    set: setValue
                });
            }
            return property;
        }
		var importfile = {
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
		for (var field in importfile) {
			var a = importfile[field].a;
			var b = importfile[field].b;
			var c = importfile[field].c;
			var d = importfile[field].d;
			var g = importfile[field].g;
			var r = importfile[field].r;
			importfile[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		importfile.Entity = u;
		importfile.EntityName = 'importfile';
		importfile.EntityCollectionName = 'importfiles';
		importfile['@odata.etag'] = e['@odata.etag'];
		importfile.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		importfile.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return importfile;
	};
})(LuckyStar || (LuckyStar = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ImportFile = {
		DataDelimiterCode : {
			DoubleQuote: 1,
			None: 2,
			SingleQuote: 3
		},
		FieldDelimiterCode : {
			Colon: 1,
			Comma: 2,
			Tab: 3,
			Semicolon: 4
		},
		FileTypeCode : {
			CSV: 0,
			XML_Spreadsheet_2003: 1,
			Attachment: 2,
			XLSX: 3
		},
		ProcessCode : {
			Process: 1,
			Ignore: 2,
			Internal: 3
		},
		ProcessingStatus : {
			Not_Started: 1,
			Parsing: 2,
			Parsing_Complete: 3,
			Complex_Transformation: 4,
			Lookup_Transformation: 5,
			Picklist_Transformation: 6,
			Owner_Transformation: 7,
			Transformation_Complete: 8,
			Import_Pass_1: 9,
			Import_Pass_2: 10,
			Import_Complete: 11,
			Primary_Key_Transformation: 12
		},
		StateCode : {
			Active: 0
		},
		StatusCode : {
			Submitted: 0,
			Parsing: 1,
			Transforming: 2,
			Importing: 3,
			Completed: 4,
			Failed: 5
		},
		UpsertModeCode : {
			Create: 0,
			Update: 1,
			Ignore: 2
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