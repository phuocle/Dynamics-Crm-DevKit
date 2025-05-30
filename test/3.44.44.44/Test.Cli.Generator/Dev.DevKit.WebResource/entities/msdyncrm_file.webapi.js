﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_fileApi = function (e) {
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
		var _msdyncrm_file = {
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_Alttext: { a: 'msdyncrm_alttext' },
			msdyncrm_BlobCdnUri: { a: 'msdyncrm_blobcdnuri' },
			msdyncrm_BlobSize: { a: 'msdyncrm_blobsize' },
			msdyncrm_BlobUri: { a: 'msdyncrm_bloburi' },
			msdyncrm_category: { a: 'msdyncrm_category', g: true },
			msdyncrm_cmsid: { a: 'msdyncrm_cmsid' },
			msdyncrm_ContentType: { a: 'msdyncrm_contenttype' },
			msdyncrm_copyUrl: { a: 'msdyncrm_copyurl' },
			msdyncrm_filecontent_name: { a: 'msdyncrm_filecontent', r: true },
			msdyncrm_fileId: { a: 'msdyncrm_fileid' },
			msdyncrm_height: { a: 'msdyncrm_height' },
			EntityImage: { a: 'msdyncrm_mainimage' },
			EntityImage_Timestamp: { a: 'msdyncrm_mainimage_timestamp', r: true },
			EntityImage_URL: { a: 'msdyncrm_mainimage_url', r: true },
			msdyncrm_mainimage: { a: 'msdyncrm_mainimage' },
			msdyncrm_mainimage_Timestamp: { a: 'msdyncrm_mainimage_timestamp', r: true },
			msdyncrm_mainimage_URL: { a: 'msdyncrm_mainimage_url', r: true },
			msdyncrm_mainimageId: { a: 'msdyncrm_mainimageid', r: true },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_rethumbnail: { a: 'msdyncrm_rethumbnail' },
			msdyncrm_sastoken: { a: 'msdyncrm_sastoken' },
			msdyncrm_sastokenexpirationdate_TimezoneDateAndTime: { a: 'msdyncrm_sastokenexpirationdate' },
			msdyncrm_source: { a: 'msdyncrm_source' },
			msdyncrm_thumbnail_url: { a: 'msdyncrm_thumbnail_url' },
			msdyncrm_width: { a: 'msdyncrm_width' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			SolutionId: { a: 'solutionid', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyncrm_file = {};
		msdyncrm_file.ODataEntity = e;
		msdyncrm_file.FormattedValue = {};
		for (var field in _msdyncrm_file) {
			var a = _msdyncrm_file[field].a;
			var b = _msdyncrm_file[field].b;
			var c = _msdyncrm_file[field].c;
			var d = _msdyncrm_file[field].d;
			var g = _msdyncrm_file[field].g;
			var r = _msdyncrm_file[field].r;
			webApiField(msdyncrm_file, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_file.Entity = u;
		msdyncrm_file.EntityName = 'msdyncrm_file';
		msdyncrm_file.EntityCollectionName = 'msdyncrm_files';
		msdyncrm_file['@odata.etag'] = e['@odata.etag'];
		msdyncrm_file.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_file.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_file;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_file = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyncrm_category : {
			Logo: 192350000
		},
		msdyncrm_source : {
			Typeface: 1,
			User: 0
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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