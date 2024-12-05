'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmspp_entityformmetadata_Information = function(executionContext, defaultWebResourceName) {
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
			mspp_adddescription: {},
			mspp_attributelogicalname: {},
			mspp_constantsummaximumtotal: {},
			mspp_constantsumminimumtotal: {},
			mspp_constantsumvalidationerrormessage: {},
			mspp_controlstyle: {},
			mspp_cssclass: {},
			mspp_description: {},
			mspp_descriptionposition: {},
			mspp_entityform: {},
			mspp_entityformforcreate: {},
			mspp_fieldisrequired: {},
			mspp_geolocationvalidatorerrormessage: {},
			mspp_groupname: {},
			mspp_ignoredefaultvalue: {},
			mspp_label: {},
			mspp_maxmultiplechoiceselectedcount: {},
			mspp_minmultiplechoiceselectedcount: {},
			mspp_multiplechoicevalidationerrormessage: {},
			mspp_name: {},
			mspp_notes_settings: {},
			mspp_onsavefromattribute: {},
			mspp_onsavetype: {},
			mspp_onsavevalue: {},
			mspp_prepopulatefromattribute: {},
			mspp_prepopulatetype: {},
			mspp_prepopulatevalue: {},
			mspp_provisionedlanguages: {},
			mspp_randomizeoptionsetvalues: {},
			mspp_rangevalidationerrormessage: {},
			mspp_rankordernotiesvalidationerrormessage: {},
			mspp_requiredfieldvalidationerrormessage: {},
			mspp_sectionname: {},
			mspp_setvalueonsave: {},
			mspp_subgrid_name: {},
			mspp_subgrid_settings: {},
			mspp_tabname: {},
			mspp_timeline_settings: {},
			mspp_type: {},
			mspp_useattributedescriptionproperty: {},
			mspp_validationerrormessage: {},
			mspp_validationregularexpression: {},
			mspp_validationregularexpressionerrormessage: {},
			WebResource_attributelogicalname: {},
			WebResource_localizeconstantsumerrormessage: {},
			WebResource_localizedescription: {},
			WebResource_localizegeolocationerrormessage: {},
			WebResource_localizelabel: {},
			WebResource_localizemultiplechoiceerrormessage: {},
			WebResource_localizerangevalidationerrormessage: {},
			WebResource_localizerankordernotieserrormessage: {},
			WebResource_localizeregularexpressionerrormessage: {},
			WebResource_localizerequiredfieldvalidationerrormessage: {},
			WebResource_localizevalidationerrormessage: {},
			WebResource_mspp_onsavefromattribute: {},
			WebResource_mspp_prepopulatefromattribute: {},
			WebResource_notes_settings: {},
			WebResource_sectionname: {},
			WebResource_subgrid_name: {},
			WebResource_subgrid_settings: {},
			WebResource_tabname: {},
			WebResource_timeline_settings: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.mspp_entityformmetadata = {
		mspp_controlstyle : {
			Code_component: 756150001,
			Group_Whole_Number_as_Constant_Sum: 100000003,
			Group_Whole_Number_as_Rank_Order_Scale_Allow_Ties: 100000005,
			Group_Whole_Number_as_Rank_Order_Scale_No_Ties: 100000004,
			Group_Whole_Number_as_Stack_Rank: 100000008,
			Multiple_Choice: 100000007,
			Multiple_Choice_Matrix: 100000006,
			Option_Set_as_Horizontal_Radio_Button_List: 100000001,
			Option_Set_as_Vertical_Radio_Button_List: 100000000,
			Render_Lookup_as_Dropdown: 756150000,
			Single_Line_of_Text_as_Geolocation_Lookup_Validator: 100000002
		},
		mspp_descriptionposition : {
			Above_the_field: 100000000,
			Above_the_label: 100000002,
			Below_the_field: 100000001
		},
		mspp_onsavetype : {
			Current_Portal_User: 100000002,
			Todays_Date: 100000001,
			Value: 100000000
		},
		mspp_prepopulatetype : {
			Current_Portal_User: 100000002,
			Todays_Date: 100000001,
			Value: 100000000
		},
		mspp_type : {
			Attribute: 100000000,
			Notes: 100000005,
			Section: 100000001,
			Subgrid: 100000003,
			Tab: 100000002,
			Timeline: 756150000
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