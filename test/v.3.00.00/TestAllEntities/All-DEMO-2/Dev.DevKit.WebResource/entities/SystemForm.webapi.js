'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SystemFormApi = function (e) {
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
		var systemform = {
			AncestorFormId: { b: 'ancestorformid', a: '_ancestorformid_value', c: 'systemforms', d: 'systemform' },
			CanBeDeleted: { a: 'canbedeleted' },
			ComponentState: { a: 'componentstate', r: true },
			Description: { a: 'description' },
			FormActivationState: { a: 'formactivationstate' },
			FormId: { a: 'formid' },
			FormIdUnique: { a: 'formidunique', r: true },
			FormJson: { a: 'formjson' },
			FormPresentation: { a: 'formpresentation' },
			FormXml: { a: 'formxml' },
			FormXmlManaged: { a: 'formxmlmanaged', r: true },
			IntroducedVersion: { a: 'introducedversion' },
			IsAIRMerged: { a: 'isairmerged' },
			IsCustomizable: { a: 'iscustomizable' },
			IsDefault: { a: 'isdefault' },
			IsDesktopEnabled: { a: 'isdesktopenabled' },
			IsManaged: { a: 'ismanaged', r: true },
			IsTabletEnabled: { a: 'istabletenabled' },
			Name: { a: 'name' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			PublishedOn_UtcDateAndTime: { a: 'publishedon', r: true },
			SolutionId: { a: 'solutionid', r: true },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			Type: { a: 'type' },
			UniqueName: { a: 'uniquename' },
			Version: { a: 'version' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in systemform) {
			var a = systemform[field].a;
			var b = systemform[field].b;
			var c = systemform[field].c;
			var d = systemform[field].d;
			var g = systemform[field].g;
			var r = systemform[field].r;
			systemform[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		systemform.Entity = u;
		systemform.EntityName = 'systemform';
		systemform.EntityCollectionName = 'systemforms';
		systemform['@odata.etag'] = e['@odata.etag'];
		systemform.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		systemform.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return systemform;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SystemForm = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		FormActivationState : {
			Active: 1,
			Inactive: 0
		},
		FormPresentation : {
			AirForm: 1,
			ClassicForm: 0,
			ConvertedICForm: 2
		},
		Type : {
			AppointmentBook: 1,
			AppointmentBookBackup: 102,
			Card: 11,
			Contextual_Dashboard: 13,
			Dashboard: 0,
			Dialog: 8,
			InteractionCentricDashboard: 10,
			Main: 2,
			Main_Interactive_experience: 12,
			MainBackup: 101,
			MiniCampaignBO: 3,
			Mobile_Express: 5,
			Other: 100,
			Power_BI_Dashboard: 103,
			Preview: 4,
			Quick_Create: 7,
			Quick_View_Form: 6,
			Task_Flow_Form: 9
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