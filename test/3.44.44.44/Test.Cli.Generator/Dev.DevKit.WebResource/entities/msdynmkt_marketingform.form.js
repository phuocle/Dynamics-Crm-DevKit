'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormFailed_Submissions = function(executionContext, defaultWebResourceName) {
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
			grid_submissions: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Failed_Submissions: {
				Section: {
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			grid_submissions: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdynmkt_marketingformsubmission_marketingform: {},
			msdynmkt_msdynmkt_marketingform_contact_marketingformid: {},
			msdynmkt_msdynmkt_marketingform_lead_marketingformid: {},
			msevtmgt_msdynmkt_marketingform_msevtmgt_event: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormForm_settings = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_contactmatchingrule: {},
			msdynmkt_contactmatchingrule1: {},
			msdynmkt_createcontact: {},
			msdynmkt_createcontact1: {},
			msdynmkt_createlead: {},
			msdynmkt_createlead1: {},
			msdynmkt_handlingduplicatecontacts: {},
			msdynmkt_handlingduplicatecontacts1: {},
			msdynmkt_handlingduplicateleads: {},
			msdynmkt_handlingduplicateleads1: {},
			msdynmkt_leadmatchingrule: {},
			msdynmkt_leadmatchingrule1: {},
			msdynmkt_redirecturl: {},
			msdynmkt_submission_control: {},
			msdynmkt_targetaudience: {},
			msdynmkt_targetentity: {},
			msdynmkt_templateid: {},
			msdynmkt_updatecontact: {},
			msdynmkt_updatecontact1: {},
			msdynmkt_updatelead: {},
			msdynmkt_updatelead1: {},
			OwningBusinessUnit: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					audience_contact: {},
					audience_lead: {},
					audience_leadcontact: {},
					general: {},
					submission: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdynmkt_marketingformsubmission_marketingform: {},
			msdynmkt_msdynmkt_marketingform_contact_marketingformid: {},
			msdynmkt_msdynmkt_marketingform_lead_marketingformid: {},
			msevtmgt_msdynmkt_marketingform_msevtmgt_event: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdynmkt_marketingform_Information = function(executionContext, defaultWebResourceName) {
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
			ModifiedBy: {},
			ModifiedOn: {},
			msdynmkt_compliancesettings4id: {},
			msdynmkt_contactmatchingrule: {},
			msdynmkt_createcontact: {},
			msdynmkt_createlead: {},
			msdynmkt_createnewparentcontactonnomatch: {},
			msdynmkt_designerhtml: {},
			msdynmkt_doubleoptintogglemodifiedby: {},
			msdynmkt_doubleoptintogglemodifiedon: {},
			msdynmkt_errormessage: {},
			msdynmkt_formhtml: {},
			msdynmkt_handlingduplicatecontacts: {},
			msdynmkt_handlingduplicateleads: {},
			msdynmkt_isdoiforciblydisabled: {},
			msdynmkt_leadmatchingrule: {},
			msdynmkt_linkleadtoparentcontact: {},
			msdynmkt_marketingformtemplateid: {},
			msdynmkt_marketingformtype: {},
			msdynmkt_matchingstrategyid: {},
			msdynmkt_parentcontactmatchingstrategyid: {},
			msdynmkt_placeholders: {},
			msdynmkt_prefillfields: {},
			msdynmkt_redirectenabled: {},
			msdynmkt_redirecturl: {},
			msdynmkt_successmessage: {},
			msdynmkt_targetaudience: {},
			msdynmkt_targetentity: {},
			msdynmkt_updatecontact: {},
			msdynmkt_updatelead: {},
			msdynmkt_updateparentcontact: {},
			OwningBusinessUnit: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdynmkt_name: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			msdynmkt_marketingformsubmission_marketingform: {},
			msdynmkt_msdynmkt_marketingform_contact_marketingformid: {},
			msdynmkt_msdynmkt_marketingform_lead_marketingformid: {},
			msevtmgt_msdynmkt_marketingform_msevtmgt_event: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormSubmissions = function(executionContext, defaultWebResourceName) {
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
			grid_submissions: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			grid_submissions: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdynmkt_marketingformsubmission_marketingform: {},
			msdynmkt_msdynmkt_marketingform_contact_marketingformid: {},
			msdynmkt_msdynmkt_marketingform_lead_marketingformid: {},
			msevtmgt_msdynmkt_marketingform_msevtmgt_event: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormSubmissions2 = function(executionContext, defaultWebResourceName) {
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
			grid_submissions: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			grid_submissions: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdynmkt_marketingformsubmission_marketingform: {},
			msdynmkt_msdynmkt_marketingform_contact_marketingformid: {},
			msdynmkt_msdynmkt_marketingform_lead_marketingformid: {},
			msevtmgt_msdynmkt_marketingform_msevtmgt_event: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdynmkt_marketingform_New_Form = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_name: {},
			msdynmkt_targetentity: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_marketingform = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdynmkt_createcontact : {
			No: 810180001,
			Yes: 810180000
		},
		msdynmkt_createlead : {
			No: 810180001,
			Yes: 810180000
		},
		msdynmkt_handlingduplicatecontacts : {
			Always_create_new_contact: 100000001,
			Use_a_rule_to_match_an_existing_contact: 100000000
		},
		msdynmkt_handlingduplicateleads : {
			Always_create_new_lead: 100000001,
			Use_a_rule_to_match_an_existing_lead: 100000000
		},
		msdynmkt_marketingformtype : {
			Marketing_form: 534120000,
			Registration_form: 534120001
		},
		msdynmkt_portalpublishingstatus : {
			Failed: 534120003,
			NotStarted: 534120001,
			Publishing: 534120002,
			Succeeded: 534120004
		},
		msdynmkt_standalonepublishstatus : {
			Failed: 534120003,
			InProgress: 534120002,
			NotStarted: 534120001,
			Succeeded: 534120004
		},
		msdynmkt_updatecontact : {
			No: 810180001,
			Yes: 810180000
		},
		msdynmkt_updatelead : {
			No: 810180001,
			Yes: 810180000
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Draft: 1,
			Live: 2,
			Live_Editing: 3
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