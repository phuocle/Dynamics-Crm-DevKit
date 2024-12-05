'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_contentblockApi = function (e) {
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
		var _msdyncrm_contentblock = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			entityimage: { a: 'entityimage' },
			entityimage_Timestamp: { a: 'entityimage_timestamp', r: true },
			entityimage_URL: { a: 'entityimage_url', r: true },
			entityimageId: { a: 'entityimageid', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_available_in: { a: 'msdyncrm_available_in', g: true },
			msdyncrm_contentblockId: { a: 'msdyncrm_contentblockid' },
			msdyncrm_designerhtml: { a: 'msdyncrm_designerhtml' },
			msdyncrm_finalizedhtml: { a: 'msdyncrm_finalizedhtml' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_previewhtml: { a: 'msdyncrm_previewhtml' },
			msdyncrm_protected: { a: 'msdyncrm_protected' },
			msdyncrm_tags: { a: 'msdyncrm_tags' },
			EntityImage: { a: 'msdyncrm_thumbnailimage' },
			EntityImage_Timestamp: { a: 'msdyncrm_thumbnailimage_timestamp', r: true },
			EntityImage_URL: { a: 'msdyncrm_thumbnailimage_url', r: true },
			msdyncrm_thumbnailimage: { a: 'msdyncrm_thumbnailimage' },
			msdyncrm_thumbnailimage_Timestamp: { a: 'msdyncrm_thumbnailimage_timestamp', r: true },
			msdyncrm_thumbnailimage_URL: { a: 'msdyncrm_thumbnailimage_url', r: true },
			msdyncrm_thumbnailimageId: { a: 'msdyncrm_thumbnailimageid', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyncrm_contentblock = {};
		msdyncrm_contentblock.ODataEntity = e;
		msdyncrm_contentblock.FormattedValue = {};
		for (var field in _msdyncrm_contentblock) {
			var a = _msdyncrm_contentblock[field].a;
			var b = _msdyncrm_contentblock[field].b;
			var c = _msdyncrm_contentblock[field].c;
			var d = _msdyncrm_contentblock[field].d;
			var g = _msdyncrm_contentblock[field].g;
			var r = _msdyncrm_contentblock[field].r;
			webApiField(msdyncrm_contentblock, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_contentblock.Entity = u;
		msdyncrm_contentblock.EntityName = 'msdyncrm_contentblock';
		msdyncrm_contentblock.EntityCollectionName = 'msdyncrm_contentblocks';
		msdyncrm_contentblock['@odata.etag'] = e['@odata.etag'];
		msdyncrm_contentblock.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_contentblock.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_contentblock;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_contentblock = {
		msdyncrm_available_in : {
			Email: 192350000,
			Forms: 192350001,
			Pages: 192350002
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Draft: 192350000,
			Expired: 192350004,
			Live: 192350001,
			Live_editable: 192350003,
			Stopped: 192350002
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