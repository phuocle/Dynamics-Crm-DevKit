'use strict';
/** @namespace Tomato */
var Tomato;
(function (Tomato) {
	'use strict';
	Tomato.FormWebApi = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			CreatedBy: {},
			CreatedOn: {},
			CreatedOnBehalfBy: {},
			devkit_AlternateKey: {},
			devkit_Currency: {},
			devkit_currency_Base: {},
			devkit_CustomerId: {},
			devkit_DateOnlyDateOnly: {},
			devkit_DateOnlyDateOnlyCalculated: {},
			devkit_DateOnlyDateOnlyRollup: {},
			devkit_DateOnlyDateOnlyRollup_Date: {},
			devkit_DateOnlyDateOnlyRollup_State: {},
			devkit_DecimalNumber: {},
			devkit_FloatingPointNumber: {},
			devkit_LinkWebApiId: {},
			devkit_LinkWebApiId_1: {},
			devkit_MultiOptionSetCode: {},
			devkit_MultipleLiniesofText: {},
			devkit_Name: {},
			devkit_ParentWebApiId: {},
			devkit_ParentWebApiId_1: {},
			devkit_SingleLineofTextEmail: {},
			devkit_SingleLineofTextPhone: {},
			devkit_SingleLineofTextText: {},
			devkit_SingleLineofTextTextArea: {},
			devkit_SingleLineofTextTickerSymbol: {},
			devkit_SingleLineofTextUrl: {},
			devkit_SingleOptionSetCode: {},
			devkit_SingleOptionSetCodeCalculated: {},
			devkit_TimeZoneDateAndTime: {},
			devkit_TimeZoneDateAndTimeCalculated: {},
			devkit_TimeZoneDateAndTimeRollup: {},
			devkit_TimeZoneDateAndTimeRollup_Date: {},
			devkit_TimeZoneDateAndTimeRollup_State: {},
			devkit_TimeZoneDateOnly: {},
			devkit_TimeZoneDateOnlyCalculated: {},
			devkit_TimeZoneDateOnlyRollup: {},
			devkit_TimeZoneDateOnlyRollup_Date: {},
			devkit_TimeZoneDateOnlyRollup_State: {},
			devkit_UserLocalDateAndTime: {},
			devkit_UserLocalDateAndTimeCalculated: {},
			devkit_UserLocalDateAndTimeRollup: {},
			devkit_UserLocalDateAndTimeRollup_Date: {},
			devkit_UserLocalDateAndTimeRollup_State: {},
			devkit_UserLocalDateOnly: {},
			devkit_UserLocalDateOnlyCalculated: {},
			devkit_UserLocalDateOnlyRollup: {},
			devkit_UserLocalDateOnlyRollup_Date: {},
			devkit_UserLocalDateOnlyRollup_State: {},
			devkit_WholeNumberDuration: {},
			devkit_WholeNumberLanguage: {},
			devkit_WholeNumberNone: {},
			devkit_WholeNumberTimeZone: {},
			devkit_YesAndNo: {},
			devkit_YesAndNoCalculated: {},
			ExchangeRate: {},
			gridSubGridParentWebApi: {},
			IFRAME_ACIWIDGET: {},
			IFRAME_GoogleGoogle: {},
			ModifiedBy: {},
			ModifiedOn: {},
			ModifiedOnBehalfBy: {},
			notescontrol: {},
			OwnerId: {},
			statecode: {},
			statuscode: {},
			tCreatedOn: {},
			TransactionCurrencyId: {},
			WebResource_WORDHELLO: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			WEBAPI: {
				Section: {
					WEBAPI_section_1: {},
					WEBAPI_section_2: {}
				}
			},
			NOTE: {
				Section: {
					NOTE_section_1: {}
				}
			},
			TIMER: {
				Section: {
					TIMER_section_1: {}
				}
			},
			OTHERS: {
				Section: {
					OTHERS_section_1: {}
				}
			},
			QUICKVIEW: {
				Section: {
					QUICKVIEW_section_1: {}
				}
			},
			SUBGRID: {
				Section: {
					SUBGRID_section_1: {}
				}
			},
			OPTIONSET: {
				Section: {
					OPTIONSET_section_1: {},
					OPTIONSET_section_3: {},
					OPTIONSET_section_5: {},
					OPTIONSET_section_2: {},
					OPTIONSET_section_4: {},
					OPTIONSET_section_6: {}
				}
			},
			DATETIME: {
				Section: {
					DATETIME_section_1: {},
					DATETIME_section_3: {},
					DATETIME_section_5: {},
					DATETIME_section_7: {},
					DATETIME_section_2: {},
					DATETIME_section_4: {},
					DATETIME_section_6: {}
				}
			},
			NUMBER: {
				Section: {
					NUMBER_section_1: {},
					NUMBER_section_4: {},
					NUMBER_section_2: {},
					NUMBER_section_3: {}
				}
			},
			STRING: {
				Section: {
					STRING_section_1: {},
					STRING_section_3: {},
					STRING_section_2: {}
				}
			},
			ADMINISTRATOR: {
				Section: {
					ADMINISTRATOR_section_1: {},
					ADMINISTRATOR_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			CreatedBy: {},
			CreatedOn: {},
			CreatedOnBehalfBy: {},
			devkit_AlternateKey: {},
			devkit_Currency: {},
			devkit_currency_Base: {},
			devkit_CustomerId: {},
			devkit_DateOnlyDateOnly: {},
			devkit_DateOnlyDateOnlyCalculated: {},
			devkit_DateOnlyDateOnlyRollup: {},
			devkit_DateOnlyDateOnlyRollup_Date: {},
			devkit_DateOnlyDateOnlyRollup_State: {},
			devkit_DecimalNumber: {},
			devkit_FloatingPointNumber: {},
			devkit_LinkWebApiId: {},
			devkit_MultipleLiniesofText: {},
			devkit_Name: {},
			devkit_ParentWebApiId: {},
			devkit_SingleLineofTextEmail: {},
			devkit_SingleLineofTextPhone: {},
			devkit_SingleLineofTextText: {},
			devkit_SingleLineofTextTextArea: {},
			devkit_SingleLineofTextTickerSymbol: {},
			devkit_SingleLineofTextUrl: {},
			devkit_SingleOptionSetCode: {},
			devkit_SingleOptionSetCodeCalculated: {},
			devkit_TimeZoneDateAndTime: {},
			devkit_TimeZoneDateAndTimeCalculated: {},
			devkit_TimeZoneDateAndTimeRollup: {},
			devkit_TimeZoneDateAndTimeRollup_Date: {},
			devkit_TimeZoneDateAndTimeRollup_State: {},
			devkit_TimeZoneDateOnly: {},
			devkit_TimeZoneDateOnlyCalculated: {},
			devkit_TimeZoneDateOnlyRollup: {},
			devkit_TimeZoneDateOnlyRollup_Date: {},
			devkit_TimeZoneDateOnlyRollup_State: {},
			devkit_UserLocalDateAndTime: {},
			devkit_UserLocalDateAndTimeCalculated: {},
			devkit_UserLocalDateAndTimeRollup: {},
			devkit_UserLocalDateAndTimeRollup_Date: {},
			devkit_UserLocalDateAndTimeRollup_State: {},
			devkit_UserLocalDateOnly: {},
			devkit_UserLocalDateOnlyCalculated: {},
			devkit_UserLocalDateOnlyRollup: {},
			devkit_UserLocalDateOnlyRollup_Date: {},
			devkit_UserLocalDateOnlyRollup_State: {},
			devkit_WholeNumberDuration: {},
			devkit_WholeNumberLanguage: {},
			devkit_WholeNumberNone: {},
			devkit_WholeNumberTimeZone: {},
			devkit_YesAndNo: {},
			devkit_YesAndNoCalculated: {},
			ExchangeRate: {},
			ModifiedBy: {},
			ModifiedOn: {},
			ModifiedOnBehalfBy: {},
			OwnerId: {},
			statecode: {},
			statuscode: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var footer = {
			CreatedBy: {},
			CreatedOn: {},
			CreatedOnBehalfBy: {},
			devkit_AlternateKey: {},
			devkit_Currency: {},
			devkit_currency_Base: {},
			devkit_CustomerId: {},
			devkit_DateOnlyDateOnly: {},
			devkit_DateOnlyDateOnlyCalculated: {},
			devkit_DateOnlyDateOnlyRollup: {},
			devkit_DateOnlyDateOnlyRollup_Date: {},
			devkit_DateOnlyDateOnlyRollup_State: {},
			devkit_DecimalNumber: {},
			devkit_FloatingPointNumber: {},
			devkit_LinkWebApiId: {},
			devkit_MultipleLiniesofText: {},
			devkit_Name: {},
			devkit_ParentWebApiId: {},
			devkit_SingleLineofTextEmail: {},
			devkit_SingleLineofTextPhone: {},
			devkit_SingleLineofTextText: {},
			devkit_SingleLineofTextTextArea: {},
			devkit_SingleLineofTextTickerSymbol: {},
			devkit_SingleLineofTextUrl: {},
			devkit_SingleOptionSetCode: {},
			devkit_SingleOptionSetCodeCalculated: {},
			devkit_TimeZoneDateAndTime: {},
			devkit_TimeZoneDateAndTimeCalculated: {},
			devkit_TimeZoneDateAndTimeRollup: {},
			devkit_TimeZoneDateAndTimeRollup_Date: {},
			devkit_TimeZoneDateAndTimeRollup_State: {},
			devkit_TimeZoneDateOnly: {},
			devkit_TimeZoneDateOnlyCalculated: {},
			devkit_TimeZoneDateOnlyRollup: {},
			devkit_TimeZoneDateOnlyRollup_Date: {},
			devkit_TimeZoneDateOnlyRollup_State: {},
			devkit_UserLocalDateAndTime: {},
			devkit_UserLocalDateAndTimeCalculated: {},
			devkit_UserLocalDateAndTimeRollup: {},
			devkit_UserLocalDateAndTimeRollup_Date: {},
			devkit_UserLocalDateAndTimeRollup_State: {},
			devkit_UserLocalDateOnly: {},
			devkit_UserLocalDateOnlyCalculated: {},
			devkit_UserLocalDateOnlyRollup: {},
			devkit_UserLocalDateOnlyRollup_Date: {},
			devkit_UserLocalDateOnlyRollup_State: {},
			devkit_WholeNumberDuration: {},
			devkit_WholeNumberLanguage: {},
			devkit_WholeNumberNone: {},
			devkit_WholeNumberTimeZone: {},
			devkit_YesAndNo: {},
			devkit_YesAndNoCalculated: {},
			ExchangeRate: {},
			ModifiedBy: {},
			ModifiedOn: {},
			ModifiedOnBehalfBy: {},
			OwnerId: {},
			statecode: {},
			statuscode: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
		var process = devKit.LoadProcess(formContext);
		var _Process_WebApi_1 = {
			devkit_CustomerId: {},
			devkit_DecimalNumber: {},
			devkit_FloatingPointNumber: {},
			devkit_MultipleLiniesofText: {},
			devkit_SingleLineofTextText: {},
			devkit_SingleLineofTextText_1: {},
			devkit_SingleOptionSetCode: {},
			devkit_UserLocalDateOnly: {},
			devkit_WholeNumberNone: {},
			devkit_YesAndNo: {},
			devkit_YesAndNoCalculated: {},
			OwnerId: {}
		}
		devKit.LoadFields(formContext, _Process_WebApi_1, "header_process_");
		process.Process_WebApi_1 = _Process_WebApi_1;
		form.Process = process;
		var quickForm = {
			quickViewWebApi: {}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			nav_devkit_devkit_webapi_devkit_webapi_ParentWebApiId: {},
			nav_devkit_devkit_webapi_devkit_webapi_LinkWebApiId: {},
			nav_bpf_devkit_webapi_devkit_processwebapi1: {},
			nav_devkit_devkit_webapi_contact: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	Tomato.FormWebApi_2 = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			CreatedBy: {},
			CreatedOn: {},
			devkit_AlternateKey: {},
			devkit_Currency: {},
			devkit_currency_Base: {},
			devkit_CustomerId: {},
			devkit_DateOnlyDateOnly: {},
			devkit_DateOnlyDateOnlyCalculated: {},
			devkit_DateOnlyDateOnlyRollup: {},
			devkit_DateOnlyDateOnlyRollup_Date: {},
			devkit_DateOnlyDateOnlyRollup_State: {},
			devkit_DecimalNumber: {},
			devkit_FloatingPointNumber: {},
			devkit_LinkWebApiId: {},
			devkit_LinkWebApiId_1: {},
			devkit_MultiOptionSetCode: {},
			devkit_MultipleLiniesofText: {},
			devkit_Name: {},
			devkit_ParentWebApiId: {},
			devkit_SingleLineofTextEmail: {},
			devkit_SingleLineofTextPhone: {},
			devkit_SingleLineofTextText: {},
			devkit_SingleLineofTextTextArea: {},
			devkit_SingleLineofTextTickerSymbol: {},
			devkit_SingleLineofTextUrl: {},
			devkit_SingleOptionSetCode: {},
			devkit_SingleOptionSetCodeCalculated: {},
			devkit_TimeZoneDateAndTime: {},
			devkit_TimeZoneDateAndTimeCalculated: {},
			devkit_TimeZoneDateAndTimeRollup: {},
			devkit_TimeZoneDateAndTimeRollup_Date: {},
			devkit_TimeZoneDateAndTimeRollup_State: {},
			devkit_TimeZoneDateOnly: {},
			devkit_TimeZoneDateOnlyCalculated: {},
			devkit_TimeZoneDateOnlyRollup: {},
			devkit_TimeZoneDateOnlyRollup_Date: {},
			devkit_TimeZoneDateOnlyRollup_State: {},
			devkit_UserLocalDateAndTime: {},
			devkit_UserLocalDateAndTimeCalculated: {},
			devkit_UserLocalDateAndTimeRollup: {},
			devkit_UserLocalDateAndTimeRollup_Date: {},
			devkit_UserLocalDateAndTimeRollup_State: {},
			devkit_UserLocalDateOnly: {},
			devkit_UserLocalDateOnlyCalculated: {},
			devkit_UserLocalDateOnlyRollup: {},
			devkit_UserLocalDateOnlyRollup_Date: {},
			devkit_UserLocalDateOnlyRollup_State: {},
			devkit_WholeNumberDuration: {},
			devkit_WholeNumberLanguage: {},
			devkit_WholeNumberNone: {},
			devkit_WholeNumberTimeZone: {},
			devkit_YesAndNo: {},
			devkit_YesAndNoCalculated: {},
			ExchangeRate: {},
			ModifiedBy: {},
			ModifiedOn: {},
			OwnerId: {},
			statecode: {},
			statuscode: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_3: {
				Section: {
					tab_3_section_1: {},
					tab_3_section_2: {}
				}
			},
			tab_OPTIONSET: {
				Section: {
					tab_OPTIONSET_section_SINGLE: {},
					tab_OPTIONSET_section_MULTI_OPTIONSET: {},
					tab_OPTIONSET_section_5: {},
					tab_OPTIONSEST_section_STATUS: {},
					tab_OPTIONSET_section_STATE: {},
					tab_OPTIONSET_section_6: {}
				}
			},
			tab_4: {
				Section: {
					tab_4_section_1: {},
					tab_4_section_3: {},
					tab_4_section_5: {},
					tab_4_section_7: {},
					tab_4_section_2: {},
					tab_4_section_4: {},
					tab_4_section_6: {}
				}
			},
			tab_6: {
				Section: {
					tab_6_section_1: {},
					tab_6_section_4: {},
					tab_6_section_2: {},
					tab_6_section_3: {}
				}
			},
			tab_5: {
				Section: {
					tab_5_section_1: {},
					tab_5_section_3: {},
					tab_5_section_2: {}
				}
			},
			tab_ADMINISTRATOR: {
				Section: {
					tab_ADMINISTRATOR_section_CREATED: {},
					tab_ADMINISTRATOR_section_MODIFIED: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			devkit_Currency: {},
			devkit_CustomerId: {},
			devkit_DateOnlyDateOnly: {},
			devkit_DecimalNumber: {},
			devkit_FloatingPointNumber: {},
			devkit_MultipleLiniesofText: {},
			devkit_SingleLineofTextText: {},
			devkit_SingleOptionSetCode: {},
			devkit_TimeZoneDateAndTime: {},
			devkit_TimeZoneDateOnly: {},
			devkit_UserLocalDateAndTime: {},
			devkit_UserLocalDateOnly: {},
			devkit_WholeNumberNone: {},
			devkit_YesAndNo: {},
			OwnerId: {},
			statecode: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Process_WebApi_1 = {
			devkit_CustomerId: {},
			devkit_DecimalNumber: {},
			devkit_FloatingPointNumber: {},
			devkit_MultipleLiniesofText: {},
			devkit_SingleLineofTextText: {},
			devkit_SingleLineofTextText_1: {},
			devkit_SingleOptionSetCode: {},
			devkit_UserLocalDateOnly: {},
			devkit_WholeNumberNone: {},
			devkit_YesAndNo: {},
			devkit_YesAndNoCalculated: {},
			OwnerId: {}
		}
		devKit.LoadFields(formContext, _Process_WebApi_1, "header_process_");
		process.Process_WebApi_1 = _Process_WebApi_1;
		form.Process = process;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			nav_devkit_devkit_webapi_devkit_webapi_ParentWebApiId: {},
			nav_devkit_devkit_webapi_devkit_webapi_LinkWebApiId: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	Tomato.Formdevkit_WebApi_Quick_Create = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			devkit_AlternateKey: {},
			devkit_DateOnlyDateOnly: {},
			TransactionCurrencyId: {}
		}
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
				}
			}
		}
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	}
})(Tomato || (Tomato = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.devkit_WebApi = {
		devkit_MultiOptionSetCode : {
			Crm_4: 100000000,
			Crm_2011: 100000001,
			Crm_2013: 100000002,
			Crm_2015: 100000003,
			Crm_2016: 100000004,
			Dynamics_365: 100000005
		},
		devkit_SingleOptionSetCode : {
			Crm_4: 100000000,
			Crm_2011: 100000001,
			Crm_2013: 100000002,
			Crm_2015: 100000003,
			Crm_2016: 100000004,
			Dynamics_365: 100000005
		},
		devkit_SingleOptionSetCodeCalculated : {
			Crm_4: 100000000,
			Crm_2011: 100000001,
			Crm_2013: 100000002,
			Crm_2015: 100000003,
			Crm_2016: 100000004,
			Dynamics_365: 100000005
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Active_2: 100000000,
			Active_3: 100000001,
			Inactive: 2,
			Inactive_2: 100000002,
			Inactive_3: 100000003
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