'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.OpportunityApi = function (e) {
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
		var opportunity = {
			AccountId: { b: 'accountid', a: '_accountid_value', c: 'accounts', d: 'account', r: true },
			ActualCloseDate_DateOnly: { a: 'actualclosedate' },
			ActualValue: { a: 'actualvalue' },
			ActualValue_Base: { a: 'actualvalue_base', r: true },
			BudgetAmount: { a: 'budgetamount' },
			BudgetAmount_Base: { a: 'budgetamount_base', r: true },
			BudgetStatus: { a: 'budgetstatus' },
			CampaignId: { b: 'campaignid', a: '_campaignid_value', c: 'campaigns', d: 'campaign' },
			CaptureProposalFeedback: { a: 'captureproposalfeedback' },
			CloseProbability: { a: 'closeprobability' },
			CompleteFinalProposal: { a: 'completefinalproposal' },
			CompleteInternalReview: { a: 'completeinternalreview' },
			ConfirmInterest: { a: 'confirminterest' },
			ContactId: { b: 'contactid', a: '_contactid_value', c: 'contacts', d: 'contact', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CurrentSituation: { a: 'currentsituation' },
			customerid_account: { b: 'customerid_account', a: '_customerid_value', c: 'accounts', d: 'account' },
			customerid_contact: { b: 'customerid_contact', a: '_customerid_value', c: 'contacts', d: 'contact' },
			CustomerNeed: { a: 'customerneed' },
			CustomerPainPoints: { a: 'customerpainpoints' },
			DecisionMaker: { a: 'decisionmaker' },
			Description: { a: 'description' },
			DevelopProposal: { a: 'developproposal' },
			DiscountAmount: { a: 'discountamount' },
			DiscountAmount_Base: { a: 'discountamount_base', r: true },
			DiscountPercentage: { a: 'discountpercentage' },
			EmailAddress: { a: 'emailaddress' },
			EstimatedCloseDate_DateOnly: { a: 'estimatedclosedate' },
			EstimatedValue: { a: 'estimatedvalue' },
			EstimatedValue_Base: { a: 'estimatedvalue_base', r: true },
			EvaluateFit: { a: 'evaluatefit' },
			ExchangeRate: { a: 'exchangerate', r: true },
			FileDebrief: { a: 'filedebrief' },
			FinalDecisionDate_DateOnly: { a: 'finaldecisiondate' },
			FreightAmount: { a: 'freightamount' },
			FreightAmount_Base: { a: 'freightamount_base', r: true },
			IdentifyCompetitors: { a: 'identifycompetitors' },
			IdentifyCustomerContacts: { a: 'identifycustomercontacts' },
			IdentifyPursuitTeam: { a: 'identifypursuitteam' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			InitialCommunication: { a: 'initialcommunication' },
			int_Forecast: { a: 'int_forecast' },
			int_forecast_Base: { a: 'int_forecast_base', r: true },
			IsPrivate: { a: 'isprivate', r: true },
			IsRevenueSystemCalculated: { a: 'isrevenuesystemcalculated' },
			LastOnHoldTime_UtcDateAndTime: { a: 'lastonholdtime' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_AccountManagerId: { b: 'msdyn_AccountManagerId', a: '_msdyn_accountmanagerid_value', c: 'systemusers', d: 'systemuser' },
			msdyn_ContractOrganizationalUnitId: { b: 'msdyn_ContractOrganizationalUnitId', a: '_msdyn_contractorganizationalunitid_value', c: 'msdyn_organizationalunits', d: 'msdyn_organizationalunit' },
			msdyn_forecastcategory: { a: 'msdyn_forecastcategory' },
			msdyn_OrderType: { a: 'msdyn_ordertype' },
			msdyn_segmentid: { b: 'msdyn_segmentid', a: '_msdyn_segmentid_value', c: 'msdyn_segments', d: 'msdyn_segment' },
			msdyn_WorkOrderType: { b: 'msdyn_WorkOrderType', a: '_msdyn_workordertype_value', c: 'msdyn_workordertypes', d: 'msdyn_workordertype' },
			Name: { a: 'name' },
			Need: { a: 'need' },
			OnHoldTime: { a: 'onholdtime', r: true },
			OpportunityId: { a: 'opportunityid' },
			OpportunityRatingCode: { a: 'opportunityratingcode' },
			OriginatingLeadId: { b: 'originatingleadid', a: '_originatingleadid_value', c: 'leads', d: 'lead' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ParentAccountId: { b: 'parentaccountid', a: '_parentaccountid_value', c: 'accounts', d: 'account' },
			ParentContactId: { b: 'parentcontactid', a: '_parentcontactid_value', c: 'contacts', d: 'contact' },
			ParticipatesInWorkflow: { a: 'participatesinworkflow' },
			PresentFinalProposal: { a: 'presentfinalproposal' },
			PresentProposal: { a: 'presentproposal' },
			PriceLevelId: { b: 'pricelevelid', a: '_pricelevelid_value', c: 'pricelevels', d: 'pricelevel' },
			PricingErrorCode: { a: 'pricingerrorcode' },
			PriorityCode: { a: 'prioritycode' },
			ProcessId: { a: 'processid' },
			ProposedSolution: { a: 'proposedsolution' },
			PurchaseProcess: { a: 'purchaseprocess' },
			PurchaseTimeframe: { a: 'purchasetimeframe' },
			PursuitDecision: { a: 'pursuitdecision' },
			QualificationComments: { a: 'qualificationcomments' },
			QuoteComments: { a: 'quotecomments' },
			ResolveFeedback: { a: 'resolvefeedback' },
			SalesStage: { a: 'salesstage' },
			SalesStageCode: { a: 'salesstagecode' },
			ScheduleFollowup_Prospect_UtcDateOnly: { a: 'schedulefollowup_prospect' },
			ScheduleFollowup_Qualify_UtcDateOnly: { a: 'schedulefollowup_qualify' },
			ScheduleProposalMeeting_UtcDateOnly: { a: 'scheduleproposalmeeting' },
			SendThankYouNote: { a: 'sendthankyounote' },
			SkipPriceCalculation: { a: 'skippricecalculation' },
			SLAId: { b: 'slaid', a: '_slaid_value', c: 'slas', d: 'sla' },
			SLAInvokedId: { b: 'slainvokedid', a: '_slainvokedid_value', c: 'slas', d: 'sla', r: true },
			StageId: { a: 'stageid' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			StepId: { a: 'stepid' },
			StepName: { a: 'stepname' },
			TeamsFollowed: { a: 'teamsfollowed' },
			TimeLine: { a: 'timeline' },
			TimeSpentByMeOnEmailAndMeetings: { a: 'timespentbymeonemailandmeetings', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TotalAmount: { a: 'totalamount' },
			TotalAmount_Base: { a: 'totalamount_base', r: true },
			TotalAmountLessFreight: { a: 'totalamountlessfreight' },
			TotalAmountLessFreight_Base: { a: 'totalamountlessfreight_base', r: true },
			TotalDiscountAmount: { a: 'totaldiscountamount' },
			TotalDiscountAmount_Base: { a: 'totaldiscountamount_base', r: true },
			TotalLineItemAmount: { a: 'totallineitemamount' },
			TotalLineItemAmount_Base: { a: 'totallineitemamount_base', r: true },
			TotalLineItemDiscountAmount: { a: 'totallineitemdiscountamount' },
			TotalLineItemDiscountAmount_Base: { a: 'totallineitemdiscountamount_base', r: true },
			TotalTax: { a: 'totaltax' },
			TotalTax_Base: { a: 'totaltax_base', r: true },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in opportunity) {
			var a = opportunity[field].a;
			var b = opportunity[field].b;
			var c = opportunity[field].c;
			var d = opportunity[field].d;
			var g = opportunity[field].g;
			var r = opportunity[field].r;
			opportunity[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		opportunity.Entity = u;
		opportunity.EntityName = 'opportunity';
		opportunity.EntityCollectionName = 'opportunities';
		opportunity['@odata.etag'] = e['@odata.etag'];
		opportunity.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		opportunity.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return opportunity;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Opportunity = {
		BudgetStatus : {
			Can_Buy: 2,
			May_Buy: 1,
			No_Committed_Budget: 0,
			Will_Buy: 3
		},
		InitialCommunication : {
			Contacted: 0,
			Not_Contacted: 1
		},
		msdyn_forecastcategory : {
			Best_case: 100000002,
			Committed: 100000003,
			Lost: 100000006,
			Omitted: 100000004,
			Pipeline: 100000001,
			Won: 100000005
		},
		msdyn_OrderType : {
			Item_based: 192350000,
			Service_Maintenance_Based: 690970002,
			Work_based: 192350001
		},
		Need : {
			Good_to_have: 2,
			Must_have: 0,
			No_need: 3,
			Should_have: 1
		},
		OpportunityRatingCode : {
			Cold: 3,
			Hot: 1,
			Warm: 2
		},
		PricingErrorCode : {
			Base_Currency_Attribute_Overflow: 36,
			Base_Currency_Attribute_Underflow: 37,
			Detail_Error: 1,
			Discount_Type_Invalid_State: 27,
			Inactive_Discount_Type: 33,
			Inactive_Price_Level: 3,
			Invalid_Current_Cost: 20,
			Invalid_Discount: 28,
			Invalid_Discount_Type: 26,
			Invalid_Price: 19,
			Invalid_Price_Level_Amount: 17,
			Invalid_Price_Level_Currency: 34,
			Invalid_Price_Level_Percentage: 18,
			Invalid_Pricing_Code: 9,
			Invalid_Pricing_Precision: 30,
			Invalid_Product: 7,
			Invalid_Quantity: 29,
			Invalid_Rounding_Amount: 24,
			Invalid_Rounding_Option: 23,
			Invalid_Rounding_Policy: 22,
			Invalid_Standard_Cost: 21,
			Missing_Current_Cost: 15,
			Missing_Price: 14,
			Missing_Price_Level: 2,
			Missing_Price_Level_Amount: 12,
			Missing_Price_Level_Percentage: 13,
			Missing_Pricing_Code: 8,
			Missing_Product: 6,
			Missing_Product_Default_UOM: 31,
			Missing_Product_UOM_Schedule: 32,
			Missing_Quantity: 4,
			Missing_Standard_Cost: 16,
			Missing_Unit_Price: 5,
			Missing_UOM: 10,
			None: 0,
			Price_Attribute_Out_Of_Range: 35,
			Price_Calculation_Error: 25,
			Product_Not_In_Price_Level: 11,
			Transaction_currency_is_not_set_for_the_product_price_list_item: 38
		},
		PriorityCode : {
			Default_Value: 1
		},
		PurchaseProcess : {
			Committee: 1,
			Individual: 0,
			Unknown: 2
		},
		PurchaseTimeframe : {
			Immediate: 0,
			Next_Quarter: 2,
			This_Quarter: 1,
			This_Year: 3,
			Unknown: 4
		},
		SalesStage : {
			Close: 3,
			Develop: 1,
			Propose: 2,
			Qualify: 0
		},
		SalesStageCode : {
			Default_Value: 1
		},
		SkipPriceCalculation : {
			DoPriceCalcAlways: 0,
			SkipPriceCalcOnRetrieve: 1
		},
		StateCode : {
			Lost: 2,
			Open: 0,
			Won: 1
		},
		StatusCode : {
			Canceled: 4,
			In_Progress: 1,
			On_Hold: 2,
			Out_Sold: 5,
			Won: 3
		},
		TimeLine : {
			Immediate: 0,
			Next_Quarter: 2,
			Not_known: 4,
			This_Quarter: 1,
			This_Year: 3
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