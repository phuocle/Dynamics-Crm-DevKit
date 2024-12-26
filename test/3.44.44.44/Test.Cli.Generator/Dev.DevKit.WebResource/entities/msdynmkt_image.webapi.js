'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_imageApi = function (e) {
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
		var _msdynmkt_image = {
			msdynmkt_aitags: { a: 'msdynmkt_aitags' },
			msdynmkt_binarymetadata: { a: 'msdynmkt_binarymetadata' },
			msdynmkt_checkedoutto: { a: 'msdynmkt_checkedoutto' },
			msdynmkt_checkedouttocriteria: { a: 'msdynmkt_checkedouttocriteria' },
			msdynmkt_cmsid: { a: 'msdynmkt_cmsid' },
			msdynmkt_cognitiveInformation: { a: 'msdynmkt_cognitiveinformation' },
			msdynmkt_createddatetime: { a: 'msdynmkt_createddatetime' },
			msdynmkt_imageId: { a: 'msdynmkt_imageid' },
			msdynmkt_ischeckedouttome: { a: 'msdynmkt_ischeckedouttome' },
			msdynmkt_ispublished: { a: 'msdynmkt_ispublished' },
			msdynmkt_keywords: { a: 'msdynmkt_keywords' },
			msdynmkt_lastmodified: { a: 'msdynmkt_lastmodified' },
			msdynmkt_lastmodifiedby: { a: 'msdynmkt_lastmodifiedby' },
			msdynmkt_lastmodifieddatetime: { a: 'msdynmkt_lastmodifieddatetime' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_previewurl: { a: 'msdynmkt_previewurl' },
			msdynmkt_processingstatus: { a: 'msdynmkt_processingstatus' },
			msdynmkt_publicUrl: { a: 'msdynmkt_publicurl' },
			msdynmkt_publishedby: { a: 'msdynmkt_publishedby' },
			msdynmkt_publisheddatetime: { a: 'msdynmkt_publisheddatetime' },
			msdynmkt_publishedversion: { a: 'msdynmkt_publishedversion' },
			msdynmkt_state: { a: 'msdynmkt_state' },
			msdynmkt_thumbnailUrl: { a: 'msdynmkt_thumbnailurl' },
			msdynmkt_type: { a: 'msdynmkt_type' },
			msdynmkt_variantinfo: { a: 'msdynmkt_variantinfo' },
			msdynmkt_version: { a: 'msdynmkt_version' }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdynmkt_image = {};
		msdynmkt_image.ODataEntity = e;
		msdynmkt_image.FormattedValue = {};
		for (var field in _msdynmkt_image) {
			var a = _msdynmkt_image[field].a;
			var b = _msdynmkt_image[field].b;
			var c = _msdynmkt_image[field].c;
			var d = _msdynmkt_image[field].d;
			var g = _msdynmkt_image[field].g;
			var r = _msdynmkt_image[field].r;
			webApiField(msdynmkt_image, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_image.Entity = u;
		msdynmkt_image.EntityName = 'msdynmkt_image';
		msdynmkt_image.EntityCollectionName = 'msdynmkt_images';
		msdynmkt_image['@odata.etag'] = e['@odata.etag'];
		msdynmkt_image.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_image.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_image;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_image = {
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