'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.ActivityMimeAttachmentApi = function (e) {
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
		var _activitymimeattachment = {
			ActivityId: { b: 'activityid', a: '_activityid_value', c: 'activitypointers', d: 'activitypointer' },
			ActivityMimeAttachmentId: { a: 'activitymimeattachmentid' },
			ActivityMimeAttachmentIdUnique: { a: 'activitymimeattachmentidunique' },
			ActivitySubject: { a: 'activitysubject', r: true },
			AnonymousLink: { a: 'anonymouslink', r: true },
			AttachmentContentId: { a: 'attachmentcontentid' },
			AttachmentId: { b: 'attachmentid', a: '_attachmentid_value', c: 'attachments', d: 'attachment' },
			AttachmentNumber: { a: 'attachmentnumber' },
			Body: { a: 'body' },
			ComponentState: { a: 'componentstate', r: true },
			FileName: { a: 'filename' },
			FileSize: { a: 'filesize', r: true },
			IsFollowed: { a: 'isfollowed', r: true },
			IsManaged: { a: 'ismanaged', r: true },
			MimeType: { a: 'mimetype' },
			objectid_activitypointer: { b: 'objectid_activitypointer', a: '_objectid_value', c: 'activitypointers', d: 'activitypointer' },
			objectid_template: { b: 'objectid_template', a: '_objectid_value', c: 'templates', d: 'template' },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser', r: true },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team', r: true },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			SolutionId: { a: 'solutionid', r: true },
			Subject: { a: 'subject' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var activitymimeattachment = {};
		activitymimeattachment.ODataEntity = e;
		activitymimeattachment.FormattedValue = {};
		for (var field in _activitymimeattachment) {
			var a = _activitymimeattachment[field].a;
			var b = _activitymimeattachment[field].b;
			var c = _activitymimeattachment[field].c;
			var d = _activitymimeattachment[field].d;
			var g = _activitymimeattachment[field].g;
			var r = _activitymimeattachment[field].r;
			webApiField(activitymimeattachment, field, e, a, b, c, d, r, u, g);
		}
		activitymimeattachment.Entity = u;
		activitymimeattachment.EntityName = 'activitymimeattachment';
		activitymimeattachment.EntityCollectionName = 'activitymimeattachments';
		activitymimeattachment['@odata.etag'] = e['@odata.etag'];
		activitymimeattachment.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		activitymimeattachment.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return activitymimeattachment;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ActivityMimeAttachment = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		ObjectTypeCode : {
			Email_Activity: 4200,
			Email_Template: 2010
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