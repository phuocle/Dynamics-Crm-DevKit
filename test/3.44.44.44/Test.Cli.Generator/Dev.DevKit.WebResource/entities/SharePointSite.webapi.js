﻿'use strict';
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
			Account: 1,
			Contact: 2,
			None: 0
		},
		ParentSiteObjectTypeCode : {
		},
		ServiceType : {
			MS_Teams: 3,
			OneDrive: 1,
			Shared_with_me: 2,
			SharePoint: 0
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
			Active: 1,
			Inactive: 2
		},
		ValidationStatus : {
			Could_not_validate: 5,
			In_Progress: 2,
			Invalid: 3,
			Not_Validated: 1,
			Valid: 4
		},
		ValidationStatusErrorCode : {
			Authentication_failure: 6,
			Invalid_certificates: 7,
			The_URL_could_not_be_accessed_because_of_Internet_Explorer_security_settings: 5,
			The_URL_schemes_of_Microsoft_Dynamics_365_and_SharePoint_are_different: 4,
			This_records_URL_has_not_been_validated: 1,
			This_records_URL_is_not_valid: 3,
			This_records_URL_is_valid: 2
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