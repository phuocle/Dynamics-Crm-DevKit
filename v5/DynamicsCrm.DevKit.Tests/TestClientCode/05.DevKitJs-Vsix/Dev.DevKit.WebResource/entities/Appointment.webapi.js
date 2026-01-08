'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.AppointmentApi = function (e) {
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
		const _appointment = {
			ActivityAdditionalParams: { a: 'activityadditionalparams' },
			ActivityId: { a: 'activityid' },
			ActualDurationMinutes: { a: 'actualdurationminutes', g: 'Integer' },
			ActualEnd_UtcDateAndTime: { a: 'actualend', g: 'DateTime' },
			ActualStart_UtcDateAndTime: { a: 'actualstart', g: 'DateTime' },
			AttachmentCount: { a: 'attachmentcount', r: true, g: 'Integer' },
			AttachmentErrors: { a: 'attachmenterrors', g: 'Integer' },
			Category: { a: 'category' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			ExchangeRate: { a: 'exchangerate', r: true, g: 'Number' },
			FormattedScheduledEnd_TimezoneDateAndTime: { a: 'formattedscheduledend', r: true, g: 'DateTime' },
			FormattedScheduledStart_TimezoneDateAndTime: { a: 'formattedscheduledstart', r: true, g: 'DateTime' },
			GlobalObjectId: { a: 'globalobjectid' },
			ImportSequenceNumber: { a: 'importsequencenumber', g: 'Integer' },
			InstanceTypeCode: { a: 'instancetypecode', r: true, g: 'Integer' },
			IsAllDayEvent: { a: 'isalldayevent', g: 'Boolean' },
			IsBilled: { a: 'isbilled', g: 'Boolean' },
			IsDraft: { a: 'isdraft', g: 'Boolean' },
			IsMapiPrivate: { a: 'ismapiprivate', g: 'Boolean' },
			IsOnlineMeeting: { a: 'isonlinemeeting', g: 'Boolean' },
			IsRegularActivity: { a: 'isregularactivity', r: true, g: 'Boolean' },
			IsUnsafe: { a: 'isunsafe', r: true, g: 'Integer' },
			IsWorkflowCreated: { a: 'isworkflowcreated', g: 'Boolean' },
			LastOnHoldTime_UtcDateAndTime: { a: 'lastonholdtime', g: 'DateTime' },
			Location: { a: 'location' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedFieldsMask: { a: 'modifiedfieldsmask', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			OnHoldTime: { a: 'onholdtime', r: true, g: 'Integer' },
			OnlineMeetingChatId: { a: 'onlinemeetingchatid' },
			OnlineMeetingId: { a: 'onlinemeetingid' },
			OnlineMeetingJoinUrl: { a: 'onlinemeetingjoinurl' },
			OnlineMeetingType: { a: 'onlinemeetingtype', g: 'Integer' },
			OriginalStartDate_UtcDateAndTime: { a: 'originalstartdate', r: true, g: 'DateTime' },
			OutlookOwnerApptId: { a: 'outlookownerapptid', g: 'Integer' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon', g: 'DateTime' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			PriorityCode: { a: 'prioritycode', g: 'Integer' },
			ProcessId: { a: 'processid' },
			ScheduledDurationMinutes: { a: 'scheduleddurationminutes', g: 'Integer' },
			ScheduledEnd_UtcDateAndTime: { a: 'scheduledend', g: 'DateTime' },
			ScheduledStart_UtcDateAndTime: { a: 'scheduledstart', g: 'DateTime' },
			SeriesId: { a: 'seriesid', r: true },
			SLAId: { b: 'slaid', a: '_slaid_value', c: 'slas', d: 'sla' },
			SLAInvokedId: { b: 'slainvokedid', a: '_slainvokedid_value', c: 'slas', d: 'sla', r: true },
			SortDate_UtcDateAndTime: { a: 'sortdate', g: 'DateTime' },
			StageId: { a: 'stageid' },
			StateCode: { a: 'statecode', g: 'Integer' },
			StatusCode: { a: 'statuscode', g: 'Integer' },
			Subcategory: { a: 'subcategory' },
			Subject: { a: 'subject' },
			SubscriptionId: { a: 'subscriptionid' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber', g: 'Integer' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode', g: 'Integer' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const appointment = {};
		appointment.ODataEntity = e;
		appointment.FormattedValue = {};
		for (const field in _appointment) {
			const fieldConfig = _appointment[field];
			webApiField(appointment, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		Object.defineProperty(appointment, 'ActivityParties', {
			get: function () { return e?.['appointment_activity_parties']; },
			set: function (value) {
				e['appointment_activity_parties'] = value;
				u['appointment_activity_parties'] = value;
			}
		});
		appointment.Entity = u;
		appointment.EntityName = 'appointment';
		appointment.EntityCollectionName = 'appointments';
		appointment['@odata.etag'] = e?.['@odata.etag'];
		appointment.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		appointment.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return appointment;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Appointment = {
		ActivityTypeCode: { Appointment: 4201, Email: 4202, Fax: 4204, Invite_Redemption: 10407, Letter: 4207, Phone_Call: 4210, Portal_Comment: 10408, Recurring_Appointment: 4251, Task: 4212, Teams_chat: 10253 },
		AttachmentErrors: { None: 0, The_appointment_was_saved_as_a_Microsoft_Dynamics_365_appointment_record_but_not_all_the_attachments_could_be_saved_with_it_An_attachment_cannot_be_saved_if_it_is_blocked_or_if_its_file_type_is_invalid: 1 },
		InstanceTypeCode: { Not_Recurring: 0, Recurring_Exception: 3, Recurring_Future_Exception: 4, Recurring_Instance: 2, Recurring_Master: 1 },
		OnlineMeetingType: { Teams_Meeting: 1 },
		PriorityCode: { High: 2, Low: 0, Normal: 1 },
		RegardingObjectTypeCode: { },
		StateCode: { Canceled: 2, Completed: 1, Open: 0, Scheduled: 3 },
		StatusCode: { Busy: 5, Canceled: 4, Completed: 3, Free: 1, Out_of_Office: 6, Tentative: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));