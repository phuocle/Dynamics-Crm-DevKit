'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.IncidentApi = function (e) {
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
		var _incident = {
			AccountId: { b: 'accountid', a: '_accountid_value', c: 'accounts', d: 'account', r: true },
			ActivitiesComplete: { a: 'activitiescomplete' },
			ActualServiceUnits: { a: 'actualserviceunits' },
			BilledServiceUnits: { a: 'billedserviceunits' },
			BlockedProfile: { a: 'blockedprofile' },
			caseage: { a: 'caseage', r: true },
			CaseOriginCode: { a: 'caseorigincode' },
			CaseTypeCode: { a: 'casetypecode' },
			CheckEmail: { a: 'checkemail' },
			ContactId: { b: 'contactid', a: '_contactid_value', c: 'contacts', d: 'contact', r: true },
			ContractDetailId: { b: 'contractdetailid', a: '_contractdetailid_value', c: 'contractdetails', d: 'contractdetail' },
			ContractId: { b: 'contractid', a: '_contractid_value', c: 'contracts', d: 'contract' },
			ContractServiceLevelCode: { a: 'contractservicelevelcode' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedByExternalParty: { b: 'createdbyexternalparty', a: '_createdbyexternalparty_value', c: 'externalparties', d: 'externalparty', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CustomerContacted: { a: 'customercontacted' },
			customerid_account: { b: 'customerid_account', a: '_customerid_value', c: 'accounts', d: 'account' },
			customerid_contact: { b: 'customerid_contact', a: '_customerid_value', c: 'contacts', d: 'contact' },
			CustomerSatisfactionCode: { a: 'customersatisfactioncode' },
			deactivatedon_UtcDateAndTime: { a: 'deactivatedon' },
			DecrementEntitlementTerm: { a: 'decremententitlementterm' },
			Description: { a: 'description' },
			EmailAddress: { a: 'emailaddress' },
			EntitlementId: { b: 'entitlementid', a: '_entitlementid_value', c: 'entitlements', d: 'entitlement' },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			EscalatedOn_UtcDateAndTime: { a: 'escalatedon', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ExistingCase: { b: 'existingcase', a: '_existingcase_value', c: 'incidents', d: 'incident' },
			FirstResponseByKPIId: { b: 'firstresponsebykpiid', a: '_firstresponsebykpiid_value', c: 'slakpiinstances', d: 'slakpiinstance' },
			FirstResponseSent: { a: 'firstresponsesent' },
			FirstResponseSLAStatus: { a: 'firstresponseslastatus' },
			FollowupBy_UtcDateOnly: { a: 'followupby' },
			FollowUpTaskCreated: { a: 'followuptaskcreated' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IncidentId: { a: 'incidentid' },
			IncidentStageCode: { a: 'incidentstagecode' },
			InfluenceScore: { a: 'influencescore' },
			IsDecrementing: { a: 'isdecrementing' },
			IsEscalated: { a: 'isescalated' },
			KbArticleId: { b: 'kbarticleid', a: '_kbarticleid_value', c: 'kbarticles', d: 'kbarticle' },
			lastinteraction: { a: 'lastinteraction', r: true },
			LastOnHoldTime_UtcDateAndTime: { a: 'lastonholdtime' },
			MasterId: { b: 'masterid', a: '_masterid_value', c: 'incidents', d: 'incident' },
			Merged: { a: 'merged', r: true },
			MessageTypeCode: { a: 'messagetypecode' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedByExternalParty: { b: 'modifiedbyexternalparty', a: '_modifiedbyexternalparty_value', c: 'externalparties', d: 'externalparty', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_CaseSurveyInviteUrl: { a: 'msdyn_casesurveyinviteurl' },
			msdyn_copilotengaged: { a: 'msdyn_copilotengaged' },
			msdyn_FunctionalLocation: { b: 'msdyn_FunctionalLocation', a: '_msdyn_functionallocation_value', c: 'msdyn_functionallocations', d: 'msdyn_functionallocation' },
			msdyn_IncidentType: { b: 'msdyn_IncidentType', a: '_msdyn_incidenttype_value', c: 'msdyn_incidenttypes', d: 'msdyn_incidenttype' },
			msdyn_iotalert: { b: 'msdyn_iotalert', a: '_msdyn_iotalert_value', c: 'msdyn_iotalerts', d: 'msdyn_iotalert' },
			msdyn_precreateattachmentsid: { a: 'msdyn_precreateattachmentsid' },
			msdyn_precreatenotesid: { a: 'msdyn_precreatenotesid' },
			nextsla: { a: 'nextsla' },
			NumberOfChildIncidents: { a: 'numberofchildincidents', r: true },
			OnHoldTime: { a: 'onholdtime', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ParentCaseId: { b: 'parentcaseid', a: '_parentcaseid_value', c: 'incidents', d: 'incident' },
			PrimaryContactId: { b: 'primarycontactid', a: '_primarycontactid_value', c: 'contacts', d: 'contact' },
			PriorityCode: { a: 'prioritycode' },
			ProcessId: { a: 'processid' },
			ProductId: { b: 'productid', a: '_productid_value', c: 'products', d: 'product' },
			ProductSerialNumber: { a: 'productserialnumber' },
			ResolveBy_UtcDateAndTime: { a: 'resolveby' },
			ResolveByKPIId: { b: 'resolvebykpiid', a: '_resolvebykpiid_value', c: 'slakpiinstances', d: 'slakpiinstance' },
			ResolveBySLAStatus: { a: 'resolvebyslastatus' },
			ResponseBy_UtcDateAndTime: { a: 'responseby' },
			ResponsibleContactId: { b: 'responsiblecontactid', a: '_responsiblecontactid_value', c: 'contacts', d: 'contact' },
			RouteCase: { a: 'routecase' },
			SentimentValue: { a: 'sentimentvalue' },
			ServiceStage: { a: 'servicestage' },
			SeverityCode: { a: 'severitycode' },
			SLAId: { b: 'slaid', a: '_slaid_value', c: 'slas', d: 'sla' },
			SLAInvokedId: { b: 'slainvokedid', a: '_slainvokedid_value', c: 'slas', d: 'sla', r: true },
			SocialProfileId: { b: 'socialprofileid', a: '_socialprofileid_value', c: 'socialprofiles', d: 'socialprofile' },
			StageId: { a: 'stageid' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			SubjectId: { b: 'subjectid', a: '_subjectid_value', c: 'subjects', d: 'subject' },
			TicketNumber: { a: 'ticketnumber' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			Title: { a: 'title' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var incident = {};
		incident.ODataEntity = e;
		incident.FormattedValue = {};
		for (var field in _incident) {
			var a = _incident[field].a;
			var b = _incident[field].b;
			var c = _incident[field].c;
			var d = _incident[field].d;
			var g = _incident[field].g;
			var r = _incident[field].r;
			webApiField(incident, field, e, a, b, c, d, r, u, g);
		}
		incident.Entity = u;
		incident.EntityName = 'incident';
		incident.EntityCollectionName = 'incidents';
		incident['@odata.etag'] = e['@odata.etag'];
		incident.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		incident.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return incident;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Incident = {
		CaseOriginCode : {
			Email: 2,
			Facebook: 2483,
			IoT: 700610000,
			Phone: 1,
			Twitter: 3986,
			Web: 3
		},
		CaseTypeCode : {
			Problem: 2,
			Question: 1,
			Request: 3
		},
		ContractServiceLevelCode : {
			Bronze: 3,
			Gold: 1,
			Silver: 2
		},
		CustomerIdType : {
		},
		CustomerSatisfactionCode : {
			Dissatisfied: 2,
			Neutral: 3,
			Satisfied: 4,
			Very_Dissatisfied: 1,
			Very_Satisfied: 5
		},
		FirstResponseSLAStatus : {
			In_Progress: 1,
			Nearing_Noncompliance: 2,
			Noncompliant: 4,
			Succeeded: 3
		},
		IncidentStageCode : {
			Default_Value: 1
		},
		MessageTypeCode : {
			Private_Message: 1,
			Public_Message: 0
		},
		PriorityCode : {
			High: 1,
			Low: 3,
			Normal: 2
		},
		ResolveBySLAStatus : {
			In_Progress: 1,
			Nearing_Noncompliance: 2,
			Noncompliant: 4,
			Succeeded: 3
		},
		ServiceStage : {
			Identify: 0,
			Research: 1,
			Resolve: 2
		},
		SeverityCode : {
			Default_Value: 1
		},
		StateCode : {
			Active: 0,
			Cancelled: 2,
			Resolved: 1
		},
		StatusCode : {
			Cancelled: 6,
			In_Progress: 1,
			Information_Provided: 1000,
			Merged: 2000,
			On_Hold: 2,
			Problem_Solved: 5,
			Researching: 4,
			Waiting_for_Details: 3
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