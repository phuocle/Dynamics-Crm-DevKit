'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.ImageDescriptorApi = function (e) {
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
		var imagedescriptor = {
			ColorDepthBits: { a: 'colordepthbits' },
			FileLocation: { a: 'filelocation' },
			FileName: { a: 'filename' },
			FileSizeBytes: { a: 'filesizebytes' },
			FileType: { a: 'filetype' },
			FullImageData: { a: 'fullimagedata' },
			FullImageURL: { a: 'fullimageurl' },
			ImageData: { a: 'imagedata' },
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
			Title: { a: 'title' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in imagedescriptor) {
			var a = imagedescriptor[field].a;
			var b = imagedescriptor[field].b;
			var c = imagedescriptor[field].c;
			var d = imagedescriptor[field].d;
			var g = imagedescriptor[field].g;
			var r = imagedescriptor[field].r;
			imagedescriptor[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		imagedescriptor.Entity = u;
		imagedescriptor.EntityName = 'imagedescriptor';
		imagedescriptor.EntityCollectionName = 'imagedescriptors';
		imagedescriptor['@odata.etag'] = e['@odata.etag'];
		imagedescriptor.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		imagedescriptor.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return imagedescriptor;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ImageDescriptor = {
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