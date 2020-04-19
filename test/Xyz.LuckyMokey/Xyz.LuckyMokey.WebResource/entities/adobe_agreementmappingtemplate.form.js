'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formadobe_agreementmappingtemplate_Information = function(executionContext, defaultWebResourceName) {
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
			adobe_AgreementField: {},
			adobe_name: {},
			adobe_SelectedAttribute: {},
			adobe_SelectedEntity: {},
			adobe_selectedentitylogical: {},
			adobe_setasdefault: {},
			AdobetoCRMMappingsubgrid: {},
			DataMappingAttachments: {},
			DataMappingsSubgrid: {},
			WebResource_AddDataMap: {},
			WebResource_datamapattachment: {},
			WebResource_DataMapReverse: {},
			WebResource_EntitiesOptionSet: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_4052F79C_C150_4DE2_8BC9_0A7745401436: {
				Section: {
					_4052F79C_C150_4DE2_8BC9_0A7745401436_SECTION_2: {},
					_4052F79C_C150_4DE2_8BC9_0A7745401436_SECTION_3: {}
				}
			},
			tab_2: {
				Section: {
					_4052F79C_C150_4DE2_8BC9_0A7745401436_SECTION_4: {},
					_4052F79C_C150_4DE2_8BC9_0A7745401436_SECTION_6: {},
					_4052F79C_C150_4DE2_8BC9_0A7745401436_SECTION_5: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			adobe_setasdefault: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			nav_adobe_adobe_agreementmapping_adobe_data: {},
			nav_adobe_adobe_agreementmappingtemplate_adobe_data: {},
			navAudit: {},
			nav_adobe_adobe_agreementmappingtemplate_adobe_agre: {},
			nav_adobe_adobe_mappingtemplate_adobe_mappattachmen: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.adobe_agreementmappingtemplate = {
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