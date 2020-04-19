'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormBookableResourceCategory_Information = function(executionContext, defaultWebResourceName) {
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
			Description: {},
			msdyn_billingtype: {},
			msdyn_targetutilization: {},
			Name: {},
			notescontrol: {},
			OwnerId: {},
			ResourceCategoryAssociations: {},
			RoleCompetencyRequirement: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_35EF8C40_AFF6_447D_A927_D6E2F3D859BB: {
				Section: {
					_43AB3D2C_EC2C_437E_A161_563C8AA60436: {},
					SkillsSection: {},
					_2E7FD731_54AD_4197_AB2C_5CDD58651954: {}
				}
			},
			Resource_Category_Associations: {
				Section: {
					Resource_Category_Associations_Section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			navResourceCategories: {},
			navAsyncOperations: {},
			navAudit: {},
			navProcessSessions: {},
			nav_msdyn_bookableresourcecategory_bookableresourcebooking_resourcecategoryid: {},
			nav_msdyn_bookableresourcecategory_bookableresourcebookingheader_resourcecategoryid: {},
			nav_msdyn_bookableresourcecategory_msdyn_projectapproval_ResourceCategory: {},
			nav_msdyn_bookableresourcecategory_msdyn_projectparameter_projectmanagerrole: {},
			nav_msdyn_bookableresourcecategory_msdyn_projectparameter_teammemberrole: {},
			nav_msdyn_bookableresourcecategory_msdyn_quotelineanalyticsbreakdown_ResourceCategory: {},
			nav_msdyn_bookableresourcecategory_msdyn_roleutilization_role: {},
			nav_msdyn_bookableresourcecategory_resourcerequirement: {}
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
	OptionSet.BookableResourceCategory = {
		msdyn_billingtype : {
			Non_Chargeable: 192350000,
			Chargeable: 192350001,
			Complimentary: 192350002,
			Not_Available: 192350003
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
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