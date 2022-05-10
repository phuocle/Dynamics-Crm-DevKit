'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.ImageDescriptorApi = function (e) {
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
		var _imagedescriptor = {
			ColorDepthBits: { a: 'colordepthbits' },
			FileId: { a: 'fileid', r: true },
			FileLocation: { a: 'filelocation' },
			FileName: { a: 'filename' },
			FileSizeBytes: { a: 'filesizebytes' },
			FileType: { a: 'filetype' },
			EntityImage: { a: 'fullimagedata' },
			EntityImage_Timestamp: { a: 'fullimagedata_timestamp', r: true },
			EntityImage_URL: { a: 'fullimagedata_url', r: true },
			FullImageData: { a: 'fullimagedata' },
			FullImageData_Timestamp: { a: 'fullimagedata_timestamp', r: true },
			FullImageData_URL: { a: 'fullimagedata_url', r: true },
			FullImageURL: { a: 'fullimageurl' },
			ImageData: { a: 'imagedata' },
			ImageData_Timestamp: { a: 'imagedata_timestamp', r: true },
			ImageData_URL: { a: 'imagedata_url', r: true },
			ImageDescription: { a: 'imagedescription' },
			ImageDescriptorId: { a: 'imagedescriptorid' },
			ImagePixelHeight: { a: 'imagepixelheight' },
			ImagePixelWidth: { a: 'imagepixelwidth' },
			ImageTags: { a: 'imagetags' },
			ImageTimestamp: { a: 'imagetimestamp', r: true },
			ImageURL: { a: 'imageurl', r: true },
			MimeType: { a: 'mimetype' },
			ObjectId: { a: 'objectid', r: true },
			Size: { a: 'size', r: true },
			Title: { a: 'title' },
			versionnumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var imagedescriptor = {};
		imagedescriptor.ODataEntity = e;
		imagedescriptor.FormattedValue = {};
		for (var field in _imagedescriptor) {
			var a = _imagedescriptor[field].a;
			var b = _imagedescriptor[field].b;
			var c = _imagedescriptor[field].c;
			var d = _imagedescriptor[field].d;
			var g = _imagedescriptor[field].g;
			var r = _imagedescriptor[field].r;
			webApiField(imagedescriptor, field, e, a, b, c, d, r, u, g);
		}
		imagedescriptor.Entity = u;
		imagedescriptor.EntityName = 'imagedescriptor';
		imagedescriptor.EntityCollectionName = 'imagedescriptors';
		imagedescriptor['@odata.etag'] = e['@odata.etag'];
		imagedescriptor.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		imagedescriptor.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return imagedescriptor;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ImageDescriptor = {
		ObjectTypeCode : {
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