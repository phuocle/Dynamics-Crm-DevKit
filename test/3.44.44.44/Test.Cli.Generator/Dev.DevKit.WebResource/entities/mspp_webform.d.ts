//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_webform_Information {
		interface tab_tab_sessions_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_webformsteps_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_webpages_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_sessions extends DevKit.Controls.ITab {
			Section: tab_tab_sessions_Sections;
		}
		interface tab_tab_webformsteps extends DevKit.Controls.ITab {
			Section: tab_tab_webformsteps_Sections;
		}
		interface tab_tab_webpages extends DevKit.Controls.ITab {
			Section: tab_tab_webpages_Sections;
		}
		interface Tabs {
			tab_sessions: tab_tab_sessions;
			tab_webformsteps: tab_tab_webformsteps;
			tab_webpages: tab_tab_webpages;
		}
		interface Body {
			Tab: Tabs;
			/** Redirect to sign in if the user is anonymous. */
			mspp_authenticationrequired: DevKit.Controls.Boolean;
			mspp_editexpiredmessage: DevKit.Controls.String;
			mspp_editexpiredstatecode: DevKit.Controls.Integer;
			mspp_editexpiredstatuscode: DevKit.Controls.Integer;
			mspp_multiplerecordsperuserpermitted: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			mspp_progressindicatorenabled: DevKit.Controls.Boolean;
			mspp_progressindicatorignorelaststep: DevKit.Controls.Boolean;
			/** Location of the progress indicator relative to the form */
			mspp_progressindicatorposition: DevKit.Controls.OptionSet;
			mspp_progressindicatorprependstepnum: DevKit.Controls.Boolean;
			mspp_progressindicatortype: DevKit.Controls.OptionSet;
			mspp_provisionedlanguages: DevKit.Controls.Integer;
			/** Default message: Your changes have not been saved. To stay on the page so that you can save your changes, click Cancel. */
			mspp_savechangeswarningmessage: DevKit.Controls.String;
			/** Displays a warning message to the user if they close the browser, or refresh the page, or click the previous button in a multiple step form and they have changes that haven't been saved. */
			mspp_savechangeswarningonclose: DevKit.Controls.Boolean;
			mspp_startnewsessiononload: DevKit.Controls.Boolean;
			/** Unique identifier for Form Step associated with Multistep Form. */
			mspp_startstep: DevKit.Controls.Lookup;
			/** Unique identifier for Website entity associated with this record */
			mspp_websiteid: DevKit.Controls.Lookup;
			WebResource_localize_editexpiredmessage: DevKit.Controls.WebResource;
			WebResource_localize_savechangeswarningmessage: DevKit.Controls.WebResource;
		}
		interface Navigation {
			mspp_webform_webformmetadata_entityformforcreate: DevKit.Controls.NavigationItem,
			mspp_webformstep_webform: DevKit.Controls.NavigationItem,
			mspp_webpage_webform: DevKit.Controls.NavigationItem
		}
		interface Grid {
			grid_webformsessions: DevKit.Controls.Grid;
			grid_webformsteps: DevKit.Controls.Grid;
			grid_webpages: DevKit.Controls.Grid;
		}
	}
	class Formmspp_webform_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_webform_Information */
		Body: DevKit.Formmspp_webform_Information.Body;
		/** The Navigation of form mspp_webform_Information */
		Navigation: DevKit.Formmspp_webform_Information.Navigation;
		/** The Grid of form mspp_webform_Information */
		Grid: DevKit.Formmspp_webform_Information.Grid;
		/** The SidePanes of form mspp_webform_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_webformApi {
		/**
		* DynamicsCrm.DevKit mspp_webformApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Redirect to sign in if the user is anonymous. */
		mspp_authenticationrequired: boolean;
		/** Shows who created the record. */
		mspp_createdby: string;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date;
		/** Determines if an existing record can be edited. This setting is ignored If the form mode on the form step is set to edit mode. Otherwise, an edit form wouldn't function properly. */
		mspp_editexistingrecordpermitted: boolean;
		mspp_editexpiredmessage: string;
		mspp_editexpiredstatecode: number;
		mspp_editexpiredstatuscode: number;
		mspp_editnotpermittedmessage: string;
		/** Shows who last updated the record. */
		mspp_modifiedby: string;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date;
		mspp_multiplerecordsperuserpermitted: boolean;
		/** The name of the custom entity. */
		mspp_name: string;
		mspp_progressindicatorenabled: boolean;
		mspp_progressindicatorignorelaststep: boolean;
		/** Location of the progress indicator relative to the form */
		mspp_progressindicatorposition: OptionSet.mspp_webform.mspp_progressindicatorposition;
		mspp_progressindicatorprependstepnum: boolean;
		mspp_progressindicatortype: OptionSet.mspp_webform.mspp_progressindicatortype;
		mspp_provisionedlanguages: number;
		/** Default message: Your changes have not been saved. To stay on the page so that you can save your changes, click Cancel. */
		mspp_savechangeswarningmessage: string;
		/** Displays a warning message to the user if they close the browser, or refresh the page, or click the previous button in a multiple step form and they have changes that haven't been saved. */
		mspp_savechangeswarningonclose: boolean;
		mspp_startnewsessiononload: boolean;
		/** Unique identifier for Form Step associated with Multistep Form. */
		mspp_startstep: string;
		/** Unique identifier for entity instances */
		mspp_webformId: string;
		/** Unique identifier for Website entity associated with this record */
		mspp_websiteid: string;
		/** Status of the Multistep Form */
		statecode: OptionSet.mspp_webform.statecode;
		/** Reason for the status of the Multistep Form */
		statuscode: OptionSet.mspp_webform.statuscode;
		readonly FormattedValue: {
			/** Redirect to sign in if the user is anonymous. */
			readonly mspp_authenticationrequired: string;
			/** Shows who created the record. */
			readonly mspp_createdby: string;
			/** Shows the date and time when the record was created. */
			readonly mspp_createdon_UtcDateAndTime: string;
			/** Determines if an existing record can be edited. This setting is ignored If the form mode on the form step is set to edit mode. Otherwise, an edit form wouldn't function properly. */
			readonly mspp_editexistingrecordpermitted: string;
			readonly mspp_editexpiredmessage: string;
			readonly mspp_editexpiredstatecode: string;
			readonly mspp_editexpiredstatuscode: string;
			readonly mspp_editnotpermittedmessage: string;
			/** Shows who last updated the record. */
			readonly mspp_modifiedby: string;
			/** Shows the date and time when the record was modified. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			readonly mspp_multiplerecordsperuserpermitted: string;
			/** The name of the custom entity. */
			readonly mspp_name: string;
			readonly mspp_progressindicatorenabled: string;
			readonly mspp_progressindicatorignorelaststep: string;
			/** Location of the progress indicator relative to the form */
			readonly mspp_progressindicatorposition: string;
			readonly mspp_progressindicatorprependstepnum: string;
			readonly mspp_progressindicatortype: string;
			readonly mspp_provisionedlanguages: string;
			/** Default message: Your changes have not been saved. To stay on the page so that you can save your changes, click Cancel. */
			readonly mspp_savechangeswarningmessage: string;
			/** Displays a warning message to the user if they close the browser, or refresh the page, or click the previous button in a multiple step form and they have changes that haven't been saved. */
			readonly mspp_savechangeswarningonclose: string;
			readonly mspp_startnewsessiononload: string;
			/** Unique identifier for Form Step associated with Multistep Form. */
			readonly mspp_startstep: string;
			/** Unique identifier for entity instances */
			readonly mspp_webformId: string;
			/** Unique identifier for Website entity associated with this record */
			readonly mspp_websiteid: string;
			/** Status of the Multistep Form */
			readonly statecode: string;
			/** Reason for the status of the Multistep Form */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_webform {
		enum mspp_progressindicatorposition {
			/** 756150001 */
			Bottom,
			/** 756150002 */
			Left,
			/** 756150003 */
			Right,
			/** 756150000 */
			Top
		}
		enum mspp_progressindicatortype {
			/** 756150001 */
			Numeric_Step_1_of_N,
			/** 756150002 */
			Progress_Bar,
			/** 756150000 */
			Title
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}