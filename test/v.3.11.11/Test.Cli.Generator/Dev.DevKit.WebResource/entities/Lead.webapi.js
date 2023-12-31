'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.LeadApi = function (e) {
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
		var _lead = {
			AccountId: { b: 'accountid', a: '_accountid_value', c: 'accounts', d: 'account', r: true },
			Address1_AddressId: { a: 'address1_addressid' },
			Address1_AddressTypeCode: { a: 'address1_addresstypecode' },
			Address1_City: { a: 'address1_city' },
			Address1_Composite: { a: 'address1_composite', r: true },
			Address1_Country: { a: 'address1_country' },
			Address1_County: { a: 'address1_county' },
			Address1_Fax: { a: 'address1_fax' },
			Address1_Latitude: { a: 'address1_latitude' },
			Address1_Line1: { a: 'address1_line1' },
			Address1_Line2: { a: 'address1_line2' },
			Address1_Line3: { a: 'address1_line3' },
			Address1_Longitude: { a: 'address1_longitude' },
			Address1_Name: { a: 'address1_name' },
			Address1_PostalCode: { a: 'address1_postalcode' },
			Address1_PostOfficeBox: { a: 'address1_postofficebox' },
			Address1_ShippingMethodCode: { a: 'address1_shippingmethodcode' },
			Address1_StateOrProvince: { a: 'address1_stateorprovince' },
			Address1_Telephone1: { a: 'address1_telephone1' },
			Address1_Telephone2: { a: 'address1_telephone2' },
			Address1_Telephone3: { a: 'address1_telephone3' },
			Address1_UPSZone: { a: 'address1_upszone' },
			Address1_UTCOffset: { a: 'address1_utcoffset' },
			Address2_AddressId: { a: 'address2_addressid' },
			Address2_AddressTypeCode: { a: 'address2_addresstypecode' },
			Address2_City: { a: 'address2_city' },
			Address2_Composite: { a: 'address2_composite', r: true },
			Address2_Country: { a: 'address2_country' },
			Address2_County: { a: 'address2_county' },
			Address2_Fax: { a: 'address2_fax' },
			Address2_Latitude: { a: 'address2_latitude' },
			Address2_Line1: { a: 'address2_line1' },
			Address2_Line2: { a: 'address2_line2' },
			Address2_Line3: { a: 'address2_line3' },
			Address2_Longitude: { a: 'address2_longitude' },
			Address2_Name: { a: 'address2_name' },
			Address2_PostalCode: { a: 'address2_postalcode' },
			Address2_PostOfficeBox: { a: 'address2_postofficebox' },
			Address2_ShippingMethodCode: { a: 'address2_shippingmethodcode' },
			Address2_StateOrProvince: { a: 'address2_stateorprovince' },
			Address2_Telephone1: { a: 'address2_telephone1' },
			Address2_Telephone2: { a: 'address2_telephone2' },
			Address2_Telephone3: { a: 'address2_telephone3' },
			Address2_UPSZone: { a: 'address2_upszone' },
			Address2_UTCOffset: { a: 'address2_utcoffset' },
			BudgetAmount: { a: 'budgetamount' },
			BudgetAmount_Base: { a: 'budgetamount_base', r: true },
			BudgetStatus: { a: 'budgetstatus' },
			BusinessCard: { a: 'businesscard' },
			BusinessCardAttributes: { a: 'businesscardattributes' },
			CampaignId: { b: 'campaignid', a: '_campaignid_value', c: 'campaigns', d: 'campaign' },
			CompanyName: { a: 'companyname' },
			ConfirmInterest: { a: 'confirminterest' },
			ContactId: { b: 'contactid', a: '_contactid_value', c: 'contacts', d: 'contact', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			customerid_account: { b: 'customerid_account', a: '_customerid_value', c: 'accounts', d: 'account' },
			customerid_contact: { b: 'customerid_contact', a: '_customerid_value', c: 'contacts', d: 'contact' },
			DecisionMaker: { a: 'decisionmaker' },
			Description: { a: 'description' },
			DoNotBulkEMail: { a: 'donotbulkemail' },
			DoNotEMail: { a: 'donotemail' },
			DoNotFax: { a: 'donotfax' },
			DoNotPhone: { a: 'donotphone' },
			DoNotPostalMail: { a: 'donotpostalmail' },
			DoNotSendMM: { a: 'donotsendmm' },
			EMailAddress1: { a: 'emailaddress1' },
			EMailAddress2: { a: 'emailaddress2' },
			EMailAddress3: { a: 'emailaddress3' },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			EstimatedAmount: { a: 'estimatedamount' },
			EstimatedAmount_Base: { a: 'estimatedamount_base', r: true },
			EstimatedCloseDate_DateOnly: { a: 'estimatedclosedate' },
			EstimatedValue: { a: 'estimatedvalue' },
			EvaluateFit: { a: 'evaluatefit' },
			ExchangeRate: { a: 'exchangerate', r: true },
			Fax: { a: 'fax' },
			FirstName: { a: 'firstname' },
			FollowEmail: { a: 'followemail' },
			FullName: { a: 'fullname', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IndustryCode: { a: 'industrycode' },
			InitialCommunication: { a: 'initialcommunication' },
			IsAutoCreate: { a: 'isautocreate', r: true },
			IsPrivate: { a: 'isprivate', r: true },
			JobTitle: { a: 'jobtitle' },
			LastName: { a: 'lastname' },
			LastOnHoldTime_UtcDateAndTime: { a: 'lastonholdtime' },
			LastUsedInCampaign_UtcDateOnly: { a: 'lastusedincampaign' },
			LeadId: { a: 'leadid' },
			LeadQualityCode: { a: 'leadqualitycode' },
			LeadSourceCode: { a: 'leadsourcecode' },
			MasterId: { b: 'masterid', a: '_masterid_value', c: 'leads', d: 'lead', r: true },
			Merged: { a: 'merged', r: true },
			MiddleName: { a: 'middlename' },
			MobilePhone: { a: 'mobilephone' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_gdproptout: { a: 'msdyn_gdproptout' },
			msdyn_LeadGrade: { a: 'msdyn_leadgrade' },
			msdyn_LeadScore: { a: 'msdyn_leadscore' },
			msdyn_LeadScoreTrend: { a: 'msdyn_leadscoretrend' },
			msdyn_ordertype: { a: 'msdyn_ordertype' },
			msdyn_PredictiveScoreId: { b: 'msdyn_PredictiveScoreId', a: '_msdyn_predictivescoreid_value', c: 'msdyn_predictivescores', d: 'msdyn_predictivescore' },
			msdyn_salesassignmentresult: { a: 'msdyn_salesassignmentresult' },
			msdyn_ScoreHistory: { a: 'msdyn_scorehistory' },
			msdyn_ScoreReasons: { a: 'msdyn_scorereasons' },
			msdyn_segmentid: { b: 'msdyn_segmentid', a: '_msdyn_segmentid_value', c: 'msdyn_segments', d: 'msdyn_segment' },
			Need: { a: 'need' },
			NumberOfEmployees: { a: 'numberofemployees' },
			OnHoldTime: { a: 'onholdtime', r: true },
			OriginatingCaseId: { b: 'originatingcaseid', a: '_originatingcaseid_value', c: 'incidents', d: 'incident' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			Pager: { a: 'pager' },
			ParentAccountId: { b: 'parentaccountid', a: '_parentaccountid_value', c: 'accounts', d: 'account' },
			ParentContactId: { b: 'parentcontactid', a: '_parentcontactid_value', c: 'contacts', d: 'contact' },
			ParticipatesInWorkflow: { a: 'participatesinworkflow' },
			PreferredContactMethodCode: { a: 'preferredcontactmethodcode' },
			PriorityCode: { a: 'prioritycode' },
			ProcessId: { a: 'processid' },
			PurchaseProcess: { a: 'purchaseprocess' },
			PurchaseTimeFrame: { a: 'purchasetimeframe' },
			QualificationComments: { a: 'qualificationcomments' },
			QualifyingOpportunityId: { b: 'qualifyingopportunityid', a: '_qualifyingopportunityid_value', c: 'opportunities', d: 'opportunity' },
			RelatedObjectId: { b: 'relatedobjectid', a: '_relatedobjectid_value', c: 'campaignresponses', d: 'campaignresponse' },
			Revenue: { a: 'revenue' },
			Revenue_Base: { a: 'revenue_base', r: true },
			SalesStage: { a: 'salesstage' },
			SalesStageCode: { a: 'salesstagecode' },
			Salutation: { a: 'salutation' },
			ScheduleFollowUp_Prospect_UtcDateOnly: { a: 'schedulefollowup_prospect' },
			ScheduleFollowUp_Qualify_UtcDateOnly: { a: 'schedulefollowup_qualify' },
			SIC: { a: 'sic' },
			SLAId: { b: 'slaid', a: '_slaid_value', c: 'slas', d: 'sla' },
			SLAInvokedId: { b: 'slainvokedid', a: '_slainvokedid_value', c: 'slas', d: 'sla', r: true },
			StageId: { a: 'stageid' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			Subject: { a: 'subject' },
			TeamsFollowed: { a: 'teamsfollowed' },
			Telephone1: { a: 'telephone1' },
			Telephone2: { a: 'telephone2' },
			Telephone3: { a: 'telephone3' },
			TimeSpentByMeOnEmailAndMeetings: { a: 'timespentbymeonemailandmeetings', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true },
			WebSiteUrl: { a: 'websiteurl' },
			YomiCompanyName: { a: 'yomicompanyname' },
			YomiFirstName: { a: 'yomifirstname' },
			YomiFullName: { a: 'yomifullname', r: true },
			YomiLastName: { a: 'yomilastname' },
			YomiMiddleName: { a: 'yomimiddlename' }
		};
		if (e === undefined) e = {};
		var u = {};
		var lead = {};
		lead.ODataEntity = e;
		lead.FormattedValue = {};
		for (var field in _lead) {
			var a = _lead[field].a;
			var b = _lead[field].b;
			var c = _lead[field].c;
			var d = _lead[field].d;
			var g = _lead[field].g;
			var r = _lead[field].r;
			webApiField(lead, field, e, a, b, c, d, r, u, g);
		}
		lead.Entity = u;
		lead.EntityName = 'lead';
		lead.EntityCollectionName = 'leads';
		lead['@odata.etag'] = e['@odata.etag'];
		lead.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		lead.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return lead;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Lead = {
		Address1_AddressTypeCode : {
			Default_Value: 1
		},
		Address1_ShippingMethodCode : {
			Default_Value: 1
		},
		Address2_AddressTypeCode : {
			Default_Value: 1
		},
		Address2_ShippingMethodCode : {
			Default_Value: 1
		},
		BudgetStatus : {
			Can_Buy: 2,
			May_Buy: 1,
			No_Committed_Budget: 0,
			Will_Buy: 3
		},
		CustomerIdType : {
		},
		IndustryCode : {
			Accounting: 1,
			Agriculture_and_Non_petrol_Natural_Resource_Extraction: 2,
			Broadcasting_Printing_and_Publishing: 3,
			Brokers: 4,
			Building_Supply_Retail: 5,
			Business_Services: 6,
			Consulting: 7,
			Consumer_Services: 8,
			Design_Direction_and_Creative_Management: 9,
			Distributors_Dispatchers_and_Processors: 10,
			Doctors_Offices_and_Clinics: 11,
			Durable_Manufacturing: 12,
			Eating_and_Drinking_Places: 13,
			Entertainment_Retail: 14,
			Equipment_Rental_and_Leasing: 15,
			Financial: 16,
			Food_and_Tobacco_Processing: 17,
			Inbound_Capital_Intensive_Processing: 18,
			Inbound_Repair_and_Services: 19,
			Insurance: 20,
			Legal_Services: 21,
			Non_Durable_Merchandise_Retail: 22,
			Outbound_Consumer_Service: 23,
			Petrochemical_Extraction_and_Distribution: 24,
			Service_Retail: 25,
			SIG_Affiliations: 26,
			Social_Services: 27,
			Special_Outbound_Trade_Contractors: 28,
			Specialty_Realty: 29,
			Transportation: 30,
			Utility_Creation_and_Distribution: 31,
			Vehicle_Retail: 32,
			Wholesale: 33
		},
		InitialCommunication : {
			Contacted: 0,
			Not_Contacted: 1
		},
		LeadQualityCode : {
			Cold: 3,
			Hot: 1,
			Warm: 2
		},
		LeadSourceCode : {
			Advertisement: 1,
			Employee_Referral: 2,
			External_Referral: 3,
			Other: 10,
			Partner: 4,
			Public_Relations: 5,
			Seminar: 6,
			Trade_Show: 7,
			Web: 8,
			Word_of_Mouth: 9
		},
		msdyn_LeadGrade : {
			Grade_A: 0,
			Grade_B: 1,
			Grade_C: 2,
			Grade_D: 3
		},
		msdyn_LeadScoreTrend : {
			Declining: 2,
			Improving: 0,
			Not_enough_info: 3,
			Steady: 1
		},
		msdyn_ordertype : {
			Item_based: 192350000,
			Service_Maintenance_Based: 690970002,
			Work_based: 192350001
		},
		msdyn_salesassignmentresult : {
			Failed: 1,
			Succeeded: 0
		},
		Need : {
			Good_to_have: 2,
			Must_have: 0,
			No_need: 3,
			Should_have: 1
		},
		OwnerIdType : {
		},
		PreferredContactMethodCode : {
			Any: 1,
			Email: 2,
			Fax: 4,
			Mail: 5,
			Phone: 3
		},
		PriorityCode : {
			Default_Value: 1
		},
		PurchaseProcess : {
			Committee: 1,
			Individual: 0,
			Unknown: 2
		},
		PurchaseTimeFrame : {
			Immediate: 0,
			Next_Quarter: 2,
			This_Quarter: 1,
			This_Year: 3,
			Unknown: 4
		},
		SalesStage : {
			Qualify: 0
		},
		SalesStageCode : {
			Default_Value: 1
		},
		StateCode : {
			Disqualified: 2,
			Open: 0,
			Qualified: 1
		},
		StatusCode : {
			Canceled: 7,
			Cannot_Contact: 5,
			Contacted: 2,
			Lost: 4,
			New: 1,
			No_Longer_Interested: 6,
			Qualified: 3
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